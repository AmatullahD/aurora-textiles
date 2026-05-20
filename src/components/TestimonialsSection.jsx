"use client";

import React from "react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      text: "Staff very cooperative, very humble, understands what we need they help us giving the swatches as per our requirement very good service Fabric quality superior Delivery commitment on time Excellent customer Service Thank you",
      name: "Presidents LLC",
      dark: true,
      center: false,
    },
    {
      text: "We have been doing businesses with Aurora for the past 10 plus years till today. We are very happy and satisfied with the general services we are receiving from Aurora. We never had had any complaints whether for the services or for Fabrics quality.",
      name: "Ibrahim Alsaqri",
      dark: false,
      center: true,
    },
    {
      text: "The fabrics provided by Aurora Textiles are unparalleled in quality and their materials are of great quality. Their service and attention to detail make them my first preference supplier for premium suiting fabrics.",
      name: "Arjun S",
      dark: true,
      center: false,
    },
  ];

  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "#f3f3f3",
        padding: "50px 4%",
        boxSizing: "border-box",
      }}
    >
      {/* HEADING */}
      <h2
        style={{
          textAlign: "center",
          fontSize: "32px",
          fontWeight: "400",
          color: "#0B2C66",
          fontFamily: "'Cinzel Decorative', serif",
          marginBottom: "25px",
          marginTop: 0,
          letterSpacing: "1px",
        }}
      >
        OUR CLIENT TESTIMONIALS
      </h2>

      {/* CARDS */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "40px",
          flexWrap: "wrap",
        }}
      >
        {testimonials.map((item, index) => (
          <div
            key={index}
            style={{
              width: item.center ? "320px" : "300px",
              height: item.center ? "330px" : "200px",
              backgroundColor: item.dark ? "#122a4b" : "#f3f3f3",
              color: item.dark ? "#ffffff" : "#666666",
              border: "1px solid #1d3f7a",
              padding: item.center ? "24px" : "20px",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              textAlign: "center",
              flexShrink: 0,
            }}
          >
            {/* TEXT */}
            <p
              style={{
                fontSize: item.center ? "14px" : "13px",
                lineHeight: item.center ? "2" : "1.9",
                fontFamily: "'Poppins', sans-serif",
                margin: 0,
              }}
            >
              {item.text}
            </p>

            {/* NAME */}
            <h3
              style={{
                fontSize: item.center ? "18px" : "16px",
                fontWeight: "600",
                color: item.dark ? "#ffffff" : "#0B2C66",
                fontFamily: "'Poppins', sans-serif",
                margin: 0,
              }}
            >
              {item.name}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}