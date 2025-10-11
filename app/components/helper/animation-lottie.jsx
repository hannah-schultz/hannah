"use client"

import { useEffect, useRef } from "react";
import lottie from "lottie-web";

export default function AnimationLottie({ animationPath }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || typeof window === "undefined") return;

    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationPath,
    });

    return () => anim.destroy();
  }, [animationPath]);

  return <div ref={containerRef} />;
}
