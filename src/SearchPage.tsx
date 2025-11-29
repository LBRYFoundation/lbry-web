import {JSX, useEffect, useState} from "react";
import {Location, useLocation} from "react-router";
import LBRY from "./LBRY";
import {NOT_TAGS} from "./Constants";
import useDaemonRPC from "./DaemonRPC";
import ClaimPreviewTile from "./components/ClaimPreviewTile";

function SearchPage(): JSX.Element{
    const daemonRPC: string = useDaemonRPC();
    const location: Location = useLocation();

    const query: string|null = new URLSearchParams(location.search).get('q');

    const [resolveItem,setResolveItem] = useState(null);
    const [channelSearchItems,setChannelSearchItems] = useState([]);

    useEffect((): void => {
        LBRY.rpc(daemonRPC,'resolve',{urls:['lbry://'+query,'lbry://@'+query],include_purchase_receipt:true},null,import.meta.env.VITE_DAEMON_PROXY==='true').then(json => {
            if(json.result['lbry://'+query] && !json.result['lbry://'+query].error){
                setResolveItem(json.result['lbry://'+query]);
                return;
            }
            if(json.result['lbry://@'+query] && !json.result['lbry://@'+query].error){
                setResolveItem(json.result['lbry://@'+query]);
                return;
            }
        });
    },[daemonRPC,query]);

    useEffect((): void => {
        LBRY.rpc(daemonRPC,'claim_search',{"page_size":20,"claim_type":["channel","stream"],"not_tags":NOT_TAGS,"order_by":["release_time"],"text":query},null,import.meta.env.VITE_DAEMON_PROXY==='true').then(json => {
            setChannelSearchItems(json.result.items);
        });
    },[daemonRPC,query]);

    return (
        <div>
            <span>Search results for '<b>{(query)}</b>':</span>
            {!resolveItem && channelSearchItems.length===0?(
                <div>
                    <span style={{fontSize: '10px'}}>No items found</span>
                </div>
            ) : null}
            {resolveItem ? (
                <div>
                    <h2>Exact match</h2>
                    <ClaimPreviewTile claim={resolveItem}/>
                </div>
            ) : null}
            {channelSearchItems.length>0?(
                <div>
                    <h2>Other results</h2>
                    <div className="claim-preview-section">
                        {channelSearchItems.map((cell: unknown, i: number) => (
                            <ClaimPreviewTile claim={cell} key={i}/>
                        ))}
                    </div>
                </div>
            ):null}
        </div>
    );
}

export default SearchPage;
