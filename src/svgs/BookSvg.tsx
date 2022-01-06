import * as React from "react";
import { SVGProps } from "react";

interface BookInterface extends SVGProps<SVGSVGElement>{
  color: string
  letter: string
  letterColor: string
}

const chooseLetter = (letter: string) => {
  switch (letter) {
    case "a":
      return "M34.2 164.8h-1.9v-2.4h6l6.7 15.3h1.6v2.5H40v-2.5h2.1c-.5-.9-.8-1.9-1.1-2.6h-8.8c-.3.7-.8 1.7-1.2 2.6h2.1v2.5h-6.6v-2.5h1.6l6.1-12.9zm5.8 7.9c-.9-2.1-1.8-4.3-3.2-7.7-1.5 3.5-2.6 5.6-3.5 7.7H40z"
    case "b":
      return "M30.2 180.1v-2.5h2.1v-12.9h-2.1v-2.4h9.6c5.1-.8 8.7 6 3.5 8.6 6.1 2.6 2.1 10.3-3.5 9.1 0 .1-9.6.1-9.6.1zm4.7-10.3c2.1-.1 8.4.8 8.3-2.3.2-3.9-5.9-2.4-8.3-2.7v5zm0 7.9c2.6-.4 8.4 1.4 8.7-2.7-.3-3.9-6.2-2.6-8.7-2.8v5.5z"
    case "c":
      return "M43.6 164.1c0 1.3-.1 2.6-.1 3.8h-2.4l-.1-2.6c-14.8-5.2-11.3 19.8 1.5 10.7l1.9 1.8c-19.9 12.9-21.6-24.6-.8-13.7z"
    case "d":
      return "M27.6 180.1v-2.5h2.1v-12.9h-2.1v-2.4c7.2-.3 17.7-.9 17.3 8.7.5 9.8-9.8 9.5-17.3 9.1zm8.4-2.4c9.3-.6 8.6-15.1-3.6-12.9v12.9H36z"
    case "e":
      return "m41.3 177.6.1-2.7h2.4v5.2h-15v-2.5h2.1v-12.9h-2.1v-2.4h14.6v5.1H41l-.1-2.7h-7.4v5H41v2.5h-7.5v5.3h7.8z"
    case "f":
      return "M29.8 180.1v-2.5h2.1v-12.9h-2.1v-2.4h13.9v5.1h-2.4l-.1-2.7h-6.7v5h7.1v2.5h-7.1v5.4H37v2.5h-7.2z"
    default:
      // I stopped putting letters on 'F' because I don't know how to create new svg letters :(
      return ""
  }
}

const SvgBookA = (props: BookInterface) => (
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
        fill: `${props.color ? props.color : "#FFFF"}`,
      }}
    />
    <path
      d="M54 18H9v45h9v9h36v-9h9V18h-9z"
      style={{
        fill: "#e7dfef",
      }}
    />
    <path d={chooseLetter(props.letter)} style={{fill: props.letterColor}} />
  </svg>
);

export default SvgBookA;
