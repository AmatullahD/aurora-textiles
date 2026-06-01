import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";


function PolyWoolCard({ item }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: "0 0 auto",
        width: "300px",
        height: "220px",
        border: "5px solid #1a1a5e",
        borderRadius: "18px",
        padding: "32px 28px",
        textAlign: "center",
        background: "#fff",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        transition: "all 0.3s ease",
        overflow: "hidden",
      }}
    >
      {/* Icon — always visible */}
      <div
        style={{
          fontSize: "36px",
          marginBottom: "16px",
          color: "#c8a84b",
        }}
      >
        {item.icon}
      </div>

      {/* Title — shown before hover */}
      {!hovered && (
        <p
          style={{
            fontSize: "24px",
            fontWeight: "600",
            color: "#222",
            lineHeight: "1.4",
            margin: 0,
            textAlign: "center",
          }}
        >
          {item.title}
        </p>
      )}

      {/* Description — shown on hover */}
      {hovered && (
        <p
          style={{
            fontSize: "14px",
            fontWeight: "500",
            color: "#333",
            lineHeight: "1.6",
            margin: 0,
            textAlign: "center",
          }}
        >
          {item.desc}
        </p>
      )}
    </div>
  );
}

export default function PolyWoolPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      question: "WHAT IS THE BENEFIT OF POLY WOOL OVER PURE WOOL?",
      answer:
        "Polywool offers a better balance of breathability, wrinkle resistance, and affordability compared to pure wool—making it ideal for regular wear and warmer climates like the UAE.",
    },
    {
      question: "CAN I BUY POLY WOOL SUITING FABRIC IN BULK IN DUBAI?",
      answer:
        "Yes, Aurora Textiles offers bulk purchasing options for poly wool suiting fabric in Dubai and across the MENA region. We cater to tailors, wholesalers, and fashion brands with competitive pricing.",
    },
    {
      question: "IS POLY WOOL FABRIC SUITABLE FOR SHERWANIS OR ETHNIC JACKETS?",
      answer:
        "Absolutely. Poly wool fabric is an excellent choice for sherwanis and ethnic jackets due to its structured drape, smooth finish, and ability to hold embroidery and embellishments well.",
    },
    {
      question: "DO YOU OFFER DIFFERENT POLY WOOL BLENDS OR FINISHES?",
      answer:
        "Yes, we offer a wide range of poly wool blends in various GSMs, weave styles, and finishes—from matte to lustrous—to suit different garment types and client preferences.",
    },
    {
      question: "WHAT TYPES OF GARMENTS IS POLYWOOL BEST USED FOR?",
      answer:
        "Polywool is best used for suits, blazers, trousers, waistcoats, kanduras, sherwanis, and corporate uniforms. Its versatility makes it a preferred choice across both Western and ethnic menswear.",
    },
  ];

  return (
    <div style={{ width: "100%", background: "#fff" }}>

      <Helmet>
        <title>Polywool Fabric Supplier in Dubai | Aurora Textiles</title>
        <meta name="description" content="Buy polywool fabric wholesale in Dubai. Aurora Textiles offers premium poly wool blend suiting fabrics from top global brands across UAE and GCC." />
      </Helmet>

      {/* NAVBAR */}
      <Navbar />

      {/* HERO BANNER */}
      <section
        style={{
          width: "100%",
          height: "360px",
          position: "relative",
          overflow: "hidden",
          marginBottom: "60px",
        }}
      >
        <img
          src="/about-banner.jpg"
          alt="Ethnic Fabrics Banner"
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
        />
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
              color: "#fff",
              fontSize: window.innerWidth < 768 ? "26px" : "58px",
              fontWeight: "600",
              margin: 0,
              lineHeight: "1.1",
              fontFamily: "'Cinzel Decorative', serif",
              textTransform: "uppercase",
            }}
          >
            POLY-WOOL FABRICS
          </h1>
        </div>
      </section>

      {/* SECTION 1: INTRO - Image Left, Text Right */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto 80px auto",
          padding: "0 40px",
          display: "flex",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: "0 0 auto", width: "100%", maxWidth: "500px" }}>
          <img
            src="/polywool-suiting.jpg"
            alt="Poly Wool Fabric"
            style={{
              width: "100%",
              height: "560px",
              objectFit: "contain",
              display: "block",
              borderRadius: "20px",
            }}
          />
        </div>
        <div style={{ flex: 1, minWidth: "280px" }}>
          <h2
            style={{
              fontFamily: "'Cinzel Decorative', serif",
              fontSize: "36px",
              fontWeight: "700",
              color: "#1a1a5e",
              marginBottom: "24px",
              lineHeight: "1.2",
              textTransform: "uppercase",
            }}
          >
            BUY POLY WOOL FABRIC IN DUBAI | PREMIUM POLY WOOL BLEND SUITING
          </h2>
          <p style={{ fontSize: "16px", color: "#333", lineHeight: "1.75", marginBottom: "20px" }}>
            Aurora Textiles offers a trusted range of{" "}
            <strong>Poly Wool suiting fabrics</strong>—designed for professionals, tailors, and
            menswear brands across the UAE and MENA region. Known for their smooth finish, wrinkle
            resistance, and versatile wear, our{" "}
            <strong>poly wool blend fabrics</strong> combine the breathable warmth of wool with the
            durability of polyester, making them ideal for both daily wear and special occasions.
          </p>
          <p style={{ fontSize: "16px", color: "#333", lineHeight: "1.75", marginBottom: "32px" }}>
            Whether you're crafting tailored suits, jackets, or ethnic wear, our{" "}
            <strong>poly wool fabrics</strong> bring comfort, structure, and style together—perfect
            for clients who want performance without compromising on elegance.
          </p>
          {/* Buttons */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            {/* Contact Us Button */}
            <button
              onMouseEnter={e => {
                e.currentTarget.style.background = "#0a089bd3";
                e.currentTarget.style.borderColor = "#e0b219";
                e.currentTarget.style.color = "#ffffff";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "#8b7d3a";
                e.currentTarget.style.borderColor = "#050e5f";
                e.currentTarget.style.color = "#fff";
              }}
              style={{
                background: "#8b7d3a",
                color: "#fff",
                border: "2px solid #050e5f",
                padding: "14px 36px",
                fontSize: "15px",
                fontWeight: "500",
                borderRadius: "6px",
                cursor: "pointer",
                letterSpacing: "0.5px",
                transition: "all 0.3s ease",
              }}
            >
              Contact Us
            </button>

            {/* Call Button */}
            <a
              href="tel:+9197154172009"
              style={{
                background: "#050e5f",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                width: "48px",
                height: "48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                textDecoration: "none",
                flexShrink: 0,
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" />
              </svg>
            </a>

            {/* WhatsApp Button */}
            <a
              href="https://wa.me/971554172009"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#25D366",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                width: "48px",
                height: "48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                textDecoration: "none",
                flexShrink: 0,
              }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 32 32" fill="white">
                <path d="M16 2C8.28 2 2 8.28 2 16c0 2.46.64 4.76 1.76 6.77L2 30l7.44-1.74A13.93 13.93 0 0 0 16 30c7.72 0 14-6.28 14-14S23.72 2 16 2zm0 25.5a11.44 11.44 0 0 1-5.83-1.6l-.42-.25-4.33 1.01 1.04-4.22-.27-.44A11.5 11.5 0 1 1 16 27.5zm6.29-8.62c-.34-.17-2.02-1-2.34-1.11-.31-.11-.54-.17-.77.17-.23.34-.88 1.11-1.08 1.34-.2.23-.4.26-.74.09-.34-.17-1.44-.53-2.74-1.69-1.01-.9-1.7-2.02-1.9-2.36-.2-.34-.02-.52.15-.69.15-.15.34-.4.51-.6.17-.2.23-.34.34-.57.11-.23.06-.43-.03-.6-.09-.17-.77-1.86-1.06-2.55-.28-.67-.56-.58-.77-.59h-.66c-.23 0-.6.09-.91.43-.31.34-1.2 1.17-1.2 2.86s1.23 3.32 1.4 3.55c.17.23 2.42 3.7 5.87 5.19.82.35 1.46.56 1.96.72.82.26 1.57.22 2.16.13.66-.1 2.02-.83 2.31-1.62.28-.8.28-1.48.2-1.62-.09-.14-.31-.23-.65-.4z" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 2: WHY CHOOSE - Feature Cards */}

      <section
        style={{
          background: "#fff",
          padding: "60px 40px",
          marginBottom: "80px",
        }}
      >
        <h2
          style={{
            fontFamily: "'Cinzel Decorative', serif",
            fontSize: "32px",
            fontWeight: "700",
            color: "#1a1a5e",
            textAlign: "center",
            marginBottom: "50px",
            textTransform: "uppercase",
            lineHeight: "1.3",
          }}
        >
          Why Choose Aurora Textiles For Poly Wool Suiting?
        </h2>

        {/* Top Row - 3 cards */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "28px",
            flexWrap: "wrap",
            maxWidth: "1100px",
            margin: "0 auto 28px auto",
          }}
        >
          {[
            {
              icon: "⭐",
              title: "Premium Quality",
              desc: "Sourced from top textile mills with consistent blend quality",
            },
            {
              icon: "❯❯",
              title: "Variety of Options",
              desc: "Variety of GSMs, weaves, and textures to match your style",
            },
            {
              icon: "🤝",
              title: "Reliable Delivery",
              desc: "Reliable delivery and support across Dubai & MENA",
            },
          ].map((item, i) => (
            <PolyWoolCard key={i} item={item} />
          ))}
        </div>

        {/* Bottom Row - 2 cards centered */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "28px",
            flexWrap: "wrap",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          {[
            {
              icon: "📊",
              title: "Solid Shades & Patterns",
              desc: "Available in solid shades, subtle patterns, and elegant finishes",
            },
            {
              icon: "✅",
              title: "Bulk Orders Welcome",
              desc: "Ideal for bulk orders by tailors, wholesalers, and designers",
            },
          ].map((item, i) => (
            <PolyWoolCard key={i} item={item} />
          ))}
        </div>
      </section>

      {/* SECTION 3: WHAT IS POLY WOOL FABRIC - Image Left, Text Right */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto 80px auto",
          padding: "0 40px",
          display: "flex",
          alignItems: "center",
          gap: "60px",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: "0 0 auto", width: "100%", maxWidth: "500px" }}>
          <img
            src="/polywool-2.webp"
            alt="Poly Wool Fabric Close Up"
            style={{
              width: "100%",
              height: "440px",
              objectFit: "cover",
              display: "block",
              borderRadius: "4px",
            }}
          />
        </div>
        <div style={{ flex: 1, minWidth: "280px" }}>
          <h2
            style={{
              fontFamily: "'Cinzel Decorative', serif",
              fontSize: "36px",
              fontWeight: "700",
              color: "#1a1a5e",
              marginBottom: "24px",
              lineHeight: "1.2",
              textTransform: "uppercase",
            }}
          >
            What Is Poly Wool Fabric?
          </h2>
          <p style={{ fontSize: "16px", color: "#333", lineHeight: "1.75", marginBottom: "24px" }}>
            <strong>Polywool</strong> is a blended textile made by combining polyester and wool
            fibers, balancing the softness and insulation of wool with the wrinkle resistance and
            strength of polyester. This makes it a go-to fabric for men's suiting—especially in
            climates like the UAE where both breathability and structure matter.
          </p>
          <p style={{ fontSize: "16px", fontWeight: "700", color: "#222", marginBottom: "12px" }}>
            Key Attributes:
          </p>
          <ul style={{ paddingLeft: "20px", margin: "0 0 24px 0" }}>
            {[
              "Smooth texture with natural drape",
              "Durable and wrinkle-resistant",
              "Warm yet breathable for transitional seasons",
              "Easy to tailor and maintains shape well",
            ].map((attr, i) => (
              <li
                key={i}
                style={{
                  fontSize: "16px",
                  color: "#333",
                  lineHeight: "1.75",
                  marginBottom: "6px",
                }}
              >
                {attr}
              </li>
            ))}
          </ul>
          <p style={{ fontSize: "16px", color: "#333", lineHeight: "1.75" }}>
            Our poly wool fabrics are preferred by tailoring boutiques, formalwear designers, and
            ready-to-stitch brands throughout Dubai and the MENA region.
          </p>
        </div>
      </section>

      {/* SECTION 4: APPLICATIONS */}
      <section
        style={{
          padding: "60px 40px 80px",
          background: "#fff",
          marginBottom: "80px",
        }}
      >
        <h2
          style={{
            fontFamily: "'Cinzel Decorative', serif",
            fontSize: "32px",
            fontWeight: "700",
            color: "#1a1a5e",
            textAlign: "center",
            marginBottom: "16px",
            textTransform: "uppercase",
          }}
        >
          Applications Of Poly Wool Fabric
        </h2>

        <p
          style={{
            textAlign: "center",
            fontSize: "16px",
            color: "#333",
            marginBottom: "40px",
          }}
        >
          Our premium <strong>poly wool suiting fabrics</strong> are used in a
          wide range of menswear garments including:
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              window.innerWidth < 768 ? "1fr" : "repeat(2, 1fr)",
            gap: "22px",
            maxWidth: "1150px",
            margin: "0 auto",
          }}
        >
          {[
            {
              label: "Blazers for formal and semi-formal events",
              image: "/polywool-3.webp",
            },
            {
              label: "Business suits & corporate uniforms",
              image: "/polywool-4.webp",
            },
            {
              label: "Tailored trousers and waistcoats",
              image: "/polywool-5.jpg",
            },
            {
              label: "Kandura & Dishdasha",
              image: "/polywool-6.jpg",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                height: window.innerWidth < 768 ? "240px" : "300px",
                overflow: "hidden",
                borderRadius: "4px",
              }}
            >
              <img
                src={item.image}
                alt={item.label}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />

              {/* Dark overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(0,0,0,0.38)",
                }}
              />

              {/* Text */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "20px",
                }}
              >
                <p
                  style={{
                    color: "#fff",
                    fontSize: window.innerWidth < 768 ? "26px" : "22px",
                    fontWeight: "700",
                    lineHeight: "1.4",
                    textAlign: "center",
                    margin: 0,
                    maxWidth: "80%",
                  }}
                >
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: FAQ */}
      <section
        style={{
          padding: "60px 40px 80px",
          background: "#fff",
          maxWidth: "1100px",
          margin: "0 auto 80px auto",
        }}
      >
        <h2
          style={{
            fontFamily: "'Cinzel Decorative', serif",
            fontSize: "42px",
            fontWeight: "700",
            color: "#1a1a5e",
            textAlign: "center",
            marginBottom: "40px",
            letterSpacing: "4px",
            position: "relative",
          }}
        >
          FAQ
          <span
            style={{
              display: "block",
              width: "60px",
              height: "3px",
              background: "#c8a84b",
              margin: "10px auto 0",
              borderRadius: "2px",
            }}
          />
        </h2>

        <div>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                border: "1px solid #ddd",
                borderRadius: "4px",
                marginBottom: "12px",
                overflow: "hidden",
              }}
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "18px 24px",
                  background: "#fff",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Cinzel Decorative', serif",
                    fontSize: "13px",
                    fontWeight: "700",
                    color: "#c8a84b",
                    letterSpacing: "0.5px",
                    lineHeight: "1.4",
                    textTransform: "uppercase",
                  }}
                >
                  {faq.question}
                </span>
                <span
                  style={{
                    fontSize: "22px",
                    color: "#1a1a5e",
                    fontWeight: "300",
                    flexShrink: 0,
                    marginLeft: "16px",
                  }}
                >
                  {openFaq === i ? "−" : "+"}
                </span>
              </button>
              {openFaq === i && (
                <div
                  style={{
                    padding: "16px 24px 20px",
                    borderTop: "1px solid #eee",
                    background: "#fff",
                  }}
                >
                  <p
                    style={{
                      fontSize: "15px",
                      color: "#333",
                      lineHeight: "1.75",
                      margin: 0,
                    }}
                  >
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
      <ScrollToTop />
    </div>
  );
}