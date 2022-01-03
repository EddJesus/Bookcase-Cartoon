import * as React from "react";
import { SVGProps } from "react";

const SvgFilterButton = (props: SVGProps<SVGSVGElement>) => (
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
      d="M87 36v-9H9v9H0v60h9v9h78v-9h9V36z"
    />
    <path
      style={{
        fill: "#e7dfef",
      }}
      d="M87 9V0H9v9H0v78h9v9h78v-9h9V9z"
    />
  </svg>
);

export default SvgFilterButton;
