"use client";

import React from "react";
import { motion } from "framer-motion";

const collections = [
  {
    title: "Suiting",
    image: "/suitings.webp",
  },
  {
    title: "Shirting",
    image: "/suitings.webp",
  },
  {
    title: "Uniform",
    image: "/suitings.webp",
  },
  {
    title: "Ethnic",
    image: "/suitings.webp",
  },
];

function CollectionSection() {
  return (
    <section
      style={{
        width: "100%",
        overflow: "hidden",
        backgroundColor: "#fff",
        padding: "40px 15px 55px",
        boxSizing: "border-box",
      }}
    >
      {/* Heading */}
      <h4
        style={{
          textAlign: "center",
          color: "#0B2C66",
          fontSize: window.innerWidth < 768 ? "28px" : "36px",
          fontWeight: "600",
          letterSpacing: "1px",
          marginBottom: "45px",
          marginTop: "0",
          fontFamily: "serif",
        }}
      >
        OUR COLLECTION
      </h4>

      {/* Collection Grid */}
      <div
        style={{
          width: "100%",
          maxWidth: "1300px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: window.innerWidth < 768 ? "24px" : "34px",
          flexWrap: "wrap",
          boxSizing: "border-box",
        }}
      >
        {collections.map((item, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              x: index < 2 ? -120 : 120,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              delay: index * 0.2,
            }}
            viewport={{ once: true }}
            style={{
              textAlign: "center",
            }}
          >
            {/* Perfect Circle Image */}
            <div
              style={{
                width: window.innerWidth < 768 ? "150px" : "250px",
                height: window.innerWidth < 768 ? "150px" : "250px",
                borderRadius: "50%",
                overflow: "hidden",
                cursor: "pointer",
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.querySelector("img").style.transform =
                  "scale(1.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.querySelector("img").style.transform =
                  "scale(1)";
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  borderRadius: "50%",
                  transition: "transform 0.5s ease",
                }}
              />
            </div>

            {/* Title */}
            <h3
              style={{
                fontSize: window.innerWidth < 768 ? "20px" : "30px",
                fontWeight: "600",
                color: "#1f2937",
                marginTop: "18px",
                marginBottom: 0,
                fontFamily: "sans-serif",
              }}
            >
              {item.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default CollectionSection;