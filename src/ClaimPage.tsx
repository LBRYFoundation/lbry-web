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

  const [claimResolveData, setClaimResolveData]: [] = useState(null);

  const [recommendedIsChannelItems, setRecommendedIsChannelItems] =
    useState(false);

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

  return (
    <div style={{ display: "flex" }}>
      <div style={{ flex: "1" }}>
        <div id="claim">
          {claimResolveData ? (
            claimResolveData.type === "claim" ? (
              <Claim data={claimResolveData} />
            ) : (
              <Error message="Type isn't a claim." />
            )
          ) : (
            <Loader />
          )}
        </div>
        <div id="comments" style={{ paddingTop: "16px", textAlign: "center" }}>
          Cannot load comments
        </div>
      </div>
      <div id="recommended" style={{ width: "375px" }}>
        <div>
          <span
            onClick={() => setRecommendedIsChannelItems(false)}
            style={{
              backgroundColor: recommendedIsChannelItems
                ? "rgba(17, 17, 17, 0.4)"
                : "rgb(17, 17, 17)",
              borderRadius: "16px",
              cursor: "pointer",
              display: "inline-block",
              fontSize: "14px",
              lineHeight: "32px",
              padding: "0 12px",
            }}
          >
            Related
          </span>
          &nbsp;
          <span
            onClick={() => setRecommendedIsChannelItems(true)}
            style={{
              backgroundColor: recommendedIsChannelItems
                ? "rgb(17, 17, 17)"
                : "rgba(17, 17, 17, 0.4)",
              borderRadius: "16px",
              cursor: "pointer",
              display: "inline-block",
              fontSize: "14px",
              lineHeight: "32px",
              padding: "0 12px",
            }}
          >
            More from this channel
          </span>
        </div>
        <div style={{ padding: "16px", textAlign: "center" }}>
          Cannot load recommendations.
        </div>
      </div>
    </div>
  );
}

export default ClaimPage;
