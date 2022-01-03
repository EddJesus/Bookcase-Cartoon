import * as React from "react";
import { SVGProps } from "react";

const SvgFilterButtonActive = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 96 105"
        style={{
      // @ts-ignore
      enableBackground: "new 0 0 96 105",
    }}
    xmlSpace="preserve"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      style={{
        fill: "#c3b6d3",
      }}
      d="M9.4 78v9h78v-9h9V18h-9V9h-78v9h-9v60z"
    />
    <path
      style={{
        fill: "#e7dfef",
      }}
      d="M9.4 96v9h78v-9h9V27h-9v-9h-78v9h-9v69z"
    />
  </svg>
);

export default SvgFilterButtonActive;
