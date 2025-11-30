import Props, { JSX } from "react";
import { NavLink } from "react-router";

function ClaimPreviewTile({
  claim,
}: Props & { claim: object[unknown]; key?: number }): JSX.Element {
  return (
    <NavLink
      to={`/claim/${claim.canonical_url?.replaceAll("lbry://", "").replaceAll("#", ":")}`}
      className="claimPreviewTile"
    >
      <div
        className="claimPreviewTileThumbnail"
        style={{
          backgroundImage: `url(${claim.value?.thumbnail?.url || claim.reposted_claim?.value?.thumbnail?.url})`,
        }}
      />
      <div className="claimPreviewTileTitle">
        <b>{claim.value?.title || claim.reposted_claim?.value?.title}</b>
      </div>
    </NavLink>
  );
}

export default ClaimPreviewTile;
