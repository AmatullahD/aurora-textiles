import React from "react";
import {
  FaLandmark,
  FaMosque,
  FaMountain,
} from "react-icons/fa";
import { GiElephant } from "react-icons/gi";

export default function CountriesSection() {
  const countries = [
    {
      name: "South Africa",
      icon: <GiElephant />,
    },
    {
      name: "Egypt",
      icon: <FaMountain />,
    },
    {
      name: "Saudi Arabia",
      icon: <FaLandmark />,
    },
    {
      name: "Tanzania",
      icon: <FaMosque />,
    },
  ];

  return (
    <section
      style={{
        width: "100%",
        backgroundColor: "#FFFFFF",
        padding: "10px 10px",
        boxSizing: "border-box",
        overflow: "hidden",
      }}
    >
      {/* Heading */}
      <h2
        style={{
          textAlign: "center",
          color: "#0B2C66",
          fontSize: "30px",
          fontFamily: "serif",
          fontWeight: "700",
          letterSpacing: "0.5px",
          marginBottom: "35px",
          textTransform: "uppercase",
          lineHeight: "1.3",
          maxWidth: "100%",
        }}
      >
        Aurora Textiles as Fabric Suppliers in Major Countries
      </h2>

      {/* Cards */}
      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "16px",
          boxSizing: "border-box",
        }}
      >
        {countries.map((item, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#00285E",
              borderRadius: "18px",
              minHeight: "190px",
              padding: "20px",
              boxSizing: "border-box",

              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",

              color: "white",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0px)";
            }}
          >
            {/* Icon */}
            <div
              style={{
                fontSize: "58px",
                marginBottom: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {item.icon}
            </div>

            {/* Country */}
            <h3
              style={{
                margin: 0,
                fontSize: "18px",
                fontFamily: "serif",
                fontWeight: "500",
                textTransform: "uppercase",
                textAlign: "center",
                lineHeight: "1.3",
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