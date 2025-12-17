import React, { JSX } from "react";
import CustomSVG from "~/components/CustomSVG";
import Error from "~/components/Error";
import Loader from "~/components/Loader";

function LibraryPage(): JSX.Element {
  const localPreferenceResponse: object = undefined;

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
          icon="key"
          viewBox="0 0 24 24"
        />{" "}
        <span style={{ verticalAlign: "middle" }}>Library</span>
      </h1>
      {localPreferenceResponse ? (
        localPreferenceResponse.error ? (
          <Error message={localPreferenceResponse.error.message} />
        ) : (
          <>TODO Library page</>
        )
      ) : (
        <Loader />
      )}
    </>
  );
}

export default LibraryPage;
