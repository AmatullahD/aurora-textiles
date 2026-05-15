"use client";

import React, { useState } from "react";

const fabrics = [
  {
    title: "Cotton",
    image: "/linen.png",
  },
  {
    title: "Wool",
    image: "/linen.png",
  },
  {
    title: "Linen",
    image: "/silk.png",
  },
  {
    title: "Polyviscose",
    image: "/linen.png",
  },
  {
    title: "Denim",
    image: "/silk.png",
  },
  {
    title: "Cotton",
    image: "/linen.png",
  },
  {
    title: "Wool",
    image: "/silk.png",
  },
  {
    title: "Linen",
    image: "/linen.png",
  },
  {
    title: "Polyviscose",
    image: "/silk.png",
  },
];

function FabricSliderSection() {
  const [startIndex, setStartIndex] = useState(0);

  // Show 5 items with infinite loop
  const visibleItems = [];

  for (let i = 0; i < 5; i++) {
    visibleItems.push(
      fabrics[(startIndex + i) % fabrics.length]
    );
  }

  // Next Slide
  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % fabrics.length);
  };

  // Previous Slide
  const prevSlide = () => {
    setStartIndex((prev) =>
      prev === 0 ? fabrics.length - 1 : prev - 1
    );
  };

  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "#fff",
        padding: "20px 0 20px",
        overflow: "hidden",
      }}
    >
      {/* Slider Wrapper */}
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "1450px",
          margin: "0 auto",
          padding: "0 10px",
          boxSizing: "border-box",
        }}
      >
        {/* Left Arrow */}
        <button
          onClick={prevSlide}
          style={{
            position: "absolute",
            left: window.innerWidth < 768 ? "5px" : "10px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            background: "rgba(255,255,255,0.2)",
            border: "none",
            color: "#fff",
            fontSize: window.innerWidth < 768 ? "28px" : "38px",
            cursor: "pointer",
          }}
        >
          ‹
        </button>

        {/* Right Arrow */}
        <button
          onClick={nextSlide}
          style={{
            position: "absolute",
            right: window.innerWidth < 768 ? "5px" : "10px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            background: "rgba(255,255,255,0.2)",
            border: "none",
            color: "#fff",
            fontSize: window.innerWidth < 768 ? "28px" : "38px",
            cursor: "pointer",
          }}
        >
          ›
        </button>

        {/* Cards */}
        <div
          style={{
            display: "flex",
            gap: window.innerWidth < 768 ? "10px" : "12px",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
            transition: "all 0.5s ease",
          }}
        >
          {visibleItems.map((item, index) => (
            <div
              key={index}
              style={{
                position: "relative",
                width: window.innerWidth < 768 ? "48%" : "19%",
               height: window.innerWidth < 768 ? "280px" : "460px",
                overflow: "hidden",
                flexShrink: 0,
              }}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 0.5s ease",
                }}
              />

              {/* White Border Frame */}
              <div
                style={{
                  position: "absolute",
                  top: "15px",
                  left: "15px",
                  right: "15px",
                  bottom: "15px",
                  border: "2px solid rgba(255,255,255,0.9)",
                  pointerEvents: "none",
                }}
              />

              {/* Title */}
              <h3
                style={{
                  position: "absolute",
                  bottom: "22px",
                  left: "0",
                  right: "0",
                  textAlign: "center",
                  color: "#fff",
                  fontSize: window.innerWidth < 768 ? "22px" : "26px",
                  fontWeight: "600",
                  margin: 0,
                  fontFamily: "sans-serif",
                  letterSpacing: "0.5px",
                }}
              >
                {item.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Dots */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "18px",
            gap: "10px",
          }}
        >
          {[0, 1, 2, 3, 4].map((dot) => (
            <div
              key={dot}
              onClick={() => setStartIndex(dot)}
              style={{
                width: startIndex === dot ? "10px" : "8px",
                height: startIndex === dot ? "10px" : "8px",
                borderRadius: "50%",
                backgroundColor:
                  startIndex === dot
                    ? "#111"
                    : "rgba(0,0,0,0.2)",
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