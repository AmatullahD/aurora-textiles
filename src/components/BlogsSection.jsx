"use client";

import React from "react";

export default function BlogsSection() {
  const blogs = [
    {
      image:
        "./blogs-1.avif",
      title:
        "WHY WHITE DOMINATES 30% OF THE GLOBAL UNIFORM MARKET",
    },

    {
      image:
        "./blogs-1.avif",
      title:
        "WHAT ARE THE DIFFERENT TYPES OF PROTECTIVE WEAR? ALL YOU NEED TO KNOW",
    },

    {
      image:
        "./blogs-1.avif",
      title:
        "MASS-PRODUCED VS QUALITY-FOCUSED UNIFORMS: HOW MANUFACTURERS CAN BUILD A STRONG REPUTATION",
    },
  ];

  return (
    <section
      style={{
        width: "100%",
        background: "#ffffff",
        padding: "70px 5%",
        boxSizing: "border-box",
      }}
    >
      {/* HEADING */}
      <h2
        style={{
          textAlign: "center",
          fontSize: "34px",
          color: "#0B2C66",
          fontWeight: "400",
          fontFamily: "'Cormorant Garamond', serif",
          marginTop: 0,
          marginBottom: "55px",
          letterSpacing: "1px",
        }}
      >
        BLOGS & UPDATES
      </h2>

      {/* BLOG CARDS */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          flexWrap: "wrap",
        }}
      >
        {blogs.map((item, index) => (
          <div
            key={index}
            style={{
              width: "360px",
            }}
          >
            {/* IMAGE BOX */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "230px",
                overflow: "hidden",
              }}
            >
              <img
                src={item.image}
                alt="blog"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />

              {/* BLOG BUTTON */}
              <div
                style={{
                  position: "absolute",
                  top: "16px",
                  left: "16px",
                  background: "#000",
                  color: "#fff",
                  padding: "10px 18px",
                  borderRadius: "40px",
                  fontSize: "15px",
                  fontWeight: "500",
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                Blogs
              </div>
            </div>

            {/* TITLE */}
            <h3
              style={{
                fontSize: "16px",
                color: "#0B2C66",
                lineHeight: "1.3",
                marginTop: "18px",
                marginBottom: "22px",
                fontWeight: "500",
                fontFamily: "'Cormorant Garamond', serif",
                textTransform: "uppercase",
              }}
            >
              {item.title}
            </h3>

            {/* READ MORE */}
            <button
              style={{
                background: "transparent",
                border: "none",
                color: "#000",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
                padding: 0,
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Read More →
            </button>
          </div>
        ))}
      </div>

      {/* BOTTOM BUTTON */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "60px",
        }}
      >
        <button
          style={{
            background: "#BE9B33",
            color: "#fff",
            border: "none",
            padding: "16px 40px",
            fontSize: "18px",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "500",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Read More
        </button>
      </div>
    </section>
  );
}