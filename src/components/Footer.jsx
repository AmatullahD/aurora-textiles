"use client";

import React, { useState } from "react";
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Our Products", href: "/products/suiting" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Blog", href: "/blog" },
  { label: "Leading Fabric Suppliers", href: "/fabric-suppliers" },
   { label: "High Quality Uniform Fabric Suppliers", href: "/high-quality-uniform-fabric-suppliers" },
     { label: "Leading GCC Textile Supplier for Premium Fabric Solutions ", href: "/gcc-textile-supplier" },
];

export default function Footer() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <footer
      style={{
        width: "100%",
        backgroundColor: "#122a4b",
        color: "#fff",
        marginTop: "20px",
        paddingTop: "10px",
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
              fontFamily: "'Cinzel Decorative', serif",
              fontWeight: "600",
            }}
          >
            About Us
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
            Textile Market in Dubai. We are specialized in men's Shirting,
            Suiting, Uniform and men's ethnics as well.
          </p>

          {/* SOCIAL */}
          <h2
            style={{
              fontSize: "22px",
              marginTop: "40px",
              marginBottom: "20px",
              fontFamily: "'Cinzel Decorative', serif",
              fontWeight: "600",
            }}
          >
            Follow Us On
          </h2>

          <div style={{ display: "flex", gap: "18px" }}>
            {[
              { Icon: FaFacebookF, href: "https://www.facebook.com/share/15UnfGtpkR/" },
              { Icon: FaInstagram, href: "https://www.instagram.com/aurora.textiles" },
              { Icon: FaLinkedinIn, href: "https://www.linkedin.com/company/aurora-textiles-uae/" },
            ].map((item, index) => (
              <a
                key={index}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: "42px",
                  height: "42px",
                  border: "1px solid #fff",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  color: "#fff",
                  textDecoration: "none",
                }}
              >
                <item.Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        {/* QUICK LINKS */}
        <div style={{ flex: "1", minWidth: "200px" }}>
          <h2
            style={{
              fontSize: "22px",
              marginBottom: "25px",
              fontFamily: "'Cinzel Decorative', serif",
              fontWeight: "600",
            }}
          >
            Quick Links
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
              fontSize: "16px",
              fontFamily: "'Poppins', sans-serif",
              fontWeight:"500",
            }}
          >
            {quickLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  color: "#ffffff",
                  textDecoration: "none",
                  display: "inline-block",
                  transform: hoveredIndex === index ? "scale(1.15)" : "scale(1)",
                  transformOrigin: "left center",
                  transition: "transform 0.25s ease",
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* CONTACT */}
        <div style={{ flex: "1", minWidth: "260px" }}>
          <h2
            style={{
              fontSize: "22px",
              marginBottom: "25px",
              fontFamily: "'Cinzel Decorative', serif",
              fontWeight: "600",
            }}
          >
            Contact Us
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "25px",
              fontSize: "12px",
              lineHeight: "1.7",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            <a
              href="https://maps.app.goo.gl/TwD6YtE3YaVoeTmq5"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "15px", display: "flex", gap: "14px", color: "#fff", textDecoration: "none" }}
            >
              <FaMapMarkerAlt style={{ marginTop: "6px", minWidth: "18px", flexShrink: 0 }} />
              <span>
                Dubai Textile City-Warehouse #47 
                <br />
                Al Awir Road - Dubai International 
                <br /> 
                City-Dubai-United Arab Emirates
              
              </span>
            </a>

            <a
              href="mailto:info@aurora-textiles.com"
              style={{ fontSize: "15px", display: "flex", gap: "14px", color: "#fff", textDecoration: "none" }}
            >
              <FaEnvelope style={{ marginTop: "5px", flexShrink: 0 }} />
              <span>info@aurora-textiles.com</span>
            </a>

            <a
              href="tel:+97143532696"
              style={{ fontSize: "15px", display: "flex", gap: "14px", color: "#fff", textDecoration: "none" }}
            >
              <FaPhoneAlt style={{ marginTop: "5px", flexShrink: 0 }} />
              <span>+97143532696</span>
            </a>

            <a
              href="tel:+971554172009"
              style={{ fontSize: "15px", display: "flex", gap: "14px", color: "#fff", textDecoration: "none" }}
            >
              <FaPhoneAlt style={{ marginTop: "5px", flexShrink: 0 }} />
              <span>+971554172009</span>
            </a>
          </div>
        </div>

        {/* MAP */}
        <div
          style={{
            minWidth: "280px",
            display: "flex",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <div style={{ position: "relative", width: "280px", height: "240px" }}>
            <iframe
              src="https://www.google.com/maps?q=25.1661611,55.4227867&output=embed"
              width="280"
              height="240"
              style={{
                border: 0,
                borderRadius: "8px",
                pointerEvents: "none",
              }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            <a
              href="https://maps.app.goo.gl/b4BcyMfuCS92EnA27"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Aurora Textiles FZCO location in Google Maps"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            />
          </div>

          <div style={{ position: "relative", width: "280px", height: "240px" }}>
            <iframe
              src="https://www.google.com/maps?q=25.2630475,55.2963284&output=embed"
              width="280"
              height="240"
              style={{
                border: 0,
                borderRadius: "8px",
                pointerEvents: "none",
              }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            <a
              href="https://maps.app.goo.gl/3gVQC3uRbMzKS5NC6"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Aurora Trading Co. LLC location in Google Maps"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                borderRadius: "8px",
                cursor: "pointer",
              }}
            />
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div
        style={{
          marginTop: "50px",
          padding: "18px 20px 70px",
          textAlign: "center",
          fontSize: "16px",
          fontFamily: "'Poppins', sans-serif",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "100%",
            margin: "0 auto 18px",
            borderTop: "1px solid rgb(247, 247, 247)",
          }}
        />
        © Aurora Textiles 2026
      </div>
    </footer>
  );
}