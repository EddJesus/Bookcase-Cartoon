import * as React from "react";
import { SVGProps } from "react";

const SvgBookA = (props: SVGProps<SVGSVGElement>) => (
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
      d="M63 9v54H9V9H0v189h9v9h54v-9h9V9h-9z"
      style={{
        fill: "#f1f552",
      }}
    />
    <path
      d="M54 18H9v45h9v9h36v-9h9V18h-9z"
      style={{
        fill: "#e7dfef",
      }}
    />
    <path d="M34.2 164.8h-1.9v-2.4h6l6.7 15.3h1.6v2.5H40v-2.5h2.1c-.5-.9-.8-1.9-1.1-2.6h-8.8c-.3.7-.8 1.7-1.2 2.6h2.1v2.5h-6.6v-2.5h1.6l6.1-12.9zm5.8 7.9c-.9-2.1-1.8-4.3-3.2-7.7-1.5 3.5-2.6 5.6-3.5 7.7H40z" />
  </svg>
);

export default SvgBookA;
