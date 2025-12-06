import { JSX, useEffect, useState } from "react";
import { Link } from "react-router";
import useDaemonRPC from "~/DaemonRPC";
import LBRY from "~/LBRY";

function WalletPage() {
  const daemonRPC: string = useDaemonRPC();

  const [wallet, setWallet] = useState(null);
  const [transactions, setTransactions] = useState<object[]>([]);

  useEffect((): void => {
    LBRY.rpc(
      daemonRPC,
      "wallet_balance",
      null,
      null,
      import.meta.env.VITE_DAEMON_PROXY === "true",
    ).then((json: object): void => {
      if (json.error) {
        return;
      }
      setWallet(json.result);
    });
  }, [daemonRPC]);

  useEffect((): void => {
    LBRY.rpc(
      daemonRPC,
      "txo_list",
      null,
      null,
      import.meta.env.VITE_DAEMON_PROXY === "true",
    ).then((json: object): void => {
      if (json.error) {
        return;
      }
      setTransactions(json.result?.items || []);
    });
  }, [daemonRPC]);

  return (
    <>
      <h1>Wallet</h1>
      <div id="wallet">
        {wallet ? (
          <span>
            <b>Available:</b> {wallet.available}
          </span>
        ) : null}
      </div>
      <h2>Transactions</h2>
      <div id="transactions">
        <table style={{ width: "100%" }}>
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
            {transactions.map(
              (transaction: unknown, i: number): JSX.Element => (
                <tr key={i}>
                  <td>
                    <span>{transaction.timestamp}</span>
                    <br />
                    <span>{transaction.timestamp}</span>
                  </td>
                  <td>{transaction.type}</td>
                  <td></td>
                  <td>
                    <Link
                      to={`https://explorer.lbry.org/tx/${transaction.txid}`}
                      target="_blank"
                    >
                      {transaction.txid}
                    </Link>
                  </td>
                  <td>{transaction.amount}</td>
                </tr>
              ),
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WalletPage;
