"use client";

import React from "react";

export default function BlogsSection() {
  const blogs = [
    {
      image: "/blog-card-1.webp",
      title: "WHY WHITE DOMINATES 30% OF THE GLOBAL UNIFORM MARKET",
      slug: "/why-white-dominates-30-of-the-global-uniform-market",
    },
    {
      image: "/blog-card-2.webp",
      title: "WHAT ARE THE DIFFERENT TYPES OF PROTECTIVE WEAR? ALL YOU NEED TO KNOW",
      slug: "/what-are-the-different-types-of-protective-wear-all-you-need-to-know",
    },
    {
      image: "/blog-card-3.webp",
      title: "MASS-PRODUCED VS QUALITY-FOCUSED UNIFORMS: HOW MANUFACTURERS CAN BUILD A STRONG REPUTATION",
      slug: "/mass-produced-vs-quality-focused-uniforms-how-manufacturers-can-build-a-strong-reputation",
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
          fontWeight: "600",
          fontFamily: "'Cinzel Decorative', sans-serif",
          textTransform: "lowercase",
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
          <div key={index} style={{ width: "360px" }}>

            {/* IMAGE BOX */}
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "230px",
                overflow: "hidden",
              }}
            >
              {/* IMAGE — absolutely positioned so it doesn't wrap the Blogs tag anchor (no nested <a>) */}
              <a
                href={item.slug}
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "block",
                  width: "100%",
                  height: "100%",
                }}
              >
                <img
                  src={item.image}
                  alt="blog"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
              </a>

              {/* BLACK BLOGS TAG — sibling anchor, not nested inside image anchor */}
              <a
                href="/category/blogs"
                style={{
                  position: "absolute",
                  top: "16px",
                  left: "16px",
                  zIndex: 1,
                  background: "#000",
                  color: "#fff",
                  padding: "10px 18px",
                  borderRadius: "40px",
                  fontSize: "15px",
                  fontWeight: "500",
                  fontFamily: "'Poppins', sans-serif",
                  textDecoration: "none",
                  display: "inline-block",
                }}
              >
                Blogs
              </a>
            </div>

            {/* TITLE */}
            <h3
              style={{
                fontSize: "15px",
                color: "#0B2C66",
                lineHeight: "1.3",
                marginTop: "18px",
                marginBottom: "22px",
                fontWeight: "600",
                fontFamily: "'Poppins', sans-serif",
                textTransform: "uppercase",
              }}
            >
              {item.title}
            </h3>

            {/* CARD READ MORE — <a href> so URL shows */}
            <a
              href={item.slug}
              style={{
                background: "transparent",
                border: "none",
                color: "#000",
                fontSize: "16px",
                fontWeight: "600",
                cursor: "pointer",
                padding: 0,
                fontFamily: "'Poppins', sans-serif",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Read More →
            </a>

          </div>
        ))}
      </div>

      {/* BOTTOM GOLDEN READ MORE BUTTON — <a href> so URL shows */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "60px",
        }}
      >
        <a
          href="/blog"
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
            textDecoration: "none",
            display: "inline-block",
          }}
        >
          Read More
        </a>
      </div>
    </section>
  );
}