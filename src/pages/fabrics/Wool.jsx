import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
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
  const [hoveredFaq, setHoveredFaq] = useState(null);

  const faqs = [
    {
      question: "What is the difference between wool and cashmere wool?",
      answer:
        "Wool is sourced from sheep, while cashmere comes from specific goats and is known for its finer, softer feel. Cashmere is often used in high-end suits and jackets for added luxury.",
    },
    {
      question: "Is wool fabric suitable for the UAE climate?",
      answer:
        "Lightweight wool blends are well-suited for the UAE's indoor air-conditioned environments and cooler months. We offer lighter GSM wool fabrics specifically chosen for warm-climate countries like the UAE.",
    },
    {
      question: "Do you offer bulk wool fabric for tailoring houses and designers?",
      answer:
        "Yes, Aurora Textiles supplies wool fabric in bulk to tailoring houses, fashion designers, and menswear brands across the UAE. We offer wholesale pricing with consistent quality and reliable availability.",
    },
    {
      question: "What types of weaves are available in your wool fabrics?",
      answer:
        "Our wool fabric collection includes plain weave, twill weave, herringbone, and houndstooth patterns. We also carry wool-poly blends and cashmere wool in various GSM weights to suit different garment types.",
    },
    {
      question: "Can I buy wool suiting fabric in bulk for tailoring businesses in the UAE?",
      answer:
        "Absolutely. We cater to tailoring businesses, garment manufacturers, and boutique studios looking for bulk wool suiting fabric. Contact our team for wholesale pricing, minimum order quantities, and available swatches.",
    },
  ];

  return (
    <div style={{ width: "100%", background: "#fff" }}>

      <Helmet>
        <title>Buy Wool Fabric in Dubai | Premium Wool Fabric for Dressmaking Online</title>
        <meta name="description" content="Buy Premium quality wool fabric for Dressmaking from Aurora Textiles in Dubai. You can purchase various wool fabric materials in retail and bulk quantities. Contact Us Now." />
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
            }}
          >
            WOOL FABRIC
          </h1>
        </div>
      </section>

      {/* SECTION 1 – TRUSTED SUPPLIER OF WOOL SUITING FABRIC IN DUBAI, UAE */}
      <section
        style={{
          width: "100%",
          maxWidth: "1000px",
          margin: "0 auto 40px auto",
          padding: "0 10px",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          gap: "30px",
        }}
      >
        {/* Left Image */}
        <div style={{ flex: "0 0 48%", maxWidth: "48%" }}>
          <img
            src="/wool-1.webp"
            alt="Wool Suiting Fabric"
            style={{
              width: "100%",
              height: "680px",
              objectFit: "contain",
              display: "block",
              borderRadius: "20px",
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
              lineHeight: "1.2",
              margin: "0 0 28px 0",
             
            }}
          >
            Trusted Supplier of Wool Suiting Fabric in Dubai, UAE
          </h2>

          <p
            style={{
              fontFamily: "sans-serif",
              fontSize: "19px",
              color: "#222",
              lineHeight: "1.2",
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
              fontSize: "19px",
              color: "#222",
              lineHeight: "1.2",
              margin: "0 0 36px 0",
            }}
          >
            We work closely with designers, tailors, and bulk buyers to offer consistent
            quality, reliable availability, and wholesale pricing—ideal for businesswear,
            formalwear, and ceremonial menswear collections.
          </p>

         {/* Button */}
                        <div
                            onClick={() => (window.location.href = "/contact-us")}
                            style={{ display: "flex", alignItems: "center", gap: "16px" }}>

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
            fontSize: "36px",
            fontWeight: "700",
            textAlign: "center",
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
              fontSize: "42px",
              fontWeight: "700",
              lineHeight: "1.25",
              margin: "0 0 24px 0",
             
            }}
          >
            Shop Wool Fabrics <br /> with Aurora Textiles
          </h2>

          <h3
            style={{
              fontFamily: "sans-serif",
              fontSize: "24px",
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
              fontSize: "19px",
              color: "#222",
              lineHeight: "1.8",
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
              fontSize: "19px",
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
                onMouseEnter={() => setHoveredFaq(index)}
                onMouseLeave={() => setHoveredFaq(null)}
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
                    fontSize: "17px",
                    fontWeight: "700",
                    color: openFaq === index ? "#b8960c" : hoveredFaq === index ? "#070e46" : "#0b18a1",
                    letterSpacing: "0.5px",
                    lineHeight: "1.4",
                    transition: "color 0.2s ease",
                  }}
                >
                  {faq.question}
                </span>
                <span
                  style={{
                    fontSize: "22px",
                    color: openFaq === index ? "#b8960c" : hoveredFaq === index ? "#070e46" : "#0b18a1",
                    fontWeight: "400",
                    marginLeft: "20px",
                    flexShrink: 0,
                    transition: "color 0.2s ease",
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
                    fontSize: "19px",
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