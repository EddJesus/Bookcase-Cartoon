import * as React from "react";
import { SVGProps } from "react";

const SvgBoard = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 900 414"
    style={{
      // @ts-ignore
      enableBackground: "new 0 0 900 414",
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
      d="M9 387v9h9v9h9v9h846v-9h9v-9h9v-9h9V54h-9v-9h-9v-9h-9v-9H27v9h-9v9H9v9H0v333z"
    />
    <path
      style={{
        fill: "#fff",
      }}
      d="M9 360v9h9v9h9v9h846v-9h9v-9h9v-9h9V27h-9v-9h-9V9h-9V0H27v9h-9v9H9v9H0v333z"
    />
  </svg>
);

export default SvgBoard;
