import LBRY from "./LBRY";

function WalletPage(){
    LBRY.rpc('wallet_balance').then(json => {
        if(json.error){
            document.getElementById('wallet').innerHTML = json.error.message;
            return;
        }
    });

    LBRY.rpc('txo_list').then(json => {
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
