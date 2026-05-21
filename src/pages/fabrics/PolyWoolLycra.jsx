import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function PolyWoolLycraPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      question: "WHAT MAKES POLY WOOL LYCRA FABRIC IDEAL FOR SUITING?",
      answer:
        "It combines the refined look of wool with the strength of polyester and stretch of Lycra, offering unmatched comfort, durability, and fit.",
    },
    {
      question: "CAN I BUY POLY WOOL LYCRA FABRIC ONLINE IN DUBAI?",
      answer:
        "Yes, Aurora Textiles offers easy ordering and delivery of Poly Wool Lycra fabrics across Dubai and the MENA region. Contact us to place your order or request fabric samples.",
    },
    {
      question: "IS POLY WOOL LYCRA FABRIC SUITABLE FOR THE UAE'S WEATHER?",
      answer:
        "Absolutely. The Lycra component adds stretch and breathability, while wool provides natural temperature regulation—making it perfectly suited for the UAE's climate.",
    },
    {
      question: "WHAT GARMENTS CAN BE MADE FROM POLY WOOL LYCRA?",
      answer:
        "Poly Wool Lycra is ideal for formal business suits, corporate uniforms, blazers, jackets, tailored trousers, and waistcoats—anywhere structure and comfort are both required.",
    },
    {
      question: "DO YOU OFFER BULK POLY WOOL LYCRA SUITING FABRICS?",
      answer:
        "Yes, we supply Poly Wool Lycra fabrics in bulk quantities for tailors, wholesalers, fashion brands, and corporate uniform suppliers across Dubai and the wider MENA region.",
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
            POLY-WOOL LYCRA FABRICS
          </h1>
        </div>
      </section>

      {/* ── SECTION 1: INTRO – Image Left, Text Right ── */}
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
        {/* Image */}
        <div style={{ flex: "0 0 auto", width: "100%", maxWidth: "500px" }}>
          <img
            src="/faq-image.jpg"
            alt="Poly Wool Lycra Fabric"
            style={{
              width: "100%",
              height: "560px",
              objectFit: "cover",
              display: "block",
              borderRadius: "12px",
            }}
          />
        </div>

        {/* Text */}
        <div style={{ flex: 1, minWidth: "280px" }}>
          <h2
            style={{
              fontFamily: "'Cinzel Decorative', serif",
              fontSize: "38px",
              fontWeight: "700",
              color: "#1a1a5e",
              marginBottom: "28px",
              lineHeight: "1.2",
              textTransform: "uppercase",
              margin: "0 0 28px 0",
            }}
          >
            BUY POLY WOOL LYCRA FABRIC IN DUBAI
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "#333",
              lineHeight: "1.8",
              marginBottom: "20px",
            }}
          >
            <strong>Aurora Textiles</strong> offers a sophisticated collection of{" "}
            <strong>Poly Wool Lycra suiting fabrics</strong>, crafted for comfort, flexibility, and
            premium appearance. Designed to meet the demands of modern professionals, our fabrics
            combine the strength of polyester, the natural warmth of wool, and the stretch of
            Lycra—creating a perfect balance of structure and comfort.
          </p>
          <p
            style={{
              fontSize: "16px",
              color: "#333",
              lineHeight: "1.8",
              marginBottom: "36px",
            }}
          >
            Whether you're tailoring business suits, blazers, or formal trousers, our{" "}
            <strong>Poly Wool Lycra fabrics</strong> ensure a superior fit and luxurious feel. You
            can easily <strong>buy Poly Wool Lycra fabric in Dubai</strong> from Aurora Textiles,
            trusted by tailors, designers, and fashion brands across the UAE and MENA region.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
            <a
              href="/contact"
              style={{
                display: "inline-block",
                padding: "14px 32px",
                background: "#c8a84b",
                color: "#fff",
                fontWeight: "600",
                fontSize: "15px",
                textDecoration: "none",
                borderRadius: "4px",
                letterSpacing: "0.5px",
              }}
            >
              Contact Us
            </a>
            <a
              href="tel:+971000000000"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "48px",
                height: "48px",
                background: "#1a1a5e",
                color: "#fff",
                borderRadius: "50%",
                textDecoration: "none",
                fontSize: "20px",
              }}
            >
              📞
            </a>
            <a
              href="https://wa.me/971000000000"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "48px",
                height: "48px",
                background: "#25d366",
                color: "#fff",
                borderRadius: "50%",
                textDecoration: "none",
                fontSize: "20px",
              }}
            >
              💬
            </a>
          </div>
        </div>
      </section>

      {/* ── SECTION 2: WHY CHOOSE – 5 Feature Cards ── */}
      <section
        style={{
          background: "#fff",
          padding: "60px 40px 80px",
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
          Why Choose Aurora Textiles For Poly Wool Lycra Suiting?
        </h2>

        {/* Top Row – 3 cards */}
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
              text: "Sourced from trusted mills for consistent quality and performance",
            },
            {
              icon: "❯❯",
              text: "Wide range of suiting blends with modern stretch technology",
            },
            {
              icon: "🤝",
              text: "Designed for Dubai's climate—breathable yet refined",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                flex: "0 0 auto",
                width: "300px",
                border: "2px solid #1a1a5e",
                borderRadius: "16px",
                padding: "40px 28px",
                textAlign: "center",
                background: "#fff",
              }}
            >
              <div
                style={{
                  fontSize: "36px",
                  marginBottom: "20px",
                  color: "#c8a84b",
                }}
              >
                {item.icon}
              </div>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#222",
                  lineHeight: "1.5",
                  margin: 0,
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Row – 2 cards centered */}
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
              text: "Suitable for bulk orders and custom tailoring projects",
            },
            {
              icon: "✅",
              text: "Quick delivery and reliable B2B support across the UAE and MENA region",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                flex: "0 0 auto",
                width: "300px",
                border: "2px solid #1a1a5e",
                borderRadius: "16px",
                padding: "40px 28px",
                textAlign: "center",
                background: "#fff",
              }}
            >
              <div
                style={{
                  fontSize: "36px",
                  marginBottom: "20px",
                  color: "#c8a84b",
                }}
              >
                {item.icon}
              </div>
              <p
                style={{
                  fontSize: "16px",
                  fontWeight: "600",
                  color: "#222",
                  lineHeight: "1.5",
                  margin: 0,
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 3: WHAT IS POLY WOOL LYCRA – Image Left, Text Right ── */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto 80px auto",
          padding: "0 40px",
          display: "flex",
          alignItems: "flex-start",
          gap: "60px",
          flexWrap: "wrap",
        }}
      >
        {/* Image */}
        <div style={{ flex: "0 0 auto", width: "100%", maxWidth: "500px" }}>
          <img
            src="/faq-image.jpg"
            alt="Poly Wool Lycra Fabric Close Up"
            style={{
              width: "100%",
              height: "500px",
              objectFit: "cover",
              display: "block",
              borderRadius: "4px",
            }}
          />
        </div>

        {/* Text */}
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
              margin: "0 0 24px 0",
            }}
          >
            What Is Poly Wool Lycra Fabric?
          </h2>

          <p style={{ fontSize: "16px", color: "#333", lineHeight: "1.8", marginBottom: "16px" }}>
            <strong>Poly Wool Lycra fabric</strong> is a tri-blend of{" "}
            <strong>polyester, wool, and Lycra</strong>, combining the best characteristics of each
            fiber:
          </p>

          <ul style={{ paddingLeft: "20px", margin: "0 0 20px 0" }}>
            <li style={{ fontSize: "16px", color: "#333", lineHeight: "1.8", marginBottom: "8px" }}>
              <strong>Polyester</strong> adds durability and wrinkle resistance
            </li>
            <li style={{ fontSize: "16px", color: "#333", lineHeight: "1.8", marginBottom: "8px" }}>
              <strong>Wool</strong> contributes natural breathability and warmth
            </li>
            <li style={{ fontSize: "16px", color: "#333", lineHeight: "1.8", marginBottom: "8px" }}>
              <strong>Lycra (spandex)</strong> offers stretch for enhanced comfort and mobility
            </li>
          </ul>

          <p style={{ fontSize: "16px", color: "#333", lineHeight: "1.8", marginBottom: "24px" }}>
            This blend makes it a go-to choice for premium menswear, ensuring elegance,
            practicality, and flexibility—perfectly suited for the UAE's corporate and semi-formal
            lifestyle.
          </p>

          <p
            style={{
              fontSize: "16px",
              fontWeight: "700",
              color: "#222",
              marginBottom: "14px",
            }}
          >
            Key Benefits:
          </p>

          <ul style={{ paddingLeft: "20px", margin: 0 }}>
            {[
              {
                bold: "Stretch & Comfort:",
                text: " Lycra allows flexibility and all-day ease of movement.",
              },
              {
                bold: "Wrinkle-Resistant:",
                text: " Maintains structure and crease-free appearance.",
              },
              {
                bold: "Soft & Breathable:",
                text: " Wool ensures a smooth texture and temperature control.",
              },
              {
                bold: "Durable & Easy to Maintain:",
                text: " Long-lasting performance even with frequent wear.",
              },
              {
                bold: "Tailor-Friendly:",
                text: " Drapes beautifully for perfectly structured suits and blazers.",
              },
            ].map((item, i) => (
              <li
                key={i}
                style={{
                  fontSize: "16px",
                  color: "#333",
                  lineHeight: "1.8",
                  marginBottom: "8px",
                }}
              >
                <strong>{item.bold}</strong>
                {item.text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── SECTION 4: APPLICATIONS – Text Left, 2×2 Image Grid Right ── */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto 80px auto",
          padding: "0 40px",
          display: "flex",
          alignItems: "flex-start",
          gap: "60px",
          flexWrap: "wrap",
        }}
      >
        {/* Text Left */}
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
              margin: "0 0 24px 0",
            }}
          >
            Applications Of Poly Wool Lycra Suiting
          </h2>

          <p style={{ fontSize: "16px", color: "#333", lineHeight: "1.8", marginBottom: "20px" }}>
            Our <strong>Poly Wool Lycra fabrics</strong> are ideal for a wide range of menswear
            applications:
          </p>

          <p style={{ fontSize: "16px", color: "#333", lineHeight: "1.8", marginBottom: "8px" }}>
            <strong>Formal Business Suits</strong> – Perfect for executives and professionals.
          </p>
          <p style={{ fontSize: "16px", color: "#333", lineHeight: "1.8", marginBottom: "8px" }}>
            <strong>Corporate Uniforms</strong> – Provides comfort with long-lasting finish.
          </p>
          <p style={{ fontSize: "16px", color: "#333", lineHeight: "1.8", marginBottom: "8px" }}>
            <strong>Blazers &amp; Jackets</strong> – Structured yet stretchable for modern fits.
          </p>
          <p style={{ fontSize: "16px", color: "#333", lineHeight: "1.8", marginBottom: "24px" }}>
            <strong>Trousers &amp; Waistcoats</strong> – Durable and wrinkle-resistant for daily
            use.
          </p>

          <p style={{ fontSize: "16px", color: "#333", lineHeight: "1.8" }}>
            Each fabric is available in multiple weights, textures, and finishes to suit diverse
            tailoring requirements.
          </p>
        </div>

        {/* 2×2 Image Grid Right */}
        <div
          style={{
            flex: "0 0 auto",
            width: "100%",
            maxWidth: "560px",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "12px",
          }}
        >
          {[1, 2, 3, 4].map((_, i) => (
            <div
              key={i}
              style={{
                width: "100%",
                height: "240px",
                overflow: "hidden",
                borderRadius: "4px",
              }}
            >
              <img
                src="/faq-image.jpg"
                alt={`Application ${i + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* ── SECTION 5: FAQ ── */}
      <section
        style={{
          padding: "60px 40px 80px",
          background: "#fff",
          maxWidth: "1100px",
          margin: "0 auto 80px auto",
        }}
      >
        {/* FAQ Title with underline decoration */}
        <div style={{ textAlign: "center", marginBottom: "40px" }}>
          <h2
            style={{
              fontFamily: "'Cinzel Decorative', serif",
              fontSize: "42px",
              fontWeight: "700",
              color: "#1a1a5e",
              display: "inline-block",
              letterSpacing: "4px",
              margin: 0,
              position: "relative",
            }}
          >
            FAQ
            <span
              style={{
                position: "absolute",
                bottom: "-6px",
                right: "-24px",
                width: "50px",
                height: "3px",
                background: "#c8a84b",
                borderRadius: "2px",
              }}
            />
          </h2>
        </div>

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
    </div>
  );
}