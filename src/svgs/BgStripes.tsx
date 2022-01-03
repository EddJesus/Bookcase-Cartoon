import * as React from "react";
import { SVGProps } from "react";

const SvgBgStripes = (props: SVGProps<SVGSVGElement>) => (
  <svg
    id="bg_stripes_svg__Camada_1"
    xmlns="http://www.w3.org/2000/svg"
    x={0}
    y={0}
    viewBox="0 0 1080.4 1067.5"
        style={{
      // @ts-ignore
      enableBackground: "new 0 0 1080.4 1067.5",
    }}
    xmlSpace="preserve"
    width="1em"
    height="1em"
    {...props}
  >
    <style>
      {".bg_stripes_svg__st0{fill:#e7dfef}.bg_stripes_svg__st1{fill:#fff}"}
    </style>
    <path
      className="bg_stripes_svg__st0"
      d="M0 0h1080v90H0zM0 177h1080v90H0zM0 354h1080v90H0zM0 531h1080v90H0zM0 711h1080v90H0zM0 888h1080v90H0z"
    />
    <path
      className="bg_stripes_svg__st1"
      d="M.4 89.5h1080v90H.4zM.4 266.5h1080v90H.4zM.4 443.5h1080v90H.4zM.4 620.5h1080v90H.4zM.4 800.5h1080v90H.4zM.4 977.5h1080v90H.4z"
    />
  </svg>
);

export default SvgBgStripes;
