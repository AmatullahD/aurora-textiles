import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";

function WoolFeatureCard({ card }) {
  const [hovered, setHovered] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: "1 1 220px",
        maxWidth: "280px",
        height: "220px",
        border: "5px solid #1a237e",
        borderRadius: "18px",
        padding: "36px 24px",
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
      <div style={{ fontSize: "38px", color: "#b8960c", marginBottom: "14px" }}>
        {card.icon}
      </div>

      {/* Title — shown before hover */}
      {!hovered && (
        <p
          style={{
            fontFamily: "sans-serif",
            fontSize: "24px",
            fontWeight: "600",
            color: "#111",
            lineHeight: "1.4",
            margin: 0,
            textAlign: "center",
          }}
        >
          {card.title}
        </p>
      )}

      {/* Description — shown on hover */}
      {hovered && (
        <p
          style={{
            fontFamily: "sans-serif",
            fontSize: "13.5px",
            fontWeight: "400",
            color: "#333",
            lineHeight: "1.7",
            margin: 0,
            textAlign: "center",
          }}
        >
          {card.desc}
        </p>
      )}
    </div>
  );
}

export default function WoolPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      question: "WHAT IS THE DIFFERENCE BETWEEN WOOL AND CASHMERE WOOL?",
      answer:
        "Wool is sourced from sheep, while cashmere comes from specific goats and is known for its finer, softer feel. Cashmere is often used in high-end suits and jackets for added luxury.",
    },
    {
      question: "IS WOOL FABRIC SUITABLE FOR THE UAE CLIMATE?",
      answer:
        "Lightweight wool blends are well-suited for the UAE's indoor air-conditioned environments and cooler months. We offer lighter GSM wool fabrics specifically chosen for warm-climate countries like the UAE.",
    },
    {
      question: "DO YOU OFFER BULK WOOL FABRIC FOR TAILORING HOUSES AND DESIGNERS?",
      answer:
        "Yes, Aurora Textiles supplies wool fabric in bulk to tailoring houses, fashion designers, and menswear brands across the UAE. We offer wholesale pricing with consistent quality and reliable availability.",
    },
    {
      question: "WHAT TYPES OF WEAVES ARE AVAILABLE IN YOUR WOOL FABRICS?",
      answer:
        "Our wool fabric collection includes plain weave, twill weave, herringbone, and houndstooth patterns. We also carry wool-poly blends and cashmere wool in various GSM weights to suit different garment types.",
    },
    {
      question: "CAN I BUY WOOL SUITING FABRIC IN BULK FOR TAILORING BUSINESSES IN THE UAE?",
      answer:
        "Absolutely. We cater to tailoring businesses, garment manufacturers, and boutique studios looking for bulk wool suiting fabric. Contact our team for wholesale pricing, minimum order quantities, and available swatches.",
    },
  ];

  return (
    <div style={{ width: "100%", background: "#fff" }}>

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
            WOOL FABRICS
          </h1>
        </div>
      </section>

      {/* SECTION 1 – TRUSTED SUPPLIER OF WOOL SUITING FABRIC IN DUBAI, UAE */}
      <section
        style={{
          width: "100%",
          maxWidth: "1300px",
          margin: "0 auto 70px auto",
          padding: "0 40px",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          gap: "60px",
        }}
      >
        {/* Left Image */}
        <div style={{ flex: "0 0 48%", maxWidth: "48%" }}>
          <img
            src="/wool-1.webp"
            alt="Wool Suiting Fabric"
            style={{
              width: "100%",
              height: "580px",
              objectFit: "cover",
              display: "block",
              borderRadius: "4px",
            }}
          />
        </div>

        {/* Right Text */}
        <div style={{ flex: 1 }}>
          <h2
            style={{
              fontFamily: "'Cinzel Decorative', serif",
              color: "#1a237e",
              fontSize: "36px",
              fontWeight: "700",
              lineHeight: "1.25",
              margin: "0 0 28px 0",
              textTransform: "uppercase",
            }}
          >
            Trusted Supplier of Wool Suiting Fabric in Dubai, UAE
          </h2>

          <p
            style={{
              fontFamily: "sans-serif",
              fontSize: "15.5px",
              color: "#222",
              lineHeight: "1.8",
              margin: "0 0 22px 0",
            }}
          >
            At <strong>Aurora Textiles</strong>, we supply premium{" "}
            <strong>wool fabrics</strong> tailored exclusively for men's fashion. Our collection
            includes <strong>pure wool</strong>, <strong>cashmere wool fabrics</strong>, and{" "}
            <strong>wool suiting blends</strong> sourced from leading Indian and international
            mills. Whether you're designing tailored suits, blazers, or winter ethnic jackets,
            our <strong>wool textiles</strong> provide the structure, insulation, and elegance
            needed for refined dressing—especially in cooler months and indoor settings across
            the UAE.
          </p>

          <p
            style={{
              fontFamily: "sans-serif",
              fontSize: "15.5px",
              color: "#222",
              lineHeight: "1.8",
              margin: "0 0 36px 0",
            }}
          >
            We work closely with designers, tailors, and bulk buyers to offer consistent
            quality, reliable availability, and wholesale pricing—ideal for businesswear,
            formalwear, and ceremonial menswear collections.
          </p>

          {/* Buttons */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <button
              onMouseEnter={e => {
                e.currentTarget.style.background = "#0a089bd3";
                e.currentTarget.style.borderColor = "#e0b219";
                e.currentTarget.style.color = "#ffffff";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "#e0b219";
                e.currentTarget.style.borderColor = "#0a089bd3";
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
            <button
              style={{
                background: "#111",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                width: "48px",
                height: "48px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                fontSize: "20px",
              }}
            >
              📞
            </button>
            <button
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
                fontSize: "20px",
              }}
            >
              💬
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 2 – FEATURES OF WOOL FABRIC (4 cards) */}
      {/* SECTION 2 – FEATURES OF WOOL FABRIC (4 cards) */}
      <section
        style={{
          width: "100%",
          background: "#fff",
          padding: "60px 40px",
          boxSizing: "border-box",
          marginBottom: "70px",
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
            margin: "0 0 50px 0",
          }}
        >
          Features of Wool Fabric
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
            maxWidth: "1260px",
            margin: "0 auto",
            flexWrap: "wrap",
          }}
        >
          {[
            {
              icon: "★",
              title: "Natural Insulation & Breathability",
              desc: "Wool offers excellent temperature regulation—keeping you warm during winter and cool indoors. Ideal for suits, jackets, and eveningwear.",
            },
            {
              icon: "⌃⌃",
              title: "Luxurious Feel with Excellent Draping",
              desc: "Our wool and cashmere wool fabrics are soft to touch and drape well, enhancing the fit and fall of suits or sherwanis.",
            },
            {
              icon: "🤝",
              title: "Tailoring Friendly & Long-Lasting",
              desc: "Wool fabrics are naturally elastic, resistant to wrinkles, and easy to tailor—ensuring a premium finish with lasting durability.",
            },
            {
              icon: "✔",
              title: "Available in Various Weaves & Finishes",
              desc: "Choose from twill, gabardine, herringbone, and other structured weaves suitable for different fashion applications.",
            },
          ].map((card, i) => (
            <WoolFeatureCard key={i} card={card} />
          ))}
        </div>
      </section>

      {/* SECTION 3 – SHOP WOOL FABRICS WITH AURORA TEXTILES */}
      <section
        style={{
          width: "100%",
          maxWidth: "1300px",
          margin: "0 auto 70px auto",
          padding: "0 40px",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "flex-start",
          gap: "60px",
        }}
      >
        {/* Left Image */}
        <div style={{ flex: "0 0 46%", maxWidth: "46%" }}>
          <img
            src="/wool-2.webp"
            alt="Shop Wool Fabrics"
            style={{
              width: "100%",
              height: "580px",
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
              borderRadius: "4px",
            }}
          />
        </div>

        {/* Right Text */}
        <div style={{ flex: 1, paddingTop: "10px" }}>
          <h2
            style={{
              fontFamily: "'Cinzel Decorative', serif",
              color: "#1a237e",
              fontSize: "34px",
              fontWeight: "700",
              lineHeight: "1.25",
              margin: "0 0 24px 0",
              textTransform: "uppercase",
            }}
          >
            Shop Wool Fabrics with Aurora Textiles
          </h2>

          <h3
            style={{
              fontFamily: "sans-serif",
              fontSize: "17px",
              fontWeight: "700",
              color: "#111",
              margin: "0 0 16px 0",
            }}
          >
            Ideal For:
          </h3>

          <ul
            style={{
              fontFamily: "sans-serif",
              fontSize: "15.5px",
              color: "#222",
              lineHeight: "2.4",
              margin: "0 0 28px 0",
              paddingLeft: "22px",
            }}
          >
            <li>Men's Wool Suits</li>
            <li>Blazers &amp; Formal Jackets</li>
            <li>Professional Uniforms</li>
            <li>Tailor-made Occasionwear</li>
          </ul>

          <p
            style={{
              fontFamily: "sans-serif",
              fontSize: "15.5px",
              color: "#222",
              lineHeight: "1.8",
              margin: 0,
            }}
          >
            Whether you're planning to <strong>buy wool fabric online</strong> or looking for a{" "}
            <strong>wool fabric wholesale supplier in Dubai</strong>, Aurora Textiles is your
            trusted partner. Our expert team helps you select the right suiting fabric for your
            design needs—with options in <strong>pure wool</strong>, wool-poly blends, and{" "}
            <strong>cashmere wool fabrics</strong> suited for men's tailoring.
          </p>
        </div>
      </section>

      {/* SECTION 4 – FAQ */}
      <section
        style={{
          width: "100%",
          maxWidth: "1100px",
          margin: "0 auto 80px auto",
          padding: "0 40px",
          boxSizing: "border-box",
        }}
      >
        {/* FAQ Title */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2
            style={{
              fontFamily: "'Cinzel Decorative', serif",
              color: "#1a237e",
              fontSize: "38px",
              fontWeight: "700",
              margin: 0,
              display: "inline-block",
              borderBottom: "3px solid #1a237e",
              paddingBottom: "6px",
              letterSpacing: "2px",
            }}
          >
            FAQ
          </h2>
        </div>

        {/* FAQ Items */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ddd",
                borderBottom: index === faqs.length - 1 ? "1px solid #ddd" : "none",
                background: "#fff",
              }}
            >
              <div
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "22px 28px",
                  cursor: "pointer",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Cinzel Decorative', serif",
                    fontSize: "13px",
                    fontWeight: "700",
                    color: "#b8960c",
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
                    fontWeight: "400",
                    marginLeft: "20px",
                    flexShrink: 0,
                  }}
                >
                  {openFaq === index ? "−" : "+"}
                </span>
              </div>

              {openFaq === index && (
                <div
                  style={{
                    padding: "20px 28px 24px 28px",
                    fontFamily: "sans-serif",
                    fontSize: "15px",
                    color: "#333",
                    lineHeight: "1.8",
                    borderTop: "1px solid #eee",
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