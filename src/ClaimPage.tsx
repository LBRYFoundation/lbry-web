import {JSX, useEffect, useState} from "react";
import Markdown from 'react-markdown';
import {Params, useParams} from "react-router";

import LBRY from "./LBRY";
import useDaemonRPC from "./DaemonRPC";

function downloadMarkdownFile(claimGetData,setMarkdown): void{
    const url: string = claimGetData?.streaming_url;
    const input: URL = new URL('/api/proxy',window.location.href);
    input.searchParams.set('url',url);

    fetch(input).then((resp: Response): void => {
        resp.text().then((text: string): void => {
            setMarkdown(text);
        });
    });
}

function SettingsPage(): JSX.Element{
    const daemonRPC: string = useDaemonRPC();

    const params: Params<string> = useParams();
    const claim: string = params['*'];

    const [claimGetData,setClaimGetData] = useState(null);
    const [claimResolveData,setClaimResolveData] = useState(null);
    const [markdown,setMarkdown] = useState('');

    useEffect((): void => {
        LBRY.rpc(daemonRPC,'resolve',{urls:[claim]},null,import.meta.env.VITE_DAEMON_PROXY==='true').then((json: object): void => {
            setClaimResolveData(json.result[claim] ?? null);
        });
    }, [claim,daemonRPC]);

    useEffect((): void => {
        LBRY.rpc(daemonRPC,'get',{uri:claim},null,import.meta.env.VITE_DAEMON_PROXY==='true').then((json: object): void => {
            setClaimGetData(json.result);
        });
    }, [claim,daemonRPC]);

    if(claimResolveData?.type==='claim'){
        if(claimResolveData.value_type==='channel'){
            return (<div>TODO Channel</div>);
        }
        if(claimResolveData.value_type==='stream'){
            return (
                <div>
                    <h1>{claimResolveData.value?.title}</h1>
                    {claimResolveData.value?.stream_type==='audio'? (
                        <div>
                            <audio controls src={claimGetData?.streaming_url || null}></audio>
                        </div>
                    ) : null}
                    {claimResolveData.value?.stream_type === 'document' ? (
                        <div>
                            {claimResolveData.value.source.media_type==='text/markdown'?(
                                claimGetData?(
                                    <div className="markdown">
                                        {downloadMarkdownFile(claimGetData,setMarkdown) && null}
                                        <Markdown>{markdown}</Markdown>
                                    </div>
                                ):null
                            ):(
                                <iframe src={claimGetData?.streaming_url}></iframe>
                            )}
                        </div>
                    ) : null}
                    {claimResolveData.value?.stream_type==='image'?(
                        <div>
                            <img alt="Image" src={claimGetData?.streaming_url || null}/>
                        </div>
                    ):null}
                    {claimResolveData.value?.stream_type==='video'?(
                        <div>
                            <video controls src={claimGetData?.streaming_url || null}></video>
                        </div>
                    ):null}
                </div>
            );
        }
        if(claimResolveData.value_type==='repost'){
            return (<div>TODO Repost</div>);
        }
        return <div>Unknown claim type</div>;
    }
    if(claimResolveData===null){
        return <div>Loading...</div>
    }
    return <div>This isn't a claim somehow</div>;
}

export default SettingsPage;
