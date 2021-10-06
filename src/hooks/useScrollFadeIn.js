import { useRef } from "react";

const UseScrollFadeIn = () => {
  const dom = useRef();

  console.log("hello");

  return {
    ref: dom,
  };
};

export default UseScrollFadeIn;
