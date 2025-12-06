import { JSX } from "react";
import CustomSVG from "~/components/CustomSVG";

function Loader(): JSX.Element {
  return (
    <div style={{ textAlign: "center" }}>
      <CustomSVG
        className="spinner"
        icon="spinner"
        style={{ fill: "white", height: "48px", verticalAlign: "middle" }}
        viewBox="0 0 640 640"
      />
      <span
        style={{
          display: "inline-block",
          lineHeight: "48px",
          padding: "0 8px",
          verticalAlign: "middle",
        }}
      >
        Loading...
      </span>
    </div>
  );
}

export default Loader;
