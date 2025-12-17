import React, { JSX, useEffect, useState } from "react";
import { Link } from "react-router";
import useDaemonRPC from "~/DaemonRPC";
import LBRY from "~/LBRY";
import Error from "~/components/Error";
import Loader from "~/components/Loader";

function WalletPage() {
  const daemonRPC: string = useDaemonRPC();

  const [walletResponse, setWalletResponse] = useState<object>(undefined);
  const [transactionsResponse, setTransactionsResponse] =
    useState<object>(undefined);

  useEffect((): void => {
    LBRY.rpc(
      daemonRPC,
      LBRY.WALLET_BALANCE,
      null,
      null,
      LBRY.isUsingProxy(),
    ).then((json: object): void => {
      setWalletResponse(json);
    });
  }, [daemonRPC]);

  useEffect((): void => {
    LBRY.rpc(daemonRPC, LBRY.TXO_LIST, null, null, LBRY.isUsingProxy()).then(
      (json: object): void => {
        setTransactionsResponse(json);
      },
    );
  }, [daemonRPC]);

  return (
    <>
      <h1>Wallet</h1>
      {walletResponse ? (
        walletResponse.error ? (
          <Error message={walletResponse.error.message} />
        ) : (
          <div id="wallet">
            <span>
              <b>Available:</b> {walletResponse?.result?.available}
            </span>
          </div>
        )
      ) : (
        <Loader />
      )}
      <h2>Transactions</h2>
      {transactionsResponse ? (
        transactionsResponse.error ? (
          <Error message={transactionsResponse.error.message} />
        ) : (
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
                {transactionsResponse?.result?.map(
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
        )
      ) : (
        <Loader />
      )}
    </>
  );
}

export default WalletPage;
