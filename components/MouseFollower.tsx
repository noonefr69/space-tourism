"use client";

import { useEffect, useRef } from "react";

export default function MouseFollower({
  trailing = true, // set false if you want absolutely zero trailing
  trailSpeed = 0.18, // 0 = no move, 1 = snap instantly (increase to reduce lag)
}: {
  trailing?: boolean;
  trailSpeed?: number;
}) {
  const dotRef = useRef<HTMLDivElement | null>(null); // immediate small dot
  const ringRef = useRef<HTMLDivElement | null>(null); // optional trailing ring
  const posRef = useRef({ x: 0, y: 0 }); // target mouse pos
  const ringPosRef = useRef({ x: 0, y: 0 }); // current ring pos
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    // Mousemove handler - update target and snap dot immediately
    const handleMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      posRef.current.x = x;
      posRef.current.y = y;

      // Move the dot immediately (no lag)
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      }

      // If trailing disabled, also snap ring immediately so everything is instantaneous
      if (!trailing && ringRef.current) {
        ringRef.current.style.transform = `translate3d(${x}px, ${y}px, 0) translate(-50%, -50%)`;
      }
    };

    window.addEventListener("mousemove", handleMove, { passive: true });

    // rAF loop for smooth trailing ring
    const loop = () => {
      const tx = posRef.current.x;
      const ty = posRef.current.y;

      // lerp ring toward target
      ringPosRef.current.x += (tx - ringPosRef.current.x) * trailSpeed;
      ringPosRef.current.y += (ty - ringPosRef.current.y) * trailSpeed;

      if (ringRef.current) {
        const rx = ringPosRef.current.x;
        const ry = ringPosRef.current.y;
        // translate3d + translate(-50%,-50%) to center element on pointer
        ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      }

      rafRef.current = requestAnimationFrame(loop);
    };

    rafRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [trailing, trailSpeed]);

  return (
    <>
      {/* hide native cursor across the app */}
      <style jsx global>{`
        * {
          cursor: none !important;
        }
      `}</style>

      {/* cursor dot (immediate) */}
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: 8,
          opacity: 0.6,
          height: 8,
          borderRadius: "50%",
          background: "white",
          pointerEvents: "none",
          transform: "translate3d(-9999px,-9999px,0)", // start off-screen
          zIndex: 9999,
          willChange: "transform",
        }}
      />

      {/* trailing ring (smooth) */}
      <div
        color="white"
        ref={ringRef}
        style={{
          position: "fixed",
          left: 0,
          top: 0,
          width: 30,
          height: 30,
          borderRadius: "100%",
          border: "0px",
          boxShadow: "0px 0px 10px 10px rgba(255, 255, 255, 0.586)",
        //   backgrou   ndColor: "rgba(255, 255, 255, 0.586)",
          pointerEvents: "none",
          transform: "translate3d(-9999px,-9999px,0)",
          zIndex: 9998,
          willChange: "transform",
          transition:
            "width 120ms ease, height 120ms ease, border-color 120ms ease, opacity 120ms ease",
          opacity: 1,
        }}
      />
    </>
  );
}
