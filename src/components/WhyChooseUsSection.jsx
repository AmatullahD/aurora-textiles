"use client";

import React from "react";
import { motion } from "framer-motion";

export default function WhyChooseUsSection() {
  const features = [
    {
      icon: (
        <img
          src="https://aurora-textiles.com/wp-content/uploads/2024/11/premium.png.webp"
          alt="Premium Quality"
          style={{ width: "40px", height: "40px", objectFit: "contain", filter: "brightness(0) invert(1)" }}
        />
      ),
      title: "Premium Quality",
    },
    {
      icon: (
        <img
          src="https://aurora-textiles.com/wp-content/uploads/2024/11/fabric.png.webp"
          alt="Extensive Range of Fabrics"
          style={{ width: "40px", height: "40px", objectFit: "contain", filter: "brightness(0) invert(1)" }}
        />
      ),
      title: "Extensive Range of Fabrics",
    },
    {
      icon: (
        <img
          src="https://aurora-textiles.com/wp-content/uploads/2024/11/reliability.png.webp"
          alt="Trusted Reputation"
          style={{ width: "40px", height: "40px", objectFit: "contain", filter: "brightness(0) invert(1)" }}
        />
      ),
      title: "Trusted Reputation",
    },
    {
      icon: (
        <img
          src="https://aurora-textiles.com/wp-content/uploads/2024/11/guarantee.png.webp"
          alt="Trusted Brands"
          style={{ width: "40px", height: "40px", objectFit: "contain", filter: "brightness(0) invert(1)" }}
        />
      ),
      title: "Trusted Brands",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, x: -150 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      style={{
        width: "100%",
        backgroundColor: "#FFFFFF",
        padding: "35px 0",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          minHeight: "320px",
        }}
      >
        {/* LEFT SIDE */}
        <div
          style={{
            flex: "6",
            backgroundColor: "#0d2341",
            padding: "50px 45px",
            boxSizing: "border-box",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          {/* Heading */}
          <h2
            style={{
              fontSize: "40px",
              fontFamily: "serif",
              fontWeight: "700",
              marginTop: 0,
              marginBottom: "10px",
              lineHeight: "1",
            }}
          >
            Why Choose Us?
          </h2>

          {/* Paragraph */}
          <p
            style={{
              fontSize: "22px",
              lineHeight: "1.5",
              color: "#F2F2F2",
              marginBottom: "45px",
              maxWidth: "650px",
            }}
          >
            Our fabrics are sourced from the finest mills,
            ensuring <br /> durability, comfort, and a luxurious
            feel. Whether you're <br /> seeking cotton, wool,
            linen or denim, our commitment to <br />
            craftsmanship guarantees the highest standards of
            quality.
          </p>

          {/* FEATURES */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "32px 25px",
              marginBottom: "42px",
            }}
          >
            {features.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                }}
              >
                {/* ICON */}
                <div
                  style={{
                    minWidth: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {item.icon}
                </div>

                {/* TITLE */}
                <h3
                  style={{
                    margin: 0,
                    fontSize: "19px",
                    fontFamily: "serif",
                    fontWeight: "500",
                    textTransform: "uppercase",
                    lineHeight: "1.4",
                  }}
                >
                  {item.title}
                </h3>
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <button
            style={{
              backgroundColor: "#C8A13B",
              color: "white",
              border: "none",
              padding: "16px 38px",
              fontSize: "18px",
              borderRadius: "10px",
              cursor: "pointer",
              width: "fit-content",
              fontWeight: "500",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = "0.9";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = "1";
            }}
          >
            Contact Us
          </button>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div
          style={{
            flex: "4",
            minHeight: "320px",
          }}
        >
          <img
            src="/front-suit.png"
            alt="Luxury Suit"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>
      </div>
    </motion.section>
  );
}