import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";

export default function Uniform() {
  // ─── Brand logos data ───
  const brandLogos = [
    {
      name: "Klopman International",
      src: "/klopman.webp",
    },
    {
      name: "Oxford",
      src: "/oxford.webp",
    },
    {
      name: "Harrods",
      src: "/harrod.webp",
    },
    {
      name: "Thai Power",
      src: "/thai-power.webp",
    },
    {
      name: "Master Stroke",
      src: "/master-stroke.webp",
    },
    {
      name: "Elite Shirting",
      src: "/elite-shirting.webp",
    },
  ];

  // ─── FAQ data ───
  const faqs = [
    {
      q: "Who is the best uniform fabric supplier in Dubai, UAE?",
      a: "If you are looking for the best uniform fabric supplier in Dubai, UAE, you can reach out to us via phone, email, or by visiting our shop in Meena Bazaar, Dubai. Contact us today to explore our premium uniform fabric collection!",
    },
    {
      q: "What type of uniform fabrics does Aurora Textiles offer in Dubai?",
      a: "Aurora Textiles offers a wide range of uniform fabrics including cotton blends, polyester, poly-cotton blends, cool-feel shirting, Tencel (Lyocell), spandex blends, antimicrobial fabrics, and protective wear/FR fabrics.",
    },
    {
      q: "Can Aurora Textiles supply large orders consistently?",
      a: "Yes, Aurora Textiles has the capacity and supply chain infrastructure to fulfill large-volume orders consistently. We work with leading global fabric mills to ensure steady availability of all our fabric ranges.",
    },
  ];

  // ─── Fabric types ───
  const fabricTypes = [
    {
      num: "1.",
      bold: "Cotton and Cotton Blends:",
      desc: "Known for breathability, softness, and comfort, ideal for hospitality and healthcare uniforms.",
    },
    {
      num: "2.",
      bold: "Polyester:",
      desc: "Durable, wrinkle-resistant, and easy to care for, suitable for corporate, hospitality, and industrial use.",
    },
    {
      num: "3.",
      bold: "Poly-Cotton Blends:",
      desc: "Combining comfort and durability, perfect for school uniforms and corporate wear.",
    },
    {
      num: "4.",
      bold: "Cool-Feel Shirting:",
      desc: "Cool Fabric keeps the wearer cooler by 0.5–2.00 °C in hot weather. Beat the Heat with comfortable and skin-friendly Cool Fabrics. Perfect for the Summer",
    },
    {
      num: "5.",
      bold: "Tencel (Lyocell):",
      desc: "A wood pulp-derived fiber known for excellent moisture-wicking, helping reduce odors by keeping skin dry and less prone to bacterial growth.",
    },
    {
      num: "6.",
      bold: "Spandex Blends:",
      desc: "Offering flexibility and comfort, these fabrics are excellent for healthcare and active work environments.",
    },
    {
      num: "7.",
      bold: "Antimicrobial Fabrics:",
      desc: "Specially treated fabrics designed for healthcare uniforms to prevent bacterial growth and ensure hygiene.",
    },
    {
      num: "8.",
      bold: "Protective Wear/FR Fabrics:",
      desc: "FR is one subsection of the protection we can provide. There's also ESD, electric arc, hydrofoil (protection against liquid chemical splash), anti-static, and protection against electrostatic discharge",
      sub: [
        {
          bold: "Treated FR Fabrics:",
          desc: "Typically made from 100% cotton, these fabrics provide effective protection against heat and flames, ideal for general industrial protective wear.",
        },
        {
          bold: "Inherent FR Fabrics:",
          desc: "Crafted using modacrylic fibers, these fabrics inherently possess flame-retardant properties built directly into their structure, offering consistent and durable protection that won't diminish with washing or usage.",
        },
      ],
    },
  ];

  // ─── Brand Slider state (Suiting-style) ───
  const brands = brandLogos.map((b) => b.src);
  const visibleItems = window.innerWidth < 768 ? 2 : 4;
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = brands.length - visibleItems + 1;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const visibleBrands = brands.slice(currentSlide, currentSlide + visibleItems);

  // ─── FAQ open state ───
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div style={{ width: "100%", background: "#fff", fontFamily: "'Lato', 'Segoe UI', sans-serif", color: "#222" }}>

      <Helmet>
        <title>Uniform Fabric Supplier in Dubai | Aurora Textiles</title>
        <meta name="description" content="Aurora Textiles is a leading uniform fabric supplier in Dubai. We offer durable, professional-grade fabrics for all industries across UAE and GCC." />
      </Helmet>

      <Navbar />

      {/* ── HERO BANNER ── */}
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
          alt="Uniform Fabrics Banner"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.45)" }} />
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
            Uniform Fabric
          </h1>
        </div>
      </section>

      {/* ── SECTION 1: Intro (text + image) ── */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto 70px",
          padding: "0 40px",
          display: "flex",
          gap: "60px",
          alignItems: "flex-start",
        }}
      >
        <div style={{ flex: "0 0 48%", paddingTop: "10px" }}>
          <h2
            style={{
              fontFamily: "'Cinzel Decorative', serif",
              fontSize: "clamp(28px, 3.5vw, 46px)",
              fontWeight: "700",
              color: "#1a2b6d",
             
              lineHeight: "1.2",
              marginBottom: "24px",
            }}
          >
            Premium Uniform<br />
            Fabric Suppliers in<br />
            Dubai, UAE
          </h2>

          <p style={{ fontSize: "18px", fontWeight: "400", lineHeight: "1.5", color: "#444", marginBottom: "24px" }}>
            Aurora Textiles stands out among the leading uniform fabric suppliers in Dubai. We provide premium-quality fabrics tailored specifically for uniforms across various industries. Our fabrics are designed to deliver durability, comfort, and a professional appearance, enhancing your team’s image and performance.
          </p>
          <p
            style={{
              fontFamily: "'Cinzel Decorative', serif",
              fontSize: "18px",
              fontWeight: "700",
              color: "#1a2b6d",
              letterSpacing: "0.5px",
              marginBottom: "14px",
            }}
          >
            Our Fabric Selections Cater to Diverse Needs Across Various Industries, Including:
          </p>

          <ul style={{ listStyle: "disc", paddingLeft: "25px", lineHeight: "2", fontSize: "16px" }}>
            {["Corporate Offices", "Hotels & Hospitality", "Healthcare & Medical", "Education & Schools", "Industrial & Workwear", "Restaurants & Catering"].map((item) => (
              <li key={item} style={{ fontWeight: "600", color: "#222" }}>{item}</li>
            ))}
          </ul>
        </div>


        <div style={{ flex: "1" }}>
          <img
            src="/uniform-2.webp"
            alt="Chef in uniform"
            style={{
              width: "100%",
              height: "640px",
              objectFit: "cover",
              borderRadius: "12px",
              display: "block",
            }}
          />
        </div>
      </div>

      {/* ── SECTION 2: Brand Logo Slider  */}
      <section
        style={{
          width: "100%",
          padding:
            window.innerWidth < 768
              ? "20px 20px 70px"
              : "40px 6% 90px",
          boxSizing: "border-box",
          background: "#fff",
        }}
      >
        {/* SLIDER */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          {/* LEFT ARROW */}
          <button
            onClick={prevSlide}
            style={{
              border: "none",
              background: "transparent",
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontSize: "48px",
                color: "#bdbdbd",
                fontWeight: "300",
                lineHeight: "1",
              }}
            >
              &#8249;
            </span>
          </button>

          {/* IMAGES */}
          <div
            style={{
              flex: 1,
              display: "grid",
              gridTemplateColumns:
                window.innerWidth < 768
                  ? "repeat(2,1fr)"
                  : "repeat(4,1fr)",
              gap: window.innerWidth < 768 ? "16px" : "28px",
              alignItems: "center",
            }}
          >
            {visibleBrands.map((brand, index) => (
              <div
                key={index}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={brand}
                  alt="brand"
                  style={{
                    width: "120px",
                    height: "120px",
                    objectFit: "contain",
                    borderRadius: "12px",
                    display: "block",
                  }}
                />
              </div>
            ))}
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={nextSlide}
            style={{
              border: "none",
              background: "transparent",
              cursor: "pointer",
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontSize: "48px",
                color: "#bdbdbd",
                fontWeight: "300",
                lineHeight: "1",
              }}
            >
              &#8250;
            </span>
          </button>
        </div>

        {/* DOTS */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
            marginTop: "45px",
            flexWrap: "wrap",
          }}
        >
          {Array.from({ length: totalSlides }).map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrentSlide(index)}
              style={{
                width: currentSlide === index ? "9px" : "6px",
                height: currentSlide === index ? "9px" : "6px",
                borderRadius: "50%",
                background:
                  currentSlide === index ? "#000" : "#cfcfcf",
                cursor: "pointer",
                transition: "0.3s ease",
              }}
            />
          ))}
        </div>
      </section>

      {/* ── SECTION 3: Best Fabric Dark Card ── */}
      <div style={{ padding: "0 40px" }}>
        <div
          style={{
            background: "#1e2d6b",
            borderRadius: "24px",
            border: "3px solid #e6e213e7",
            maxWidth: "1120px",
            margin: "0 auto 20px",
            padding: "15px 30px",
            color: "#fff",
          }}
        >
          <h2
            style={{
              fontFamily: "'Cinzel Decorative', serif",
              fontSize: "clamp(24px, 3vw, 38px)",
              fontWeight: "700",
             
              letterSpacing: "2px",
              textAlign: "center",
              marginBottom: "20px",
            }}
          >
            Choose the Best Fabric for Uniforms
          </h2>
          <p
            style={{
            
              fontSize: "18px",
              lineHeight: "1.7",
              color: "#d0d5ee",
              marginBottom: "32px",
              margin: "0 auto 25px",
            }}
          >
            Selecting the best fabric for uniforms can significantly impact your staff's comfort, durability, and overall professionalism. At Aurora Textiles, we offer a comprehensive range of uniform fabrics, including:
          </p>

          <ol style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {fabricTypes.map((f, i) => (
              <li key={i} style={{ marginBottom: "20px", paddingLeft: "40px", fontSize: "16px", lineHeight: "1.4", color: "#dde" }}>
                <span style={{ marginRight: "4px", fontWeight: "400" }}>{f.num}</span>
                <strong style={{ color: "#fff" }}>{f.bold}</strong>{" "}{f.desc}
                {f.sub && (
                  <ul style={{ listStyle: "disc", paddingLeft: "50px", marginTop: "10px" }}>
                    {f.sub.map((s, j) => (
                      <li key={j} style={{ marginBottom: "10px", fontSize: "16px", lineHeight: "1.4", color: "#ccc" }}>
                        <strong style={{ color: "#dde" }}>{s.bold}</strong>{" "}{s.desc}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* ── SECTION 4: Why Choose Aurora ── */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "70px auto 70px",
          padding: "0 40px",
          display: "flex",
          gap: "60px",
          alignItems: "center",
        }}
      >
        <div style={{ flex: "0 0 47%" }}>
          <img
            src="/uniform-3.webp"
            alt="Fabric swatches book"
            style={{ width: "100%", height: "420px", objectFit: "cover", borderRadius: "12px" }}
          />
        </div>
        <div style={{ flex: "1" }}>
          <h2
            style={{
              fontFamily: "'Cinzel Decorative', serif",
              fontSize: "clamp(26px, 3vw, 42px)",
              fontWeight: "700",
              color: "#1a2b6d",
              
              lineHeight: "1.25",
              marginBottom: "24px",
            }}
          >
            Why Choose Aurora<br />
            Textiles for Uniform<br />
            Fabrics?
          </h2>
          <p style={{ fontSize: "18px", lineHeight: "1.5", color: "#2b2929" }}>
            At Aurora Textiles, we understand that uniforms represent your brand and team identity. That's why we go beyond standard offerings, delivering fabrics that combine innovation, comfort, and reliability. With industry expertise and exceptional customer support, we ensure each fabric selection meets the highest standards of quality, helping your staff feel confident and comfortable every day.
          </p>
        </div>
      </div>

      {/* ── SECTION 5: Fabric Solutions ── */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto 70px",
          padding: "0 40px",
          display: "flex",
          gap: "60px",
          alignItems: "center",
        }}
      >
        <div style={{ flex: "0 0 47%" }}>
          <h2
            style={{
              fontFamily: "'Cinzel Decorative', serif",
              fontSize: "clamp(26px, 3vw, 42px)",
              fontWeight: "700",
              color: "#1a2b6d",
              lineHeight: "1.25",
              marginBottom: "22px",
            }}
          >
            Fabric Solutions<br />
            Tailored for Your<br />
            Business
          </h2>

          <p style={{ fontSize: "18px", lineHeight: "1.5", color: "#2b2929", marginBottom: "16px" }}>
            Our uniform fabrics are carefully crafted to withstand everyday wear and tear, retain color brightness, and provide ease of care. Whether you need breathable fabrics for hospitality uniforms or durable fabrics for industrial workwear, Aurora Textiles has the ideal fabric solutions for you.
          </p>
          <p style={{ fontSize: "18px", lineHeight: "1.5", color: "#2b2929", marginBottom: "16px" }}>
            Partner with Aurora Textiles today—Dubai's preferred uniform fabric supplier and elevate your uniforms with fabrics that blend practicality, comfort, and professionalism seamlessly.
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
                        </div>
        </div>
        <div style={{ flex: "0 0 50%" }}>
          <img
            src="/uniform-4.webp"
            alt="Fabric rolls on rack"
            style={{ width: "100%", height: "400px", objectFit: "cover", borderRadius: "12px" }}
          />
        </div>
      </div>

      {/* ── SECTION 6: FAQ ── */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto 80px",
          padding: "0 40px",
          display: "flex",
          gap: "60px",
          alignItems: "flex-start",
        }}
      >
        <div style={{ flex: "0 0 47%" }}>
          <img
            src="/uniform-5.webp"
            alt="Fabric colour swatches"
            style={{ width: "100%", height: "520px", objectFit: "cover", borderRadius: "12px" }}
          />
        </div>
        <div style={{ flex: "1" }}>
          <div
            style={{
              fontFamily: "'Cinzel Decorative', serif",
              fontSize: "32px",
              fontWeight: "700",
              color: "#1a2b6d",
              
              marginBottom: "24px",
              display: "flex",
              alignItems: "baseline",
              gap: "4px",
            }}
          >
            <span>FAQ</span>
            
          </div>

          {faqs.map((f, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #dde",
                borderRadius: "6px",
                marginBottom: "10px",
                overflow: "hidden",
              }}
            >
              <div
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "18px 22px",
                  cursor: "pointer",
                  userSelect: "none",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Cinzel Decorative', serif",
                    fontSize: "18px",
                    fontWeight: "700",
                   color: "#b39131",
                 
                    letterSpacing: "0.5px",
                    lineHeight: "1.5",
                    flex: 1,
                    paddingRight: "16px",
                  }}
                >
                  {f.q}
                </span>
                <span style={{ fontSize: "22px", color: "#b39131", fontWeight: "300", flexShrink: 0 }}>
                  {openFaq === index ? "−" : "+"}
                </span>
              </div>
              {openFaq === index && (
                <div
                  style={{
                    padding: "0 22px 18px",
                    fontSize: "16px",
                    lineHeight: "1.8",
                    color: "#474747",
                    borderTop: "1px solid #eee",
                  }}
                >
                  {f.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <Footer />
      <ScrollToTop />
    </div>
  );
}