"use client";

import React from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        backgroundColor: "#122a4b",
        color: "#fff",
        paddingTop: "40px",
        boxSizing: "border-box",
      }}
    >
      {/* MAIN FOOTER */}
      <div
        style={{
          width: "100%",
          maxWidth: "1300px",
          margin: "0 auto",
          padding: "0 5%",
          display: "flex",
          justifyContent: "space-between",
          gap: "50px",
          flexWrap: "wrap",
          boxSizing: "border-box",
        }}
      >
        {/* ABOUT */}
        <div style={{ flex: "1", minWidth: "240px" }}>
          <h2
            style={{
              fontSize: "22px",
              marginBottom: "25px",
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: "500",
            }}
          >
            ABOUT US
          </h2>

          <p
            style={{
              fontSize: "14px",
              lineHeight: "1.8",
              color: "#ffffff",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Aurora Textile is a wholesale textile business based in the Old
            Textile Market in Dubai. We are specialized in men’s Shirting,
            Suiting, Uniform and men's ethnics as well.
          </p>

          {/* SOCIAL */}
          <h2
            style={{
              fontSize: "22px",
              marginTop: "40px",
              marginBottom: "20px",
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: "500",
            }}
          >
            FOLLOW US ON
          </h2>

          <div
            style={{
              display: "flex",
              gap: "18px",
            }}
          >
            {[FaFacebookF, FaInstagram, FaLinkedinIn].map((Icon, index) => (
              <div
                key={index}
                style={{
                  width: "42px",
                  height: "42px",
                  border: "1px solid #fff",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                }}
              >
                <Icon size={18} />
              </div>
            ))}
          </div>
        </div>

        {/* QUICK LINKS */}
        <div style={{ flex: "1", minWidth: "200px" }}>
          <h2
            style={{
              fontSize: "22px",
              marginBottom: "25px",
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: "500",
            }}
          >
            QUICK LINKS
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              fontSize: "16px",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            <a
              href="/"
              style={{ color: "#ffffff", textDecoration: "none" }}
            >
              Home
            </a>

            <a
              href="/products"
              style={{ color: "#ffffff", textDecoration: "none" }}
            >
              Our Products
            </a>

            <a
              href="/about"
              style={{ color: "#ffffff", textDecoration: "none" }}
            >
              About Us
            </a>

            <a
              href="/contact"
              style={{ color: "#ffffff", textDecoration: "none" }}
            >
              Contact Us
            </a>

            <a
              href="/blog"
              style={{ color: "#ffffff", textDecoration: "none" }}
            >
              Blog
            </a>

            <a
              href="/suppliers"
              style={{ color: "#ffffff", textDecoration: "none" }}
            >
              Leading Fabric Suppliers
            </a>
          </div>
        </div>

        {/* CONTACT */}
        <div style={{ flex: "1", minWidth: "260px" }}>
          <h2
            style={{
              fontSize: "22px",
              marginBottom: "25px",
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: "500",
            }}
          >
            CONTACT US
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "25px",
              fontSize: "14px",
              lineHeight: "1.7",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            <div style={{ display: "flex", gap: "14px" }}>
              <FaMapMarkerAlt
                style={{ marginTop: "6px", minWidth: "18px" }}
              />
              <span>
                Dubai Textile City - Warehouse # 47
                <br />
                Al Awir Road - Dubai International
                <br />
                City - Dubai - United Arab Emirates
              </span>
            </div>

            <div style={{ display: "flex", gap: "14px" }}>
              <FaEnvelope style={{ marginTop: "5px" }} />
              <span>info@aurora-textiles.com</span>
            </div>

            <div style={{ display: "flex", gap: "14px" }}>
              <FaPhoneAlt style={{ marginTop: "5px" }} />
              <span>+97143532696</span>
            </div>

            <div style={{ display: "flex", gap: "14px" }}>
              <FaPhoneAlt style={{ marginTop: "5px" }} />
              <span>+971554172009</span>
            </div>
          </div>
        </div>

        {/* MAP */}
        <div style={{ minWidth: "260px" }}>
          <iframe
            src="https://www.google.com/maps?q=Dubai+Textile+City&output=embed"
            width="260"
            height="300"
            style={{
              border: 0,
              borderRadius: "8px",
            }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div
        style={{
          borderTop: "1px solid rgb(247, 247, 247)",
          marginTop: "50px",
          padding: "18px 20px 70px",
          textAlign: "center",
          fontSize: "16px",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        © Aurora Textiles 2026
      </div>
    </footer>
  );
}