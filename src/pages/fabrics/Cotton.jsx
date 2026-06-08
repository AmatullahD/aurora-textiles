import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";


export default function CottonPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredFaq, setHoveredFaq] = useState(null);

  const faqs = [
    {
      question: "What is Giza cotton and do you offer it?",
      answer:
        "Giza cotton is a premium variety of Egyptian cotton known for its long fibres, exceptional softness, and durability. We occasionally offer Giza-quality shirting fabrics on special request or limited collections.",
    },
    {
      question: "What is Oxford cotton fabric best used for?",
      answer:
        "Oxford cotton fabric is best used for casual and semi-formal shirts. Its textured weave gives it a polished yet relaxed appearance, making it ideal for business casual and everyday wear.",
    },
    {
      question: "Do you supply cotton fabric wholesale in the UAE?",
      answer:
        "Yes, we supply cotton fabric wholesale across the UAE. Whether you're a fashion house, tailor, or retailer, we offer competitive pricing and bulk availability for all our cotton collections.",
    },
    {
      question: "What are the benefits of cotton linen fabric?",
      answer:
        "Cotton linen fabric combines the breathability of linen with the softness of cotton. It is lightweight, moisture-wicking, and perfect for warm climates like the UAE, offering both comfort and a refined look.",
    },
    {
      question: "How do I choose the best cotton fabric for men's clothing?",
      answer:
        "Choosing the best cotton fabric depends on the end use. For everyday shirts, plain or Oxford weave works well. For formal or structured garments, twill or gabardine cotton offers durability and a sharp finish.",
    },
  ];

  return (
    <div style={{ width: "100%", background: "#fff" }}>

      <Helmet>
        <title>Buy Cotton Fabric in UAE | Shop Pure Cotton Fabrics at Aurora Textiles</title>
        <meta name="description" content="At Aurora Textiles, we offer pure cotton, as well as cotton weaves and Cotton Blends, in Dubai, UAE, at affordable prices. Our Collection includes: Plain, Twill, Oxford Cotton, Gaberdine, etc." />
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
            Cotton Fabrics
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
            src="/cotton.webp"
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
              color: "#344886",
              fontSize: "36px",
              fontWeight: "700",
              lineHeight: "1.25",
              margin: "0 0 28px 0",
              
            }}
          >
            Shop Cotton Fabrics from Aurora Textile
          </h2>
          <p
            style={{
              fontFamily: "sans-serif",
              fontSize: "19px",
              color: "#222",
              lineHeight: "1.5",
              margin: "0 0 20px 0",
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
              fontSize: "19px",
              color: "#222",
              lineHeight: "1.5",
              margin: "0 0 36px 0",
            }}
          >
            Looking to buy cotton fabric online or place a cotton fabric
            wholesale order in Dubai? Aurora Textiles is your trusted supplier.
            Our knowledgeable team will help you select the right weaves—like
            plain weave, gabardine, or twill—based on your usage, styling
            preferences, and performance needs.
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
                                    padding: "14px 36px",
                                    fontSize: "15px",
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

      {/* SECTION 2 – WHY CHOOSE US */}
      <section
        style={{
          width: "100%",
          background: "#ffffff",
          padding: "60px 40px",
          boxSizing: "border-box",
          marginBottom: "70px",
        }}
      >
        <h2
          style={{
            fontFamily: "'Cinzel Decorative', serif",
            color: "#344886",
            fontSize: "38px",
            fontWeight: "700",
            textAlign: "center",
           
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
            onMouseEnter={() => setHoveredCard(1)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              flex: "1 1 280px",
              maxWidth: "340px",
              height: "280px",
              border: "5px solid #1a237e",
              borderRadius: "18px",
              padding: "10px 5px",
              textAlign: "center",
              background: "#fff",
              boxSizing: "border-box",
              cursor: "default",
              transition: "box-shadow 0.3s ease",
              boxShadow: hoveredCard === 1 ? "0 8px 32px rgba(26,35,126,0.15)" : "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <div style={{ fontSize: "60px", color: "#b8960c", marginBottom: "18px" }}>★</div>
            {hoveredCard === 1 ? (
              <p
                style={{
                  fontFamily: "sans-serif",
                  fontSize: "15px",
                  fontWeight: "400",
                  color: "#111",
                  lineHeight: "1.7",
                  margin: "0 16px",
                }}
              >
                Our cotton fabrics allow excellent air circulation and softness,
                keeping you cool and comfortable in high temperatures.
              </p>
            ) : (
              <p
                style={{
                  fontFamily: "sans-serif",
                  fontSize: "24px",
                  fontWeight: "700",
                  color: "#111",
                  lineHeight: "1.6",
                  margin: "0 10px",
                }}
              >
                Breathable and lightweight—ideal for UAE's warm climate
              </p>
            )}
          </div>

          {/* Card 2 */}
          <div
            onMouseEnter={() => setHoveredCard(2)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              flex: "1 1 280px",
              maxWidth: "340px",
              height: "280px",
              border: "5px solid #1a237e",
              borderRadius: "18px",
              padding: "10px 5px",
              textAlign: "center",
              background: "#fff",
              boxSizing: "border-box",
              cursor: "default",
              transition: "box-shadow 0.3s ease",
              boxShadow: hoveredCard === 2 ? "0 8px 32px rgba(26,35,126,0.15)" : "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <div style={{ fontSize: "60px", color: "#b8960c", marginBottom: "10px" }}>⌃⌃</div>
            {hoveredCard === 2 ? (
              <p
                style={{
                  fontFamily: "sans-serif",
                  fontSize: "15px",
                  fontWeight: "400",
                  color: "#111",
                  lineHeight: "1.7",
                  margin: "0 16px",
                }}
              >
                From Oxford and Twill to Gabardine and Plain Cotton, we offer
                options that suit everything from everyday shirting to ethnic
                menswear.
              </p>
            ) : (
              <p
                style={{
                  fontFamily: "sans-serif",
                  fontSize: "24px",
                  fontWeight: "700",
                  color: "#111",
                  lineHeight: "1.6",
                  margin: 0,
                }}
              >
                Variety of weaves for different styles
              </p>
            )}
          </div>

          {/* Card 3 */}
          <div
            onMouseEnter={() => setHoveredCard(3)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{
              flex: "1 1 280px",
              maxWidth: "340px",
              height: "280px",
              border: "5px solid #1a237e",
              borderRadius: "18px",
              padding: "10px 5px",
              textAlign: "center",
              background: "#fff",
              boxSizing: "border-box",
              cursor: "default",
              transition: "box-shadow 0.3s ease",
              boxShadow: hoveredCard === 3 ? "0 8px 32px rgba(26,35,126,0.15)" : "none",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <div style={{ fontSize: "60px", color: "#b8960c", marginBottom: "18px" }}>🤝</div>
            {hoveredCard === 3 ? (
              <p
                style={{
                  fontFamily: "sans-serif",
                  fontSize: "15px",
                  fontWeight: "400",
                  color: "#111",
                  lineHeight: "1.7",
                  margin: "0 16px",
                }}
              >
                We partner with trusted mills to ensure every fabric batch
                maintains top-tier quality, finish, and reliability.
              </p>
            ) : (
              <p
                style={{
                  fontFamily: "sans-serif",
                  fontSize: "20px",
                  fontWeight: "700",
                  color: "#111",
                  lineHeight: "1.6",
                  margin: 0,
                }}
              >
                Sourced from reputed mills with consistency in quality
              </p>
            )}
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
            src="/cotton-1.webp"
            alt="Premium Cotton"
            style={{
              width: "100%",
              height: "680px",
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
              color: "#344886",
              fontSize: "38px",
              fontWeight: "700",
              
              lineHeight: "1.25",
              margin: "0 0 24px 0",
            }}
          >
            Premium Cotton 
            <br />Fabrics in Dubai
          </h2>

          <h3
            style={{
              fontFamily: "sans-serif",
              fontSize: "28px",
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
              fontSize: "19px",
              color: "#222",
              lineHeight: "1.5",
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
              fontSize: "19px",
              color: "#222",
              lineHeight: "1.5",
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
              fontSize: "28px",
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
              fontSize: "19px",
              color: "#222",
              lineHeight: "1.5",
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
              textDecoration: "none",
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
                    color: openFaq === index ? "#b39131" : hoveredFaq === index ? "#070e46" : "#0b18a1",
                    letterSpacing: "0.5px",
                    lineHeight: "1.4",
                    transition: "color 0.2s ease",
                  }}
                >
                  {faq.question}
                </span>
                <span
                  style={{
                    fontSize: "19px",
                    color: openFaq === index ? "#b39131" : hoveredFaq === index ? "#070e46" : "#0b18a1",
                    fontWeight: "600",
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
                    padding: "0 28px 24px 28px",
                    fontFamily: "sans-serif",
                    fontSize: "19px",
                    color: "#292626",
                    lineHeight: "1.5",
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
      <ScrollToTop />
    </div>
  );
}




 