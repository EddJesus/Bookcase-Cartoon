import * as React from "react";
import { SVGProps } from "react";

const SvgFilterColors = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 37 38.8"
        style={{
      // @ts-ignore
      enableBackground: "new 0 0 37 38.8",
    }}
    xmlSpace="preserve"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      style={{
        fill: "#eb3929",
      }}
      d="M0 0h14v14H0z"
    />
    <path
      style={{
        fill: "#f1f552",
      }}
      d="M23 0h14v14H23z"
    />
    <path
      style={{
        fill: "#40a7f6",
      }}
      d="M0 24.9h14v14H0z"
    />
    <path
      style={{
        fill: "#633585",
      }}
      d="M23 24.9h14v14H23z"
    />
  </svg>
);

export default SvgFilterColors;
