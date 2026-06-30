import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";
import { FaStar, FaRegHandshake } from "react-icons/fa6";
import { FaAngleDoubleUp, FaRegCheckCircle } from "react-icons/fa";
import { FaChartBar } from "react-icons/fa";


function PolyWoolLycraCard({ icon, title, desc, isBottom }) {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: "0 0 auto",
        width: isBottom ? "300px" : "300px",
        height: "300px",
        border: "5px solid #1a1a5e",
        borderRadius: "24px",
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
      <div style={{ fontSize: "36px", color: "#c8a84b", marginBottom: "14px" }}>
        {icon}
      </div>

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
          fontSize: "17px",
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

export default function PolyWoolLycraPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [hoveredFaq, setHoveredFaq] = useState(null);

  const faqs = [
    {
      question: "What makes Poly Wool Lycra fabric ideal for suiting?",
      answer:
        "It combines the refined look of wool with the strength of polyester and stretch of Lycra, offering unmatched comfort, durability, and fit.",
    },
    {
      question: "Can I buy Poly Wool Lycra fabric online in Dubai?",
      answer:
        "Yes, Aurora Textiles offers easy ordering and delivery of Poly Wool Lycra fabrics across Dubai and the MENA region. Contact us to place your order or request fabric samples.",
    },
    {
      question: "Is Poly Wool Lycra fabric suitable for the UAE’s weather?",
      answer:
        "Absolutely. The Lycra component adds stretch and breathability, while wool provides natural temperature regulation—making it perfectly suited for the UAE's climate.",
    },
    {
      question: "What garments can be made from Poly Wool Lycra?",
      answer:
        "Poly Wool Lycra is ideal for formal business suits, corporate uniforms, blazers, jackets, tailored trousers, and waistcoats—anywhere structure and comfort are both required.",
    },
    {
      question: "Do you offer bulk Poly Wool Lycra suiting fabrics?",
      answer:
        "Yes, we supply Poly Wool Lycra fabrics in bulk quantities for tailors, wholesalers, fashion brands, and corporate uniform suppliers across Dubai and the wider MENA region.",
    },
  ];

  return (
    <div style={{ width: "100%", background: "#fff" }}>

      <Helmet>
        <title>Buy Poly Wool Lycra | Poly Wool Lycra Suiting Fabrics Dubai</title>
        <meta name="description" content="At Aurora Textiles, we offer a premium collection of Poly Wool Lycra Suiting Fabrics, crafted for men who value comfort, flexibility, and a refined appearance. Check out Poly Wool Fabric for Men in Dubai" />
      
        <script type="application/ld+json">{JSON.stringify({"@context": "https://schema.org", "@type": "Product", "name": "Poly Wool Lycra Fabric", "description": "Buy poly wool lycra suiting fabrics wholesale in Dubai from Aurora Textiles. Stretch suiting fabric for comfort and style in UAE.", "brand": {"@type": "Brand", "name": "Aurora Textiles"}, "offers": {"@type": "Offer", "availability": "https://schema.org/InStock", "priceCurrency": "AED", "seller": {"@type": "Organization", "name": "Aurora Textiles", "url": "https://aurora-textiles.vercel.app"}}, "url": "https://aurora-textiles.vercel.app/poly-wool-lycra-fabric"})}</script>
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
            Poly Wool Lycra Fabric
          </h1>
        </div>
      </section>

      {/* ── SECTION 1: INTRO – Image Left, Text Right ── */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto 50px auto",
          padding: "0 40px",
          display: "flex",
          gap: "40px",
          flexWrap: "wrap",
        }}
      >
        {/* Image */}
        <div style={{ flex: "0 0 auto", width: "100%", maxWidth: "500px" }}>
          <img
            src="/polywool-lycra1.jpg"
            alt="Poly Wool Lycra Fabric"
            style={{
              width: "100%",
              height: "580px",
              objectFit: "cover",
              display: "block",
              borderRadius: "20px",
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
              color: "#344886",
              marginBottom: "28px",
              lineHeight: "1.2",
              margin: "0 0 28px 0",
            }}
          >
            Buy Poly Wool Lycra Fabric in Dubai
          </h2>
          <p
            style={{
              fontSize: "19px",
              color: "#333",
              lineHeight: "1.5",
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
              fontSize: "19px",
              color: "#333",
              lineHeight: "1.5",
              marginBottom: "36px",
            }}
          >
            Whether you're tailoring business suits, blazers, or formal trousers, our{" "}
            <strong>Poly Wool Lycra fabrics</strong> ensure a superior fit and luxurious feel. You
            can easily <strong>buy Poly Wool Lycra fabric in Dubai</strong> from Aurora Textiles,
            trusted by tailors, designers, and fashion brands across the UAE and MENA region.
          </p>
          {/* Button */}
                        <div
                            style={{ display: "flex", alignItems: "center", gap: "16px" }}>

                            <a
                                href="/contact-us"
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
                                    fontSize: "19px",
                                    fontWeight: "500",
                                    borderRadius: "6px",
                                    cursor: "pointer",
                                    letterSpacing: "0.5px",
                                    transition: "all 0.3s ease",
                                    textDecoration: "none",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                Contact Us
                            </a>

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
            color: "#344886",
            textAlign: "center",
            marginBottom: "50px",
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
          <PolyWoolLycraCard
            icon={<FaStar />}
            title="Trusted Mills"
            desc="Sourced from trusted mills for consistent quality and performance"
            isBottom={false}
          />
          <PolyWoolLycraCard
            icon={<FaAngleDoubleUp />}
            title="Stretch Technology"
            desc="Wide range of suiting blends with modern stretch technology"
            isBottom={false}
          />
          <PolyWoolLycraCard
            icon={<FaRegHandshake />}
            title="Dubai Climate Ready"
            desc="Designed for Dubai's climate—breathable yet refined"
            isBottom={false}
          />
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
          <PolyWoolLycraCard
            icon={<FaChartBar />}
            title="Bulk & Custom Orders"
            desc="Suitable for bulk orders and custom tailoring projects"
            isBottom={true}
          />
          <PolyWoolLycraCard
            icon={<FaRegCheckCircle />}
            title="Quick B2B Delivery"
            desc="Quick delivery and reliable B2B support across the UAE and MENA region"
            isBottom={true}
          />
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
            src="/polywool-lycra2.webp"
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
              color: "#344886",
              marginBottom: "24px",
              lineHeight: "1.2",
              margin: "0 0 24px 0",
            }}
          >
            What Is Poly Wool Lycra Fabric?
          </h2>

          <p style={{ fontSize: "19px", color: "#333", lineHeight: "1.5", marginBottom: "16px" }}>
            <strong>Poly Wool Lycra fabric</strong> is a tri-blend of{" "}
            <strong>polyester, wool, and Lycra</strong>, combining the best characteristics of each
            fiber:
          </p>

          <ul style={{ paddingLeft: "20px", margin: "0 0 20px 0" }}>
            <li style={{ fontSize: "19px", color: "#333", lineHeight: "1.5", marginBottom: "8px" }}>
              <strong>Polyester</strong> adds durability and wrinkle resistance
            </li>
            <li style={{ fontSize: "19px", color: "#333", lineHeight: "1.5", marginBottom: "8px" }}>
              <strong>Wool</strong> contributes natural breathability and warmth
            </li>
            <li style={{ fontSize: "19px", color: "#333", lineHeight: "1.5", marginBottom: "8px" }}>
              <strong>Lycra (spandex)</strong> offers stretch for enhanced comfort and mobility
            </li>
          </ul>

          <p style={{ fontSize: "19px", color: "#333", lineHeight: "1.5", marginBottom: "24px" }}>
            This blend makes it a go-to choice for premium menswear, ensuring elegance,
            practicality, and flexibility—perfectly suited for the UAE's corporate and semi-formal
            lifestyle.
          </p>

          <p
            style={{
              fontSize: "19px",
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
                  fontSize: "19px",
                  color: "#333",
                  lineHeight: "1.5",
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
              color: "#344886",
              marginBottom: "24px",
              lineHeight: "1.2",
              margin: "0 0 24px 0",
            }}
          >
            Applications Of Poly Wool Lycra Suiting
          </h2>

          <p style={{ fontSize: "19px", color: "#333", lineHeight: "1.5", marginBottom: "20px" }}>
            Our <strong>Poly Wool Lycra fabrics</strong> are ideal for a wide range of menswear
            applications:
          </p>

          <p style={{ fontSize: "19px", color: "#333", lineHeight: "1.5", marginBottom: "8px" }}>
            <strong>Formal Business Suits</strong> – Perfect for executives and professionals.
          </p>
          <p style={{ fontSize: "19px", color: "#333", lineHeight: "1.5", marginBottom: "8px" }}>
            <strong>Corporate Uniforms</strong> – Provides comfort with long-lasting finish.
          </p>
          <p style={{ fontSize: "19px", color: "#333", lineHeight: "1.5", marginBottom: "8px" }}>
            <strong>Blazers &amp; Jackets</strong> – Structured yet stretchable for modern fits.
          </p>
          <p style={{ fontSize: "19px", color: "#333", lineHeight: "1.5", marginBottom: "24px" }}>
            <strong>Trousers &amp; Waistcoats</strong> – Durable and wrinkle-resistant for daily
            use.
          </p>

          <p style={{ fontSize: "19px", color: "#333", lineHeight: "1.5" }}>
            Each fabric is available in multiple weights, textures, and finishes to suit diverse
            tailoring requirements.
          </p>
        </div>

        {/*  Image Grid Right */}
        <div style={{ flex: 1 }}>
          <div
            style={{
              height: "520px",
              overflow: "hidden",
              borderRadius: "4px",
            }}
          >
            <img
              src="/polywool-lycra3.webp"
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

      {/* ── SECTION 5: FAQ ── */}
      <section
        style={{
          padding: "60px 40px 80px",
          background: "#fff",
          maxWidth: "1300px",
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
              color: "#344886",
              display: "inline-block",
              letterSpacing: "4px",
              margin: 0,
              position: "relative",
            }}
          >
            FAQ
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
                onMouseEnter={() => setHoveredFaq(i)}
                onMouseLeave={() => setHoveredFaq(null)}
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
                    fontSize: "18px",
                    fontWeight: "700",
                    color: openFaq === i ? "#b8960c" : hoveredFaq === i ? "#070e46" : "#0b18a1",
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
                    color: openFaq === i ? "#b8960c" : hoveredFaq === i ? "#070e46" : "#0b18a1",
                    fontWeight: "300",
                    flexShrink: 0,
                    marginLeft: "16px",
                    transition: "color 0.2s ease",
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
                      fontSize: "17px",
                      color: "#333",
                      lineHeight: "1.5",
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