import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

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
          gap: "60px",
          flexWrap: "wrap",
        }}
      >
        <div style={{ flex: "0 0 auto", width: "100%", maxWidth: "500px" }}>
          <img
            src="/faq-image.jpg"
            alt="Poly Wool Fabric"
            style={{
              width: "100%",
              height: "500px",
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
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <a
              href="/contact"
              style={{
                display: "inline-block",
                padding: "14px 30px",
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
              text: "Sourced from top textile mills with consistent blend quality",
            },
            {
              icon: "❯❯",
              text: "Variety of GSMs, weaves, and textures to match your style",
              iconStyle: { color: "#c8a84b", fontSize: "28px" },
            },
            {
              icon: "🤝",
              text: "Reliable delivery and support across Dubai & MENA",
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
              text: "Available in solid shades, subtle patterns, and elegant finishes",
            },
            {
              icon: "✅",
              text: "Ideal for bulk orders by tailors, wholesalers, and designers",
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
            src="/faq-image.jpg"
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
          Our premium <strong>poly wool suiting fabrics</strong> are used in a wide range of
          menswear garments including:
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "20px",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          {[
            { label: "Blazers for formal and semi-formal events" },
            { label: "Business suits & corporate uniforms" },
            { label: "Tailored trousers and waistcoats" },
            { label: "Kandura & Dishdasha" },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                height: "300px",
                overflow: "hidden",
                borderRadius: "4px",
              }}
            >
              <img
                src="/faq-image.jpg"
                alt={item.label}
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
                  background: "rgba(0,0,0,0.40)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "30px",
                  left: "30px",
                  right: "30px",
                }}
              >
                <p
                  style={{
                    color: "#fff",
                    fontSize: "22px",
                    fontWeight: "700",
                    margin: 0,
                    lineHeight: "1.3",
                    textAlign: "center",
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
    </div>
  );
}