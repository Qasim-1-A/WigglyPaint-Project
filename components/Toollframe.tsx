"use client"

import { useEffect, useState } from "react"

const FRAME_W = 512   // original iframe width
const FRAME_H = 342   // original iframe height
const BREAKPOINT = 1024 // Tailwind lg breakpoint

export default function Toollframe() {
  const [scale, setScale] = useState(1)
  const [isLarge, setIsLarge] = useState(false)

  useEffect(() => {
    function updateScale() {
      if (window.innerWidth >= BREAKPOINT) {
        // ✅ Large screen → no scaling
        setScale(0.8)
        setIsLarge(true)
      } else {
        // ✅ Small screen → scale to fit
        const available = window.innerWidth - 20 // leave tiny padding
        const s = available / FRAME_W

        setScale(Number(Math.min(1, s).toFixed(3)))
        setIsLarge(false)
      }
    }

    updateScale()
    window.addEventListener("resize", updateScale)
    return () => window.removeEventListener("resize", updateScale)
  }, [])

  return (
    <div className="flex flex-col justify-center items-center mb-2 ">
      <div className="lg:w-full lg:max-w-screen-xl loading-bg bg-black rounded-lg md:max-w-screen-md">
        {isLarge ? (
          // ✅ PC / iPad layout (no scaling)
          <iframe
            src="/tool.html"
            title="Tool"
            sandbox="allow-scripts allow-forms"
            allow="autoplay; fullscreen; geolocation; microphone; camera"
            className="w-full lg:h-[720px] border-0 rounded-2xl"
          />
        ) : (
          // ✅ Mobile layout (scaled down)
          <div
            style={{
              width: FRAME_W * scale,
              height: FRAME_H * scale,
            }}
          >
            <iframe
              src="/tool.html"
              title="Tool"
              sandbox="allow-scripts allow-forms"
              allow="autoplay; fullscreen; geolocation; microphone; camera"
              className="border-0 rounded-lg"
              style={{
                width: FRAME_W,
                height: FRAME_H,
                transform: `scale(${scale})`,
                transformOrigin: "top left",
              }}
            />
          </div>
        )}
      </div>
    </div>
  )
}