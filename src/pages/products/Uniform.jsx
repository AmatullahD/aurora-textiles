import React, { useState, useEffect, useRef } from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// ─── Brand logos carousel data ───
const brandLogos = [
  { name: "Thai Power", bg: "#fff", text: "#1a2b6d" },
  { name: "Master Stroke", bg: "#3a1a00", text: "#f5c518" },
  { name: "Elite Shirting", bg: "#fff", text: "#c0004a" },
  { name: "Klopman", bg: "#d00000", text: "#fff" },
  { name: "Oxford", bg: "#fff", text: "#1a2b6d" },
  { name: "Raymond", bg: "#fff", text: "#1a2b6d" },
];

// ─── FAQ data ──
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

// ─── Fabric types ────────────────────────────────────────────────────────────
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

// ─── Inline styles 
const S = {
  page: { width: "100%", background: "#fff", fontFamily: "'Lato', 'Segoe UI', sans-serif", color: "#222" },

  // Section 1 — Hero intro (left text + right image)
  intro: {
    maxWidth: "1200px",
    margin: "0 auto 70px",
    padding: "0 40px",
    display: "flex",
    gap: "60px",
    alignItems: "flex-start",
  },
  introLeft: { flex: "0 0 48%", paddingTop: "10px" },
  introHeading: {
    fontFamily: "'Cinzel Decorative', serif",
    fontSize: "clamp(28px, 3.5vw, 46px)",
    fontWeight: "700",
    color: "#1a2b6d",
    textTransform: "uppercase",
    lineHeight: "1.2",
    marginBottom: "24px",
  },
  introBody: { fontSize: "15px", lineHeight: "1.8", color: "#444", marginBottom: "28px" },
  industryLabel: {
    fontFamily: "'Cinzel Decorative', serif",
    fontSize: "13px",
    fontWeight: "700",
    color: "#1a2b6d",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    marginBottom: "14px",
  },
  industryList: { listStyle: "disc", paddingLeft: "20px", lineHeight: "2", fontSize: "15px" },
  industryItem: { fontWeight: "600", color: "#222" },
  introRight: { flex: "1" },
  introImg: {
    width: "100%",
    height: "420px",
    objectFit: "cover",
    borderRadius: "12px",
    display: "block",
  },

  // Section 2 — Brand logo carousel
  brandsSection: { background: "#fff", padding: "20px 0 50px", overflow: "hidden", position: "relative" },
  brandsTrack: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "50px",
    padding: "10px 40px",
    flexWrap: "wrap",
  },
  brandLogoBox: {
    minWidth: "160px",
    height: "80px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #e5e5e5",
    borderRadius: "6px",
    padding: "10px 18px",
    filter: "grayscale(30%)",
  },
  brandLogoText: { fontWeight: "800", fontSize: "14px", textAlign: "center", letterSpacing: "1px" },
  carouselNav: { textAlign: "center", marginTop: "18px", display: "flex", justifyContent: "center", gap: "6px" },
  dot: { width: "8px", height: "8px", borderRadius: "50%", background: "#ccc", display: "inline-block" },
  dotActive: { background: "#1a2b6d" },

  // Section 3 — Best fabric dark card
  bestFabric: {
    background: "#1e2d6b",
    borderRadius: "14px",
    maxWidth: "1120px",
    margin: "0 auto 70px",
    padding: "55px 60px",
    color: "#fff",
  },
  bestFabricTitle: {
    fontFamily: "'Cinzel Decorative', serif",
    fontSize: "clamp(24px, 3vw, 38px)",
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: "2px",
    textAlign: "center",
    marginBottom: "20px",
  },
  bestFabricIntro: { textAlign: "center", fontSize: "15px", lineHeight: "1.7", color: "#d0d5ee", marginBottom: "32px", maxWidth: "820px", margin: "0 auto 32px" },
  fabricList: { listStyle: "none", padding: 0, margin: 0, counter: "none" },
  fabricItem: { marginBottom: "20px", fontSize: "15px", lineHeight: "1.7", color: "#dde" },
  fabricSub: { listStyle: "disc", paddingLeft: "30px", marginTop: "10px" },
  fabricSubItem: { marginBottom: "10px", fontSize: "14px", lineHeight: "1.7", color: "#ccc" },

  // Section 4 — Why Choose (left image, right text)
  whySection: {
    maxWidth: "1200px",
    margin: "0 auto 70px",
    padding: "0 40px",
    display: "flex",
    gap: "60px",
    alignItems: "center",
  },
  whyLeft: { flex: "0 0 47%" },
  whyImg: { width: "100%", height: "420px", objectFit: "cover", borderRadius: "12px" },
  whyRight: { flex: "1" },
  whyHeading: {
    fontFamily: "'Cinzel Decorative', serif",
    fontSize: "clamp(26px, 3vw, 42px)",
    fontWeight: "700",
    color: "#1a2b6d",
    textTransform: "uppercase",
    lineHeight: "1.25",
    marginBottom: "24px",
  },
  whyBody: { fontSize: "15px", lineHeight: "1.8", color: "#555" },

  // Section 5 — Fabric Solutions (left text + right image)
  solutionSection: {
    maxWidth: "1200px",
    margin: "0 auto 70px",
    padding: "0 40px",
    display: "flex",
    gap: "60px",
    alignItems: "center",
  },
  solutionLeft: { flex: "0 0 47%" },
  solutionHeading: {
    fontFamily: "'Cinzel Decorative', serif",
    fontSize: "clamp(26px, 3vw, 42px)",
    fontWeight: "700",
    color: "#1a2b6d",
    textTransform: "uppercase",
    lineHeight: "1.25",
    marginBottom: "22px",
  },
  solutionBody: { fontSize: "15px", lineHeight: "1.8", color: "#555", marginBottom: "16px" },
  contactBtn: {
    display: "inline-block",
    marginTop: "10px",
    padding: "13px 32px",
    background: "#9a8120",
    color: "#fff",
    fontWeight: "600",
    fontSize: "15px",
    borderRadius: "6px",
    textDecoration: "none",
    border: "none",
    cursor: "pointer",
    letterSpacing: "0.3px",
  },
  solutionRight: { flex: "0 0 50%" },
  solutionImg: { width: "100%", height: "400px", objectFit: "cover", borderRadius: "12px" },

  // Section 6 — FAQ
  faqSection: {
    maxWidth: "1200px",
    margin: "0 auto 80px",
    padding: "0 40px",
    display: "flex",
    gap: "60px",
    alignItems: "flex-start",
  },
  faqLeft: { flex: "0 0 47%" },
  faqImg: { width: "100%", height: "480px", objectFit: "cover", borderRadius: "12px" },
  faqRight: { flex: "1" },
  faqTitle: {
    fontFamily: "'Cinzel Decorative', serif",
    fontSize: "42px",
    fontWeight: "700",
    color: "#1a2b6d",
    fontStyle: "italic",
    marginBottom: "24px",
    display: "flex",
    alignItems: "baseline",
    gap: "4px",
  },
  faqUnderline: { display: "inline-block", width: "24px", height: "3px", background: "#1a2b6d", verticalAlign: "middle", marginLeft: "4px" },
  faqCard: {
    border: "1px solid #dde",
    borderRadius: "6px",
    marginBottom: "10px",
    overflow: "hidden",
  },
  faqQ: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px 22px",
    cursor: "pointer",
    userSelect: "none",
  },
  faqQText: {
    fontFamily: "'Cinzel Decorative', serif",
    fontSize: "13px",
    fontWeight: "700",
    color: "#9a8120",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    lineHeight: "1.5",
    flex: 1,
    paddingRight: "16px",
  },
  faqIcon: { fontSize: "22px", color: "#9a8120", fontWeight: "300", flexShrink: 0 },
  faqA: { padding: "0 22px 18px", fontSize: "14px", lineHeight: "1.8", color: "#555", borderTop: "1px solid #eee" },
};

// ─── FAQ Item component ─
function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={S.faqCard}>
      <div style={S.faqQ} onClick={() => setOpen(!open)}>
        <span style={S.faqQText}>{q}</span>
        <span style={S.faqIcon}>{open ? "−" : "+"}</span>
      </div>
      {open && <div style={S.faqA}>{a}</div>}
    </div>
  );
}

// ─── Logo Carousel 
function LogoCarousel() {
  const [active, setActive] = useState(0);
  const logos = [
    ["Thai Power", "#fff", "#1a2b6d"],
    ["Master Stroke\nLuxury Fabrics", "#3a1a00", "#f5c518"],
    ["Elite\nShirting", "#fff", "#c0004a"],
    ["Klopman\nInternational", "#d00000", "#fff"],
    ["Oxford", "#fff", "#1a2b6d"],
    ["Raymond", "#fff", "#333"],
  ];

  useEffect(() => {
    const t = setInterval(() => setActive(a => (a + 1) % Math.ceil(logos.length / 4)), 2500);
    return () => clearInterval(t);
  }, []);

  return (
    <div style={S.brandsSection}>
      <div style={S.brandsTrack}>
        {logos.map(([name, bg, color], i) => (
          <div key={i} style={{ ...S.brandLogoBox, background: bg, minWidth: "140px" }}>
            <span style={{ ...S.brandLogoText, color, whiteSpace: "pre-line", fontSize: "12px" }}>{name}</span>
          </div>
        ))}
      </div>
      <div style={S.carouselNav}>
        {Array.from({ length: 6 }).map((_, i) => (
          <span key={i} style={{ ...S.dot, ...(i === active ? S.dotActive : {}) }} onClick={() => setActive(i)} />
        ))}
      </div>
    </div>
  );
}

// ─── Main Component 
export default function Uniform() {
  const [heroFaqOpen, setHeroFaqOpen] = useState(0);

  return (
    <div style={S.page}>
      <Navbar />

      {/* ── HERO BANNER  */}
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
              textTransform: "uppercase",
            }}
          >
            UNIFORM FABRICS
          </h1>
        </div>
      </section>

      {/* ── SECTION 1: Intro (text + image)  */}
      <div style={S.intro}>
        <div style={S.introLeft}>
          <h2 style={S.introHeading}>
            Premium Uniform<br />
            Fabric Suppliers in<br />
            Dubai, UAE
          </h2>
          <p style={S.introBody}>
            Aurora Textiles stands out among the leading{" "}
            <a href="#" style={{ color: "#9a8120" }}>uniform fabric suppliers in Dubai</a>. We provide premium-quality fabrics tailored specifically for{" "}
            <a href="#" style={{ color: "#9a8120" }}>uniforms</a> across{" "}
            <a href="#" style={{ color: "#9a8120" }}>various industries</a>. Our{" "}
            <a href="#" style={{ color: "#9a8120" }}>fabrics</a> are designed to deliver{" "}
            <a href="#" style={{ color: "#9a8120" }}>durability</a>, comfort, and a professional appearance,{" "}
            <a href="#" style={{ color: "#9a8120" }}>enhancing</a> your team's image and{" "}
            <a href="#" style={{ color: "#9a8120" }}>performance</a>.
          </p>
          <p style={S.industryLabel}>
            Our Fabric Selections Cater to Diverse Needs Across Various Industries, Including:
          </p>
          <ul style={S.industryList}>
            {["Corporate Offices", "Hotels & Hospitality", "Healthcare & Medical", "Education & Schools", "Industrial & Workwear", "Restaurants & Catering"].map(item => (
              <li key={item} style={S.industryItem}>{item}</li>
            ))}
          </ul>
        </div>
        <div style={S.introRight}>
          <img
            src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=700&q=80"
            alt="Chef in uniform"
            style={S.introImg}
          />
        </div>
      </div>

      {/* ── SECTION 2: Brand Logo Carousel  */}
      <LogoCarousel />

      {/* ── SECTION 3: Best Fabric Dark Card  */}
      <div style={{ padding: "0 40px" }}>
        <div style={S.bestFabric}>
          <h2 style={S.bestFabricTitle}>Choose the Best Fabric for Uniforms</h2>
          <p style={S.bestFabricIntro}>
            Selecting the best fabric for uniforms can significantly impact your staff's comfort, durability, and overall professionalism. At Aurora Textiles, we offer a comprehensive range of uniform fabrics, including:
          </p>
          <ol style={S.fabricList}>
            {fabricTypes.map((f, i) => (
              <li key={i} style={S.fabricItem}>
                <span style={{ marginRight: "4px", fontWeight: "400" }}>{f.num}</span>
                <strong style={{ color: "#fff" }}>{f.bold}</strong>{" "}{f.desc}
                {f.sub && (
                  <ul style={S.fabricSub}>
                    {f.sub.map((s, j) => (
                      <li key={j} style={S.fabricSubItem}>
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

      {/* ── SECTION 4: Why Choose Aurora  */}
      <div style={{ ...S.whySection, marginTop: "70px" }}>
        <div style={S.whyLeft}>
          <img
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=700&q=80"
            alt="Fabric swatches book"
            style={S.whyImg}
          />
        </div>
        <div style={S.whyRight}>
          <h2 style={S.whyHeading}>
            Why Choose Aurora<br />
            Textiles for Uniform<br />
            Fabrics?
          </h2>
          <p style={S.whyBody}>
            At Aurora Textiles, we understand that uniforms represent your brand and team identity. That's why we go beyond standard offerings, delivering fabrics that combine innovation, comfort, and reliability. With industry expertise and exceptional customer support, we ensure each fabric selection meets the highest standards of quality, helping your staff feel confident and comfortable every day.
          </p>
        </div>
      </div>

      {/* ── SECTION 5: Fabric Solutions ──────────────────────────── */}
      <div style={S.solutionSection}>
        <div style={S.solutionLeft}>
          <h2 style={S.solutionHeading}>
            Fabric Solutions<br />
            Tailored for Your<br />
            Business
          </h2>
          <p style={S.solutionBody}>
            Our uniform fabrics are carefully crafted to withstand everyday wear and tear, retain color brightness, and provide ease of care. Whether you need breathable fabrics for hospitality uniforms or durable fabrics for industrial workwear, Aurora Textiles has the ideal fabric solutions for you.
          </p>
          <p style={S.solutionBody}>
            Partner with Aurora Textiles today—Dubai's preferred{" "}
            <a href="#" style={{ color: "#9a8120" }}>uniform fabric supplier</a>—and elevate your uniforms with fabrics that blend practicality, comfort, and professionalism seamlessly.
          </p>
          <a href="#" style={S.contactBtn}>Contact Us</a>
        </div>
        <div style={S.solutionRight}>
          <img
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80"
            alt="Fabric rolls on rack"
            style={S.solutionImg}
          />
        </div>
      </div>

      {/* ── SECTION 6: FAQ ──── */}
      <div style={S.faqSection}>
        <div style={S.faqLeft}>
          <img
            src="https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=700&q=80"
            alt="Fabric colour swatches"
            style={S.faqImg}
          />
        </div>
        <div style={S.faqRight}>
          <div style={S.faqTitle}>
            <span>FAQ</span>
            <span style={{ display: "inline-block", borderBottom: "3px solid #1a2b6d", width: "32px", marginLeft: "6px", marginBottom: "6px" }} />
          </div>
          {faqs.map((f, i) => (
            <FaqItem key={i} q={f.q} a={f.a} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}