import * as React from "react";
import { SVGProps } from "react";

const SvgBookC = (props: SVGProps<SVGSVGElement>) => (
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
      d="M63 0v45h-9v9h-9v-9H27v9h-9v-9H9V0H0v198h9v9h54v-9h9V0h-9z"
      style={{
        fill: "#f69340",
      }}
    />
    <path
      d="M54 0H9v45h9v9h36v-9h9V0h-9z"
      style={{
        fill: "#e7dfef",
      }}
    />
    <path d="M43.6 164.1c0 1.3-.1 2.6-.1 3.8h-2.4l-.1-2.6c-14.8-5.2-11.3 19.8 1.5 10.7l1.9 1.8c-19.9 12.9-21.6-24.6-.8-13.7z" />
  </svg>
);

export default SvgBookC;
