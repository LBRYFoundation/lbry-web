import LBRY from "./LBRY";

function WalletPage(){
    LBRY.rpc(import.meta.env.VITE_DAEMON_DEFAULT,import.meta.env.VITE_DAEMON_PROXY==='true','wallet_balance').then(json => {
        if(json.error){
            document.getElementById('wallet').innerHTML = json.error.message;
            return;
        }
    });

    LBRY.rpc(import.meta.env.VITE_DAEMON_DEFAULT,import.meta.env.VITE_DAEMON_PROXY==='true','txo_list').then(json => {
        if(json.error){
            document.getElementById('transactions').innerHTML = json.error.message;
            return;
        }
    });

    return (
        <>
            <h1>Wallet</h1>
            <div id="wallet"></div>
            <h2>Transactions</h2>
            <div id="transactions"></div>
        </>
    );
}

export default WalletPage;
