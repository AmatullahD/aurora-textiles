import React from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const blogs = [
  {
    image: "blog-card-1.webp",
    title: "Why White Dominates 30% of the Global Uniform Market",
    slug: "/why-white-dominates-30-of-the-global-uniform-market",
  },
  {
    image: "blog-card-2.webp",
    title: "What Are the Different Types of Protective Wear? All You Need to Know",
    slug: "/what-are-the-different-types-of-protective-wear-all-you-need-to-know",
  },
  {
    image: "blog-card-3.webp",
    title: "Mass-Produced vs Quality-Focused Uniforms: How Manufacturers Can Build a Strong Reputation",
    slug: "/mass-produced-vs-quality-focused-uniforms-how-manufacturers-can-build-a-strong-reputation",
  },
  {
    image: "blog-card-4.webp",
    title: "Why White Uniforms Turn Dull — And How Klopman Solves It",
    slug: "/why-white-uniforms-turn-dull-and-how-klopman-solves-it",
  },
  {
    image: "blog-card-5.webp",
    title: "High-Quality Fabric vs Cheap Fabric: The True Cost and ROI for Uniform Businesses",
    slug: "/high-quality-fabric-vs-cheap-fabric-the-true-cost-and-roi-for-uniform-businesses",
  },
  {
    image: "blog-card-6.webp",
    title: "How the Right Shirting Fabric Elevates Your Professional Image",
    slug: "/how-the-right-shirting-fabric-elevates-your-professional-image",
  },
  {
    image: "blog-card-7.webp",
    title: "Lightweight Fabrics That Don't Compromise on Style in the UAE",
    slug: "/lightweight-fabrics-that-dont-compromise-on-style-in-the-uae",
  },
  {
    image: "blog-card-8.webp",
    title: "How to Select the Perfect Dishdasha Fabric for Comfort, Climate & Daily Wear",
    slug: "/how-to-select-the-perfect-dishdasha-fabric-for-comfort-climate-daily-wear",
  },
  {
    image: "blog-card-9.webp",
    title: "Wedding Season in Dubai: Choosing Premium Fabrics for Celebration Wear",
    slug: "/wedding-season-in-dubai-choosing-premium-fabrics-for-celebration-wear",
  },
  {
    image: "blog-card-10.webp",
    title: "Smart Fabric Choices for Changing Temperatures",
    slug: "/smart-fabric-choices-for-changing-temperatures",
  },
  {
    image: "blog-card-11.webp",
    title: "How to Pick the Right Fabrics for Every Occasion Wear in the UAE",
    slug: "/how-to-pick-the-right-fabrics-for-every-occasion-wear-in-the-uae",
  },
  {
    image: "blog-card-12.webp",
    title: "Elevate Your Style with Premium Shirting Fabrics from Aurora Textiles",
    slug: "/elevate-your-style-with-premium-shirting-fabrics-from-aurora-textiles",
  },
  {
    image: "blog-card-13.webp",
    title: "Discover the World of Fabrics: Crafting Elegance, Comfort, and Style",
    slug: "/discover-the-world-of-fabrics-crafting-elegance-comfort-and-style",
  },
];

export default function BlogPage() {
  const navigate = useNavigate();

  return (
    <div style={{ width: "100%", background: "#fff", minHeight: "100vh" }}>

      <Helmet>
        <title>Blog | Aurora Textiles – Fabric & Uniform Insights for Dubai & UAE</title>
        <meta
          name="description"
          content="Read the latest blogs and updates from Aurora Textiles. Expert insights on uniform fabrics, shirting, ethnic wear, Dishdasha, and wholesale textile trends in Dubai and the UAE."
        />
        <link rel="canonical" href="https://aurora-textiles.vercel.app/blog" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Aurora Textiles Blog",
          "description": "Fabric insights, uniform guides, and wholesale textile updates from Aurora Textiles, Dubai.",
          "url": "https://aurora-textiles.vercel.app/blog",
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

      {/* PAGE HEADING */}
      <div style={{ padding: "60px 5% 20px", boxSizing: "border-box" }}>
        <h1
          style={{
            textAlign: "center",
            fontSize: "38px",
            color: "#0B2C66",
            fontWeight: "600",
            fontFamily: "'Cinzel Decorative', sans-serif",
            textTransform: "lowercase",
            margin: "0 0 55px 0",
            letterSpacing: "1px",
          }}
        >
          Blogs &amp; Updates
        </h1>
      </div>

      {/* GRID — 3 columns, white bg, no card borders */}
      <div
        style={{
          padding: "0 5% 80px",
          boxSizing: "border-box",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "55px 40px",
        }}
      >
        {blogs.map((blog, index) => (
          <div key={index}>

            {/* IMAGE — onClick so NO url visible on hover */}
            <div
              onClick={() => navigate(blog.slug)}
              style={{
                position: "relative",
                width: "100%",
                height: "230px",
                overflow: "hidden",
                cursor: "pointer",
              }}
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

              {/* BLACK BLOGS PILL — onClick so NO url visible on hover */}
              <span
                onClick={(e) => { e.stopPropagation(); navigate("/category/blogs"); }}
                style={{
                  position: "absolute",
                  top: "16px",
                  left: "16px",
                  background: "#000",
                  color: "#fff",
                  padding: "9px 22px",
                  borderRadius: "40px",
                  fontSize: "15px",
                  fontWeight: "500",
                  fontFamily: "'Poppins', sans-serif",
                  cursor: "pointer",
                  display: "inline-block",
                }}
              >
                Blogs
              </span>
            </div>

            {/* TITLE — <a href> so URL IS visible on hover */}
            <a href={blog.slug} style={{ textDecoration: "none" }}>
              <h2
                style={{
                  fontSize: "15px",
                  color: "#0B2C66",
                  lineHeight: "1.5",
                  marginTop: "18px",
                  marginBottom: "16px",
                  fontWeight: "600",
                  fontFamily: "'Cinzel Decorative', sans-serif",
                 
                  cursor: "pointer",
                }}
              >
                {blog.title}
              </h2>
            </a>

            {/* READ MORE — <a href> so URL IS visible on hover */}
            <a
              href={blog.slug}
              style={{
                color: "#000",
                fontSize: "15px",
                fontWeight: "600",
                fontFamily: "'Poppins', sans-serif",
                textDecoration: "none",
                display: "inline-block",
              }}
            >
              Read More &gt;
            </a>

          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
}