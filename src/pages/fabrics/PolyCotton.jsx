import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function PolyCottonPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      question: "WHAT IS THE IDEAL USE OF POLYCOTTON FABRIC?",
      answer: (
        <span>
          Polycotton is great for <strong>work uniforms</strong>, casual wear, and light formalwear due to its durability and comfort.
        </span>
      ),
    },
    {
      question: "CAN I BUY POLYCOTTON FABRIC ONLINE IN DUBAI?",
      answer:
        "Yes, Aurora Textiles offers polycotton fabric available for purchase online with delivery across Dubai and the UAE. Contact us to place your order or request fabric samples.",
    },
    {
      question: "DO YOU SUPPLY POLYCOTTON IN DIFFERENT BLEND RATIOS?",
      answer:
        "Yes, we supply polycotton in various blend ratios such as 65/35 and 80/20 (polyester/cotton) to suit different applications including uniforms, casual wear, and semi-formal menswear.",
    },
    {
      question: "IS POLYCOTTON FABRIC GOOD FOR HOT WEATHER?",
      answer:
        "Polycotton fabric performs well in warm climates thanks to the cotton component that allows breathability, while the polyester adds moisture management and quick-drying properties—making it suitable for the UAE's hot weather.",
    },
    {
      question: "DO YOU PROVIDE BULK POLYCOTTON FABRIC FOR UNIFORMS?",
      answer:
        "Yes, we provide bulk polycotton fabric specifically suited for uniforms across hospitality, healthcare, corporate, and industrial sectors. Contact our team for wholesale pricing and GSM options.",
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
            POLY-COTTON FABRICS
          </h1>
        </div>
      </section>

      {/* SECTION 1 – FABRIC IN DUBAI | DURABLE POLYCOTTON FOR UNIFORMS & MENSWEAR */}
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
            alt="PolyCotton Fabric"
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
            Fabric in Dubai | Durable Polycotton for Uniforms &amp; Menswear H2
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
            Looking to <strong>buy polycotton fabric in Dubai</strong>? Aurora Textiles supplies
            premium <strong>polycotton fabrics</strong> designed for durability, breathability,
            and versatile use. As a trusted <strong>polycotton supplier in the UAE</strong>, we
            serve tailors, uniform manufacturers, and menswear brands with consistent,
            high-quality fabric solutions.
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
            Whether you're making <strong>work uniforms</strong>, casual shirts, or semi-formal
            attire, our <strong>polycotton fabric</strong> range offers the perfect balance of
            comfort and resilience—ideal for the UAE's climate and fast-paced work environments.
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

      {/* SECTION 2 – WHY CHOOSE AURORA FOR POLYCOTTON FABRICS */}
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
            fontSize: "30px",
            fontWeight: "700",
            textAlign: "center",
            textTransform: "uppercase",
            margin: "0 0 50px 0",
          }}
        >
          Why Choose Aurora for Polycotton Fabrics?
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
          {/* Card 1 */}
          <div
            style={{
              flex: "1 1 220px",
              maxWidth: "280px",
              border: "2px solid #1a237e",
              borderRadius: "16px",
              padding: "36px 24px",
              textAlign: "center",
              background: "#fff",
              boxSizing: "border-box",
            }}
          >
            <div style={{ fontSize: "38px", color: "#b8960c", marginBottom: "16px" }}>★</div>
            <p
              style={{
                fontFamily: "sans-serif",
                fontSize: "15px",
                fontWeight: "600",
                color: "#111",
                lineHeight: "1.6",
                margin: 0,
              }}
            >
              Sourced from certified textile mills for consistent performance
            </p>
          </div>

          {/* Card 2 */}
          <div
            style={{
              flex: "1 1 220px",
              maxWidth: "280px",
              border: "2px solid #1a237e",
              borderRadius: "16px",
              padding: "36px 24px",
              textAlign: "center",
              background: "#fff",
              boxSizing: "border-box",
            }}
          >
            <div style={{ fontSize: "38px", color: "#b8960c", marginBottom: "16px" }}>⌃⌃</div>
            <p
              style={{
                fontFamily: "sans-serif",
                fontSize: "15px",
                fontWeight: "600",
                color: "#111",
                lineHeight: "1.6",
                margin: 0,
              }}
            >
              Tailored options for UAE-based workwear &amp; menswear industries
            </p>
          </div>

          {/* Card 3 */}
          <div
            style={{
              flex: "1 1 220px",
              maxWidth: "280px",
              border: "2px solid #1a237e",
              borderRadius: "16px",
              padding: "36px 24px",
              textAlign: "center",
              background: "#fff",
              boxSizing: "border-box",
            }}
          >
            <div style={{ fontSize: "38px", color: "#b8960c", marginBottom: "16px" }}>🤝</div>
            <p
              style={{
                fontFamily: "sans-serif",
                fontSize: "14px",
                fontWeight: "400",
                color: "#333",
                lineHeight: "1.6",
                margin: 0,
              }}
            >
              Flexible bulk ordering for designers, retailers, and uniform suppliers
            </p>
          </div>

          {/* Card 4 */}
          <div
            style={{
              flex: "1 1 220px",
              maxWidth: "280px",
              border: "2px solid #1a237e",
              borderRadius: "16px",
              padding: "36px 24px",
              textAlign: "center",
              background: "#fff",
              boxSizing: "border-box",
            }}
          >
            <div style={{ fontSize: "38px", color: "#b8960c", marginBottom: "16px" }}>✔</div>
            <p
              style={{
                fontFamily: "sans-serif",
                fontSize: "15px",
                fontWeight: "600",
                color: "#111",
                lineHeight: "1.6",
                margin: 0,
              }}
            >
              Fast delivery across Dubai and the MENA region
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 – WHAT IS POLYCOTTON FABRIC */}
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
            src="/faq-image.jpg"
            alt="What is Polycotton Fabric"
            style={{
              width: "100%",
              height: "640px",
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
            What is Polycotton Fabric?
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
            <strong>Polycotton</strong> is a blended fabric made by combining natural cotton with
            synthetic polyester fibers. It merges the best of both materials—cotton's softness and
            breathability with polyester's strength and wrinkle resistance.
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
            Benefits of Polycotton:
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
            <li>Durable and long-lasting with lower shrinkage</li>
            <li>Easier to iron and quick-drying</li>
            <li>Retains color and shape even after repeated washes</li>
            <li>More affordable than 100% cotton with similar visual appeal</li>
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
            Applications of Polycotton Fabric
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
            <span
              style={{
                textDecoration: "underline",
                cursor: "pointer",
              }}
            >
              Aurora Textiles
            </span>
            ' polycotton collection is trusted by B2B clients across multiple industries,
            including hospitality, corporate apparel, and retail fashion.
          </p>

          <p style={{ fontFamily: "sans-serif", fontSize: "15.5px", color: "#222", lineHeight: "1.9", margin: "0 0 4px 0" }}>
            <strong>Polycotton work uniforms</strong> – Ideal for factory, hospital, and hospitality uniforms
          </p>
          <p style={{ fontFamily: "sans-serif", fontSize: "15.5px", color: "#222", lineHeight: "1.9", margin: "0 0 4px 0" }}>
            Daily wear shirts &amp; Pants – Lightweight and easy to maintain
          </p>
          <p style={{ fontFamily: "sans-serif", fontSize: "15.5px", color: "#222", lineHeight: "1.9", margin: "0 0 4px 0" }}>
            Customised kurtas and semi-formal menswear
          </p>
          <p style={{ fontFamily: "sans-serif", fontSize: "15.5px", color: "#222", lineHeight: "1.9", margin: "0 0 22px 0" }}>
            Corporate giveaways and branded merchandise
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
            We offer a variety of blends and GSM options suitable for everything from lightweight
            shirting to more structured uniform fabric.
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
    </div>
  );
}