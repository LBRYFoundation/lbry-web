import LBRY from "./LBRY";
import './App.css';

function App() {
    const notTags = ["porn","porno","nsfw","mature","xxx","sex","creampie","blowjob","handjob","vagina","boobs","big boobs","big dick","pussy","cumshot","anal","hard fucking","ass","fuck","hentai"];

    LBRY.rpc('claim_search',{"page_size":4,"claim_type":["stream","repost","channel"],"no_totals":true,"any_tags":[],"not_tags":notTags,"channel_ids":["80d2590ad04e36fb1d077a9b9e3a8bba76defdf8","b58dfaeab6c70754d792cdd9b56ff59b90aea334"],"not_channel_ids":[],"order_by":["release_time"],"has_source":true,"release_time":">1731193200","include_purchase_receipt":true}).then(json => {
        json.result.items.forEach((item: object): void => {
            document.getElementById('row-1').innerHTML += '<div style="border:1px solid red;display:inline-block;max-width:200px;"><img alt="Thumbnail" src="'+(item.value?.thumbnail?.url || item.reposted_claim?.value?.thumbnail?.url)+'" style="height:100px;"><br>'+(item.value?.title || item.reposted_claim?.value?.title)+'</div>';
        });
        document.getElementById('row-1').innerHTML += '<br>-------<br>';
    });

    LBRY.rpc('claim_search',{"page_size":4,"claim_type":["stream"],"no_totals":true,"any_tags":[],"not_tags":notTags,"channel_ids":[],"not_channel_ids":[],"order_by":["effective_amount"],"has_source":true,"release_time":">1762902000","limit_claims_per_channel":2,"include_purchase_receipt":true}).then(json => {
        json.result.items.forEach((item: object): void => {
            document.getElementById('row-2').innerHTML += '<div style="border:1px solid red;display:inline-block;max-width:200px;"><img alt="Thumbnail" src="'+(item.value?.thumbnail?.url || item.reposted_claim?.value?.thumbnail?.url)+'" style="height:100px;"><br>'+(item.value?.title || item.reposted_claim?.value?.title)+'</div>';
        });
        document.getElementById('row-2').innerHTML += '<br>-------<br>';
    });

    LBRY.rpc('claim_search',{"page_size":4,"claim_type":["stream","repost","channel"],"no_totals":true,"any_tags":[],"not_tags":notTags,"channel_ids":["3fda836a92faaceedfe398225fb9b2ee2ed1f01a"],"not_channel_ids":[],"order_by":["release_time"],"has_source":true,"include_purchase_receipt":true}).then(json => {
        json.result.items.forEach((item: object): void => {
            document.getElementById('row-3').innerHTML += '<div style="border:1px solid red;display:inline-block;max-width:200px;"><img alt="Thumbnail" src="'+(item.value?.thumbnail?.url || item.reposted_claim?.value?.thumbnail?.url)+'" style="height:100px;"><br>'+(item.value?.title || item.reposted_claim?.value?.title)+'</div>';
        });
        document.getElementById('row-3').innerHTML += '<br>-------<br>';
    });

    return (
        <>
            <div id="row-1"></div>
            <hr/>
            <div id="row-2"></div>
            <hr/>
            <div id="row-3"></div>
        </>
    )
}

export default App
