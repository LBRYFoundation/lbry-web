import {JSX, useEffect, useState} from "react";
import {Link} from "react-router";

import LBRY from "./LBRY";

function WalletPage(){
    const [wallet,setWallet] = useState(null);
    const [transactions,setTransactions] = useState([]);

    useEffect((): void => {
        LBRY.rpc(import.meta.env.VITE_DAEMON_DEFAULT,'wallet_balance',null,null,import.meta.env.VITE_DAEMON_PROXY==='true').then(json => {
            if(json.error){
                document.getElementById('wallet').innerHTML = json.error.message;
                return;
            }
            setWallet(json.result);
        });
    },[]);

    useEffect((): void => {
        LBRY.rpc(import.meta.env.VITE_DAEMON_DEFAULT,'txo_list',null,null,import.meta.env.VITE_DAEMON_PROXY==='true').then(json => {
            if(json.error){
                document.getElementById('transactions').innerHTML = json.error.message;
                return;
            }
            setTransactions(json.result?.items || []);
        });
    },[]);

    return (
        <>
            <h1>Wallet</h1>
            <div id="wallet">
                {wallet?(
                    <span><b>Available:</b> {wallet.available}</span>
                ):null}
            </div>
            <h2>Transactions</h2>
            <div id="transactions">
                <table style={{width:'100%'}}>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Type</th>
                            <th>Details</th>
                            <th>Transaction</th>
                            <th>LBC</th>
                        </tr>
                    </thead>
                    <tbody>
                    {transactions.map((transaction: unknown, i: number): JSX.Element => (
                        <tr key={i}>
                            <td>
                                <span>{transaction.timestamp}</span><br/>
                                <span>{transaction.timestamp}</span>
                            </td>
                            <td>{transaction.type}</td>
                            <td></td>
                            <td><Link to={`https://explorer.lbry.org/tx/${transaction.txid}`} target="_blank">{transaction.txid}</Link></td>
                            <td>{transaction.amount}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default WalletPage;
