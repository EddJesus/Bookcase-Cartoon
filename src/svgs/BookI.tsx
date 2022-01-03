import * as React from "react";
import { SVGProps } from "react";

const SvgBookI = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 72.5 207"
        style={{
      // @ts-ignore
      enableBackground: "new 0 0 72.5 207",
    }}
    xmlSpace="preserve"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M63.5 18v54h-9v9h-36v-9h-9V18h-9v180h9v9h54v-9h9V18h-9z"
      style={{
        fill: "#38e655",
      }}
    />
    <path
      d="M54.5 27h-45v45h9v9h36v-9h9V27h-9z"
      style={{
        fill: "#e7dfef",
      }}
    />
    <path d="M40.3 177.7v2.5h-7.1v-2.5h2.2v-12.8h-2.1v-2.5h7v2.5H38v12.8h2.3z" />
  </svg>
);

export default SvgBookI;
