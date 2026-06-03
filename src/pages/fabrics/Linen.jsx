import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
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
        height: "300px",
        border: "5px solid #1a237e",
        borderRadius: "25px",
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
  const [hoveredFaq, setHoveredFaq] = useState(null);

  const faqs = [
    {
      question: "Is linen fabric suitable for UAE summers?",
      answer: (
        <span>
          Yes, linen is one of the <strong>best fabrics for warm climates</strong>—it's breathable, sweat-wicking, and ideal for hot, dry conditions like those in the UAE.
        </span>
      ),
    },
    {
      question: "Can I buy linen suit fabric in bulk from Aurora?",
      answer:
        "Yes, Aurora Textiles offers wholesale and bulk purchasing options for linen suit fabric. We cater to fashion houses, tailoring studios, and corporate clients across the UAE.",
    },
    {
      question: "What's the difference between pure linen and linen blends?",
      answer:
        "Pure linen is made entirely from flax fibers and offers maximum breathability and texture. Linen blends combine linen with cotton or viscose to add softness, drape, or reduced wrinkling while retaining linen's natural qualities.",
    },
    {
      question: "Are linen suits appropriate for formal events?",
      answer:
        "Absolutely. Linen suits are well-suited for formal events in warm climates. They offer a refined, sophisticated look while keeping you cool and comfortable throughout the occasion.",
    },
    {
      question: "Can I shop linen fabrics online at Aurora Textiles?",
      answer:
        "Yes, you can explore and order linen fabrics online through Aurora Textiles. Contact us to request swatches, pricing, or place a bulk order for your design needs.",
    },
  ];

  return (
    <div style={{ width: "100%", background: "#fff" }}>

      <Helmet>
        <title>Buy Linen Fabrics in Dubai | Linen Fabric Online by Aurora Textiles</title>
        <meta name="description" content="We offer a wide collection of linen fabrics online, ideal for Formal Shirts, Ethnic, and casual trousers and jackets styles. Your trusted source for wholesale textile solutions in Dubai." />
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
            Linen Fabrics
          </h1>
        </div>
      </section>

      {/* SECTION 1 – BUY LINEN FABRICS IN DUBAI */}
      <section
        style={{
          width: "100%",
          maxWidth: "1100px",
          margin: "0 auto 40px auto",
          padding: "0 40px",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          gap: "10px",
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
              lineHeight: "1.25",
              margin: "0 0 28px 0",
            }}
          >
            Buy Linen Fabrics in Dubai - Lightweight Linen Suiting &amp; Shirting
          </h2>
          <p
            style={{
              fontFamily: "sans-serif",
              fontSize: "19px",
              color: "#222",
              lineHeight: "1.5",
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
              fontSize: "19px",
              color: "#222",
              lineHeight: "1.5",
              margin: "0 0 36px 0",
            }}
          >
            From fashion designers and tailors to boutiques and corporate clients, our linen
            range is trusted across Dubai and the wider MENA region for its sophisticated look
            and high wearability.
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
            fontSize: "42px",
            fontWeight: "700",
            textAlign: "center",
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
            title="Sourced from globally trusted textile partners"
            desc="Sourced from globally trusted textile partners"
          />
          <LinenCard
            icon="⌃⌃"
            title="Variety of GSMs and finishes for different tailoring needs"
            desc="Variety of GSMs and finishes for different tailoring needs"
          />
          <LinenCard
            icon="🤝"
            title="Options available in pure linen and linen blends (cotton/viscose)"
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
            title="Perfect for warm-weather dressing in the UAE"
            desc="Perfect for warm-weather dressing in the UAE"
          />
          <LinenCard
            icon="✔"
            title="Suitable for bulk orders, B2B clients, and fashion houses"
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
            }}
          >
            What is Linen Fabric?
          </h2>

          <p
            style={{
              fontFamily: "sans-serif",
              fontSize: "19px",
              color: "#222",
              lineHeight: "1.5",
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
              lineHeight: "2.6",
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
              fontSize: "19px",
              color: "#222",
              lineHeight: "1.5",
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
            margin: "0 0 18px 0",
          }}
        >
          Applications of Linen Fabric
        </h2>

        <p
          style={{
            fontFamily: "sans-serif",
            fontSize: "19px",
            color: "#333",
            textAlign: "center",
            margin: "0 0 40px 0",
            lineHeight: "1.5",
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
                    fontSize: window.innerWidth < 768 ? "26px" : "28px",
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
                    fontSize: window.innerWidth < 768 ? "26px" : "28px",
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
                    fontSize: "18px",
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
                    fontSize: "17px",
                    color: "#333",
                    lineHeight: "1.5",
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