import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const recentPosts = [
  {
    image: "/blog-card-1.webp",
    title: "Why White Dominates 30% of the Global Uniform Market",
    date: "April 17, 2026",
    excerpt: "The Science, Psychology & Industry Data Behind the World's Most Trusted Workwear Color Across hospitals in Europe, luxury hotels in",
    slug: "/why-white-dominates-30-of-the-global-uniform-market",
  },
  {
    image: "/blog-card-2.webp",
    title: "What Are the Different Types of Protective Wear? All You Need to Know",
    date: "April 17, 2026",
    excerpt: "What Is It Made Of? In industries across Dubai and the UAE—construction, oil & gas, manufacturing, logistics, hospitality, and healthcare—protective",
    slug: "/what-are-the-different-types-of-protective-wear-all-you-need-to-know",
  },
  {
    image: "/blog-card-3.webp",
    title: "Mass-Produced vs Quality-Focused Uniforms: How Manufacturers Can Build a Strong Reputation",
    date: "April 17, 2026",
    excerpt: "The Real Difference That Impacts Durability, Brand Image & Long-Term Profitability In today's competitive apparel industry, uniform manufacturers face a",
    slug: "/mass-produced-vs-quality-focused-uniforms-how-manufacturers-can-build-a-strong-reputation",
  },
  {
    image: "/blog-card-4.webp",
    title: "Why White Uniforms Turn Dull — And How Klopman Solves It",
    date: "April 17, 2026",
    excerpt: "White uniforms carry a promise.Clean. Professional. Trustworthy. But give it a few months—sometimes even weeks—and that bright white starts fading",
    slug: "/why-white-uniforms-turn-dull-and-how-klopman-solves-it",
  },
  {
    image: "/blog-card-5.webp",
    title: "High-Quality Fabric vs Cheap Fabric: The True Cost and ROI for Uniform Businesses",
    date: "February 11, 2026",
    excerpt: "As a garment maker, your reputation doesn't depend on how cheap your fabric is.It depends on how few complaints you",
    slug: "/high-quality-fabric-vs-cheap-fabric-the-true-cost-and-roi-for-uniform-businesses",
  },
  {
    image: "/blog-card-6.webp",
    title: "How the Right Shirting Fabric Elevates Your Professional Image",
    date: "January 31, 2026",
    excerpt: "In a professional setting, your shirt speaks before you do.In the UAE—where business meetings, long office hours, and high temperatures",
    slug: "/how-the-right-shirting-fabric-elevates-your-professional-image",
  },
];

const tocItems = [
  { id: "why-white-uniforms", label: "Why White Uniforms?" },
  { id: "data-behind-30", label: "The Data Behind the 30% Market Share" },
  { id: "psychology-of-white", label: "The Psychology of White: Why It Builds Instant Trust" },
  { id: "climate-science", label: "Climate Science: Why White Works Better in Hot Regions" },
  { id: "hygiene-compliance", label: "Hygiene & Compliance: A Critical Yet Overlooked Factor" },
  { id: "economic-advantage", label: "Economic Advantage: Why White Uniform Fabric Is Cost-Efficient" },
  { id: "fabric-engineering", label: "The Fabric Engineering Behind White Uniform Fabric" },
  { id: "future-white", label: "The Future: Will White Continue to Dominate?" },
  {
    id: "why-choose-aurora",
    label: "Why Choose Aurora Textiles for White Uniform Fabric?",
    children: [
      { id: "sub-why-white", label: "Why White Dominates 30% of the Global Uniform Market" },
      { id: "sub-protective-wear", label: "What Are the Different Types of Protective Wear? All You Need to Know" },
      { id: "sub-mass-produced", label: "Mass-Produced vs Quality-Focused Uniforms: How Manufacturers Can Build a Strong Reputation" },
      { id: "sub-uniforms-dull", label: "Why White Uniforms Turn Dull — And How Klopman Solves It" },
      { id: "sub-high-quality", label: "High-Quality Fabric vs Cheap Fabric: The True Cost and ROI for Uniform Businesses" },
      { id: "sub-shirting", label: "How the Right Shirting Fabric Elevates Your Professional Image" },
    ],
  },
];

export default function BlogPost1() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [tocOpen, setTocOpen] = useState(true);

  const handleInput = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div style={{ width: "100%", background: "#fff", minHeight: "100vh", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>
      <Helmet>
        <title>
          Why White Dominates 30% of the Global Uniform Market - Aurora Textiles</title>
        <meta
          name="description"
          content="Explore why white uniforms make up nearly 30% of the global uniform market. Learn how their clean, professional appeal and performance-driven fabrics—like those supplied by Aurora Textiles—make them a preferred choice across industries worldwide"
        />
        <link rel="canonical" href="https://aurora-textiles.vercel.app/why-white-dominates-30-of-the-global-uniform-market" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": "Why White Dominates 30% of the Global Uniform Market",
          "description": "The Science, Psychology & Industry Data Behind the World's Most Trusted Workwear Color.",
          "datePublished": "2026-04-17",
          "author": { "@type": "Person", "name": "seo" },
          "publisher": {
            "@type": "Organization",
            "name": "Aurora Textiles",
            "logo": { "@type": "ImageObject", "url": "https://aurora-textiles.vercel.app/logo.png" }
          },
          "url": "https://aurora-textiles.vercel.app/why-white-dominates-30-of-the-global-uniform-market",
          "image": "https://aurora-textiles.vercel.app/blog-card-1.webp"
        })}</script>
      </Helmet>

      <Navbar />

      {/* MAIN CONTENT WRAPPER */}
      <div
        style={{
          maxWidth: "1300px",
          margin: "0 auto",
          padding: "40px 5% 60px",
          boxSizing: "border-box",
        }}
      >

        {/* ── TOP SECTION: Image (left) + Contact Form (right) ── */}
        <div
          style={{
            display: "flex",
            gap: "40px",
            alignItems: "flex-start",
            marginBottom: "48px",
          }}
        >
          {/* Hero Image — takes up remaining space */}
          <div style={{ flex: "1 1 0", minWidth: 0 }}>
            <img
              src="/blog-card-1.webp"
              alt="Why White Dominates 30% of the Global Uniform Market"
              style={{ width: "100%", height: "340px", display: "block" }}
            />
          </div>

          {/* Contact Form — fixed width matching sidebar */}
          <div
            style={{
              width: "420px",
              flexShrink: 0,
            }}
          >
            <div style={{ marginBottom: "16px" }}>
              <label style={{ display: "block", fontSize: "15px", color: "#333", marginBottom: "6px", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleInput}
                placeholder="Name"
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  fontSize: "15px",
                  fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px",
                  boxSizing: "border-box",
                  outline: "none",
                }}
              />
            </div>
            <div style={{ marginBottom: "16px" }}>
              <label style={{ display: "block", fontSize: "15px", color: "#333", marginBottom: "6px", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>Email</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleInput}
                placeholder="Email"
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  fontSize: "15px",
                  fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px",
                  boxSizing: "border-box",
                  outline: "none",
                }}
              />
            </div>
            <div style={{ marginBottom: "20px" }}>
              <label style={{ display: "block", fontSize: "15px", color: "#333", marginBottom: "6px", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInput}
                placeholder="Message"
                rows={3}
                style={{
                  width: "100%",
                  padding: "12px 14px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                  fontSize: "15px",
                  fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px",
                  boxSizing: "border-box",
                  outline: "none",
                  resize: "vertical",
                }}
              />
            </div>
            <button
              onClick={() => alert("Message sent!")}
              style={{
                width: "100%",
                padding: "14px",
                background: "#0b2451",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                fontSize: "16px",
                fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px",
                fontWeight: "600",
                cursor: "pointer",
                letterSpacing: "0.5px",
              }}
            >
              Send
            </button>
          </div>
        </div>

        {/* ── BOTTOM SECTION: Article (left) + Sidebar TOC + Recent Posts (right) ── */}
        <div
          style={{
            display: "flex",
            gap: "40px",
            alignItems: "stretch",
          }}
        >
          {/* ── LEFT COLUMN: Article Body + Prev/Next ── */}
          <div style={{ flex: "1 1 0", minWidth: 0, display: "flex", flexDirection: "column" }}>

            {/* ARTICLE BODY */}
            <div style={{ fontSize: "17px", color: "#222", lineHeight: "1.55", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>

              <p style={{ textAlign: "justify", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>
                <strong>The Science, Psychology &amp; Industry Data Behind the World's Most Trusted Workwear Color</strong>
              </p>

              <p style={{ textAlign: "justify", marginTop: "8px", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>
                Across hospitals in Europe, luxury hotels in Asia, food factories in North America, and corporate offices in Dubai, one color consistently leads the uniform industry — <strong>white</strong>.
              </p>

              <p style={{ textAlign: "justify", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>
                Industry procurement patterns indicate that{" "}
                <strong>25–35% of the global professional uniform market involves white or predominantly white garments</strong>, especially across healthcare, hospitality, food processing, education, and religious sectors.
              </p>

              <p style={{ textAlign: "justify", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>But the real question is:</p>

              {/* SECTION 1 */}
              <h2 id="why-white-uniforms" style={{ fontSize: "22px", fontWeight: "700", color: "#1e293b", margin: "10px 0 6px", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>
                Why White Uniforms?
              </h2>
              <ul style={{ listStyle: "none", padding: 0, margin: "4px 0", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>
                <li style={{ margin: 0, lineHeight: "1.25", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>Is it tradition?</li>
                <li style={{ margin: 0, lineHeight: "1.25", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>Is it psychology?</li>
                <li style={{ margin: 0, lineHeight: "1.25", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>Is it climate science?</li>
                <li style={{ margin: 0, lineHeight: "1.25", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>Or is it production economics?</li>
              </ul>
              <p style={{ marginTop: "2px", textAlign: "justify", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>
                At Aurora Textiles, UAE, we work with uniform manufacturers and institutional buyers across global markets. Here's why white continues to dominate nearly 30% of the uniform industry.
              </p>

              {/* SECTION 2 */}
              <h2 id="data-behind-30" style={{ fontSize: "22px", fontWeight: "700", color: "#1e293b", margin: "20px 0 6px", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>
                The Data Behind the 30% Market Share
              </h2>
              <p style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>White dominates due to sector concentration:</p>
              <ul style={{ listStyle: "disc", paddingLeft: "20px", margin: "4px 0", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>
                <li style={{ margin: 0, lineHeight: "1.25", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>Healthcare: 60–80% white garments</li>
                <li style={{ margin: 0, lineHeight: "1.25", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>Pharmaceutical: 80%+</li>
                <li style={{ margin: 0, lineHeight: "1.25", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>Food Processing: 70%+</li>
                <li style={{ margin: 0, lineHeight: "1.25", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>Educational Labs: 75%+</li>
                <li style={{ margin: 0, lineHeight: "1.25", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>Luxury Hospitality: 40–60%</li>
              </ul>
              <p style={{ marginTop: "8px", textAlign: "justify", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>
                Combined, these sectors represent nearly one-third of institutional garment consumption globally.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "6px 0", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>
                <li style={{ margin: 0, lineHeight: "1.25", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>Most blogs say "white looks clean."</li>
                <li style={{ margin: 0, lineHeight: "1.25", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>The real reason is <strong>procurement scale.</strong></li>
              </ul>

              {/* SECTION 3 */}
              <h2 id="psychology-of-white" style={{ fontSize: "22px", fontWeight: "700", color: "#1e293b", margin: "20px 0 6px", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>
                The Psychology of White: Why It Builds Instant Trust
              </h2>
              <p style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>White represents:</p>
              <ul style={{ listStyle: "disc", paddingLeft: "20px", margin: "4px 0", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>
                <li style={{ margin: 0, lineHeight: "1.25", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>Hygiene</li>
                <li style={{ margin: 0, lineHeight: "1.25", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>Authority</li>
                <li style={{ margin: 0, lineHeight: "1.25", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>Transparency</li>
                <li style={{ margin: 0, lineHeight: "1.25", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>Professionalism</li>
              </ul>
              <p style={{ marginTop: "8px", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>That's why doctors, chefs, and lab professionals wear white.</p>
              <p style={{ marginTop: "6px", textAlign: "justify", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>
                In image-driven markets like Dubai and across the United Arab Emirates, presentation directly influences brand trust.
              </p>
              <p style={{ marginTop: "6px", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>White communicates compliance.</p>

              {/* SECTION 4 */}
              <h2 id="climate-science" style={{ fontSize: "22px", fontWeight: "700", color: "#1e293b", margin: "20px 0 6px", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>
                Climate Science: Why White Works Better in Hot Regions
              </h2>
              <p style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>White reflects light. Dark colors absorb heat.</p>
              <p style={{ marginTop: "6px", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>In regions exceeding 45°C, white uniforms:</p>
              <ul style={{ listStyle: "disc", paddingLeft: "20px", margin: "4px 0", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>
                <li style={{ margin: 0, lineHeight: "1.25", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>Reduce heat absorption</li>
                <li style={{ margin: 0, lineHeight: "1.25", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>Improve comfort</li>
                <li style={{ margin: 0, lineHeight: "1.25", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>Lower surface temperature</li>
              </ul>
              <p style={{ marginTop: "8px", textAlign: "justify", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>
                This climate advantage supports strong white uniform fabric demand across GCC markets.
              </p>

              {/* SECTION 5 */}
              <h2 id="hygiene-compliance" style={{ fontSize: "22px", fontWeight: "700", color: "#1e293b", margin: "20px 0 6px", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>
                Hygiene &amp; Compliance: A Critical Yet Overlooked Factor
              </h2>
              <p style={{ textAlign: "justify", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>
                In healthcare, food processing, and pharmaceutical sectors, contamination must be visible immediately.
              </p>
              <p style={{ marginTop: "6px", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>White isn't chosen randomly — it's compliance-driven.</p>

              {/* SECTION 6 */}
              <h2 id="economic-advantage" style={{ fontSize: "22px", fontWeight: "700", color: "#1e293b", margin: "20px 0 6px", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>
                Economic Advantage: Why White Uniform Fabric Is Cost-Efficient
              </h2>
              <p style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>White fabric often:</p>
              <ul style={{ listStyle: "disc", paddingLeft: "20px", margin: "4px 0", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>
                <li style={{ margin: 0, lineHeight: "1.25", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>Skips dyeing</li>
                <li style={{ margin: 0, lineHeight: "1.25", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>Reduces processing cost</li>
                <li style={{ margin: 0, lineHeight: "1.25", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>Speeds production</li>
                <li style={{ margin: 0, lineHeight: "1.25", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>Ensures shade consistency in bulk</li>
              </ul>
              <p style={{ marginTop: "8px", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>For large institutions, this scales significantly.</p>

              {/* SECTION 7 */}
              <h2 id="fabric-engineering" style={{ fontSize: "22px", fontWeight: "700", color: "#1e293b", margin: "20px 0 6px", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>
                The Fabric Engineering Behind White Uniform Fabric
              </h2>
              <p style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>Not all white fabrics are uniform-grade.</p>
              <p style={{ marginTop: "6px", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>Performance white fabric must ensure:</p>
              <ul style={{ listStyle: "disc", paddingLeft: "20px", margin: "4px 0", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>
                <li style={{ margin: 0, lineHeight: "1.25", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>High opacity</li>
                <li style={{ margin: 0, lineHeight: "1.25", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>Anti-yellowing resistance</li>
                <li style={{ margin: 0, lineHeight: "1.25", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>Shrink control</li>
                <li style={{ margin: 0, lineHeight: "1.25", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>50+ wash durability</li>
                <li style={{ margin: 0, lineHeight: "1.25", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>Breathability in hot climates</li>
              </ul>
              <p style={{ marginTop: "8px", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>This technical layer is often overlooked.</p>

              {/* SECTION 8 */}
              <h2 id="future-white" style={{ fontSize: "22px", fontWeight: "700", color: "#1e293b", margin: "20px 0 6px", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>
                The Future: Will White Continue to Dominate?
              </h2>
              <p style={{ fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>Yes — driven by:</p>
              <ul style={{ listStyle: "disc", paddingLeft: "20px", margin: "4px 0", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>
                <li style={{ margin: 0, lineHeight: "1.25", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>Healthcare expansion</li>
                <li style={{ margin: 0, lineHeight: "1.25", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>Food safety regulations</li>
                <li style={{ margin: 0, lineHeight: "1.25", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>Hospitality growth in the Middle East</li>
                <li style={{ margin: 0, lineHeight: "1.25", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>Pharmaceutical industry demand</li>
              </ul>
              <p style={{ marginTop: "8px", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>White remains structurally embedded in professional sectors.</p>

              {/* SECTION 9 */}
              <h2 id="why-choose-aurora" style={{ fontSize: "22px", fontWeight: "700", color: "#1e293b", margin: "20px 0 6px", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>
                Why Choose Aurora Textiles for White Uniform Fabric?
              </h2>
              <p style={{ textAlign: "justify", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>
                When white dominates nearly 30% of the global uniform market, supplier selection matters.
              </p>
              <p style={{ marginTop: "6px", textAlign: "justify", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>
                At Aurora Textiles, based in Dubai, we specialize in engineered <strong>white uniform fabric</strong> built for:
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "4px 0", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>
                <li style={{ margin: 0, lineHeight: "1.25", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>✓ UAE heat &amp; humidity</li>
                <li style={{ margin: 0, lineHeight: "1.25", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>✓ High opacity</li>
                <li style={{ margin: 0, lineHeight: "1.25", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>✓ Long wash durability</li>
                <li style={{ margin: 0, lineHeight: "1.25", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>✓ Bulk consistency</li>
                <li style={{ margin: 0, lineHeight: "1.25", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>✓ Healthcare, hospitality &amp; industrial use</li>
              </ul>
              <p style={{ marginTop: "8px", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>White may look simple. But manufacturing it correctly requires precision.</p>

            </div>

            {/* ── PREVIOUS / NEXT NAV — pinned to bottom of left column, aligned with sidebar end ── */}
            <div
              style={{
                display: "flex",
                alignItems: "stretch",
                marginTop: "auto",
                paddingTop: "30px",
              }}
            >
              {/* PREVIOUS */}
              <a
                href="/what-are-the-different-types-of-protective-wear-all-you-need-to-know"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  textDecoration: "none",
                  color: "#222",
                  flex: 1,
                }}
              >
                <span style={{ fontSize: "40px", fontWeight: "600", color: "#120b7e", margin: "0 10px" }}>‹</span>
                <div>
                  <div style={{ fontSize: "12px", fontWeight: "600px", color: "#070966", fontFamily: "'Poppins', sans-serif", marginBottom: "4px", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                    PREVIOUS
                  </div>
                  <div
                    style={{
                      fontSize: "12px",
                      fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px",
                      fontWeight: "500",
                      color: "#222222",
                      lineHeight: "1.4",
                    }}
                  >
                    What Are the Different Types of Protective Wear? All You Need to Know
                  </div>
                </div>
              </a>

              {/* DIVIDER */}
              <div style={{ width: "2px", background: "#181717", margin: "0 20px" }} />
            </div>

          </div>

          {/* ── RIGHT SIDEBAR: TOC + Recent Posts ── */}
          <div
            style={{
              width: "340px",
              flexShrink: 0,
              position: "sticky",
              top: "20px",
              alignSelf: "flex-start",
            }}
          >
            {/* TABLE OF CONTENTS */}
            <div
              style={{
                background: "#0b2451",
                borderRadius: "5px",
                overflow: "hidden",
                marginBottom: "32px",
                border: "1px solid #65686d",
              }}
            >
              <button
                onClick={() => setTocOpen(!tocOpen)}
                style={{
                  width: "100%",
                  background: "#0b2451",
                  border: "none",
                  padding: "16px 20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  cursor: "pointer",
                }}
              >
                <span style={{ fontSize: "17px", fontWeight: "700", color: "#fff", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px" }}>
                  Table of Contents
                </span>
                <span style={{ color: "#fff", fontSize: "18px" }}>{tocOpen ? "▲" : "▼"}</span>
              </button>

              {tocOpen && (
                <div style={{ background: "#fff", padding: "16px 20px", border: "none" }}>
                  <ol style={{ margin: 0, paddingLeft: "20px", border: "none", outline: "none" }}>
                    {tocItems.map((item, i) => (
                      <li key={i} style={{ marginBottom: item.children ? "6px" : "10px" }}>
                        <button
                          onClick={() => scrollTo(item.id)}
                          style={{
                            background: "none",
                            border: "none",
                            padding: 0,
                            cursor: "pointer",
                            color: "#1c1d1f",
                            fontSize: "17px",
                            fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px",
                            textAlign: "left",
                            lineHeight: "1.5",
                            textDecoration: "none",
                            transition: "color 0.2s ease",
                          }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = "#888")}
                          onMouseLeave={(e) => (e.currentTarget.style.color = "#1c1d1f")}
                        >
                          {item.label}
                        </button>
                        {item.children && (
                          <ol style={{ paddingLeft: "18px", marginTop: "6px" }}>
                            {item.children.map((child, j) => (
                              <li key={j} style={{ marginBottom: "8px" }}>
                                <button
                                  onClick={() => scrollTo(child.id)}
                                  style={{
                                    background: "none",
                                    border: "none",
                                    padding: 0,
                                    cursor: "pointer",
                                    color: "#1c1d1f",
                                    fontSize: "13px",
                                    fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px",
                                    textAlign: "left",
                                    lineHeight: "1.5",
                                    textDecoration: "none",
                                    transition: "color 0.2s ease",
                                  }}
                                  onMouseEnter={(e) => (e.currentTarget.style.color = "#888")}
                                  onMouseLeave={(e) => (e.currentTarget.style.color = "#1c1d1f")}
                                >
                                  {child.label}
                                </button>
                              </li>
                            ))}
                          </ol>
                        )}
                      </li>
                    ))}
                  </ol>
                </div>
              )}
            </div>

            {/* RECENT POSTS */}
            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              {recentPosts.map((post, i) => (
                <div key={i} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                  <a href={post.slug} style={{ display: "block", textDecoration: "none" }}>
                    <img
                      src={post.image}
                      alt={post.title}
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                        display: "block",
                        borderRadius: "2px",
                      }}
                    />
                  </a>
                  <a href={post.slug} style={{ textDecoration: "none" }}>
                    <h3
                      style={{
                        fontSize: "17px",
                        fontWeight: "700",
                        color: "#111",
                        fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px",
                        margin: 0,
                        lineHeight: "1.4",
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#1a73e8")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#111")}
                    >
                      {post.title}
                    </h3>
                  </a>
                  <p style={{ fontSize: "13px", color: "#888", fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px", margin: 0 }}>
                    {post.date}{" "}
                    <span style={{ color: "#bbb" }}>//</span>{" "}
                    <span style={{ color: "#aaa" }}>No Comments</span>
                  </p>
                  <p
                    style={{
                      fontSize: "14px",
                      color: "#444",
                      fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px",
                      margin: 0,
                      lineHeight: "1.6",
                    }}
                  >
                    {post.excerpt}
                  </p>
                  <a
                    href={post.slug}
                    style={{
                      fontSize: "14px",
                      color: "#2a7a2a",
                      fontFamily: "'Poppins', sans-serif", letterSpacing: "0.3px",
                      textDecoration: "none",
                      fontWeight: "500",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.textDecoration = "underline")}
                    onMouseLeave={(e) => (e.currentTarget.style.textDecoration = "none")}
                  >
                    Read More »
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}