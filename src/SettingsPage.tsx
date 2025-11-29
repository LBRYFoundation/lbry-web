import {JSX, useEffect, useState} from "react";

import LBRY from "./LBRY";
import useDaemonRPC from "./DaemonRPC";

function SettingsPage(){
    const daemonRPC: string = useDaemonRPC();

    const [settings,setSettings]: [object,(value: object) => object] = useState();

    useEffect((): void => {
        LBRY.rpc(daemonRPC,'settings_get',null,null,import.meta.env.VITE_DAEMON_PROXY==='true').then((json: object): void => {
            setSettings(json.result || json.error?.message || 'Unknown error');
        });
    },[daemonRPC]);

    return (
        <>
            <h1>Settings</h1>
            <div id="settings">
                {(typeof settings==='string')?(
                    <>
                        <b>Error:</b><br/>
                        <span>{settings}</span>
                    </>
                ):null}
                {(typeof settings==='object')?(
                    <>
                        {(settings==null)?(
                            <span>Loading...</span>
                        ):(
                            <>
                                {Object.keys(settings).map((setting: string, i: number): JSX.Element => (
                                    <div key={i} style={{border:'1px solid red',margin:'8px 0',padding:'16px'}}>
                                        <b>{setting}</b><br/>
                                        <span>{JSON.stringify(settings[setting])}</span>
                                    </div>
                                ))}
                            </>
                        )}
                    </>
                ):null}
            </div>
        </>
    );
}

export default SettingsPage;
