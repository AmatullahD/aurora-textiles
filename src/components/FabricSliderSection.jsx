"use client";

import React, { useState, useRef, useEffect } from "react";

const fabrics = [
  { title: "Cotton",          image: "/cotton.png",          href: "/cotton-fabric" },
  { title: "Wool",            image: "/wool.webp",           href: "/wool-fabric" },
  { title: "Linen",           image: "/linen.png",           href: "/linen-fabric" },
  { title: "Polyviscose",     image: "/polyviscose.webp",    href: "/poly-viscose" },
  { title: "Denim",           image: "/denim.jpg",           href: "/denim" },
  // { title: "Polycotton",      image: "/polycotton.webp",     href: "/poly-cotton-fabric" },
  // { title: "Poly Wool",       image: "/polywool.webp",       href: "/poly-wool-fabric" },
  // { title: "Poly Wool Lycra", image: "/polywoollycra.webp",  href: "/poly-wool-lycra-fabric" },
  // { title: "PV Lycra",        image: "/pvlycra.webp",        href: "/pv-lycra" },
  // { title: "Tencel Blend",    image: "/tencelblend.webp",    href: "/tencel-blend-fabric" },
];

const VISIBLE  = 5;
const GAP      = 12;
const DURATION = 500;

// Clone first VISIBLE items at end for seamless forward loop
const extended = [...fabrics, ...fabrics.slice(0, VISIBLE)];

function FabricSliderSection() {
  const [index, setIndex]       = useState(0);
  const [animated, setAnimated] = useState(true);
  const [cardPx, setCardPx]     = useState(0);
  const viewportRef             = useRef(null);

  // Measure actual card width in px from the viewport
  useEffect(() => {
    const measure = () => {
      if (viewportRef.current) {
        const vw = viewportRef.current.offsetWidth;
        // card = (viewport - gaps between VISIBLE cards) / VISIBLE
        setCardPx((vw - GAP * (VISIBLE - 1)) / VISIBLE);
      }
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // step = one card width + one gap
  const step = cardPx + GAP;

  const goNext = () => {
    if (index === fabrics.length - 1) {
      // animate to clone zone, then silently reset to 0
      setAnimated(true);
      setIndex(fabrics.length);
      setTimeout(() => {
        setAnimated(false);
        setIndex(0);
        setTimeout(() => setAnimated(true), 30);
      }, DURATION);
    } else {
      setAnimated(true);
      setIndex(i => i + 1);
    }
  };

  const goPrev = () => {
    if (index === 0) {
      // jump instantly to clone zone end, then animate back
      setAnimated(false);
      setIndex(fabrics.length);
      setTimeout(() => {
        setAnimated(true);
        setIndex(fabrics.length - 1);
      }, 30);
    } else {
      setAnimated(true);
      setIndex(i => i - 1);
    }
  };

  const dotIndex = index % fabrics.length;
  const isMobile = window.innerWidth < 768;

  return (
    <section style={{ width: "100%", backgroundColor: "#fff", padding: "20px 0" }}>
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "1450px",
          margin: "0 auto",
          padding: "0 36px",
          boxSizing: "border-box",
        }}
      >
        {/* Left arrow */}
        <button
          onClick={goPrev}
          style={{
            position: "absolute", left: 0, top: "50%",
            transform: "translateY(-65%)", zIndex: 10,
            background: "none", border: "none", outline: "none",
            color: "#333", fontSize: isMobile ? "36px" : "50px",
            cursor: "pointer", padding: 0, lineHeight: 1,
          }}
        >‹</button>

        {/* Right arrow */}
        <button
          onClick={goNext}
          style={{
            position: "absolute", right: 0, top: "50%",
            transform: "translateY(-65%)", zIndex: 10,
            background: "none", border: "none", outline: "none",
            color: "#333", fontSize: isMobile ? "36px" : "50px",
            cursor: "pointer", padding: 0, lineHeight: 1,
          }}
        >›</button>

        {/* Viewport — clips the track */}
        <div
          ref={viewportRef}
          style={{ overflow: "hidden", width: "100%" }}
        >
          {/* Track — slides left/right */}
          <div
            style={{
              display: "flex",
              gap: `${GAP}px`,
              transition: animated ? `transform ${DURATION}ms cubic-bezier(0.4,0,0.2,1)` : "none",
              transform: cardPx ? `translateX(${-index * step}px)` : "none",
              willChange: "transform",
            }}
          >
            {extended.map((item, i) => (
              <a
                key={i}
                href={item.href}
                style={{
                  position: "relative",
                  flexShrink: 0,
                  width: cardPx ? `${cardPx}px` : `calc((100% - ${GAP * (VISIBLE - 1)}px) / ${VISIBLE})`,
                  height: isMobile ? "280px" : "460px",
                  overflow: "hidden",
                  display: "block",
                  textDecoration: "none",
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: "100%", height: "100%",
                    objectFit: "cover", display: "block",
                    transition: "transform 0.45s ease",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                />
                {/* White inner border */}
                <div style={{
                  position: "absolute", top: 15, left: 15, right: 15, bottom: 15,
                  border: "2px solid rgba(255,255,255,0.88)", pointerEvents: "none",
                }} />
                {/* Title */}
                <h3 style={{
                  position: "absolute", bottom: 22, left: 0, right: 0,
                  textAlign: "center", color: "#fff",
                  fontSize: isMobile ? "20px" : "26px",
                  fontWeight: 600, margin: 0,
                  fontFamily: "'Poppins', sans-serif",
                  letterSpacing: "0.5px",
                  textShadow: "0 1px 6px rgba(0,0,0,0.55)",
                }}>
                  {item.title}
                </h3>
              </a>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: "18px", gap: "10px" }}>
          {fabrics.map((_, d) => (
            <div
              key={d}
              onClick={() => { setAnimated(true); setIndex(d); }}
              style={{
                width: dotIndex === d ? "10px" : "8px",
                height: dotIndex === d ? "10px" : "8px",
                borderRadius: "50%",
                backgroundColor: dotIndex === d ? "#111" : "rgba(0,0,0,0.2)",
                cursor: "pointer",
                transition: "0.3s ease",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FabricSliderSection;