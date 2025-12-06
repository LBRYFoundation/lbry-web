import Props, { JSX } from "react";
import CustomSVG from "~/components/CustomSVG";

function Error({ message }: Props & { message: string }): JSX.Element {
  return (
    <div style={{ color: "red", textAlign: "center" }}>
      <CustomSVG
        icon="error"
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
        {message}
      </span>
    </div>
  );
}

export default Error;
