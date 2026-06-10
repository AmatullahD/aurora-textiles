import React from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const blogs = [
  {
    image: "https://aurora-textiles.com/wp-content/uploads/2026/04/Uniform_01-1024x683.png.webp",
    title: "Why White Dominates 30% of the Global Uniform Market",
    date: "April 17, 2026",
    excerpt: "The Science, Psychology & Industry Data Behind the World's Most Trusted Workwear Color. Across hospitals in Europe, luxury hotels in [...]",
    slug: "/why-white-dominates-30-of-the-global-uniform-market",
  },
  {
    image: "https://aurora-textiles.com/wp-content/uploads/2026/04/Uniform2-01-1024x492.png.webp",
    title: "What Are the Different Types of Protective Wear? All You Need to Know",
    date: "April 17, 2026",
    excerpt: "What Is It Made Of? In industries across Dubai and the UAE—construction, oil & gas, manufacturing, logistics, hospitality, and healthcare—protective",
    slug: "/what-are-the-different-types-of-protective-wear-all-you-need-to-know",
  },
  {
    image: "https://aurora-textiles.com/wp-content/uploads/2026/04/Mass-uniform.png.webp",
    title: "Mass-Produced vs Quality-Focused Uniforms: How Manufacturers Can Build a Strong Reputation",
    date: "April 17, 2026",
    excerpt: "The Real Difference That Impacts Durability, Brand Image & Long-Term Profitability. In today's competitive apparel industry, uniform manufacturers face a",
    slug: "/mass-produced-vs-quality-focused-uniforms-how-manufacturers-can-build-a-strong-reputation",
  },
  {
    image: "https://aurora-textiles.com/wp-content/uploads/2026/04/white-shirt-girl.webp",
    title: "Why White Uniforms Turn Dull — And How Klopman Solves It",
    date: "April 17, 2026",
    excerpt: "White uniforms carry a promise. Clean. Professional. Trustworthy. But give it a few months—sometimes even weeks—and that bright white starts fading",
    slug: "/why-white-uniforms-turn-dull-and-how-klopman-solves-it",
  },
  {
    image: "https://aurora-textiles.com/wp-content/uploads/2026/04/fabric-colors.webp",
    title: "High-Quality Fabric vs Cheap Fabric: The True Cost and ROI for Uniform Businesses",
    date: "February 11, 2026",
    excerpt: "As a garment maker, your reputation doesn't depend on how cheap your fabric is. It depends on how few complaints you",
    slug: "/high-quality-fabric-vs-cheap-fabric-the-true-cost-and-roi-for-uniform-businesses",
  },
  {
    image: "https://aurora-textiles.com/wp-content/uploads/2026/04/shirting-grey.webp",
    title: "How the Right Shirting Fabric Elevates Your Professional Image",
    date: "January 31, 2026",
    excerpt: "In a professional setting, your shirt speaks before you do. In the UAE—where business meetings, long office hours, and high temperatures",
    slug: "/how-the-right-shirting-fabric-elevates-your-professional-image",
  },
  {
    image: "https://aurora-textiles.com/wp-content/uploads/2026/04/purple-fabric.webp",
    title: "Lightweight Fabrics That Don't Compromise on Style in the UAE",
    date: "January 23, 2026",
    excerpt: "In the UAE, fabric isn't just about fashion — it's about comfort, breathability, durability, and appearance in extreme heat. With",
    slug: "/lightweight-fabrics-that-dont-compromise-on-style-in-the-uae",
  },
  {
    image: "https://aurora-textiles.com/wp-content/uploads/2026/04/dishdasha-dark.webp",
    title: "How to Select the Perfect Dishdasha Fabric for Comfort, Climate & Daily Wear",
    date: "January 13, 2026",
    excerpt: "The dishdasha — also known as thobe or thawb—is more than a traditional garment. It is a daily essential across",
    slug: "/how-to-select-the-perfect-dishdasha-fabric-for-comfort-climate-daily-wear",
  },
  {
    image: "https://aurora-textiles.com/wp-content/uploads/2026/04/wedding-ethnic.webp",
    title: "Wedding Season in Dubai: Choosing Premium Fabrics for Celebration Wear",
    date: "December 7, 2025",
    excerpt: "Dubai's wedding season is more than just a time for celebration — it's a showcase of elegance, craftsmanship, and cultural",
    slug: "/wedding-season-in-dubai-choosing-premium-fabrics-for-celebration-wear",
  },
  {
    image: "https://aurora-textiles.com/wp-content/uploads/2026/04/green-fabrics.webp",
    title: "Smart Fabric Choices for Changing Temperatures",
    date: "August 25, 2025",
    excerpt: "In a climate like the UAE's—where daytime heat meets air-conditioned interiors, and winters can surprise with cool breezes—dressing smartly isn't",
    slug: "/smart-fabric-choices-for-changing-temperatures",
  },
];

export default function BlogsPage() {
  return (
    <div style={{ width: "100%", background: "#f0f2f5", minHeight: "100vh" }}>

      <Helmet>
        <title>Blogs | Aurora Textiles – Fabric & Uniform Insights for the UAE</title>
        <meta
          name="description"
          content="Explore Aurora Textiles' blog for expert insights on uniform fabrics, shirting, ethnic wear, Dishdasha, and wholesale textile trends across Dubai and the UAE."
        />
        <link rel="canonical" href="https://aurora-textiles.vercel.app/category/blogs" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Aurora Textiles Blog",
          "description": "Fabric insights, uniform guides, and wholesale textile updates from Aurora Textiles, Dubai.",
          "url": "https://aurora-textiles.vercel.app/category/blogs",
          "publisher": {
            "@type": "Organization",
            "name": "Aurora Textiles",
            "url": "https://aurora-textiles.vercel.app",
            "logo": {
              "@type": "ImageObject",
              "url": "https://aurora-textiles.vercel.app/logo.png"
            }
          }
        })}</script>
      </Helmet>

      <Navbar />

      {/* PAGE TITLE BANNER */}
      <div
        style={{
          width: "100%",
          background: "#fff",
          padding: "40px 5%",
          boxSizing: "border-box",
          marginBottom: "40px",
        }}
      >
        <h1
          style={{
            fontSize: "28px",
            fontWeight: "700",
            color: "#1a1a1a",
            fontFamily: "'Poppins', sans-serif",
            margin: 0,
          }}
        >
          Blogs
        </h1>
      </div>

      {/* CARDS GRID */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 5% 80px",
          boxSizing: "border-box",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "30px",
        }}
      >
        {blogs.map((blog, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              borderRadius: "4px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* IMAGE — clickable, URL visible in status bar */}
            <a
              href={blog.slug}
              style={{ display: "block", width: "100%", height: "220px", overflow: "hidden" }}
            >
              <img
                src={blog.image}
                alt={blog.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.04)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
              />
            </a>

            {/* CARD BODY */}
            <div style={{ padding: "24px 24px 28px", display: "flex", flexDirection: "column", gap: "10px" }}>

              {/* BLUE BLOGS TAG */}
              <a
                href="/category/blogs"
                style={{
                  color: "#344886",
                  fontSize: "14px",
                  fontWeight: "500",
                  fontFamily: "'Poppins', sans-serif",
                  textDecoration: "none",
                  display: "inline-block",
                  width: "fit-content",
                }}
              >
                Blogs
              </a>

              {/* TITLE — clickable */}
              <a
                href={blog.slug}
                style={{ textDecoration: "none" }}
              >
                <h2
                  style={{
                    fontSize: "18px",
                    fontWeight: "700",
                    color: "#1a1a1a",
                    fontFamily: "'Poppins', sans-serif",
                    margin: 0,
                    lineHeight: "1.4",
                  }}
                >
                  {blog.title}
                </h2>
              </a>

              {/* DATE */}
              <p
                style={{
                  fontSize: "13px",
                  color: "#344886",
                  fontFamily: "'Poppins', sans-serif",
                  margin: 0,
                }}
              >
                seo / {blog.date}
              </p>

              {/* EXCERPT */}
              <p
                style={{
                  fontSize: "14px",
                  color: "#444",
                  fontFamily: "'Poppins', sans-serif",
                  lineHeight: "1.6",
                  margin: 0,
                }}
              >
                {blog.excerpt}
              </p>

            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}