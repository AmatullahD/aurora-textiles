import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function TencelBlendPage() {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      question: "WHAT MAKES TENCEL FABRIC UNIQUE COMPARED TO COTTON OR POLYESTER?",
      answer:
        "Tencel stands out for its silky-smooth texture, superior breathability, and eco-friendly production. Unlike polyester, which is synthetic, and cotton, which—though natural—is an extremely water-intensive crop, Tencel is made from sustainably sourced wood pulp through a closed-loop production process that recycles over 98% of water and solvents used. This makes it significantly more sustainable. Additionally, Tencel resists wrinkles, maintains its shape better than pure cotton, and feels luxuriously soft against the skin, making it both a comfortable and conscious choice.",
    },
    {
      question: "IS TENCEL FABRIC SUITABLE FOR THE UAE CLIMATE?",
      answer:
        "Yes, Tencel is an excellent choice for the UAE's warm and humid climate. Its natural moisture-wicking and breathability properties keep you cool and dry, making it ideal for both everyday wear and formal occasions.",
    },
    {
      question: "WHAT TYPES OF GARMENTS CAN BE MADE FROM TENCEL FABRIC?",
      answer:
        "Tencel fabric is highly versatile and can be used for men's shirts, suits, kurtas, trousers, semi-formal wear, and uniforms. Its blends with cotton, linen, or polyester further expand its applications across casual and formal garments.",
    },
    {
      question: "CAN I BUY TENCEL BLEND FABRIC ONLINE IN DUBAI?",
      answer:
        "Yes, Aurora Textiles offers Tencel blend fabric with online ordering and delivery across Dubai and the UAE. Contact us to request swatches, check availability, or place a bulk order.",
    },
    {
      question: "DO YOU SUPPLY TENCEL BLENDS WHOLESALE IN THE UAE?",
      answer:
        "Yes, we supply Tencel blend fabrics wholesale to designers, fashion brands, tailors, and uniform manufacturers across the UAE. We offer competitive pricing for bulk orders with consistent quality and eco-certified sourcing.",
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
            TENCEL BLEND FABRICS
          </h1>
        </div>
      </section>

      {/* SECTION 1 – BUY TENCEL BLEND FABRIC IN DUBAI */}
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
            alt="Tencel Blend Fabric"
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
            Buy Tencel Blend Fabric in Dubai | Premium Sustainable Fabric for Men's Wear
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
            At <strong>Aurora Textiles</strong>, we offer a refined selection of{" "}
            <strong>Tencel blend fabrics</strong> that combine sustainability, softness, and
            durability. As a leading <strong>Tencel fabric supplier in the UAE</strong>, our
            collection is ideal for men's shirting, suiting, and semi-formal wear—designed for
            comfort and elegance in warm climates like Dubai.
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
            Whether you're a tailor, designer, or fashion brand, you can{" "}
            <strong>buy Tencel blend fabric in Dubai</strong> in bulk or smaller quantities,
            confident in quality, consistency, and eco-friendly sourcing.
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

      {/* SECTION 2 – WHY CHOOSE AURORA TEXTILES FOR TENCEL FABRICS */}
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
            lineHeight: "1.35",
          }}
        >
          Why Choose Aurora Textiles for Tencel Fabrics
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
          {/* Card 1 */}
          <div
            style={{
              flex: "1 1 260px",
              maxWidth: "340px",
              border: "2px solid #1a237e",
              borderRadius: "16px",
              padding: "40px 28px",
              textAlign: "center",
              background: "#fff",
              boxSizing: "border-box",
            }}
          >
            <div style={{ fontSize: "38px", color: "#b8960c", marginBottom: "18px" }}>★</div>
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
              Trusted Tencel fabric supplier in UAE with sustainable sourcing
            </p>
          </div>

          {/* Card 2 */}
          <div
            style={{
              flex: "1 1 260px",
              maxWidth: "340px",
              border: "2px solid #1a237e",
              borderRadius: "16px",
              padding: "40px 28px",
              textAlign: "center",
              background: "#fff",
              boxSizing: "border-box",
            }}
          >
            <div style={{ fontSize: "38px", color: "#b8960c", marginBottom: "18px" }}>⌃⌃</div>
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
              Range of blends suitable for shirting, suiting, and uniforms
            </p>
          </div>

          {/* Card 3 */}
          <div
            style={{
              flex: "1 1 260px",
              maxWidth: "340px",
              border: "2px solid #1a237e",
              borderRadius: "16px",
              padding: "40px 28px",
              textAlign: "center",
              background: "#fff",
              boxSizing: "border-box",
            }}
          >
            <div style={{ fontSize: "38px", color: "#b8960c", marginBottom: "18px" }}>🤝</div>
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
              Soft hand feel with excellent drape and long-lasting performance
            </p>
          </div>
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
          {/* Card 4 */}
          <div
            style={{
              flex: "1 1 260px",
              maxWidth: "340px",
              border: "2px solid #1a237e",
              borderRadius: "16px",
              padding: "40px 28px",
              textAlign: "center",
              background: "#fff",
              boxSizing: "border-box",
            }}
          >
            <div style={{ fontSize: "38px", color: "#b8960c", marginBottom: "18px" }}>📊</div>
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
              Ideal for bulk orders and B2B clients across Dubai and MENA region
            </p>
          </div>

          {/* Card 5 */}
          <div
            style={{
              flex: "1 1 260px",
              maxWidth: "340px",
              border: "2px solid #1a237e",
              borderRadius: "16px",
              padding: "40px 28px",
              textAlign: "center",
              background: "#fff",
              boxSizing: "border-box",
            }}
          >
            <div style={{ fontSize: "38px", color: "#b8960c", marginBottom: "18px" }}>✔</div>
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
              Eco-conscious materials that align with modern fashion trends
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 – WHAT IS TENCEL FABRIC */}
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
            alt="What is Tencel Fabric"
            style={{
              width: "100%",
              height: "640px",
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
            What is Tencel Fabric?
          </h2>

          <p
            style={{
              fontFamily: "sans-serif",
              fontSize: "15.5px",
              color: "#222",
              lineHeight: "1.8",
              margin: "0 0 18px 0",
            }}
          >
            Tencel (also known as Lyocell) is a cellulose-based fabric made from sustainably
            sourced wood pulp, celebrated for its silky-smooth texture, breathability, and
            excellent moisture-wicking properties. While viscose is also derived from wood pulp,
            it relies on harsher, single-use chemicals during production. In contrast, Tencel's
            true sustainability lies in its{" "}
            <em>closed-loop production process</em>, where up to{" "}
            <strong>98% of the water and solvents used are recovered and reused</strong>. This
            innovative system minimizes environmental impact, making Tencel one of the most
            eco-friendly and responsibly produced fabrics available today.
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
            When blended with fibers like cotton or Linen,{" "}
            <strong>Tencel fabric</strong> becomes even more versatile—making it perfect &amp;
            popular for tailored garments, shirting, uniforms, and everyday menswear in the
            UAE's dynamic weather.
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
            Key Benefits of Tencel Fabric:
          </h3>

          <ul
            style={{
              fontFamily: "sans-serif",
              fontSize: "15.5px",
              color: "#222",
              lineHeight: "2.2",
              margin: 0,
              paddingLeft: "22px",
            }}
          >
            <li>Naturally breathable and moisture-absorbent</li>
            <li>Soft and gentle on the skin</li>
            <li>Wrinkle-resistant and easy to maintain</li>
            <li>Eco-friendly and biodegradable</li>
            <li>Excellent drape and fabric strength</li>
          </ul>
        </div>
      </section>

      {/* SECTION 4 – TYPES OF TENCEL FABRIC */}
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
            Types of Tencel Fabric
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
            At Aurora Textiles, we supply{" "}
            <strong>different types of Tencel fabrics</strong> and blends to meet varied design
            needs:
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
            <li>
              <strong>Tencel Cotton Linen Blend</strong> – Less stiff than pure linen while
              maintaining the effortless slub look
            </li>
            <li>
              <strong>Tencel-Cotton Blend</strong> – Combines natural softness and strength for
              premium shirting.
            </li>
            <li>
              <strong>Tencel-Polyester Blend</strong> – Adds wrinkle resistance and durability
              for daily wear.
            </li>
            <li>
              <strong>Tencel-Linen Blend</strong> – Light and breathable, ideal for warm
              weather.
            </li>
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
            Each blend is carefully sourced to provide superior performance, comfort, and finish.
          </p>
        </div>

        {/* Right Image Grid – 2x2 with labels */}
        <div style={{ flex: 1 }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "1fr 1fr",
              gap: "6px",
              height: "540px",
            }}
          >
            {[
              "Tencel-Cotton-Linen Blend",
              "Tencel-Cotton Blend",
              "Tencel-Polyester Blend",
              "Tencel-Linen Blend",
            ].map((label, i) => (
              <div
                key={i}
                style={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "4px",
                }}
              >
                <img
                  src="/faq-image.jpg"
                  alt={label}
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
                    background: "rgba(0,0,0,0.28)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "12px",
                    left: "12px",
                    color: "#fff",
                    fontFamily: "sans-serif",
                    fontSize: "13px",
                    fontWeight: "600",
                    background: "rgba(0,0,0,0.35)",
                    padding: "4px 10px",
                    borderRadius: "4px",
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
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
    </div>
  );
}