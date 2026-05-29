import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";


function DenimCard({ icon, title, desc }) {
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
        padding: "32px 24px",
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
      <div style={{ fontSize: "36px", color: "#b8960c", marginBottom: "14px" }}>
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

export default function DenimPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      question: "WHAT MAKES DENIM FABRIC IDEAL FOR MEN'S CLOTHING?",
      answer:
        "Denim offers a perfect blend of strength, comfort, and timeless style—making it suitable for shirts, jackets, and pants.",
    },
    {
      question: "CAN I BUY DENIM FABRIC ONLINE IN DUBAI?",
      answer:
        "Yes, Aurora Textiles offers denim fabric available for purchase online with delivery across Dubai and the UAE. Contact us to place your order or request samples.",
    },
    {
      question: "WHAT TYPES OF DENIM FABRICS ARE AVAILABLE?",
      answer:
        "We offer a wide range of denim fabrics including lightweight shirting denim, medium-weight jacket denim, heavy-weight trouser denim, and specialty washed or printed denims.",
    },
    {
      question: "IS DENIM FABRIC SUITABLE FOR UAE WEATHER?",
      answer:
        "Lightweight denim is well-suited for UAE weather, especially for shirts and casual wear. We also carry lighter weaves and blends designed for warm climates.",
    },
    {
      question: "DO YOU OFFER WHOLESALE DENIM FABRIC SUPPLY?",
      answer:
        "Yes, we supply denim fabric wholesale to fashion houses, tailors, boutiques, and bulk buyers across the UAE at competitive pricing.",
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
            DENIM FABRICS
          </h1>
        </div>
      </section>

      {/* SECTION 1 – SHOP PREMIUM DENIM FABRIC IN DUBAI */}
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
            src="/denim-1.webp"
            alt="Denim Fabric"
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
            Shop Premium Denim Fabric in Dubai Shirts, Jackets &amp; Pants
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
            Looking to <strong>buy denim fabric in Dubai</strong>? Aurora Textiles offers a
            premium collection of <strong>denim fabrics</strong> that combine durability,
            comfort, and timeless appeal. Perfect for creating stylish{" "}
            <strong>denim shirts for men</strong>, <strong>denim jackets</strong>, and{" "}
            <strong>denim pants</strong>, our range caters to both individual designers
            and bulk buyers in the UAE fashion market.
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
            Whether you're designing everyday wear or rugged outerwear, our denim
            fabrics are sourced from trusted mills to ensure exceptional quality,
            consistent color, and long-lasting performance
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

      {/* SECTION 2 – WHY CHOOSE AURORA TEXTILES FOR DENIM FABRIC */}
      {/* SECTION 2 – WHY CHOOSE AURORA TEXTILES FOR DENIM FABRIC */}
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
          Why Choose Aurora Textiles for Denim Fabric?
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
          <DenimCard
            icon="★"
            title="Premium Quality"
            desc="Premium-quality denim sourced from reputed textile mills"
          />
          <DenimCard
            icon="⌃⌃"
            title="Weights & Finishes"
            desc="Available in various weights, textures, and finishes"
          />
          <DenimCard
            icon="🤝"
            title="Tailoring & Bulk"
            desc="Ideal for both small-scale tailoring and bulk manufacturing"
          />
          <DenimCard
            icon="✔"
            title="Fast UAE Delivery"
            desc="Quick delivery across Dubai and the UAE"
          />
        </div>
      </section>


      {/* SECTION 3 – WHAT IS DENIM FABRIC */}
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
        <div style={{ flex: "0 0 44%", maxWidth: "44%" }}>
          <img
            src="/denim-2.webp"
            alt="What is Denim Fabric"
            style={{
              width: "100%",
              height: "620px",
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
              margin: "0 0 22px 0",
              textTransform: "uppercase",
            }}
          >
            What is Denim Fabric?
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
            <strong>Denim</strong> is a strong cotton twill fabric, known for its diagonal weave
            and signature indigo-blue hue. Over time, denim softens with wear, making it a
            favorite for both casual and functional garments.
          </p>

          <h3
            style={{
              fontFamily: "sans-serif",
              fontSize: "17px",
              fontWeight: "700",
              color: "#111",
              margin: "0 0 14px 0",
            }}
          >
            Benefits of Denim Fabric:
          </h3>

          <ul
            style={{
              fontFamily: "sans-serif",
              fontSize: "15.5px",
              color: "#222",
              lineHeight: "2",
              margin: "0 0 28px 0",
              paddingLeft: "22px",
            }}
          >
            <li>Extremely durable and wear-resistant</li>
            <li>Comfortable and breathable over time</li>
            <li>Easy to style—ideal for both casual and semi-formal looks</li>
            <li>Suitable for embroidery, prints, and washed textures</li>
          </ul>

          <h3
            style={{
              fontFamily: "sans-serif",
              fontSize: "20px",
              fontWeight: "700",
              color: "#111",
              margin: "0 0 14px 0",
            }}
          >
            Applications of Denim Fabric
          </h3>

          <p
            style={{
              fontFamily: "sans-serif",
              fontSize: "15.5px",
              color: "#222",
              lineHeight: "1.8",
              margin: "0 0 16px 0",
            }}
          >
            Aurora Textiles provides <strong>denim fabric</strong> that is perfect for multiple
            apparel categories and design requirements.
          </p>

          <p style={{ fontFamily: "sans-serif", fontSize: "15.5px", color: "#222", lineHeight: "1.9", margin: "0 0 6px 0" }}>
            <strong>Denim Shirt for Men</strong> – Lightweight denim suitable for everyday wear and casual outings
          </p>
          <p style={{ fontFamily: "sans-serif", fontSize: "15.5px", color: "#222", lineHeight: "1.9", margin: "0 0 6px 0" }}>
            <strong>Denim Jacket for Men</strong> – Medium to heavy-weight options for structured outerwear
          </p>
          <p style={{ fontFamily: "sans-serif", fontSize: "15.5px", color: "#222", lineHeight: "1.9", margin: "0 0 6px 0" }}>
            <strong>Denim Pants</strong> – Sturdy, flexible fabric for trousers and jeans
          </p>
          <p style={{ fontFamily: "sans-serif", fontSize: "15.5px", color: "#222", lineHeight: "1.9", margin: "0 0 22px 0" }}>
            <strong>Custom Apparel</strong> – Ideal for brands, tailors, and fashion studios looking for trendy, durable fabric
          </p>

          <p
            style={{
              fontFamily: "sans-serif",
              fontSize: "15.5px",
              color: "#222",
              lineHeight: "1.8",
              margin: 0,
            }}
          >
            From classic indigo to contemporary faded washes, we supply{" "}
            <strong>different types of denim fabric</strong> to match your desired look and feel.
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
        <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ddd",
                borderBottom: index === faqs.length - 1 ? "1px solid #ddd" : "none",
                background: "#fff",
              }}
            >
              {/* Question Row */}
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

              {/* Answer */}
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