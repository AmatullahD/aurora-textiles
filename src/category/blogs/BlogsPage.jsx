import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const allBlogs = [
  // PAGE 1 — 10 posts
  {
    image: "/blog-card-1.webp",
    title: "Why White Dominates 30% of the Global Uniform Market",
    date: "April 17, 2026",
    author: "seo",
    excerpt: "The Science, Psychology & Industry Data Behind the World's Most Trusted Workwear Color. Across hospitals in Europe, luxury hotels in [...]",
    slug: "/why-white-dominates-30-of-the-global-uniform-market",
    page: 1,
  },
  {
    image: "/blog-card-2.webp",
    title: "What Are the Different Types of Protective Wear? All You Need to Know",
    date: "April 17, 2026",
    author: "seo",
    excerpt: "What Is It Made Of? In industries across Dubai and the UAE—construction, oil & gas, manufacturing, logistics, hospitality, and healthcare—protective",
    slug: "/what-are-the-different-types-of-protective-wear-all-you-need-to-know",
    page: 1,
  },
  {
    image: "/blog-card-3.webp",
    title: "Mass-Produced vs Quality-Focused Uniforms: How Manufacturers Can Build a Strong Reputation",
    date: "April 17, 2026",
    author: "seo",
    excerpt: "The Real Difference That Impacts Durability, Brand Image & Long-Term Profitability. In today's competitive apparel industry, uniform manufacturers face a",
    slug: "/mass-produced-vs-quality-focused-uniforms-how-manufacturers-can-build-a-strong-reputation",
    page: 1,
  },
  {
    image: "/blog-card-4.webp",
    title: "Why White Uniforms Turn Dull — And How Klopman Solves It",
    date: "April 17, 2026",
    author: "seo",
    excerpt: "White uniforms carry a promise. Clean. Professional. Trustworthy. But give it a few months—sometimes even weeks—and that bright white starts fading",
    slug: "/why-white-uniforms-turn-dull-and-how-klopman-solves-it",
    page: 1,
  },
  {
    image: "/blog-card-5.webp",
    title: "High-Quality Fabric vs Cheap Fabric: The True Cost and ROI for Uniform Businesses",
    date: "February 11, 2026",
    author: "seo",
    excerpt: "As a garment maker, your reputation doesn't depend on how cheap your fabric is. It depends on how few complaints you",
    slug: "/high-quality-fabric-vs-cheap-fabric-the-true-cost-and-roi-for-uniform-businesses",
    page: 1,
  },
  {
    image: "/blog-card-6.webp",
    title: "How the Right Shirting Fabric Elevates Your Professional Image",
    date: "January 31, 2026",
    author: "seo",
    excerpt: "In a professional setting, your shirt speaks before you do. In the UAE—where business meetings, long office hours, and high temperatures",
    slug: "/how-the-right-shirting-fabric-elevates-your-professional-image",
    page: 1,
  },
  {
    image: "/blog-card-7.webp",
    title: "Lightweight Fabrics That Don't Compromise on Style in the UAE",
    date: "January 23, 2026",
    author: "seo",
    excerpt: "In the UAE, fabric isn't just about fashion — it's about comfort, breathability, durability, and appearance in extreme heat. With",
    slug: "/lightweight-fabrics-that-dont-compromise-on-style-in-the-uae",
    page: 1,
  },
  {
    image: "/blog-card-8.webp",
    title: "How to Select the Perfect Dishdasha Fabric for Comfort, Climate & Daily Wear",
    date: "January 13, 2026",
    author: "seo",
    excerpt: "The dishdasha — also known as thobe or thawb—is more than a traditional garment. It is a daily essential across",
    slug: "/how-to-select-the-perfect-dishdasha-fabric-for-comfort-climate-daily-wear",
    page: 1,
  },
  {
    image: "/blog-card-9.webp",
    title: "Wedding Season in Dubai: Choosing Premium Fabrics for Celebration Wear",
    date: "December 7, 2025",
    author: "seo",
    excerpt: "Dubai's wedding season is more than just a time for celebration — it's a showcase of elegance, craftsmanship, and cultural",
    slug: "/wedding-season-in-dubai-choosing-premium-fabrics-for-celebration-wear",
    page: 1,
  },
  {
    image: "/blog-card-10.webp",
    title: "Smart Fabric Choices for Changing Temperatures",
    date: "August 25, 2025",
    author: "seo",
    excerpt: "In a climate like the UAE's—where daytime heat meets air-conditioned interiors, and winters can surprise with cool breezes—dressing smartly isn't",
    slug: "/smart-fabric-choices-for-changing-temperatures",
    page: 1,
  },
  // PAGE 2 — 3 posts
  {
    image: "/blog-card-11.webp",
    title: "How to Pick the Right Fabrics for Every Occasion Wear in the UAE",
    date: "August 25, 2025",
    author: "seo",
    excerpt: "When it comes to occasion wear, choosing the right fabric makes all the difference in comfort, appearance, and cultural relevance—especially [...]",
    slug: "/how-to-pick-the-right-fabrics-for-every-occasion-wear-in-the-uae",
    page: 2,
  },
  {
    image: "/blog-card-12.webp",
    title: "Elevate Your Style with Premium Shirting Fabrics from Aurora Textiles",
    date: "November 20, 2024",
    author: "dn.burhan72@gmail.com",
    excerpt: "A perfect shirt is more than just a wardrobe staple—it's a statement of style, comfort, and sophistication. At Aurora Textiles,",
    slug: "/elevate-your-style-with-premium-shirting-fabrics-from-aurora-textiles",
    page: 2,
  },
  {
    image: "/blog-card-13.webp",
    title: "Discover the World of Fabrics: Crafting Elegance, Comfort, and Style",
    date: "November 20, 2024",
    author: "dn.burhan72@gmail.com",
    excerpt: "Fabrics are the foundation of fashion, interiors, and countless everyday applications. They blend utility with aesthetics, showcasing the perfect harmony",
    slug: "/discover-the-world-of-fabrics-crafting-elegance-comfort-and-style",
    page: 2,
  },
];

const TOTAL_PAGES = 2;

export default function BlogsPage() {
  const [currentPage, setCurrentPage] = useState(1);

  const visibleBlogs = allBlogs.filter((b) => b.page === currentPage);

  const handlePage = (p) => {
    setCurrentPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

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
      <div style={{ background: "#f0f2f5", padding: "40px 5% 0", boxSizing: "border-box" }}>
        <div
          style={{
            background: "#fff",
            padding: "50px 30px",
            boxSizing: "border-box",
          }}
        >
          <h1
            style={{
              fontSize: "26px",
              fontWeight: "700",
              color: "#1a1a1a",
              fontFamily: "'Poppins', sans-serif",
              margin: 0,
            }}
          >
            Blogs
          </h1>
        </div>
      </div>

      {/* CARDS GRID */}
      <div
        style={{
          maxWidth: "100%",
          padding: "40px 5% 20px",
          boxSizing: "border-box",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "30px",
        }}
      >
        {visibleBlogs.map((blog, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              borderRadius: "6px",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
            }}
          >
            {/* IMAGE */}
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
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
            </a>

            {/* CARD BODY */}
            <div
              style={{
                padding: "24px 24px 28px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
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

              {/* TITLE */}
              <a href={blog.slug} style={{ textDecoration: "none" }}>
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

              {/* AUTHOR / DATE */}
              <p
                style={{
                  fontSize: "13px",
                  color: "#344886",
                  fontFamily: "'Poppins', sans-serif",
                  margin: 0,
                }}
              >
                {blog.author} / {blog.date}
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

      {/* PAGINATION */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          padding: "30px 5% 60px",
          boxSizing: "border-box",
          position: "relative",
        }}
      >
        {/* ← PREVIOUS — left side, only on page 2 */}
        {currentPage > 1 && (
          <button
            onClick={() => handlePage(currentPage - 1)}
            style={{
              position: "absolute",
              left: "5%",
              background: "transparent",
              border: "none",
              color: "#1a1a1a",
              fontSize: "15px",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: "500",
              cursor: "pointer",
              padding: 0,
            }}
          >
            ← Previous
          </button>
        )}

        {/* PAGE NUMBER BUTTONS */}
        {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map((p) => (
          <button
            key={p}
            onClick={() => handlePage(p)}
            style={{
              width: "38px",
              height: "38px",
              background: currentPage === p ? "#344886" : "transparent",
              color: currentPage === p ? "#fff" : "#1a1a1a",
              border: currentPage === p ? "none" : "1px solid #ccc",
              borderRadius: "3px",
              fontSize: "15px",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            {p}
          </button>
        ))}

        {/* NEXT → — right side, only on page 1 */}
        {currentPage < TOTAL_PAGES && (
          <button
            onClick={() => handlePage(currentPage + 1)}
            style={{
              position: "absolute",
              right: "5%",
              background: "transparent",
              border: "none",
              color: "#1a1a1a",
              fontSize: "15px",
              fontFamily: "'Poppins', sans-serif",
              fontWeight: "500",
              cursor: "pointer",
              padding: 0,
            }}
          >
            Next →
          </button>
        )}
      </div>

      <Footer />
    </div>
  );
}