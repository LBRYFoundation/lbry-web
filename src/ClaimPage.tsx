import { JSX, useEffect, useState } from "react";
import { Params, useParams } from "react-router";
import useDaemonRPC from "~/DaemonRPC";
import LBRY from "~/LBRY";
import Claim from "~/components/Claim";
import Error from "~/components/Error";
import Loader from "~/components/Loader";

function ClaimPage(): JSX.Element {
  const daemonRPC: string = useDaemonRPC();

  const params: Params<string> = useParams();
  const claim: string = params["*"];

  const [claimResolveData, setClaimResolveData] = useState(null);

  useEffect((): void => {
    LBRY.rpc(
      daemonRPC,
      "resolve",
      { urls: [claim] },
      null,
      import.meta.env.VITE_DAEMON_PROXY === "true",
    ).then(async (json: object) => {
      //await new Promise(r => setTimeout(r, 10000));

      setClaimResolveData(json.result[claim] ?? null);
    });
  }, [claim, daemonRPC]);

  if (!claimResolveData) {
    return <Loader />;
  }

  if (claimResolveData.type === "claim") {
    return <Claim data={claimResolveData} />;
  }
  return <Error message="Type isn't a claim." />;
}

export default ClaimPage;
