import Props, { JSX, useEffect, useState } from "react";
import { Link } from "react-router";
import useDaemonRPC from "~/DaemonRPC";
import LBRY from "~/LBRY";
import ClaimPreviewTile from "~/components/ClaimPreviewTile";

function CollectionClaim({ data }: Props & { data: Collection }): JSX.Element {
  const daemonRPC: string = useDaemonRPC();

  const [items, setItems] = useState([]);

  useEffect((): void => {
    LBRY.rpc(
      daemonRPC,
      "resolve",
      {
        urls: data.value.claims.map(
          (claim: string): string => `lbry://${data.signing_channel.name}:${claim}`,
        ),
        include_purchase_receipt: true,
      },
      null,
      import.meta.env.VITE_DAEMON_PROXY === "true",
    ).then((json: object[unknown]): void => {
      setItems(Object.values(json.result));
    });
  }, [daemonRPC]);

  return (
    <div>
      <h1>{data.value.title}</h1>
      <span>
        by{" "}
        <Link
          to={`/claim/${data.signing_channel.canonical_url.replace("lbry://", "")}`}
        >
          {data.signing_channel.value.title}
        </Link>
      </span>
      <div style={{ textAlign: "center" }}>
        {items.map((item: object[unknown], i: number): JSX.Element => (
          <ClaimPreviewTile claim={item} key={i} />
        ))}
      </div>
    </div>
  );
}

export default CollectionClaim;
