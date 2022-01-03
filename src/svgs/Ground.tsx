import * as React from "react";
import { SVGProps } from "react";

const SvgGround = (props: SVGProps<SVGSVGElement>) => (
  <svg
    id="ground_svg__Camada_1"
    xmlns="http://www.w3.org/2000/svg"
    x={0}
    y={0}
    viewBox="0 0 1080 930"
        style={{
      // @ts-ignore
      enableBackground: "new 0 0 1080 930",
    }}
    xmlSpace="preserve"
    width="1em"
    height="1em"
    {...props}
  >
    <style>{".ground_svg__st1{fill:#633585}"}</style>
    <path
      style={{
        fill: "#9b6dbf",
      }}
      d="M0 27h1080v903H0z"
    />
    <path
      className="ground_svg__st1"
      d="M0 0h1080v27H0zM0 633v297h1080V633zM0 579h1080v27H0z"
    />
  </svg>
);

export default SvgGround;
