import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";


function PvLycraCard({ icon, title, desc, isBottom }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: "5px solid #1a237e",
        borderRadius: "18px",
        padding: "32px 28px",
        textAlign: "center",
        flex: isBottom ? "0 0 calc(45% - 12px)" : "0 0 calc(33% - 16px)",
        maxWidth: isBottom ? "calc(45% - 12px)" : "calc(33% - 16px)",
        height: "220px",
        boxSizing: "border-box",
        background: "#fff",
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
      <span style={{ fontSize: "36px", color: "#b8960c", lineHeight: 1, marginBottom: "14px" }}>
        {icon}
      </span>

      {/* Title — before hover, bold 24px */}
      {!hovered && (
        <p style={{
          fontSize: "24px",
          fontWeight: "700",
          color: "#111",
          lineHeight: "1.4",
          margin: 0,
          textAlign: "center",
        }}>
          {title}
        </p>
      )}

      {/* Description — after hover, small text */}
      {hovered && (
        <p style={{
          fontSize: "14px",
          fontWeight: "400",
          color: "#333",
          lineHeight: "1.6",
          margin: 0,
          textAlign: "center",
        }}>
          {desc}
        </p>
      )}
    </div>
  );
}


export default function PvLycraPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      question: "WHY IS PV LYCRA FABRIC IDEAL FOR MEN'S SUITING?",
      answer:
        "PV Lycra blends comfort, flexibility, and durability—making it perfect for tailored suits, uniforms, and formal trousers that require a crisp yet comfortable finish.",
    },
    {
      question: "CAN I BUY PV LYCRA FABRIC ONLINE IN DUBAI?",
      answer:
        "Yes, Aurora Textiles offers convenient online ordering for PV Lycra fabrics with delivery across Dubai and the wider MENA region.",
    },
    {
      question: "IS PV LYCRA FABRIC SUITABLE FOR WARM CLIMATES?",
      answer:
        "Absolutely. The viscose component adds breathability while the polyester ensures structure, making it ideal for the UAE's hot and humid conditions.",
    },
    {
      question: "WHAT GARMENTS CAN BE MADE FROM PV LYCRA FABRICS?",
      answer:
        "PV Lycra is used for men's formal suits, trousers, blazers, jackets, uniforms (hospitality, aviation, office), and other structured menswear.",
    },
    {
      question: "DO YOU OFFER PV LYCRA FABRIC IN BULK FOR TAILORS AND BRANDS?",
      answer:
        "Yes, we provide bulk supply options tailored for fashion houses, tailors, uniform suppliers, and wholesale buyers with competitive pricing and fast delivery.",
    },
  ];

  return (
    <div style={{ width: "100%", background: "#fff" }}>

      <Helmet>
        <title>PV Lycra Fabric Supplier in Dubai | Aurora Textiles</title>
        <meta name="description" content="Buy PV Lycra fabric wholesale in Dubai. Aurora Textiles offers poly viscose lycra blend fabrics for stretch suiting and uniform use across UAE." />
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
            POLY-VISCOSE LYCRA FABRICS
          </h1>
        </div>
      </section>

      {/* SECTION 1: INTRO - Image Left, Text Right */}
      <section
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto 80px auto",
          padding: "0 40px",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          gap: "60px",
        }}
      >
        <div style={{ flex: "0 0 48%", maxWidth: "48%" }}>
          <img
            src="/pvLycra-1.webp"
            alt="PV Lycra Suit"
            style={{
              width: "100%",
              height: "520px",
              objectFit: "cover",
              display: "block",
              borderRadius: "20px",
            }}
          />
        </div>
        <div style={{ flex: 1 }}>
          <h2
            style={{
              fontFamily: "'Cinzel Decorative', serif",
              color: "#1a237e",
              fontSize: "36px",
              fontWeight: "700",
              lineHeight: "1.2",
              marginTop: 0,
              marginBottom: "24px",
              textTransform: "uppercase",
            }}
          >
            BUY PV LYCRA FABRIC IN DUBAI | PREMIUM STRETCH SUITING FOR MEN
          </h2>
          <p style={{ fontSize: "15px", color: "#333", lineHeight: "1.8", marginBottom: "20px" }}>
            At <strong>Aurora Textiles</strong>, we offer a premium collection of{" "}
            <strong>PV Lycra Suiting Fabrics</strong>, crafted for men who value comfort,
            flexibility, and a refined appearance. Designed using a{" "}
            <strong>Polyester-Viscose blend with Lycra</strong>, these fabrics combine
            durability with stretch, making them ideal for modern suiting, trousers, and
            uniforms.
          </p>
          <p style={{ fontSize: "15px", color: "#333", lineHeight: "1.8", marginBottom: "32px" }}>
            Whether you're a fashion designer, tailor, or wholesaler, our{" "}
            <strong>PV Lycra fabrics</strong> provide the perfect blend of structure and
            movement—ensuring a polished look that's also comfortable for long wear. You can
            easily <strong>buy PV Lycra fabric in Dubai</strong> through Aurora Textiles,
            with options available for both small and bulk orders.
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

      {/* SECTION 2: WHY CHOOSE AURORA TEXTILES */}

      <section
        style={{
          width: "100%",
          background: "#fff",
          padding: "60px 40px",
          boxSizing: "border-box",
          marginBottom: "80px",
        }}
      >
        <h2
          style={{
            fontFamily: "'Cinzel Decorative', serif",
            color: "#1a237e",
            fontSize: "32px",
            fontWeight: "700",
            textAlign: "center",
            textTransform: "uppercase",
            marginBottom: "50px",
            marginTop: 0,
          }}
        >
          WHY CHOOSE AURORA TEXTILES FOR PV LYCRA FABRICS?
        </h2>

        {/* Row 1 — 3 cards */}
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto 24px auto",
            display: "flex",
            flexWrap: "wrap",
            gap: "24px",
            justifyContent: "center",
          }}
        >
          <PvLycraCard
            icon="★"
            title="Reputable Mills"
            desc="High-quality PV Lycra sourced from reputable mills"
            isBottom={false}
          />
          <PvLycraCard
            icon="❯❯"
            title="Multiple Textures"
            desc="Available in multiple textures, finishes, and stretch levels"
            isBottom={false}
          />
          <PvLycraCard
            icon="🤝"
            title="Tailored Solutions"
            desc="Tailored solutions for fashion houses, tailors, and uniform suppliers"
            isBottom={false}
          />
        </div>

        {/* Row 2 — 2 cards centered */}
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            gap: "24px",
            justifyContent: "center",
          }}
        >
          <PvLycraCard
            icon="📊"
            title="Bulk & Fast Delivery"
            desc="Reliable bulk supply and fast delivery across Dubai and MENA"
            isBottom={true}
          />
          <PvLycraCard
            icon="✔"
            title="Expert Guidance"
            desc="Expert guidance to help you choose the right suiting fabric for your needs"
            isBottom={true}
          />
        </div>
      </section>

      {/* SECTION 3: WHAT IS PV LYCRA FABRIC */}
      <section
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto 80px auto",
          padding: "0 40px",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "flex-start",
          gap: "60px",
        }}
      >
        <div style={{ flex: "0 0 48%", maxWidth: "48%" }}>
          <img
            src="/pvLycra-2.avif"
            alt="PV Lycra Fabric"
            style={{
              width: "100%",
              height: "480px",
              objectFit: "cover",
              display: "block",
              borderRadius: "4px",
            }}
          />
        </div>
        <div style={{ flex: 1, paddingTop: "10px" }}>
          <h2
            style={{
              fontFamily: "'Cinzel Decorative', serif",
              color: "#1a237e",
              fontSize: "34px",
              fontWeight: "700",
              lineHeight: "1.25",
              marginTop: 0,
              marginBottom: "20px",
              textTransform: "uppercase",
            }}
          >
            WHAT IS PV LYCRA FABRIC?
          </h2>
          <p style={{ fontSize: "15px", color: "#333", lineHeight: "1.8", marginBottom: "28px" }}>
            together the strength and wrinkle resistance of polyester, the softness and
            breathability of viscose, and the flexibility of Lycra. This makes it one of the
            most versatile fabrics for formalwear and business attire in the UAE's fast-paced
            environment.
          </p>
          <p
            style={{
              fontSize: "17px",
              color: "#222",
              fontWeight: "700",
              marginBottom: "16px",
            }}
          >
            Benefits of PV Lycra Fabric:
          </p>
          <ul style={{ paddingLeft: "20px", margin: 0, lineHeight: "2" }}>
            <li style={{ fontSize: "15px", color: "#333", marginBottom: "6px" }}>
              <strong>Stretch &amp; Flexibility:</strong> Lycra provides elasticity for ease of movement and comfort.
            </li>
            <li style={{ fontSize: "15px", color: "#333", marginBottom: "6px" }}>
              <strong>Durable &amp; Wrinkle-Resistant:</strong> Polyester adds strength and keeps the fabric looking crisp.
            </li>
            <li style={{ fontSize: "15px", color: "#333", marginBottom: "6px" }}>
              <strong>Soft Hand Feel:</strong> Viscose ensures a smooth texture with excellent drape.
            </li>
            <li style={{ fontSize: "15px", color: "#333", marginBottom: "6px" }}>
              <strong>Shape Retention:</strong> Perfect fit for tailored suits and trousers.
            </li>
            <li style={{ fontSize: "15px", color: "#333", marginBottom: "6px" }}>
              <strong>Ideal for Hot Climates:</strong> Breathable yet structured—perfect for UAE conditions.
            </li>
          </ul>
          <p style={{ fontSize: "15px", color: "#333", lineHeight: "1.8", marginTop: "20px" }}>
            <strong>Shape Retention:</strong> Maintains its form and crisp look even after daily wear and multiple washes — ideal for uniforms and workwear.
          </p>
        </div>
      </section>

      {/* SECTION 4: APPLICATIONS OF PV LYCRA SUITING FABRIC */}
      <section
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto 80px auto",
          padding: "0 40px",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "flex-start",
          gap: "60px",
        }}
      >
        <div style={{ flex: 1, paddingTop: "10px" }}>
          <h2
            style={{
              fontFamily: "'Cinzel Decorative', serif",
              color: "#1a237e",
              fontSize: "34px",
              fontWeight: "700",
              lineHeight: "1.25",
              marginTop: 0,
              marginBottom: "24px",
              textTransform: "uppercase",
            }}
          >
            APPLICATIONS OF PV LYCRA SUITING FABRIC
          </h2>
          <p style={{ fontSize: "15px", color: "#333", lineHeight: "1.8", marginBottom: "20px" }}>
            Our <strong>PV Lycra fabrics</strong> are designed to meet the needs of both
            professional and casual menswear collections.
          </p>
          <p style={{ fontSize: "15px", color: "#333", lineHeight: "1.8", marginBottom: "8px" }}>
            <strong>Men's Formal Suits:</strong> Elegant and flexible for business or corporate wear.
          </p>
          <p style={{ fontSize: "15px", color: "#333", lineHeight: "1.8", marginBottom: "8px" }}>
            <strong>Trousers &amp; Pants:</strong> Provides comfort stretch while maintaining a clean shape.
          </p>
          <p style={{ fontSize: "15px", color: "#333", lineHeight: "1.8", marginBottom: "8px" }}>
            <strong>Uniforms:</strong> Ideal for hospitality, aviation, or office use due to its easy-care nature.
          </p>
          <p style={{ fontSize: "15px", color: "#333", lineHeight: "1.8", marginBottom: "20px" }}>
            <strong>Blazers &amp; Jackets:</strong> Structured with a modern, slim-fit appeal.
          </p>
          <p style={{ fontSize: "15px", color: "#333", lineHeight: "1.8" }}>
            Available in a range of colors, finishes, and GSMs, our fabrics are engineered
            for quality and consistency.
          </p>
        </div>
        <div style={{ flex: 1 }}>
          <div
            style={{
              height: "520px",
              overflow: "hidden",
              borderRadius: "4px",
            }}
          >
            <img
              src="/pvLycra-3.webp"
              alt="Application"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        </div>
      </section>

      {/* SECTION 5: FAQ */}
      <section
        style={{
          width: "100%",
          maxWidth: "1000px",
          margin: "0 auto 80px auto",
          padding: "0 40px",
          boxSizing: "border-box",
        }}
      >
        <h2
          style={{
            fontFamily: "'Cinzel Decorative', serif",
            color: "#1a237e",
            fontSize: "38px",
            fontWeight: "700",
            textAlign: "center",
            marginBottom: "40px",
            marginTop: 0,
          }}
        >
          FAQ
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
          {faqs.map((faq, i) => (
            <div
              key={i}
              style={{
                border: "1px solid #ddd",
                borderBottom: i === faqs.length - 1 ? "1px solid #ddd" : "none",
              }}
            >
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{
                  width: "100%",
                  background: "#fff",
                  border: "none",
                  padding: "20px 24px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer",
                  textAlign: "left",
                  gap: "16px",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Cinzel Decorative', serif",
                    color: openFaq === i ? "#b8960c" : "#1a237e",
                    fontSize: "13px",
                    fontWeight: "700",
                    letterSpacing: "0.5px",
                    textTransform: "uppercase",
                    lineHeight: "1.4",
                  }}
                >
                  {faq.question}
                </span>
                <span
                  style={{
                    fontSize: "22px",
                    color: "#1a237e",
                    fontWeight: "300",
                    flexShrink: 0,
                    lineHeight: 1,
                  }}
                >
                  {openFaq === i ? "−" : "+"}
                </span>
              </button>
              {openFaq === i && (
                <div
                  style={{
                    padding: "4px 24px 24px 24px",
                    fontSize: "15px",
                    color: "#444",
                    lineHeight: "1.7",
                  }}
                >
                  {faq.answer}
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