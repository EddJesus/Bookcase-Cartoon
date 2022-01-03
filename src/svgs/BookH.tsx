import * as React from "react";
import { SVGProps } from "react";

const SvgBookH = (props: SVGProps<SVGSVGElement>) => (
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
      d="M63 0v54h-9v9h-9v-9H27v9h-9v-9H9V0H0v198h9v9h54v-9h9V0h-9z"
      style={{
        fill: "#4041f6",
      }}
    />
    <path d="M45.6 177.7v2.5h-6.8v-2.5h2v-5.5h-9.2v5.5h2v2.5h-6.8v-2.5H29v-12.8h-2.1v-2.5h6.8v2.5h-2v5h9.2v-5h-2v-2.5h6.8v2.5h-2.1v12.8h2z" />
    <path
      d="M54 0H9v54h9v9h36v-9h9V0h-9z"
      style={{
        fill: "#e7dfef",
      }}
    />
  </svg>
);

export default SvgBookH;
