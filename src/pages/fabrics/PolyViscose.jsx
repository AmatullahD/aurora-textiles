import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";


function PolyViscoseCard({ icon, title, desc }) {
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
      {/* Icon — always visible */}
      <div style={{ fontSize: "38px", color: "#b8960c", marginBottom: "14px" }}>
        {icon}
      </div>

      {/* Title — before hover, bold 24px */}
      {!hovered && (
        <p style={{
          fontFamily: "sans-serif",
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
          fontFamily: "sans-serif",
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


export default function PolyViscosePage() {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      question: "WHAT MAKES POLY VISCOSE SUITING A GOOD CHOICE FOR MEN'S WEAR?",
      answer:
        "It offers the perfect mix of luxury and practicality—soft like viscose, durable like polyester, and suitable for both daily wear and formal dressing.",
    },
    {
      question: "CAN I BUY POLY VISCOSE FABRIC ONLINE IN DUBAI?",
      answer:
        "Yes, Aurora Textiles supplies Poly Viscose fabric with online ordering and delivery across Dubai and the UAE. Contact us to request swatches or place a bulk order.",
    },
    {
      question: "IS POLY VISCOSE SUITABLE FOR UAE'S WARM CLIMATE?",
      answer:
        "Yes, Poly Viscose is well-suited for the UAE's climate. Its viscose component provides breathability and a soft drape, while polyester adds durability—making it comfortable for year-round formal and semi-formal wear.",
    },
    {
      question: "DO YOU OFFER POLY VISCOSE FABRIC FOR UNIFORMS?",
      answer:
        "Absolutely. Our Poly Viscose fabric is widely used for corporate uniforms, hospitality uniforms, and institutional workwear. We offer bulk ordering with consistent quality and color across batches.",
    },
    {
      question: "WHAT'S THE DIFFERENCE BETWEEN POLY VISCOSE AND WOOL BLEND SUITING?",
      answer:
        "Wool blend suiting offers warmth and a premium feel but is heavier and costlier. Poly Viscose suiting provides a similar polished appearance at a more affordable price point, with added wrinkle resistance and easier care—ideal for the UAE's climate.",
    },
    {
      question: "DO YOU EXPORT POLY VISCOSE FABRIC TO AFRICAN COUNTRIES?",
      answer:
        "Yes, Aurora Textiles exports Poly Viscose fabric to multiple African countries. Our fabrics are popular in markets that require high-quality suiting at competitive prices for both retail and wholesale purposes.",
    },
    {
      question: "WHY IS POLY VISCOSE FABRIC POPULAR IN AFRICAN MARKETS?",
      answer:
        "Poly Viscose is popular in African markets due to its affordability, smooth finish, vibrant color retention, and suitability for formal and traditional garments. It offers a premium look that appeals to both tailors and fashion houses.",
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
            POLY-VISCOSE FABRICS
          </h1>
        </div>
      </section>

      {/* SECTION 1 – SHOP POLY VISCOSE FABRIC IN DUBAI */}
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
            src="/polyviscose-1.webp"
            alt="Poly Viscose Fabric"
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
            Shop Poly Viscose Fabric in Dubai | Premium Poly Viscose Suiting for Men
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
            <strong>Aurora Textiles</strong> is a trusted supplier of{" "}
            <strong>Poly Viscose fabrics in Dubai</strong>, offering superior-quality blends
            perfect for men's suiting, uniforms, and formalwear. Known for their smooth texture,
            wrinkle resistance, and refined appearance, our{" "}
            <strong>Poly Viscose suiting fabrics</strong> provide a sophisticated look that's
            ideal for professional and semi-formal attire.
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
            Whether you're a designer, tailor, garment maker or fashion manufacturer, you can{" "}
            <strong>buy Poly Viscose fabric</strong> in bulk or by meter with us—crafted to
            deliver the perfect balance between comfort, durability, and affordability.
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

      {/* SECTION 2 – WHY CHOOSE AURORA FOR POLY VISCOSE SUITING */}
      {/* SECTION 2 – WHY CHOOSE AURORA FOR POLY VISCOSE SUITING */}
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
          Why Choose Aurora for Poly Viscose Suiting?
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
          <PolyViscoseCard
            icon="★"
            title="Trusted Mills"
            desc="High-quality blends sourced from trusted textile mills"
          />
          <PolyViscoseCard
            icon="⌃⌃"
            title="Classic & Modern Textures"
            desc="Available in classic and modern textures for professional use"
          />
          <PolyViscoseCard
            icon="🤝"
            title="UAE Climate Ready"
            desc="Perfect for UAE's climate—breathable yet polished"
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
          <PolyViscoseCard
            icon="📊"
            title="Retail & Bulk Supply"
            desc="Suitable for both retail and bulk Poly Viscose fabric supply"
          />
          <PolyViscoseCard
            icon="✔"
            title="Quick Delivery"
            desc="Quick delivery and expert guidance for fabric selection"
          />
        </div>
      </section>

      {/* SECTION 3 – WHAT IS POLY VISCOSE FABRIC */}
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
            src="/polyviscose-2.webp"
            alt="What is Poly Viscose Fabric"
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
            What is Poly Viscose Fabric?
          </h2>

          <p
            style={{
              fontFamily: "sans-serif",
              fontSize: "15.5px",
              color: "#222",
              lineHeight: "1.8",
              margin: "0 0 28px 0",
            }}
          >
            <strong>Poly Viscose</strong> is a blended fabric made from polyester and viscose
            fibers, designed to combine the strength and shape retention of polyester with the
            softness and drape of viscose. It's widely used in suiting due to its versatile
            nature, making it one of the most practical fabrics for the UAE's diverse climate.
          </p>

          <h3
            style={{
              fontFamily: "sans-serif",
              fontSize: "18px",
              fontWeight: "700",
              color: "#111",
              margin: "0 0 16px 0",
            }}
          >
            Benefits of Poly Viscose Fabric:
          </h3>

          <ul
            style={{
              fontFamily: "sans-serif",
              fontSize: "15.5px",
              color: "#222",
              lineHeight: "2.2",
              margin: "0",
              paddingLeft: "22px",
            }}
          >
            <li>Ideal for uniforms, formalwear and business attire</li>
            <li>Wrinkle-resistant and easy to maintain</li>
            <li>Breathable with a soft, comfortable feel</li>
            <li>Retains structure and drape after multiple uses</li>
          </ul>
        </div>
      </section>

      {/* SECTION 4 – APPLICATIONS OF POLY VISCOSE FABRIC */}
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
        {/* Left Text */}
        <div style={{ flex: "0 0 44%", maxWidth: "44%" }}>
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
            Applications of Poly Viscose Fabric
          </h2>

          <p
            style={{
              fontFamily: "sans-serif",
              fontSize: "15.5px",
              color: "#222",
              lineHeight: "1.8",
              margin: "0 0 20px 0",
            }}
          >
            Our <strong>Poly Viscose suiting</strong> collection is suitable for a wide range of
            men's clothing applications, including:
          </p>

          <ul
            style={{
              fontFamily: "sans-serif",
              fontSize: "15.5px",
              color: "#222",
              lineHeight: "2",
              margin: "0 0 22px 0",
              paddingLeft: "22px",
            }}
          >
            <li>Business suits and corporate uniforms</li>
            <li>Tailored jackets and trousers</li>
            <li>Formal shirts and blazers</li>
            <li>Sherwanis, Indo-western outfits, and ethnic jackets</li>
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
            Each fabric is available in multiple colors, GSM weights, designs and finishes to
            help you achieve the desired fit and functionality.
          </p>
        </div>

        {/* Right Image Grid – */}
        <div style={{ flex: 1 }}>
          <div
            style={{
              height: "520px",
              overflow: "hidden",
              borderRadius: "4px",
            }}
          >
            <img
              src="/polyviscose-3.webp"
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