import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";
import { FaStar, FaRegHandshake } from "react-icons/fa6";
import { FaAngleDoubleUp, FaRegCheckCircle } from "react-icons/fa";


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
          fontFamily: "'Poppins', sans-serif",
          fontSize: "24px",
          fontWeight: "700",
          color: "#1a237e",
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
          fontFamily: "'Poppins', sans-serif",
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
  const [hoveredFaq, setHoveredFaq] = useState(null);

  const faqs = [
    {
      question: "What makes denim fabric ideal for men’s clothing?",
      answer:
        "Denim offers a perfect blend of strength, comfort, and timeless style—making it suitable for shirts, jackets, and pants.",
    },
    {
      question: "Can I buy denim fabric online in Dubai?",
      answer:
        "Yes, Aurora Textiles offers denim fabric available for purchase online with delivery across Dubai and the UAE. Contact us to place your order or request samples.",
    },
    {
      question: "What types of denim fabrics are available?",
      answer:
        "We offer a wide range of denim fabrics including lightweight shirting denim, medium-weight jacket denim, heavy-weight trouser denim, and specialty washed or printed denims.",
    },
    {
      question: "Is denim fabric suitable for UAE weather?",
      answer:
        "Lightweight denim is well-suited for UAE weather, especially for shirts and casual wear. We also carry lighter weaves and blends designed for warm climates.",
    },
    {
      question: "Do you offer wholesale denim fabric supply?",
      answer:
        "Yes, we supply denim fabric wholesale to fashion houses, tailors, boutiques, and bulk buyers across the UAE at competitive pricing.",
    },
  ];

  return (
    <div style={{ width: "100%", background: "#fff" }}>


      <Helmet>
        <title>Buy Denim Fabric in Dubai | Denim Fabric Suppliers</title>
        <meta name="description" content="Buy Denim fabrics from Aurora Textiles in Dubai. We are a high-quality Denim Fabric Supplier in the UAE & MENA Regions. Contact us now." />

        <script type="application/ld+json">{JSON.stringify({ "@context": "https://schema.org", "@type": "Product", "name": "Denim Fabric", "description": "Buy high-quality denim fabric wholesale in Dubai, UAE from Aurora Textiles. Premium denim fabric supplier in UAE and MENA regions.", "brand": { "@type": "Brand", "name": "Aurora Textiles" }, "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "priceCurrency": "AED", "seller": { "@type": "Organization", "name": "Aurora Textiles", "url": "https://aurora-textiles.vercel.app" } }, "url": "https://aurora-textiles.vercel.app/denim-fabric" })}</script>
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
            Denim Fabric
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
              borderRadius: "20px",
            }}
          />
        </div>

        {/* Right Text */}
        <div style={{ flex: 1 }}>
          <h2
            style={{
              fontFamily: "'Cinzel Decorative', serif",
              color: "#344886",
              fontSize: "36px",
              fontWeight: "700",
              lineHeight: "1.25",
              margin: "0 0 28px 0",
            }}
          >
            Shop Premium Denim Fabric in Dubai Shirts, Jackets &amp; Pants
          </h2>
          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "19px",
              color: "#222",
              lineHeight: "1.5",
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
              fontFamily: "'Poppins', sans-serif",
              fontSize: "19px",
              color: "#222",
              lineHeight: "1.5",
              margin: "0 0 36px 0",
            }}
          >
            Whether you're designing everyday wear or rugged outerwear, our denim
            fabrics are sourced from trusted mills to ensure exceptional quality,
            consistent color, and long-lasting performance
          </p>

          {/* Button */}
          <div
            onClick={() => (window.location.href = "/contact-us")}
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
                padding: "14px 32px",
                fontFamily: "'Poppins', sans-serif",
                fontSize: "18px",
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
                background: "#344886",
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
            color: "#344886",
            fontSize: "30px",
            fontWeight: "700",
            textAlign: "center",
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
            icon={<FaStar />}
            title="Premium Quality"
            desc="Premium-quality denim sourced from reputed textile mills"
          />
          <DenimCard
            icon={<FaAngleDoubleUp />}
            title="Weights & Finishes"
            desc="Available in various weights, textures, and finishes"
          />
          <DenimCard
            icon={<FaRegHandshake />}
            title="Tailoring & Bulk"
            desc="Ideal for both small-scale tailoring and bulk manufacturing"
          />
          <DenimCard
            icon={<FaRegCheckCircle />}
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
              height: "680px",
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
              color: "#344886",
              fontSize: "34px",
              fontWeight: "700",
              lineHeight: "1.25",
              margin: "0 0 22px 0",
            }}
          >
            What is Denim Fabric?
          </h2>

          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "18px",
              color: "#222",
              lineHeight: "1.5",
              margin: "0 0 22px 0",
            }}
          >
            <strong>Denim</strong> is a strong cotton twill fabric, known for its diagonal weave
            and signature indigo-blue hue. Over time, denim softens with wear, making it a
            favorite for both casual and functional garments.
          </p>

          <h3
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "24px",
              fontWeight: "700",
              color: "#111",
              margin: "0 0 14px 0",
            }}
          >
            Benefits of Denim Fabric:
          </h3>

          <ul
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "19px",
              color: "#222",
              lineHeight: "1.2",
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
              fontFamily: "'Poppins', sans-serif",
              fontSize: "24px",
              fontWeight: "700",
              color: "#111",
              margin: "0 0 14px 0",
            }}
          >
            Applications of Denim Fabric
          </h3>

          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "19px",
              color: "#222",
              lineHeight: "1.2",
              margin: "0 0 16px 0",
            }}
          >
            Aurora Textiles provides <strong>denim fabric</strong> that is perfect for multiple
            apparel categories and design requirements.
          </p>

          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "17px", color: "#222", lineHeight: "1.2", margin: "0 0 6px 0" }}>
            <strong>Denim Shirt for Men</strong> – Lightweight denim suitable for everyday wear and casual outings
          </p>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "17px", color: "#222", lineHeight: "1.2", margin: "0 0 6px 0" }}>
            <strong>Denim Jacket for Men</strong> – Medium to heavy-weight options for structured outerwear
          </p>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "17px", color: "#222", lineHeight: "1.2", margin: "0 0 6px 0" }}>
            <strong>Denim Pants</strong> – Sturdy, flexible fabric for trousers and jeans
          </p>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "17px", color: "#222", lineHeight: "1.2", margin: "0 0 22px 0" }}>
            <strong>Custom Apparel</strong> – Ideal for brands, tailors, and fashion studios looking for trendy, durable fabric
          </p>

          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "17px",
              color: "#222",
              lineHeight: "1.5",
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
          maxWidth: "1300px",
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
              color: "#344886",
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
                    fontSize: "19px",
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

              {/* Answer */}
              {openFaq === index && (
                <div
                  style={{
                    padding: "20px 28px 24px 28px",
                    fontFamily: "'Poppins', sans-serif",
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