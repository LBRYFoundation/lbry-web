import React, { JSX, useEffect, useState } from "react";
import useDaemonRPC from "~/DaemonRPC";
import LBRY from "~/LBRY";
import Error from "~/components/Error";
import Loader from "~/components/Loader";

function WalletPage(): JSX.Element {
  const daemonRPC: string = useDaemonRPC();

  const [version, setVersion] = useState<string | null>(null);

  const [statusResponse, setStatusResponse] = useState<object>(undefined);
  const [versionResponse, setVersionResponse] = useState<object>(undefined);

  useEffect(() => {
    import("/package.json").then((pkg) => setVersion(pkg.version));
  }, []);

  useEffect((): void => {
    LBRY.rpc(daemonRPC, LBRY.STATUS, null, null, LBRY.isUsingProxy()).then(
      (json: object): void => {
        setStatusResponse(json);
      },
    );
  }, []);

  useEffect((): void => {
    LBRY.rpc(daemonRPC, LBRY.VERSION, null, null, LBRY.isUsingProxy()).then(
      (json: object): void => {
        setVersionResponse(json);
      },
    );
  }, []);

  return (
    <>
      <h1>Help</h1>
      <div style={{ padding: "16px 0" }}></div>
      <h2>About</h2>
      <div style={{ padding: "16px 0" }}>
        <table style={{ width: "100%" }}>
          <tbody>
            <tr>
              <th
                style={{
                  borderBottom: "1px solid rgb(51, 51, 56)",
                  padding: "6px 0",
                  paddingRight: "50px",
                  textAlign: "left",
                  whiteSpace: "nowrap",
                  width: "0%",
                }}
              >
                App
              </th>
              <td style={{ borderBottom: "1px solid rgb(51, 51, 56)" }}>
                {version}
              </td>
            </tr>
            <tr>
              <th
                style={{
                  borderBottom: "1px solid rgb(51, 51, 56)",
                  padding: "6px 0",
                  paddingRight: "50px",
                  textAlign: "left",
                  whiteSpace: "nowrap",
                  width: "0%",
                }}
              >
                Daemon
              </th>
              <td style={{ borderBottom: "1px solid rgb(51, 51, 56)" }}>
                {versionResponse ? (
                  versionResponse.error ? (
                    <Error message={versionResponse.error.message} />
                  ) : (
                    versionResponse.result.version
                  )
                ) : (
                  <Loader />
                )}
              </td>
            </tr>
            <tr>
              <th
                style={{
                  borderBottom: "1px solid rgb(51, 51, 56)",
                  padding: "6px 0",
                  paddingRight: "50px",
                  textAlign: "left",
                  whiteSpace: "nowrap",
                  width: "0%",
                }}
              >
                Platform
              </th>
              <td style={{ borderBottom: "1px solid rgb(51, 51, 56)" }}>
                {versionResponse ? (
                  versionResponse.error ? (
                    <Error message={versionResponse.error.message} />
                  ) : (
                    versionResponse.result.platform
                  )
                ) : (
                  <Loader />
                )}
              </td>
            </tr>
            <tr>
              <th
                style={{
                  borderBottom: "1px solid rgb(51, 51, 56)",
                  padding: "6px 0",
                  paddingRight: "50px",
                  textAlign: "left",
                  whiteSpace: "nowrap",
                  width: "0%",
                }}
              >
                Installation ID
              </th>
              <td style={{ borderBottom: "1px solid rgb(51, 51, 56)" }}>
                {statusResponse ? (
                  statusResponse.error ? (
                    <Error message={statusResponse.error.message} />
                  ) : (
                    statusResponse.result.installation_id
                  )
                ) : (
                  <Loader />
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default WalletPage;
