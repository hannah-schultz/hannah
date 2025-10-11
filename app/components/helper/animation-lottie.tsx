"use client"

import { useEffect, useRef } from "react";
import lottie from "lottie-web";

type Props = {
  animationPath: any,
};

export default function AnimationLottie({ animationPath }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run in the browser
    if (!containerRef.current || typeof window === "undefined") return;

    // Initialize Lottie animation
    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: animationPath,
    });

    // Cleanup on unmount
    return () => {
      anim.destroy();
    };
  }, [animationPath]);

  return <div ref={containerRef} />;
}