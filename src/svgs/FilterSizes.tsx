import * as React from "react";
import { SVGProps } from "react";

const SvgFilterSizes = (props: SVGProps<SVGSVGElement>) => (
  <svg
    id="filter_sizes_svg__Camada_1"
    xmlns="http://www.w3.org/2000/svg"
    x={0}
    y={0}
    viewBox="0 0 45 36"
        style={{
      // @ts-ignore
      enableBackground: "new 0 0 45 36",
    }}
    xmlSpace="preserve"
    width="1em"
    height="1em"
    {...props}
  >
    <style>{".filter_sizes_svg__st0{fill:#633585}"}</style>
    <path
      className="filter_sizes_svg__st0"
      d="M9 18h9v18H9zM0 18h9v18H0zM27 18h9v18h-9zM27 0h9v18h-9zM36 18h9v18h-9zM36 0h9v18h-9z"
    />
  </svg>
);

export default SvgFilterSizes;
