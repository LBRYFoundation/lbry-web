import Props, { JSX } from "react";
import ChannelClaim from "~/components/ChannelClaim";
import Error from "~/components/Error";
import ReportClaim from "~/components/ReportClaim";
import StreamClaim from "~/components/StreamClaim";

function Claim({
  data,
}: Props & { data: Channel | Repost | Stream }): JSX.Element {
  console.log(JSON.stringify(data));
  if (data.value_type === "channel") {
    return <ChannelClaim data={data} />;
  }
  if (data.value_type === "stream") {
    return <StreamClaim data={data} />;
  }
  if (data.value_type === "repost") {
    return <ReportClaim data={data} />;
  }
  return <Error message="Unknown claim type" />;
}

export default Claim;
