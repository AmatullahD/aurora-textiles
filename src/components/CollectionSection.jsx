"use client";

import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const collections = [
  {
    title: "Suiting",
    image: "https://aurora-textiles.com/wp-content/uploads/2025/01/Cavendish-suiting-832x1024.jpg.webp",
    route: "/products/suiting",
  },
  {
    title: "Shirting",
    image: "https://aurora-textiles.com/wp-content/uploads/2024/12/IMG_0453-1024x683.jpg.webp",
    route: "/products/shirting",
  },
  {
    title: "Uniform",
    image: "https://aurora-textiles.com/wp-content/uploads/2025/01/Uniform-1-683x1024.jpg.webp",
    route: "/products/uniform",
  },
  {
    title: "Ethnic",
    image: "https://aurora-textiles.com/wp-content/uploads/2025/01/PXL_20241205_093615144-771x1024.jpg.webp",
    route: "/products/ethnic-fabrics",
  },
];

function CollectionSection() {
  const navigate = useNavigate();

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
          fontFamily: "'Cinzel Decorative', sans-serif",
          fontWeight: "600",
          letterSpacing: "1px",
          marginBottom: "45px",
          marginTop: "0",


        }}
      >
        Our Collection
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
            initial={{ opacity: 0, x: index < 2 ? -120 : 120 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: index * 0.2 }}
            viewport={{ once: true }}
            style={{ textAlign: "center", cursor: "pointer" }}
          >
            <a
              href={item.route}
              onClick={(e) => {
                e.preventDefault();
                navigate(item.route);
                window.scrollTo(0, 0);
              }}
              style={{ textDecoration: "none", display: "block" }}
            >


              {/* Rounded Sides Image */}
              <div
                style={{
                  width: window.innerWidth < 768 ? "200px" : "280px",
                  height: window.innerWidth < 768 ? "200px" : "240px",
                  borderRadius: "50% / 60%",
                  overflow: "hidden",
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.querySelector("img").style.transform = "scale(1.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.querySelector("img").style.transform = "scale(1)";
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
                    transition: "transform 0.5s ease",
                  }}
                />
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: window.innerWidth < 768 ? "20px" : "24px",
                  fontWeight: "600",
                  lineHeight: "30px",
                  letterSpacing: ".3px",
                  color: "#424040",
                  marginTop: "18px",
                  marginBottom: 0,
                  fontFamily: "'Poppins', sans-serif",
                }}
              >
                {item.title}
              </h3>
            </a>
          </motion.div>
        ))}
      </div>
    </section >
  );
}

export default CollectionSection;