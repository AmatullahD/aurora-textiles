import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";

function LinenCard({ icon, title, desc }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: "1 1 260px",
        maxWidth: "340px",
        height: "220px",
        border: "5px solid #1a237e",
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
      <div style={{ fontSize: "38px", color: "#b8960c", marginBottom: "14px" }}>
        {icon}
      </div>

      {!hovered && (
        <p style={{
          fontFamily: "sans-serif",
          fontSize: "24px",
          fontWeight: "600",
          color: "#111",
          lineHeight: "1.4",
          margin: 0,
          textAlign: "center",
        }}>
          {title}
        </p>
      )}

      {hovered && (
        <p style={{
          fontFamily: "sans-serif",
          fontSize: "14px",
          fontWeight: "500",
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

export default function LinenPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      question: "IS LINEN FABRIC SUITABLE FOR UAE SUMMERS?",
      answer: (
        <span>
          Yes, linen is one of the <strong>best fabrics for warm climates</strong>—it's breathable, sweat-wicking, and ideal for hot, dry conditions like those in the UAE.
        </span>
      ),
    },
    {
      question: "CAN I BUY LINEN SUIT FABRIC IN BULK FROM AURORA?",
      answer:
        "Yes, Aurora Textiles offers wholesale and bulk purchasing options for linen suit fabric. We cater to fashion houses, tailoring studios, and corporate clients across the UAE.",
    },
    {
      question: "WHAT'S THE DIFFERENCE BETWEEN PURE LINEN AND LINEN BLENDS?",
      answer:
        "Pure linen is made entirely from flax fibers and offers maximum breathability and texture. Linen blends combine linen with cotton or viscose to add softness, drape, or reduced wrinkling while retaining linen's natural qualities.",
    },
    {
      question: "ARE LINEN SUITS APPROPRIATE FOR FORMAL EVENTS?",
      answer:
        "Absolutely. Linen suits are well-suited for formal events in warm climates. They offer a refined, sophisticated look while keeping you cool and comfortable throughout the occasion.",
    },
    {
      question: "CAN I SHOP LINEN FABRICS ONLINE AT AURORA TEXTILES?",
      answer:
        "Yes, you can explore and order linen fabrics online through Aurora Textiles. Contact us to request swatches, pricing, or place a bulk order for your design needs.",
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
            LINEN FABRICS
          </h1>
        </div>
      </section>

      {/* SECTION 1 – BUY LINEN FABRICS IN DUBAI */}
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
            src="/linen-1.webp"
            alt="Linen Fabric"
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
            Buy Linen Fabrics in Dubai - Lightweight Linen Suiting &amp; Shirting
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
            <strong>Aurora Textiles</strong> offers a premium selection of{" "}
            <strong>linen fabrics for men</strong>—perfectly suited for the UAE's warm climate
            and refined style preferences. Whether you're looking to design relaxed{" "}
            <strong>linen suits for men</strong>, craft breezy shirts, or source{" "}
            <strong>linen suit fabric</strong> in bulk, we bring breathable, natural fabrics
            that combine durability with unmatched comfort.
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
            From fashion designers and tailors to boutiques and corporate clients, our linen
            range is trusted across Dubai and the wider MENA region for its sophisticated look
            and high wearability.
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

      {/* SECTION 2 – WHY CHOOSE AURORA FOR LINEN FABRICS */}
      {/* SECTION 2 – WHY CHOOSE AURORA FOR LINEN FABRICS */}
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
            fontSize: "30px",
            fontWeight: "700",
            textAlign: "center",
            textTransform: "uppercase",
            margin: "0 0 50px 0",
          }}
        >
          Why Choose Aurora for Linen Fabrics?
        </h2>

        {/* Row 1 – 3 cards */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
            maxWidth: "1200px",
            margin: "0 auto 24px auto",
            flexWrap: "wrap",
          }}
        >
          <LinenCard
            icon="★"
            title="Trusted Partners"
            desc="Sourced from globally trusted textile partners"
          />
          <LinenCard
            icon="⌃⌃"
            title="GSMs & Finishes"
            desc="Variety of GSMs and finishes for different tailoring needs"
          />
          <LinenCard
            icon="🤝"
            title="Pure & Blend Options"
            desc="Options available in pure linen and linen blends (cotton/viscose)"
          />
        </div>

        {/* Row 2 – 2 cards centered */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
            maxWidth: "740px",
            margin: "0 auto",
            flexWrap: "wrap",
          }}
        >
          <LinenCard
            icon="📊"
            title="Warm-Weather Ready"
            desc="Perfect for warm-weather dressing in the UAE"
          />
          <LinenCard
            icon="✔"
            title="Bulk Orders Welcome"
            desc="Suitable for bulk orders, B2B clients, and fashion houses"
          />
        </div>
      </section>

      {/* SECTION 3 – WHAT IS LINEN FABRIC */}
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
            src="/linen-2.webp"
            alt="What is Linen Fabric"
            style={{
              width: "100%",
              height: "560px",
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
              borderRadius: "8px",
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
              margin: "0 0 22px 0",
              textTransform: "uppercase",
            }}
          >
            What is Linen Fabric?
          </h2>

          <p
            style={{
              fontFamily: "sans-serif",
              fontSize: "15.5px",
              color: "#222",
              lineHeight: "1.8",
              margin: "0 0 24px 0",
            }}
          >
            <strong>Linen</strong> is a natural cellulose-based fabric made from flax fibers, known
            for its lightweight texture, cooling properties, and earthy elegance. It's a go-to fabric
            for <strong>summer suits, shirts, and semi-formal ethnic wear</strong>—especially in hot
            climates like the UAE.
          </p>

          <h3
            style={{
              fontFamily: "sans-serif",
              fontSize: "17px",
              fontWeight: "700",
              color: "#111",
              margin: "0 0 16px 0",
            }}
          >
            Key Attributes:
          </h3>

          <ul
            style={{
              fontFamily: "sans-serif",
              fontSize: "15.5px",
              color: "#222",
              lineHeight: "2.2",
              margin: "0 0 24px 0",
              paddingLeft: "22px",
            }}
          >
            <li>Breathable &amp; moisture-wicking</li>
            <li>Softens with every wash</li>
            <li>Ideal for summer suiting and festive wear</li>
            <li>Naturally textured with a refined drape</li>
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
            Our linen collection is available in solids, checks, stripes, and blended options to
            meet varied style preferences.
          </p>
        </div>
      </section>

      {/* SECTION 4 – APPLICATIONS OF LINEN FABRIC */}
      <section
        style={{
          width: "100%",
          padding: "0 40px 70px 40px",
          boxSizing: "border-box",
          maxWidth: "1300px",
          margin: "0 auto 70px auto",
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
            margin: "0 0 18px 0",
          }}
        >
          Applications of Linen Fabric
        </h2>

        <p
          style={{
            fontFamily: "sans-serif",
            fontSize: "15.5px",
            color: "#333",
            textAlign: "center",
            margin: "0 0 40px 0",
            lineHeight: "1.7",
          }}
        >
          At Aurora, our <strong>linen fabrics</strong> are widely used in
          crafting garments that blend comfort and sophistication. Popular
          applications include:
        </p>

        {/* TOP 3 IMAGES */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              window.innerWidth < 768 ? "1fr" : "repeat(3, 1fr)",
            gap: "20px",
            marginBottom: "20px",
          }}
        >
          {[
            {
              label:
                "Tailored linen suits for men – formal yet breathable",
              image: "/linen-3.webp",
            },
            {
              label:
                "Kurta fabrics and ethnic semi-formal wear",
              image: "/linen-4.webp",
            },
            {
              label:
                "Linen-blend trousers and casual jackets",
              image: "/linen-5.webp",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                height: window.innerWidth < 768 ? "320px" : "460px",
                overflow: "hidden",
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

              {/* Overlay */}
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
                  padding: "25px",
                }}
              >
                <p
                  style={{
                    color: "#fff",
                    fontSize: window.innerWidth < 768 ? "26px" : "22px",
                    fontWeight: "700",
                    lineHeight: "1.45",
                    textAlign: "center",
                    margin: 0,
                  }}
                >
                  {item.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM 2 IMAGES */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              window.innerWidth < 768 ? "1fr" : "repeat(2, 1fr)",
            gap: "20px",
          }}
        >
          {[
            {
              label:
                "Smart-casual shirts for weekend dressing",
              image: "/linen-6.webp",
            },
            {
              label:
                "Ideal for bespoke tailoring and corporate gifting",
              image: "/linen-7.webp",
            },
          ].map((item, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                height: window.innerWidth < 768 ? "280px" : "340px",
                overflow: "hidden",
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

              {/* Overlay */}
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
                  padding: "25px",
                }}
              >
                <p
                  style={{
                    color: "#fff",
                    fontSize: window.innerWidth < 768 ? "26px" : "22px",
                    fontWeight: "700",
                    lineHeight: "1.45",
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

      {/* SECTION 5 – FAQ */}
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