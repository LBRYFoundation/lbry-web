import React, { JSX, useEffect, useState } from "react";
import { NOT_TAGS } from "~/Constants";
import useDaemonRPC from "~/DaemonRPC";
import LBRY from "~/LBRY";
import ClaimPreviewTile from "~/components/ClaimPreviewTile";
import CustomSVG from "~/components/CustomSVG";
import Error from "~/components/Error";
import Loader from "~/components/Loader";

function TagsPage(): JSX.Element {
  const daemonRPC: string = useDaemonRPC();

  const [localPreferenceResponse, setLocalPreferenceResponse] =
    useState<object>(undefined);
  const [tags, setTags] = useState<string[]>([]);
  const [items, setItems] = useState<object[] | string | null>(null);
  const [toggle, setToggle] = useState<string>("new");

  useEffect((): void => {
    LBRY.rpc(
      daemonRPC,
      LBRY.PREFERENCE_GET,
      { key: "local" },
      null,
      LBRY.isUsingProxy(),
    ).then((json: object): void => {
      setLocalPreferenceResponse(json);
      if (json?.result?.local?.tags) {
        setTags(json?.result?.local?.tags);
      }
    });
  }, []);

  useEffect((): void => {
    const orderBy: string =
      (toggle === "new" ? "release_time" : "") +
      (toggle === "trending" ? "trending_score" : "") +
      (toggle === "top" ? "effective_amount" : "");

    const hourAgo: number = (Date.now() - 3600000) / 1000;

    const releaseTime: string =
      (toggle === "new" ? "<" + hourAgo : "") +
      (toggle === "trending" ? "<" + hourAgo : "") +
      (toggle === "top" ? ">" + hourAgo : "");

    // "<1765920600"

    const searchOptions: object = {
      page_size: 20,
      page: 1,
      claim_type: ["stream", "repost", "channel"],
      no_totals: true,
      not_channel_ids: [],
      not_tags: NOT_TAGS,
      order_by: [orderBy],
      has_source: true,
      any_tags: tags,
      release_time: releaseTime,
      include_purchase_receipt: true,
    };

    LBRY.rpc(
      daemonRPC,
      LBRY.CLAIM_SEARCH,
      searchOptions,
      null,
      LBRY.isUsingProxy(),
    ).then((json: object): void => {
      setItems(json.result.items || json.error?.message || "Unknown error");
    });
  }, [daemonRPC, tags, toggle]);

  return (
    <>
      <h1>
        <CustomSVG
          style={{
            fill: "transparent",
            height: "24",
            width: "24",
            verticalAlign: "middle",
            stroke: "white",
            strokeWidth: "2px",
            padding: open ? "0px 8px 0px 12px" : null,
          }}
          icon="tag"
          viewBox="0 0 24 24"
        />{" "}
        <span style={{ verticalAlign: "middle" }}>Your Tags</span>
      </h1>
      {localPreferenceResponse ? (
        localPreferenceResponse.error ? (
          <Error message={localPreferenceResponse.error.message} />
        ) : (
          <>
            <div style={{ padding: "16px 0" }}>
              <button
                onClick={(): void => {
                  if (toggle !== "new") {
                    setItems(null);
                  }
                  setToggle("new");
                }}
              >
                New
              </button>
              <button
                onClick={(): void => {
                  if (toggle !== "trending") {
                    setItems(null);
                  }
                  setToggle("trending");
                }}
              >
                Trending
              </button>
              <button
                onClick={(): void => {
                  if (toggle !== "top") {
                    setItems(null);
                  }
                  setToggle("top");
                }}
              >
                Top
              </button>
            </div>
            <div style={{ padding: "16px 0", textAlign: "center" }}>
              {items === null ? (
                <Loader />
              ) : "string" === typeof items ? (
                <span style={{ color: "red" }}>{items}</span>
              ) : items.length > 0 ? (
                items.map((cell: unknown, i: number) => (
                  <ClaimPreviewTile claim={cell} key={i} />
                ))
              ) : (
                "No items"
              )}
            </div>
          </>
        )
      ) : (
        <Loader />
      )}
    </>
  );
}

export default TagsPage;
