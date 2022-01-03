import * as React from "react";
import { SVGProps } from "react";

const SvgBookF = (props: SVGProps<SVGSVGElement>) => (
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
      d="M63 36v54h-9v9h-9v-9H27v9h-9v-9H9V36H0v162h9v9h54v-9h9V36h-9z"
      style={{
        fill: "#dd108f",
      }}
    />
    <path
      d="M54 45H9v45h9v9h36v-9h9V45h-9z"
      style={{
        fill: "#e7dfef",
      }}
    />
    <path d="M29.8 180.1v-2.5h2.1v-12.9h-2.1v-2.4h13.9v5.1h-2.4l-.1-2.7h-6.7v5h7.1v2.5h-7.1v5.4H37v2.5h-7.2z" />
  </svg>
);

export default SvgBookF;
