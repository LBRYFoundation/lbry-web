import Props, { JSX, useEffect, useState } from "react";
import Markdown from "react-markdown";
import useDaemonRPC from "~/DaemonRPC";
import LBRY from "~/LBRY";

function downloadMarkdownFile(claimGetData, setMarkdown): void {
  const url: string = claimGetData?.streaming_url;
  const input: URL = new URL("/api/proxy", window.location.href);
  input.searchParams.set("url", url);

  fetch(input).then((resp: Response): void => {
    resp.text().then((text: string): void => {
      setMarkdown(text);
    });
  });
}

function StreamClaim({ data }: Props & { data: Stream }): JSX.Element {
  const daemonRPC: string = useDaemonRPC();

  const [claimGetData, setClaimGetData] = useState(null);
  const [markdown, setMarkdown] = useState("");

  useEffect((): void => {
    LBRY.rpc(
      daemonRPC,
      "get",
      { uri: data.canonical_url },
      null,
      import.meta.env.VITE_DAEMON_PROXY === "true",
    ).then((json: object): void => {
      setClaimGetData(json.result);
    });
  }, [data, daemonRPC]);

  return (
    <div>
      <h1>{data.value?.title}</h1>
      {data.value?.stream_type === "audio" ? (
        <div>
          <audio controls src={claimGetData?.streaming_url || null}></audio>
        </div>
      ) : null}
      {data.value?.stream_type === "document" ? (
        <div style={{ paddingTop: "16px" }}>
          {data.value.source.media_type === "text/markdown" ? (
            claimGetData ? (
              <div className="markdown">
                {downloadMarkdownFile(claimGetData, setMarkdown) && null}
                <Markdown>{markdown}</Markdown>
              </div>
            ) : null
          ) : (
            <iframe
              src={claimGetData?.streaming_url}
              style={{ border: 0, height: "700px", width: "100%" }}
            >
              Your system doesn't support iFrames.
            </iframe>
          )}
        </div>
      ) : null}
      {data.value?.stream_type === "image" ? (
        <div>
          <img alt="Image" src={claimGetData?.streaming_url || null} />
        </div>
      ) : null}
      {data.value?.stream_type === "video" ? (
        <div>
          <video
            controls
            src={claimGetData?.streaming_url || null}
            style={{
              backgroundColor: "black",
              height: "500px",
              marginTop: "16px",
              width: "100%",
            }}
          ></video>
        </div>
      ) : null}
    </div>
  );
}

export default StreamClaim;
