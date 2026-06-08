import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";


function TencelCard({ icon, title, desc }) {
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
          fontSize: "18px",
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

export default function TencelBlendPage() {
  const [openFaq, setOpenFaq] = useState(0);
  const [hoveredFaq, setHoveredFaq] = useState(null);

  const faqs = [
    {
      question: "What makes Tencel fabric unique compared to cotton or polyester?",
      answer:
        "Tencel stands out for its silky-smooth texture, superior breathability, and eco-friendly production. Unlike polyester, which is synthetic, and cotton, which—though natural—is an extremely water-intensive crop, Tencel is made from sustainably sourced wood pulp through a closed-loop production process that recycles over 98% of water and solvents used. This makes it significantly more sustainable. Additionally, Tencel resists wrinkles, maintains its shape better than pure cotton, and feels luxuriously soft against the skin, making it both a comfortable and conscious choice.",
    },
    {
      question: "Is Tencel fabric suitable for the UAE climate?",
      answer:
        "Yes, Tencel is an excellent choice for the UAE's warm and humid climate. Its natural moisture-wicking and breathability properties keep you cool and dry, making it ideal for both everyday wear and formal occasions.",
    },
    {
      question: "What types of garments can be made from Tencel fabric?",
      answer:
        "Tencel fabric is highly versatile and can be used for men's shirts, suits, kurtas, trousers, semi-formal wear, and uniforms. Its blends with cotton, linen, or polyester further expand its applications across casual and formal garments.",
    },
    {
      question: "Can I buy Tencel blend fabric online in Dubai?",
      answer:
        "Yes, Aurora Textiles offers Tencel blend fabric with online ordering and delivery across Dubai and the UAE. Contact us to request swatches, check availability, or place a bulk order.",
    },
    {
      question: "Do you supply Tencel blends wholesale in the UAE?",
      answer:
        "Yes, we supply Tencel blend fabrics wholesale to designers, fashion brands, tailors, and uniform manufacturers across the UAE. We offer competitive pricing for bulk orders with consistent quality and eco-certified sourcing.",
    },
  ];

  return (
    <div style={{ width: "100%", background: "#fff" }}>

      <Helmet>
        <title>Buy Tencel Blend Fabrics in Dubai | Tencel Blend Shirting Fabrics</title>
        <meta name="description" content="Shop premium Tencel blend fabrics for men in Dubai at Aurora Textiles. Discover soft, breathable, and durable fabrics perfect for shirts, trousers, and suits. Order online today!" />
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
              fontFamily: "'Cinzel Decorative', sans-serif",
            }}
          >
           Tencel Blend Fabric
          </h1>
        </div>
      </section>

      {/* SECTION 1 – BUY TENCEL BLEND FABRIC IN DUBAI */}
      <section
        style={{
          width: "100%",
          maxWidth: "1020px",
          margin: "0 auto 40px auto",
          padding: "0 40px",
          boxSizing: "border-box",
          display: "flex",
          alignItems: "center",
          gap: "40px",
        }}
      >
        {/* Left Image */}
        <div style={{ flex: "0 0 48%", maxWidth: "48%" }}>
          <img
            src="/tencelblend-1.avif"
            alt="Tencel Blend Fabric"
            style={{
              width: "100%",
              height: "600px",
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
              fontFamily: "'Cinzel Decorative', sans-serif",
              color: "#344886",
              fontSize: "32px",
              fontWeight: "700",
              lineHeight: "1.25",
              margin: "0 0 28px 0",
            }}
          >
            Buy Tencel Blend Fabric in Dubai | Premium Sustainable Fabric for Men's Wear
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
            At <strong>Aurora Textiles</strong>, we offer a refined selection of{" "}
            <strong>Tencel blend fabrics</strong> that combine sustainability, softness, and
            durability. As a leading <strong>Tencel fabric supplier in the UAE</strong>, our
            collection is ideal for men's shirting, suiting, and semi-formal wear—designed for
            comfort and elegance in warm climates like Dubai.
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
            Whether you're a tailor, designer, or fashion brand, you can{" "}
            <strong>buy Tencel blend fabric in Dubai</strong> in bulk or smaller quantities,
            confident in quality, consistency, and eco-friendly sourcing.
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

      {/* SECTION 2 – WHY CHOOSE AURORA TEXTILES FOR TENCEL FABRICS */}
     
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
            fontSize: "36px",
            fontWeight: "700",
            textAlign: "center",
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
          <TencelCard
            icon="★"
            title="Trusted Tencel fabric supplier in UAE with sustainable sourcing"
            desc="Trusted Tencel fabric supplier in UAE with sustainable sourcing"
          />
          <TencelCard
            icon="⌃⌃"
            title="Range of blends suitable for shirting, suiting, and uniforms"
            desc="Range of blends suitable for shirting, suiting, and uniforms"
          />
          <TencelCard
            icon="🤝"
            title="Soft hand feel with excellent drape and long-lasting performance"
            desc="Soft hand feel with excellent drape and long-lasting performance"
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
          <TencelCard
            icon="📊"
            title="Ideal for bulk orders and B2B clients across Dubai and MENA region"
            desc="Ideal for bulk orders and B2B clients across Dubai and MENA region"
          />
          <TencelCard
            icon="✔"
            title="Eco-conscious materials that align with modern fashion trends"
            desc="Eco-conscious materials that align with modern fashion trends"
          />
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
            src="/tencelblend-2.webp"
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
              color: "#344886",
              fontSize: "34px",
              fontWeight: "700",
              lineHeight: "1.25",
              margin: "0 0 22px 0",
            }}
          >
            What is Tencel Fabric?
          </h2>

          <p
            style={{
              fontFamily: "sans-serif",
              fontSize: "17px",
              color: "#222",
              lineHeight: "1.5",
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
              fontSize: "17px",
              color: "#222",
              lineHeight: "1.5",
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
              fontSize: "17px",
              color: "#222",
              lineHeight: "1.5",
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
              color: "#344886",
              fontSize: "34px",
              fontWeight: "700",
              lineHeight: "1.25",
              margin: "0 0 22px 0",
            }}
          >
            Types of Tencel Fabric
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
            At Aurora Textiles, we supply{" "}
            <strong>different types of Tencel fabrics</strong> and blends to meet varied design
            needs:
          </p>

          <ul
            style={{
              fontFamily: "sans-serif",
              fontSize: "17px",
              color: "#222",
              lineHeight: "1.5",
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
              fontSize: "19px",
              color: "#222",
              lineHeight: "1.5",
              margin: 0,
            }}
          >
            Each blend is carefully sourced to provide superior performance, comfort, and finish.
          </p>
        </div>

        {/* Right Image Grid –  */}
        <div style={{ flex: 1 }}>
          <div
            style={{
              height: "520px",
              overflow: "hidden",
              borderRadius: "4px",
            }}
          >
            <img
              src="/tencelblend-3.webp"
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