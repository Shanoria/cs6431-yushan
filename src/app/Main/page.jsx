"use client";
import React, { useRef, useEffect } from "react";
import Image from "next/image";
// import InkRippleBackground from "../../components/InkRippleBackground";

export default function MainPage() {
  const circleRef = useRef(null);

  useEffect(() => {
    if (circleRef.current) {
      circleRef.current.style.animation = "rotateCircle 3s linear infinite";
    }
  }, []);
  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          position: "relative",
          backgroundImage: "url('/main_bg.png')",
        }}
      >
        {/* <InkRippleBackground></InkRippleBackground> */}
        <div
          style={{
            position: "relative",
            width: "500px",
            height: "500px",
          }}
        >
          <Image src={"/lotus.png"} alt="荷花" fill />
          <div
            style={{
              position: "absolute",
              right: "120px",
              bottom: "200px",
              width: "90px",
              height: "90px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 2,
            }}
          >
            <svg
              ref={circleRef}
              className="half-circle"
              width="90"
              height="90"
              viewBox="0 0 90 90"
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                pointerEvents: "none",
              }}
            >
              <path
                d="M 45 10 A 35 35 0 1 1 45 80"
                fill="none"
                stroke="#222"
                strokeWidth="2"
              />
            </svg>
            <span
              style={{
                fontFamily: "汉仪楷体繁, serif",
                fontSize: "48px",
                position: "relative",
                zIndex: 2,
              }}
            >
              张
            </span>
          </div>

          <style jsx>{`
            .half-circle {
              will-change: transform;
            }
            @keyframes rotateCircle {
              0% {
                transform: rotate(0deg);
              }
              100% {
                transform: rotate(360deg);
              }
            }
          `}</style>
        </div>
      </div>
    </>
  );
}
