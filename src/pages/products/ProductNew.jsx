"use client";

import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ProductNew() {
  const categories = [
    {
      label: "Suiting",
      href: "/products/suiting",
      img: "/suiting-fabric.jpg",
    },
    {
      label: "Shirting",
      href: "/products/shirting",
      img: "/nemssis-2.webp",
    },
    {
      label: "Uniform",
      href: "/products/uniform",
      img: "/uniform-2.webp",
    },
    {
      label: "Ethnic",
      href: "/products/ethnic-fabric",
      img: "/ethnic-1.webp",
    },
  ];

  return (
    <div
      style={{
        width: "100%",
        overflowX: "hidden",
        background: "#ffffff",
      }}
    >
      {/* META TITLE & DESCRIPTION */}
      <Helmet>
        <title>Our Products | Aurora Textiles Dubai</title>
        <meta
          name="description"
          content="Explore Aurora Textiles' wholesale fabric categories — Suiting, Shirting, Uniform, and Ethnic fabrics — supplied across UAE and the MENA region."
        />
      </Helmet>

      {/* NAVBAR */}
      <Navbar />

      {/* HERO BANNER */}
      <section
        style={{
          width: "100%",
          height: "210px",
          position: "relative",
          overflow: "hidden",
          marginBottom: "20px",
        }}
      >
        <img
          src="/about-banner.jpg"
          alt="Products Banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.45)",
          }}
        ></div>

        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            textAlign: "center",
            width: "100%",
            padding: "0 20px",
            boxSizing: "border-box",
          }}
        >
          <h1
            style={{
              color: "#ffffff",
              fontSize: window.innerWidth < 768 ? "22px" : "58px",
              fontWeight: "600",
              margin: 0,
              lineHeight: "1.1",
              fontFamily: "'Cinzel Decorative', sans-serif",
            }}
          >
            Our Products
          </h1>
        </div>
      </section>

      {/* CATEGORY GRID */}
      <section
        style={{
          width: "100%",
          padding: "50px 6%",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          <h2
            style={{
              fontSize: window.innerWidth < 768 ? "20px" : "35px",
              color: "#344886",
              fontFamily: "'Cinzel Decorative', sans-serif",
              margin: 0,
              fontWeight: "600",
              letterSpacing: "1px",
            }}
          >
            Browse By Category
          </h2>
          <div
            style={{
              width: "210px",
              height: "6px",
              background: "#eed91f",
              margin: "5px auto 0",
            }}
          ></div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "30px",
          }}
        >
          {categories.map((cat) => (
            <a
              key={cat.label}
              href={cat.href}
              style={{
                position: "relative",
                display: "block",
                height: "280px",
                borderRadius: "8px",
                overflow: "hidden",
                textDecoration: "none",
                boxShadow: "0 4px 15px rgba(0,0,0,0.12)",
              }}
            >
              <img
                src={cat.img}
                alt={cat.label}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                }}
              ></div>
              <div
                style={{
                  position: "absolute",
                  bottom: "20px",
                  left: 0,
                  width: "100%",
                  textAlign: "center",
                }}
              >
                <span
                  style={{
                    color: "#ffffff",
                    fontSize: "22px",
                    fontWeight: "600",
                    fontFamily: "'Poppins', sans-serif",
                    letterSpacing: "0.5px",
                  }}
                >
                  {cat.label}
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}