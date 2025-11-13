import LBRY from "./LBRY";

function SettingsPage(){
    LBRY.rpc('settings_get').then(json => {
        if(json.error){
            document.getElementById('settings').innerHTML = json.error.message;
            return;
        }
        document.getElementById('settings').innerHTML = '';
        json.result.items.forEach((item: object): void => {
            document.getElementById('settings').innerHTML += '<div style="border:1px solid red;display:inline-block;max-width:200px;"><img alt="Thumbnail" src="'+(item.value?.thumbnail?.url || item.reposted_claim?.value?.thumbnail?.url)+'" style="height:100px;"><br>'+(item.value?.title || item.reposted_claim?.value?.title)+'</div>';
        });
    });

    return (
        <>
            <h1>Settings</h1>
            <div id="settings"></div>
        </>
    );
}

export default SettingsPage;
