"use client";

import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export default function AboutPage() {

  const [experienceCount, setExperienceCount] = useState(0);
  const [clientCount, setClientCount] = useState(0);
  const [productCount, setProductCount] = useState(0);

  useEffect(() => {
    let exp = 0;
    let client = 0;
    let product = 0;

    const interval = setInterval(() => {
      if (exp < 30) {
        exp += 1;
        setExperienceCount(exp);
      }

      if (client < 500) {
        client += 10;
        setClientCount(client);
      }

      if (product < 5000) {
        product += 100;
        setProductCount(product);
      }

      if (exp >= 30 && client >= 500 && product >= 5000) {
        clearInterval(interval);
      }
    }, 25);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        width: "100%",
        overflowX: "hidden",
        background: "#ffffff",
      }}
    >
      {/* META TITLE & DESCRIPTION */}
      <Helmet>
        <title>About Us | Aurora Textiles Dubai</title>
        <meta name="description" content="Learn about Aurora Textiles — a family-run wholesale fabric business in Dubai with 45+ years of experience supplying premium men's fabrics across UAE and GCC." />
      
        <script type="application/ld+json">{`
          ${JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "About Aurora Textiles",
            "description": "Aurora Textiles is a family-run wholesale fabric business in Dubai with 45+ years of experience supplying premium men's fabrics across UAE and GCC.",
            "url": "https://aurora-textiles.vercel.app/about-us",
            "publisher": {
              "@type": "Organization",
              "name": "Aurora Textiles",
              "url": "https://aurora-textiles.vercel.app",
              "logo": "https://aurora-textiles.com/wp-content/uploads/2024/12/Aurora-Textiles-Logo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Dubai Textile City, Warehouse 47, Al Awir Road",
                "addressLocality": "Dubai",
                "addressCountry": "AE"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+971554172009",
                "contactType": "sales"
              }
            }
          })}
        `}</script>
      </Helmet>

      {/* NAVBAR */}
      <Navbar />

      {/* HERO BANNER */}
      <section
        style={{
          width: "100%",
          height: "210px",
          position: "relative",
          overflow: "hidden",
          marginBottom: "20px",
        }}
      >
        {/* BACKGROUND IMAGE */}
        <img
          src="/about-banner.jpg"
          alt="About Banner"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />

        {/* DARK OVERLAY */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "rgba(0,0,0,0.45)",
          }}
        ></div>

        {/* CENTER CONTENT */}
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

          {/* MAIN HEADING */}
          <h1
            style={{
              color: "#ffffff",
              fontSize:
                window.innerWidth < 768 ? "22px" : "58px",
              fontWeight: "600",
              margin: 0,
              lineHeight: "1.1",
              fontFamily: "'Cinzel Decorative', sans-serif",
             
            }}
          >
            About Us
          </h1>
        </div>
      </section>

      {/* OUR STORY SECTION */}
      <section
        style={{
          width: "100%",
          padding: "50px 6%",
          background: "#ffffff",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "40px",
            flexWrap: "wrap",
          }}
        >
          {/* LEFT SIDE */}
          <div
            style={{
              flex: "1 1 50%",
              minWidth: "400px",
            }}
          >
            {/* HEADING */}
            <div
              style={{
                textAlign: "center",
                marginBottom: "35px",
              }}
            >
              <h2
                style={{
                  fontSize: window.innerWidth < 768 ? "20px" : "35px",
                  color: "#344886",
                  fontFamily: "'Cinzel Decorative', sans-serif",
                  margin: 0,
                  fontWeight: "600",
                 
                  letterSpacing: "1px",
                }}
              >
                Our Story
              </h2>

              {/* UNDERLINE */}
              <div
                style={{
                  width: "210px",
                  height: "6px",
                  background: "#eed91f",
                  margin: "5px auto 0",
                }}
              ></div>
            </div>

            {/* PARAGRAPHS */}
            <p
              style={{
                fontSize: window.innerWidth < 768 ? "15px" : "17px",
                lineHeight: "30px",
                color: "#222",
                marginTop: 0,
                marginBottom: "28px",
                fontFamily: "'Poppins', sans-serif",
                fontWeight: "400",
              }}
            >
             As a family-run business with over 45 years of experience in textile wholesale and a four-generation, century-long legacy within the textile sector in the MENA region, our core values are integrity, reliability, and an unwavering commitment to quality and customer service. These principles have been instrumental in building trust and fostering long-term relationships with partners and customers worldwide. We pride ourselves on treating every client as part of the Aurora family, ensuring their needs are met with personalized attention and care. 
            </p>

            <p
              style={{
                fontSize: window.innerWidth < 768 ? "15px" : "17px",
                lineHeight: "30px",
                color: "#222",
                margin: 0,
                fontFamily: "'Poppins', sans-serif",
                fontWeight: "400",
              }}
            >
             At Aurora, quality is our hallmark. We ensure this by sourcing materials from trusted global suppliers, conducting rigorous quality checks, and maintaining transparency throughout the supply chain. Our exclusive partnerships with reputable fabric brands and a dedication to excellence has kept us standing tall in the market for over 30 years.
            </p>
          </div>

          {/* RIGHT SIDE VIDEO */}
          <div
            style={{
              flex: "1 1 35%",
              minWidth: "280px",
              position: "relative",
              paddingTop: window.innerWidth < 768 ? "220px" : "320px",
              borderRadius: "8px",
              overflow: "hidden",
            }}
          >
            <iframe
              src="https://player.vimeo.com/video/1044791642?background=1&autoplay=1&loop=1&muted=1&controls=0"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              title="Aurora Textiles Video"
              style={{
                position: "absolute",
                top: "40px",
                left: 0,
                width: "100%",
                height: "100%",
                border: "none",
                display: "block",
              }}
            ></iframe>
          </div>
        </div>
      </section>

      {/* EXPERIENCE STATS SECTION */}
      <section
        style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          marginTop: "0px",
        }}
      >
        {/* LEFT SIDE */}
        <div
          style={{
            flex: "1 1 50%",
            background: "#122a4b",
            padding:
              window.innerWidth < 768
                ? "5px 20px"
                : "5px 20px",
            boxSizing: "border-box",
            minWidth: "300px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >

          {/* ITEM 1 */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "32px",
            }}
          >
            <h3
              style={{
                color: "#ffffff",
                fontSize: window.innerWidth < 768 ? "24px" : "30px",
                fontWeight: "400",
                marginBottom: "14px",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Years Of Experience
            </h3>

            <div
              style={{
                color: "#ffb629",
                fontSize: window.innerWidth < 768 ? "58px" : "70px",
                fontWeight: "600",
                lineHeight: "1",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              {experienceCount}+
            </div>

            <div
              style={{
                width: "220px",
                height: "4px",
                background: "#ffcc33",
                margin: "20px auto 0",
              }}
            ></div>
          </div>

          {/* ITEM 2 */}
          <div
            style={{
              textAlign: "center",
              marginBottom: "32px",
            }}
          >
            <h3
              style={{
                color: "#ffffff",
                fontSize: window.innerWidth < 768 ? "24px" : "30px",
                fontWeight: "400",
                marginBottom: "14px",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              Satisfied Clients
            </h3>

            <div
              style={{
                color: "#ffb629",
                fontSize: window.innerWidth < 768 ? "58px" : "70px",
                fontWeight: "600",
                lineHeight: "1",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              {clientCount}+
            </div>

            <div
              style={{
                width: "220px",
                height: "4px",
                background: "#ffcc33",
                margin: "20px auto 0",
              }}
            ></div>
          </div>

          {/* ITEM 3 */}
          <div
            style={{
              textAlign: "center",
            }}
          >
            <h3
              style={{
                color: "#ffffff",
                fontSize: window.innerWidth < 768 ? "24px" : "30px",
                fontWeight: "400",
                marginBottom: "14px",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              High-Quality Products
            </h3>

            <div
              style={{
                color: "#ffb629",
                fontSize: window.innerWidth < 768 ? "58px" : "70px",
                fontWeight: "600",
                lineHeight: "1",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              {productCount.toLocaleString()}+
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
          style={{
            flex: "1 1 50%",
            background: "#ffffff",
            padding:
              window.innerWidth < 768
                ? "25px 20px"
                : "25px 40px",
            boxSizing: "border-box",
            minWidth: "300px",
          }}
        >
          <p
            style={{
              fontSize: window.innerWidth < 768 ? "24px" : "17px",
              lineHeight: "1.8",
              color: "#111",
              marginTop: 0,
              marginBottom: "25px",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Aurora has successfully balanced tradition and innovation by maintaining high standards of quality and customer service while embracing modern trends in the textile industry. We stay relevant by incorporating innovative fabrics, sustainable practices, and advanced technologies. This unique blend of heritage and forward-thinking ensures we remain a trusted name whilst meet the ever-changing demands of the global market.
          </p>

          <p
            style={{
              fontSize: window.innerWidth < 768 ? "24px" : "17px",
              lineHeight: "1.8",
              color: "#111",
              marginBottom: "25px",
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Our primary customers include local retailers, tailors, and distributors across the UAE, GCC, and Africa. They seek premium-quality fabrics, reliable delivery, and exceptional customer service. These clients value our expertise in suiting, shirting, uniform fabrics, and our expanding range of ethnic fabrics. We cater to clients who value consistency, competitive pricing, and expertise in wholesale textiles.
          </p>

          <p
            style={{
              fontSize: window.innerWidth < 768 ? "24px" : "17px",
              lineHeight: "1.8",
              color: "#111",
              margin: 0,
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Aurora's vision for the future includes expanding our presence in African and other emerging markets while strengthening our position in the UAE and GCC regions. With a focus on sustainability, we aim to introduce eco-friendly fabric options and adopt efficient business practices. By blending our rich history with forward-thinking strategies, we are committed to becoming a leader in the global textile industry for years to come.
          </p>
        </div>
      </section>

      <Footer />
    </div>

  );

}