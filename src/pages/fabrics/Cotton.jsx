import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function CottonPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      question: "WHAT IS GIZA COTTON AND DO YOU OFFER IT?",
      answer:
        "Giza cotton is a premium variety of Egyptian cotton known for its long fibres, exceptional softness, and durability. We occasionally offer Giza-quality shirting fabrics on special request or limited collections.",
    },
    {
      question: "WHAT IS OXFORD COTTON FABRIC BEST USED FOR?",
      answer:
        "Oxford cotton fabric is best used for casual and semi-formal shirts. Its textured weave gives it a polished yet relaxed appearance, making it ideal for business casual and everyday wear.",
    },
    {
      question: "DO YOU SUPPLY COTTON FABRIC WHOLESALE IN THE UAE?",
      answer:
        "Yes, we supply cotton fabric wholesale across the UAE. Whether you're a fashion house, tailor, or retailer, we offer competitive pricing and bulk availability for all our cotton collections.",
    },
    {
      question: "WHAT ARE THE BENEFITS OF COTTON LINEN FABRIC?",
      answer:
        "Cotton linen fabric combines the breathability of linen with the softness of cotton. It is lightweight, moisture-wicking, and perfect for warm climates like the UAE, offering both comfort and a refined look.",
    },
    {
      question: "HOW DO I CHOOSE THE BEST COTTON FABRIC FOR MEN'S CLOTHING?",
      answer:
        "Choosing the best cotton fabric depends on the end use. For everyday shirts, plain or Oxford weave works well. For formal or structured garments, twill or gabardine cotton offers durability and a sharp finish.",
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
            COTTON FABRICS
          </h1>
        </div>
      </section>

      {/* SECTION 1 – SHOP COTTON FABRICS FROM AURORA TEXTILE */}
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
            src="/faq-image.jpg"
            alt="Cotton Fabric"
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
            Shop Cotton Fabrics from Aurora Textile
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
            Cotton is one of the most versatile and widely preferred natural
            fibres—celebrated for its breathability, softness, and
            moisture-absorbing qualities. At Aurora Textiles, we bring you a
            curated range of cotton fabrics suitable for the UAE's warm climate
            and dynamic fashion needs. Whether you're sourcing Premium Cotton
            Fabric, Oxford cotton, Plain, Twill, Gabardine or lightweight
            shirting materials, our collection is ideal for men's formal shirts,
            kurtas, Suitings and light outerwear.
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
            Looking to buy cotton fabric online or place a cotton fabric
            wholesale order in Dubai? Aurora Textiles is your trusted supplier.
            Our knowledgeable team will help you select the right weaves—like
            plain weave, gabardine, or twill—based on your usage, styling
            preferences, and performance needs.
          </p>

          {/* Buttons */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <button
              style={{
                background: "#b8960c",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                padding: "14px 32px",
                fontSize: "15px",
                fontWeight: "600",
                cursor: "pointer",
                fontFamily: "sans-serif",
                letterSpacing: "0.5px",
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

      {/* SECTION 2 – WHY CHOOSE US */}
      <section
        style={{
          width: "100%",
          background: "#f9f9f9",
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
          Why Choose Us for Cotton Fabric Wholesale
        </h2>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "32px",
            maxWidth: "1200px",
            margin: "0 auto",
            flexWrap: "wrap",
          }}
        >
          {/* Card 1 */}
          <div
            style={{
              flex: "1 1 280px",
              maxWidth: "340px",
              border: "2px solid #1a237e",
              borderRadius: "16px",
              padding: "40px 30px",
              textAlign: "center",
              background: "#fff",
              boxSizing: "border-box",
            }}
          >
            <div style={{ fontSize: "40px", color: "#b8960c", marginBottom: "18px" }}>★</div>
            <p
              style={{
                fontFamily: "sans-serif",
                fontSize: "16px",
                fontWeight: "700",
                color: "#111",
                lineHeight: "1.6",
                margin: 0,
              }}
            >
              Breathable and lightweight—ideal for UAE's warm climate
            </p>
          </div>

          {/* Card 2 */}
          <div
            style={{
              flex: "1 1 280px",
              maxWidth: "340px",
              border: "2px solid #1a237e",
              borderRadius: "16px",
              padding: "40px 30px",
              textAlign: "center",
              background: "#fff",
              boxSizing: "border-box",
            }}
          >
            <div style={{ fontSize: "40px", color: "#b8960c", marginBottom: "18px" }}>⌃⌃</div>
            <p
              style={{
                fontFamily: "sans-serif",
                fontSize: "16px",
                fontWeight: "700",
                color: "#111",
                lineHeight: "1.6",
                margin: 0,
              }}
            >
              Variety of weaves for different styles
            </p>
          </div>

          {/* Card 3 */}
          <div
            style={{
              flex: "1 1 280px",
              maxWidth: "340px",
              border: "2px solid #1a237e",
              borderRadius: "16px",
              padding: "40px 30px",
              textAlign: "center",
              background: "#fff",
              boxSizing: "border-box",
            }}
          >
            <div style={{ fontSize: "40px", color: "#b8960c", marginBottom: "18px" }}>🤝</div>
            <p
              style={{
                fontFamily: "sans-serif",
                fontSize: "15px",
                color: "#333",
                lineHeight: "1.7",
                margin: 0,
              }}
            >
              We partner with trusted mills to ensure every fabric batch
              maintains top-tier quality, finish, and reliability.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 – PREMIUM COTTON FABRICS IN DUBAI */}
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
            src="/faq-image.jpg"
            alt="Premium Cotton"
            style={{
              width: "100%",
              height: "620px",
              objectFit: "cover",
              objectPosition: "top",
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
            Premium Cotton Fabrics in Dubai
          </h2>

          <h3
            style={{
              fontFamily: "sans-serif",
              fontSize: "17px",
              fontWeight: "700",
              color: "#111",
              margin: "0 0 14px 0",
            }}
          >
            Naturally Breathable. Unmatched Comfort.
          </h3>

          <p
            style={{
              fontFamily: "sans-serif",
              fontSize: "15.5px",
              color: "#222",
              lineHeight: "1.8",
              margin: "0 0 18px 0",
            }}
          >
            At Aurora Textiles, we proudly offer a curated range of{" "}
            <strong>premium cotton fabrics</strong>—sourced with quality,
            sustainability, and comfort in mind. Known for its soft hand feel
            and breathability, cotton is one of the most versatile fabrics for
            men's shirting and light formalwear in the UAE's hot and humid
            climate.
          </p>

          <p
            style={{
              fontFamily: "sans-serif",
              fontSize: "15.5px",
              color: "#222",
              lineHeight: "1.8",
              margin: "0 0 28px 0",
            }}
          >
            Whether you're a fashion house, a tailoring boutique, or a fabric
            wholesaler, our cotton collection includes{" "}
            <strong>Oxford cotton fabrics</strong>, and exclusive
            cellulose-based weaves suited for various occasions.
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
            Cotton Weaves We Offer
          </h3>

          <p
            style={{
              fontFamily: "sans-serif",
              fontSize: "15.5px",
              color: "#222",
              lineHeight: "1.8",
              margin: "0 0 14px 0",
            }}
          >
            We understand that not all cotton is made equal. Our collection
            features different <strong>cotton weaves</strong> to suit varied
            styling and functionality needs:
          </p>

          <ul
            style={{
              fontFamily: "sans-serif",
              fontSize: "15.5px",
              color: "#222",
              lineHeight: "2",
              margin: "0",
              paddingLeft: "22px",
            }}
          >
            <li>
              <strong>Plain Weave</strong> – Lightweight and breathable; ideal
              for everyday shirting.
            </li>
            <li>
              <strong>Oxford Cotton</strong> – A textured weave that's casual
              yet polished.
            </li>
            <li>
              <strong>Twill Weave</strong> – Durable with a subtle diagonal
              rib, suitable for structured shirts.
            </li>
            <li>
              <strong>Gaberdine</strong> – Smooth, tightly woven, and perfect
              for trousers or jackets.
            </li>
          </ul>
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
                    padding: "0 28px 24px 28px",
                    fontFamily: "sans-serif",
                    fontSize: "15px",
                    color: "#333",
                    lineHeight: "1.8",
                    borderTop: "1px solid #eee",
                    paddingTop: "20px",
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
    </div>
  );
}