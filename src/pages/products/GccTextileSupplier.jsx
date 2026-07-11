import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";

export default function GccTextileSupplier() {
    const navigate = useNavigate();
    const [openFaq, setOpenFaq] = useState(0);
    const [hoveredFaq, setHoveredFaq] = useState(null);

    const faqs = [
        {
            question: "What is a GCC textile supplier?",
            answer: "A GCC textile supplier provides fabrics and textile solutions to businesses across the Gulf Cooperation Council region, including the UAE, Saudi Arabia, Qatar, Oman, Kuwait, and Bahrain. These suppliers support industries such as hospitality, healthcare, fashion, uniforms, retail, and industrial workwear.",
        },
        {
            question: "Why do businesses source textiles from Dubai?",
            answer: "Dubai is a major textile trading hub due to its strategic location, advanced logistics infrastructure, international trade connections, and access to global fabric collections. Businesses across the GCC often source through Dubai for faster delivery and better supply chain efficiency.",
        },
        {
            question: "Which fabrics perform best in GCC climates?",
            answer: "Fabrics that offer breathability, moisture management, durability, and color retention perform best in GCC climates. Popular choices include poly-cotton blends, tropical suiting fabrics, hospitality performance fabrics, and lightweight menswear textiles.",
        },
        {
            question: "How do I choose the right GCC textile supplier?",
            answer: "Look for suppliers that offer consistent quality, reliable stock availability, regional expertise, industry-specific solutions, wholesale support, and efficient logistics across GCC countries.",
        },
        {
            question: "What industries rely most on GCC textile suppliers?",
            answer: "Key industries include hospitality, healthcare, aviation, retail, corporate uniforms, education, fashion, and industrial manufacturing. Each sector requires specialized fabrics designed for its operating environment.",
        },
        {
            question: "Why is fabric quality important for hospitality businesses?",
            answer: "Hospitality uniforms and textiles are a direct reflection of brand standards. High-quality fabrics help maintain a professional appearance, improve employee comfort, and withstand frequent washing cycles.",
        },
        {
            question: "What fabrics are commonly used for corporate uniforms?",
            answer: "Corporate uniforms typically use poly-viscose blends, cotton blends, and premium suiting fabrics because they offer a balance of comfort, durability, wrinkle resistance, and professional appearance.",
        },
        {
            question: "What is the most durable fabric for workwear and industrial uniforms?",
            answer: "Industrial workwear commonly uses performance fabrics and durable poly-cotton blends because they provide strength, wash durability, and resistance to wear and tear in demanding environments.",
        },
        {
            question: "Can GCC textile suppliers support wholesale orders?",
            answer: "Yes. Most established GCC textile suppliers support wholesale orders for garment manufacturers, retailers, hospitality groups, corporate organizations, and uniform suppliers.",
        },
        {
            question: "What should buyers check before sourcing fabrics?",
            answer: "Buyers should evaluate fabric composition, GSM, color fastness, shrinkage resistance, durability, climate suitability, stock availability, and supplier reliability before making purchasing decisions.",
        },
        {
            question: "Why is climate suitability important when sourcing fabrics in GCC?",
            answer: "The GCC experiences high temperatures, humidity, and frequent garment washing. Fabrics designed for these conditions typically last longer and provide better comfort than standard materials.",
        },
        {
            question: "What fabrics are best for hospitality uniforms in GCC countries?",
            answer: "Hospitality businesses often prefer wrinkle-resistant fabrics, poly-cotton blends, hospitality performance fabrics, and premium suiting materials that maintain appearance after repeated use.",
        },
        {
            question: "How do textile suppliers help growing businesses?",
            answer: "Reliable textile suppliers provide consistent fabric quality, inventory availability, logistics support, and scalable sourcing solutions that allow businesses to grow without compromising quality.",
        },
        {
            question: "Which GCC country has the strongest textile sourcing network?",
            answer: "The UAE, particularly Dubai, is widely recognized as one of the strongest textile sourcing and distribution hubs in the GCC due to its logistics infrastructure and international trade connectivity.",
        },
        {
            question: "Why choose a regional GCC textile supplier instead of overseas sourcing?",
            answer: "Regional suppliers often provide faster delivery, easier communication, better market understanding, reduced lead times, and fabrics better suited to GCC climate and business requirements.",
        },
    ];

    return (
        <div style={{ width: "100%", background: "#fff", fontFamily: "'Poppins', sans-serif", color: "#222" }}>

            <Helmet>
                <title>Leading GCC Textile Supplier for Premium Fabric - Aurora Textiles</title>
                <meta name="description" content="Aurora Textiles are the leading GCC Textiles Supplier for Premium Fabric. We offer all types of fabrics from renowned brands in UAE. Contact us now." />
                <script type="application/ld+json">{`
                  ${JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        { "@type": "Question", "name": "What is a GCC textile supplier?", "acceptedAnswer": { "@type": "Answer", "text": "A GCC textile supplier provides fabrics and textile solutions to businesses across the UAE, Saudi Arabia, Qatar, Oman, Kuwait, and Bahrain for industries such as hospitality, healthcare, fashion, uniforms, and industrial workwear." } },
                        { "@type": "Question", "name": "Why do businesses source textiles from Dubai?", "acceptedAnswer": { "@type": "Answer", "text": "Dubai is a major textile trading hub with advanced logistics, global trade connections, and access to international fabric collections, making sourcing faster and more efficient across the GCC." } },
                        { "@type": "Question", "name": "Which fabrics perform best in GCC climates?", "acceptedAnswer": { "@type": "Answer", "text": "Breathable and durable fabrics such as poly-cotton blends, tropical suiting fabrics, hospitality performance fabrics, and lightweight menswear textiles perform best in GCC climates." } },
                        { "@type": "Question", "name": "How do I choose the right GCC textile supplier?", "acceptedAnswer": { "@type": "Answer", "text": "Choose a supplier that offers consistent quality, reliable inventory, regional expertise, wholesale support, and efficient logistics across GCC countries." } },
                        { "@type": "Question", "name": "What industries rely most on GCC textile suppliers?", "acceptedAnswer": { "@type": "Answer", "text": "Hospitality, healthcare, aviation, retail, education, corporate uniforms, fashion, and industrial manufacturing are among the industries that rely heavily on GCC textile suppliers." } },
                        { "@type": "Question", "name": "Why is fabric quality important for hospitality businesses?", "acceptedAnswer": { "@type": "Answer", "text": "High-quality fabrics help hospitality businesses maintain a professional appearance, improve employee comfort, and withstand frequent washing while preserving brand image." } },
                        { "@type": "Question", "name": "What fabrics are commonly used for corporate uniforms?", "acceptedAnswer": { "@type": "Answer", "text": "Poly-viscose blends, cotton blends, and premium suiting fabrics are commonly used for corporate uniforms because they offer comfort, durability, and a professional appearance." } },
                        { "@type": "Question", "name": "What is the most durable fabric for workwear and industrial uniforms?", "acceptedAnswer": { "@type": "Answer", "text": "Performance fabrics and durable poly-cotton blends are widely used for industrial uniforms because they offer strength, durability, and resistance to wear and tear." } },
                        { "@type": "Question", "name": "Can GCC textile suppliers support wholesale orders?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Established GCC textile suppliers typically support wholesale orders for retailers, manufacturers, hospitality groups, and corporate organizations." } },
                        { "@type": "Question", "name": "What should buyers check before sourcing fabrics?", "acceptedAnswer": { "@type": "Answer", "text": "Buyers should review fabric composition, GSM, color fastness, durability, shrinkage resistance, climate suitability, inventory availability, and supplier reliability." } },
                        { "@type": "Question", "name": "Why is climate suitability important when sourcing fabrics in GCC?", "acceptedAnswer": { "@type": "Answer", "text": "The GCC's hot climate and frequent garment washing require fabrics that offer breathability, durability, moisture management, and long-lasting appearance." } },
                        { "@type": "Question", "name": "What fabrics are best for hospitality uniforms in GCC countries?", "acceptedAnswer": { "@type": "Answer", "text": "Hospitality businesses often choose wrinkle-resistant fabrics, poly-cotton blends, hospitality performance fabrics, and premium suiting materials." } },
                        { "@type": "Question", "name": "How do textile suppliers help growing businesses?", "acceptedAnswer": { "@type": "Answer", "text": "Reliable textile suppliers provide consistent quality, inventory availability, logistics support, and scalable sourcing solutions that help businesses grow efficiently." } },
                        { "@type": "Question", "name": "Which GCC country has the strongest textile sourcing network?", "acceptedAnswer": { "@type": "Answer", "text": "The UAE, particularly Dubai, is widely recognized as one of the strongest textile sourcing hubs in the GCC due to its logistics infrastructure and trade connectivity." } },
                        { "@type": "Question", "name": "Why choose a regional GCC textile supplier instead of overseas sourcing?", "acceptedAnswer": { "@type": "Answer", "text": "Regional GCC suppliers often provide faster delivery, better market understanding, easier communication, and fabrics better suited to local climate conditions." } },
                    ]
                })}
                `}</script>
            </Helmet>

            <Navbar />

            {/* ── HERO BANNER ── */}
            <section
                style={{
                    width: "100%",
                    height: "420px",
                    position: "relative",
                    overflow: "hidden",
                    marginBottom: "70px",
                }}
            >
                <img
                    src="/about-banner.jpg"
                    alt="Leading GCC Textile Supplier - Aurora Textiles"
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
                <div style={{ position: "absolute", inset: 0, background: "rgba(0,0,0,0.50)" }} />
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
                            fontSize: window.innerWidth < 768 ? "28px" : "58px",
                            fontWeight: "700",
                            margin: 0,
                            lineHeight: "1.2",
                            fontFamily: "'Cinzel Decorative', serif",
                            letterSpacing: "1px",
                        }}
                    >
                        Leading GCC Textile Supplier<br />for Premium Fabric
                    </h1>
                </div>
            </section>

            {/* ── SECTION 1: YOUR TRUSTED GCC TEXTILE PARTNER ── */}
            <section
                style={{
                    width: "100%",
                    padding: window.innerWidth < 768 ? "0 5% 60px" : "0 6% 80px",
                    boxSizing: "border-box",
                }}
            >
                <div
                    style={{
                        maxWidth: "1280px",
                        margin: "0 auto",
                        display: "flex",
                        gap: "60px",
                        alignItems: "flex-start",
                     flexWrap: "wrap",
                    }}
                >
                    {/* Left Image */}
                    <div style={{ flex: "0 0 47%", minWidth: "280px" }}>
                        <img
                            src="/blog-card-10.webp"
                            alt="Premium fabric rolls at Aurora Textiles GCC supplier UAE"
                            style={{
                                width: "100%",
                                height: "740px",
                                objectFit: "cover",
                                borderRadius: "16px",
                                display: "block",
                            }}
                        />
                    </div>

                    {/* Right Content */}
                    <div style={{ flex: "1", minWidth: "280px" }}>
                        <h2
                            style={{
                                fontFamily: "'Cinzel Decorative', serif",
                                fontSize: window.innerWidth < 768 ? "26px" : "42px",
                                fontWeight: "700",
                                color: "#344886",
                                lineHeight: "1.2",
                                marginBottom: "28px",
                                marginTop: "0",
                            }}
                        >
                            Leading GCC Textile<br />Supplier for Premium Fabric
                        </h2>

                        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#333", marginBottom: "20px", letterSpacing: "0.3px" }}>
                            The textile industry in the Gulf Cooperation Council (GCC) region is evolving rapidly. From luxury hospitality projects in Dubai and Doha to large-scale industrial developments in Saudi Arabia and growing retail sectors in Kuwait, businesses today require more than just fabric—they need reliable sourcing partners that can support long-term growth.
                        </p>

                        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#333", marginBottom: "20px", letterSpacing: "0.3px" }}>
                            As a trusted GCC textile supplier, Aurora Textiles provides premium fabric solutions to businesses across the UAE, Saudi Arabia, Qatar, Oman, Kuwait, and Bahrain. Whether you're sourcing uniform fabrics, hospitality textiles, menswear fabrics, suiting materials, or industrial workwear fabrics, choosing the right textile supplier can directly impact product quality, operational efficiency, and customer satisfaction.
                        </p>

                        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#333", marginBottom: "36px", letterSpacing: "0.3px" }}>
                            In a competitive market where consistency matters, fabric is no longer simply a raw material—it has become a strategic business asset.
                        </p>

                        {/* Contact Us + Call + WhatsApp */}
                        <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
                            <a
                                href="/contact-us"
                                onClick={(e) => { e.preventDefault(); navigate("/contact-us"); window.scrollTo(0, 0); }}
                                onMouseEnter={e => {
                                    e.currentTarget.style.background = "#0a089bd3";
                                    e.currentTarget.style.borderColor = "#e0b219";
                                }}
                                onMouseLeave={e => {
                                    e.currentTarget.style.background = "#8b7d3a";
                                    e.currentTarget.style.borderColor = "#050e5f";
                                }}
                                style={{
                                    background: "#8b7d3a",
                                    color: "#fff",
                                    border: "2px solid #050e5f",
                                    padding: "14px 32px",
                                    fontFamily: "'Poppins', sans-serif",
                                    fontSize: "18px",
                                    fontWeight: "500",
                                    borderRadius: "6px",
                                    cursor: "pointer",
                                    letterSpacing: "0.5px",
                                    transition: "all 0.3s ease",
                                    textDecoration: "none",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontFamily: "'Poppins', sans-serif",
                                }}
                            >
                                Contact Us
                            </a>

                            {/* Call Button */}
                            <a
                                href="tel:+9197154172009"
                                style={{
                                    width: "52px",
                                    height: "52px",
                                    borderRadius: "50%",
                                    background: "#111",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    textDecoration: "none",
                                    flexShrink: 0,
                                    transition: "transform 0.2s ease",
                                }}
                                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
                                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                                aria-label="Call us"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="white">
                                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.58.57 1 1 0 011 1v3.61a1 1 0 01-1 1C10.01 22 2 13.99 2 4a1 1 0 011-1h3.61a1 1 0 011 1 11.36 11.36 0 00.57 3.58 1 1 0 01-.25 1.01l-2.31 2.2z" />
                                </svg>
                            </a>

                            {/* WhatsApp Button */}
                            <a
                                href="https://wa.me/971554172009"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    width: "52px",
                                    height: "52px",
                                    borderRadius: "50%",
                                    background: "#25D366",
                                    display: "inline-flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    textDecoration: "none",
                                    flexShrink: 0,
                                    transition: "transform 0.2s ease",
                                }}
                                onMouseEnter={e => e.currentTarget.style.transform = "scale(1.1)"}
                                onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
                                aria-label="WhatsApp us"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SECTION 1B: WHAT IS A GCC TEXTILE SUPPLIER? ── */}
            <section
                style={{
                    width: "100%",
                    padding: window.innerWidth < 768 ? "0 5% 50px" : "0 6% 60px",
                    boxSizing: "border-box",
                    background: "#fff",
                }}
            >
                <div
                    style={{
                        maxWidth: "1280px",
                        margin: "0 auto",
                        display: "flex",
                        gap: "60px",
                        alignItems: "stretch",
                        flexWrap: "wrap",
                    }}
                >
                    {/* Left Content */}
                    <div style={{ flex: "1", minWidth: "280px" }}>
                        <h2
                            style={{
                                fontFamily: "'Cinzel Decorative', serif",
                                fontSize: window.innerWidth < 768 ? "22px" : "36px",
                                fontWeight: "700",
                                color: "#344886",
                                marginBottom: "20px",
                                lineHeight: "1.3",
                                  marginTop: "0",
                            }}
                        >
                            What Is a GCC Textile Supplier?
                        </h2>
                        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#333", marginBottom: "16px", letterSpacing: "0.3px" }}>
                            A GCC textile supplier is a company that provides fabrics and textile solutions to businesses throughout the Gulf Cooperation Council region, including the UAE, Saudi Arabia, Qatar, Oman, Kuwait, and Bahrain.
                        </p>
                        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#333", marginBottom: "16px", letterSpacing: "0.3px" }}>
                            However, modern textile sourcing goes far beyond supplying rolls of fabric.
                        </p>
                        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#333", marginBottom: "8px", letterSpacing: "0.3px" }}>
                            Today's businesses need suppliers who can offer:
                        </p>
                        <ul style={{ paddingLeft: "30px", margin: "0 0 20px 0" }}>
                            {["Consistent product quality", "Reliable inventory availability", "Fast regional distribution", "Industry-specific expertise", "Climate-appropriate fabric solutions"].map((point, i) => (
                                <li key={i} style={{ fontSize: "17px", lineHeight: "1.6", color: "#333", marginBottom: "6px" }}>
                                    {point}
                                </li>
                            ))}
                        </ul>
                        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#333", marginBottom: "16px", letterSpacing: "0.3px" }}>
                            For many organizations, the textile supplier becomes a long-term business partner rather than simply a vendor.
                        </p>
                        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#333", letterSpacing: "0.3px" }}>
                            This is particularly important in the GCC, where environmental conditions, customer expectations, and industry standards create unique textile requirements that differ significantly from other global markets.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div style={{ flex: "0 0 47%", minWidth: "280px" }}>
                        <img
                            src="/donear-3.webp"
                            alt="GCC textile supplier regions UAE Saudi Arabia Qatar Oman Kuwait Bahrain"
                            style={{
                                width: "100%",
                                height: "100%",
                                minHeight: "420px",
                                objectFit: "cover",
                                borderRadius: "16px",
                                display: "block",
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* ── SECTION 1C: WHY THE RIGHT TEXTILE SUPPLIER MATTERS MORE THAN EVER ── */}
            <section
                style={{
                    width: "100%",
                    padding: window.innerWidth < 768 ? "0 5% 50px" : "0 6% 60px",
                    boxSizing: "border-box",
                    background: "#fff",
                }}
            >
                <div
                    style={{
                        maxWidth: "1280px",
                        margin: "0 auto",
                        display: "flex",
                        gap: "60px",
                        alignItems: "stretch",
                        flexWrap: "wrap",
                    }}
                >
                    {/* Left Image */}
                    <div style={{ flex: "0 0 47%", minWidth: "280px" }}>
                        <img
                            src="/image-2.png"
                            alt="Premium fabric quality inspection GCC textile supplier"
                            style={{
                                width: "100%",
                                height: "100%",
                                minHeight: "420px",
                                objectFit: "cover",
                                borderRadius: "16px",
                                display: "block",
                            }}
                        />
                    </div>

                    {/* Right Content */}
                    <div style={{ flex: "1", minWidth: "280px" }}>
                        <h2
                            style={{
                                fontFamily: "'Cinzel Decorative', serif",
                                fontSize: window.innerWidth < 768 ? "22px" : "36px",
                                fontWeight: "700",
                                color: "#344886",
                                marginBottom: "20px",
                                lineHeight: "1.3",
                                  marginTop: "0",
                            }}
                        >
                            Why the Right Textile Supplier Matters More Than Ever
                        </h2>
                        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#333", marginBottom: "16px", letterSpacing: "0.3px" }}>
                            Many buyers initially focus on price when sourcing fabrics.
                        </p>
                        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#333", marginBottom: "16px", letterSpacing: "0.3px" }}>
                            But experienced procurement managers, garment manufacturers, fashion brands, and hospitality operators understand that the true cost of fabric extends far beyond the purchase price.
                        </p>
                        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#333", marginBottom: "8px", letterSpacing: "0.3px" }}>
                            Poor-quality fabric can result in:
                        </p>
                        <ul style={{ paddingLeft: "30px", margin: "0 0 20px 0" }}>
                            {["Frequent replacements", "Customer complaints", "Reduced garment lifespan", "Brand image issues", "Increased operational costs"].map((point, i) => (
                                <li key={i} style={{ fontSize: "17px", lineHeight: "1.6", color: "#333", marginBottom: "6px" }}>
                                    {point}
                                </li>
                            ))}
                        </ul>
                        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#333", marginBottom: "16px", letterSpacing: "0.3px" }}>
                            Conversely, high-quality fabrics improve garment performance, maintain appearance over time, and contribute to stronger customer experiences.
                        </p>
                        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#333", letterSpacing: "0.3px" }}>
                            A hotel uniform that retains its appearance after hundreds of washes, a corporate shirt that remains comfortable throughout the workday, or an industrial uniform that withstands demanding conditions all begin with one decision: choosing the right textile supplier.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── SECTION 1D: WHY DUBAI HAS BECOME THE TEXTILE GATEWAY TO THE GCC ── */}
            <section
                style={{
                    width: "100%",
                    padding: window.innerWidth < 768 ? "0 5% 50px" : "0 6% 60px",
                    boxSizing: "border-box",
                    background: "#fff",
                }}
            >
                <div
                    style={{
                        maxWidth: "1280px",
                        margin: "0 auto",
                        display: "flex",
                        gap: "60px",
                        alignItems: "stretch",
                        flexWrap: "wrap",
                    }}
                >
                    {/* Left Content */}
                    <div style={{ flex: "1", minWidth: "280px" }}>
                        <h2
                            style={{
                                fontFamily: "'Cinzel Decorative', serif",
                                fontSize: window.innerWidth < 768 ? "22px" : "36px",
                                fontWeight: "700",
                                color: "#344886",
                                marginBottom: "20px",
                                lineHeight: "1.3",
                                  marginTop: "0",
                            }}
                        >
                            Why Dubai Has Become the Textile Gateway to the GCC
                        </h2>
                        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#333", marginBottom: "16px", letterSpacing: "0.3px" }}>
                            When businesses search for a reliable Dubai textile exporter GCC, they are often looking for more than a convenient location.
                        </p>
                        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#333", marginBottom: "16px", letterSpacing: "0.3px" }}>
                            Dubai has established itself as one of the region's leading textile sourcing and distribution hubs due to its strategic position between Asia, Europe, and Africa.
                        </p>
                        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#333", marginBottom: "16px", letterSpacing: "0.3px" }}>
                            The city's advanced logistics infrastructure, world-class ports, free zones, and international trade networks enable faster movement of goods throughout the region.
                        </p>
                        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#333", marginBottom: "8px", letterSpacing: "0.3px" }}>
                            For buyers in Saudi Arabia, Qatar, Oman, Bahrain, and Kuwait, sourcing through Dubai often means:
                        </p>
                        <ul style={{ paddingLeft: "30px", margin: "0 0 20px 0" }}>
                            {["Reduced lead times", "Better inventory access", "Easier logistics management", "Access to international textile collections", "Improved supply chain flexibility"].map((point, i) => (
                                <li key={i} style={{ fontSize: "17px", lineHeight: "1.6", color: "#333", marginBottom: "6px" }}>
                                    {point}
                                </li>
                            ))}
                        </ul>
                        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#333", letterSpacing: "0.3px" }}>
                            These advantages have helped make Dubai a preferred textile sourcing destination for businesses across the GCC.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div style={{ flex: "0 0 47%", minWidth: "280px" }}>
                        <img
                            src="/linen-2.webp"
                            alt="Dubai textile trade hub logistics and port infrastructure"
                            style={{
                                width: "100%",
                                height: "100%",
                                minHeight: "420px",
                                objectFit: "cover",
                                borderRadius: "16px",
                                display: "block",
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* ── SECTION 2B: TEXTILE SOLUTIONS DESIGNED FOR EVERY INDUSTRY ── */}
            <section
                style={{
                    width: "100%",
                    padding: window.innerWidth < 768 ? "0 5% 50px" : "0 6% 60px",
                    boxSizing: "border-box",
                    background: "#fff",
                }}
            >
                <div
                    style={{
                        maxWidth: "1280px",
                        margin: "0 auto",
                        display: "flex",
                        gap: "60px",
                        alignItems: "stretch",
                        flexWrap: "wrap",
                    }}
                >
                    {/* Left Image */}
                    <div style={{ flex: "0 0 47%", minWidth: "280px" }}>
                        <img
                            src="/sanskriti-4.webp"
                            alt="Textile fabric solutions for hospitality uniform and industrial sectors"
                            style={{
                                width: "100%",
                                height: "100%",
                                minHeight: "420px",
                                objectFit: "cover",
                                borderRadius: "16px",
                                display: "block",
                            }}
                        />
                    </div>

                    {/* Right Content */}
                    <div style={{ flex: "1", minWidth: "280px" }}>
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: window.innerWidth < 768 ? "22px" : "36px",
                            fontWeight: "700",
                            color: "#344886",
                            marginBottom: "20px",
                            lineHeight: "1.3",
                              marginTop: "0",
                        }}
                    >
                        Textile Solutions Designed for Every Industry
                    </h2>
                    <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#333", marginBottom: "16px", letterSpacing: "0.3px" }}>
                        No two industries use fabric in the same way.
                    </p>
                    <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#333", marginBottom: "16px", letterSpacing: "0.3px" }}>
                        The requirements of a luxury hotel are vastly different from those of a manufacturing facility or a fashion retailer.
                    </p>
                    <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#333", marginBottom: "28px", letterSpacing: "0.3px" }}>
                        This is why successful textile sourcing begins with understanding the end application.
                    </p>

                    {[
                        {
                            title: "Uniform Fabrics",
                            paras: [
                                "Uniforms are often the first thing customers notice about a business. Whether in healthcare, aviation, education, retail, or corporate environments, uniforms must balance comfort, durability, and professional appearance.",
                                "High-quality uniform fabrics are designed to withstand repeated washing while maintaining color consistency, shape, and overall presentation.",
                            ],
                        },
                        {
                            title: "Hospitality Fabrics",
                            paras: [
                                "Hotels, restaurants, and resorts require fabrics that create a premium visual impression while remaining practical for daily use.",
                                "Hospitality fabrics must resist wrinkles, retain their appearance, and provide comfort during long working hours. In luxury hospitality environments, fabric quality directly contributes to guest perception and brand image.",
                            ],
                        },
                        {
                            title: "Menswear Fabrics",
                            paras: [
                                "Menswear continues to be one of the strongest textile segments in the GCC.",
                                "From premium suiting fabrics and shirting materials to occasionwear collections, retailers and tailoring houses require fabrics that combine elegance, comfort, and durability.",
                                "Climate suitability is particularly important in the GCC, where lightweight and breathable fabrics often outperform heavier alternatives.",
                            ],
                        },
                        {
                            title: "Industrial Workwear Fabrics",
                            paras: [
                                "Industrial sectors demand a different level of performance.",
                                "Workwear fabrics must withstand demanding environments while maintaining durability, safety, and comfort. These fabrics are often engineered for high wash resistance, abrasion resistance, and long-term reliability.",
                            ],
                        },
                    ].map((industry, idx, arr) => (
                        <div key={idx} style={{ marginBottom: idx < arr.length - 1 ? "28px" : "0" }}>
                            <h3
                                style={{
                                    fontFamily: "'Cinzel Decorative', serif",
                                    fontSize: "22px",
                                    fontWeight: "700",
                                    color: "#344886",
                                    marginBottom: "12px",
                                }}
                            >
                                {industry.title}
                            </h3>
                            {industry.paras.map((para, pi) => (
                                <p key={pi} style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#333", marginBottom: "8px", letterSpacing: "0.3px" }}>
                                    {para}
                                </p>
                            ))}
                        </div>
                    ))}
                    </div>
                </div>
            </section>

            {/* ── SECTION 3B: UNDERSTANDING FABRIC PERFORMANCE IN GCC CONDITIONS ── */}
            <section
                style={{
                    width: "100%",
                    padding: window.innerWidth < 768 ? "50px 5% 50px" : "40px 6% 60px",
                    boxSizing: "border-box",
                    background: "#fff",
                }}
            >
                <div
                    style={{
                        maxWidth: "1280px",
                        margin: "0 auto",
                        display: "flex",
                        gap: "60px",
                        alignItems: "flex-start",
                        flexWrap: "wrap",
                    }}
                >
                    {/* Left Content */}
                    <div style={{ flex: "1", minWidth: "280px" }}>
                        <h2
                            style={{
                                fontFamily: "'Cinzel Decorative', serif",
                                fontSize: window.innerWidth < 768 ? "22px" : "36px",
                                fontWeight: "700",
                                color: "#344886",
                                marginBottom: "20px",
                                lineHeight: "1.3",
                                  marginTop: "0",
                            }}
                        >
                            Understanding Fabric Performance in GCC Conditions
                        </h2>
                        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#333", marginBottom: "16px", letterSpacing: "0.3px" }}>
                            One of the biggest mistakes businesses make is sourcing fabrics without considering regional environmental conditions.
                        </p>
                        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#333", marginBottom: "8px", letterSpacing: "0.3px" }}>
                            The GCC climate presents several challenges:
                        </p>
                        <ul style={{ paddingLeft: "30px", margin: "0 0 20px 0" }}>
                            {["High temperatures", "Humidity", "Intense sunlight", "Frequent laundering", "Extended wear periods"].map((point, i) => (
                                <li key={i} style={{ fontSize: "17px", lineHeight: "1.6", color: "#333", marginBottom: "6px" }}>
                                    {point}
                                </li>
                            ))}
                        </ul>
                        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#333", marginBottom: "16px", letterSpacing: "0.3px" }}>
                            These factors can significantly affect garment performance.
                        </p>
                        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#333", marginBottom: "16px", letterSpacing: "0.3px" }}>
                            A fabric that performs well in a European climate may struggle in Saudi Arabia or the UAE.
                        </p>
                        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#333", marginBottom: "8px", letterSpacing: "0.3px" }}>
                            This is why businesses increasingly prioritize fabrics that offer:
                        </p>
                        <ul style={{ paddingLeft: "30px", margin: 0 }}>
                            {[
                                { label: "Breathability", desc: "Allows air circulation and improves wearer comfort." },
                                { label: "Moisture Management", desc: "Helps manage perspiration in hot conditions." },
                                { label: "Color Retention", desc: "Maintains appearance despite UV exposure and frequent washing." },
                                { label: "Durability", desc: "Extends garment lifespan and reduces replacement costs." },
                                { label: "Comfort", desc: "Supports employee productivity and customer-facing presentation." },
                            ].map((item, i) => (
                                <li key={i} style={{ fontSize: "17px", lineHeight: "1.6", color: "#333", marginBottom: "8px" }}>
                                    <strong>{item.label}:</strong> {item.desc}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Image */}
                    <div style={{ flex: "0 0 47%", minWidth: "280px" }}>
                        <img
                            src="/reliance-5.webp"
                            alt="Fabric performance breathability and durability in GCC climate"
                            style={{
                                width: "100%",
                                height: "880px",
                                objectFit: "cover",
                                borderRadius: "16px",
                                display: "block",
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* ── SECTION 3C: TEXTILE DEMAND ACROSS GCC COUNTRIES ── */}
            <section
                style={{
                    width: "100%",
                    padding: window.innerWidth < 768 ? "0 5% 50px" : "0 6% 60px",
                    boxSizing: "border-box",
                    background: "#fff",
                }}
            >
                <div
                    style={{
                        maxWidth: "1280px",
                        margin: "0 auto",
                        display: "flex",
                        gap: "60px",
                        alignItems: "stretch",
                        flexWrap: "wrap",
                    }}
                >
                    {/* Left Image */}
                    <div style={{ flex: "0 0 47%", minWidth: "280px" }}>
                        <img
                            src="/faq-image.jpg"
                            alt="Textile demand across GCC countries Saudi Arabia Qatar Oman Kuwait Bahrain UAE"
                            style={{
                                width: "100%",
                                height: "100%",
                                minHeight: "420px",
                                objectFit: "cover",
                                borderRadius: "16px",
                                display: "block",
                            }}
                        />
                    </div>

                    {/* Right Content */}
                    <div style={{ flex: "1", minWidth: "280px" }}>
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: window.innerWidth < 768 ? "22px" : "36px",
                            fontWeight: "700",
                            color: "#344886",
                            marginBottom: "20px",
                            lineHeight: "1.3",
                              marginTop: "0",
                        }}
                    >
                        Textile Demand Across GCC Countries
                    </h2>
                    <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#333", marginBottom: "28px", letterSpacing: "0.3px" }}>
                        While the GCC functions as a connected regional market, each country has unique textile requirements.
                    </p>

                    {[
                        { title: "Saudi Arabia", para: "Saudi Arabia's expanding hospitality, tourism, industrial, and corporate sectors continue to drive demand for quality textile solutions. Large-scale developments and Vision 2030 initiatives have increased the need for uniforms, workwear, and hospitality fabrics." },
                        { title: "Qatar", para: "Qatar's focus on hospitality, aviation, luxury retail, and corporate services creates strong demand for premium fabrics that balance appearance and functionality." },
                        { title: "Oman", para: "Tourism growth, infrastructure development, and industrial expansion continue to create opportunities for textile suppliers capable of delivering reliable fabric solutions." },
                        { title: "Kuwait", para: "Retail, hospitality, and government sectors contribute significantly to textile demand, particularly for professional uniforms and premium menswear fabrics." },
                        { title: "Bahrain", para: "Bahrain's corporate, financial, and hospitality industries rely heavily on professional apparel and textile products that reflect quality and consistency." },
                        { title: "United Arab Emirates", para: "The UAE remains one of the region's most dynamic textile markets. Businesses across Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah, Umm Al Quwain, and Al Ain require textile solutions that meet international standards while performing effectively in local conditions." },
                    ].map((country, idx, arr) => (
                        <div key={idx} style={{ marginBottom: idx < arr.length - 1 ? "20px" : "0" }}>
                            <h3
                                style={{
                                    fontFamily: "'Cinzel Decorative', serif",
                                    fontSize: "22px",
                                    fontWeight: "700",
                                    color: "#344886",
                                    marginBottom: "8px",
                                }}
                            >
                                {country.title}
                            </h3>
                            <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#333", letterSpacing: "0.3px" }}>
                                {country.para}
                            </p>
                        </div>
                    ))}
                    </div>
                </div>
            </section>

            {/* ── SECTION 3D: HOW TO CHOOSE THE RIGHT GCC TEXTILE SUPPLIER ── */}
            <section
                style={{
                    width: "100%",
                    padding: window.innerWidth < 768 ? "50px 5% 50px" : "40px 6% 60px",
                    boxSizing: "border-box",
                    background: "#fff",
                }}
            >
                <div
                    style={{
                        maxWidth: "1280px",
                        margin: "0 auto",
                        display: "flex",
                        gap: "60px",
                        alignItems: "stretch",
                        flexWrap: "wrap",
                    }}
                >
                    {/* Left Content */}
                    <div style={{ flex: "1", minWidth: "280px" }}>
                        <h2
                            style={{
                                fontFamily: "'Cinzel Decorative', serif",
                                fontSize: window.innerWidth < 768 ? "22px" : "36px",
                                fontWeight: "700",
                                color: "#344886",
                                marginBottom: "20px",
                                lineHeight: "1.3",
                                  marginTop: "0",
                            }}
                        >
                            How to Choose the Right GCC Textile Supplier
                        </h2>
                        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#333", marginBottom: "16px", letterSpacing: "0.3px" }}>
                            Selecting a textile supplier should never be based solely on price.
                        </p>
                        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#333", marginBottom: "16px", letterSpacing: "0.3px" }}>
                            Instead, businesses should evaluate suppliers based on several critical factors.
                        </p>
                        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#333", marginBottom: "8px", letterSpacing: "0.3px" }}>
                            A reliable supplier should demonstrate:
                        </p>
                        <ul style={{ paddingLeft: "30px", margin: "0 0 20px 0" }}>
                            {["Consistent product quality", "Strong inventory management", "Regional market expertise", "Industry-specific knowledge", "Reliable logistics capability", "Wholesale support", "Scalability for future growth"].map((point, i) => (
                                <li key={i} style={{ fontSize: "17px", lineHeight: "1.6", color: "#333", marginBottom: "6px" }}>
                                    {point}
                                </li>
                            ))}
                        </ul>
                        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#333", letterSpacing: "0.3px" }}>
                            The best textile suppliers help businesses grow by providing predictable quality and dependable service over the long term.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div style={{ flex: "0 0 47%", minWidth: "280px" }}>
                        <img
                            src="/egypt-1.webp"
                            alt="Checklist for choosing the right GCC textile supplier"
                            style={{
                                width: "100%",
                                height: "100%",
                                minHeight: "420px",
                                objectFit: "cover",
                                borderRadius: "16px",
                                display: "block",
                            }}
                        />
                    </div>
                </div>
            </section>

            {/* ── SECTION 4: GCC TEXTILE SUPPLY SOLUTIONS ── */}
            <section
                style={{
                    width: "100%",
                    padding: window.innerWidth < 768 ? "50px 5% 60px" : "40px 6%",
                    boxSizing: "border-box",
                    background: "#fff",
                }}
            >
                <div
                    style={{
                        maxWidth: "1280px",
                        margin: "0 auto",
                        display: "flex",
                        gap: "60px",
                        alignItems: "flex-start",
                        flexWrap: "wrap",
                    }}
                >
                    {/* Left Image */}
                    <div style={{ flex: "0 0 47%", minWidth: "280px" }}>
                        <img
                            src="/oxford-2.webp"
                            alt="GCC textile wholesale supply solutions Aurora Textiles"
                            style={{
                                width: "100%",
                                height: "740px",
                                objectFit: "cover",
                                borderRadius: "16px",
                                display: "block",
                            }}
                        />
                    </div>

                    {/* Right Content */}
                    <div style={{ flex: "1", minWidth: "280px" }}>
                        <h2
                            style={{
                                fontFamily: "'Cinzel Decorative', serif",
                                fontSize: window.innerWidth < 768 ? "24px" : "38px",
                                fontWeight: "700",
                                color: "#344886",
                                lineHeight: "1.2",
                                marginBottom: "28px",
                                  marginTop: "0",
                            }}
                        >
                            Why Businesses Across the<br />GCC Choose Aurora Textiles
                        </h2>

                        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#333", marginBottom: "20px", letterSpacing: "0.3px" }}>
                            Aurora Textiles supports businesses throughout the GCC by providing textile solutions designed for regional market needs.
                        </p>

                        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#333", marginBottom: "20px", letterSpacing: "0.3px" }}>
                            With expertise spanning hospitality fabrics, uniform textiles, menswear fabrics, and industrial applications, Aurora Textiles helps organizations source materials that perform in demanding environments while maintaining premium quality standards.
                        </p>

                        <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#333", letterSpacing: "0.3px" }}>
                            Businesses across Dubai, Abu Dhabi, Sharjah, Ajman, Saudi Arabia, Qatar, Oman, Kuwait, and Bahrain choose Aurora Textiles because of its commitment to consistency, product knowledge, and reliable regional supply capabilities.
                        </p>
                    </div>
                </div>
            </section>

            {/* ── SECTION 5: CONNECT WITH AURORA TEXTILES ── */}
            <section
                style={{
                    width: "100%",
                    padding: window.innerWidth < 768 ? "20px 5% 20px" : "20px 6% 20px",
                    boxSizing: "border-box",
                    background: "#fff",
                }}
            >
                <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
                    <h2
                        style={{
                            fontFamily: "'Cinzel Decorative', serif",
                            fontSize: window.innerWidth < 768 ? "22px" : "40px",
                            fontWeight: "700",
                            color: "#344886",
                            marginBottom: "24px",
                            lineHeight: "1.3",
                            textAlign: "center",
                              marginTop: "0",
                        }}
                    >
                        Looking for a Reliable GCC Textile Supplier?
                    </h2>
                    <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#333", textAlign: "center", marginBottom: "16px", letterSpacing: "0.3px" }}>
                        Whether you are sourcing fabrics for hospitality uniforms, corporate apparel, menswear collections, industrial workwear, or large-scale textile projects, the right supplier can make a significant difference to your business outcomes.
                    </p>
                    <p style={{ fontFamily: "Poppins, sans-serif", fontSize: "16px", lineHeight: "1.6", color: "#333", textAlign: "center", letterSpacing: "0.3px" }}>
                        Aurora Textiles helps organizations across the GCC access premium textile solutions backed by regional expertise, quality assurance, and dependable supply capabilities.
                    </p>
                </div>
            </section>

            {/* ── FAQ SECTION ── */}
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
                            textDecoration: "none",
                        }}
                    >
                        FAQ
                    </h2>
                </div>

                {/* FAQ Items */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0px" }}>
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            style={{
                                border: "1px solid #ddd",
                                borderBottom: index === faqs.length - 1 ? "1px solid #ddd" : "none",
                                background: "#fff",
                            }}
                        >
                            {/* Question Row */}
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
                                        fontSize: "17px",
                                        fontWeight: "700",
                                        color: openFaq === index ? "#b39131" : hoveredFaq === index ? "#070e46" : "#0b18a1",
                                        letterSpacing: "0.5px",
                                        lineHeight: "1.4",
                                        transition: "color 0.2s ease",
                                    }}
                                >
                                    {faq.question}
                                </span>
                                <span
                                    style={{
                                        fontSize: "18px",
                                        color: openFaq === index ? "#b39131" : hoveredFaq === index ? "#070e46" : "#0b18a1",
                                        fontWeight: "600",
                                        marginLeft: "20px",
                                        flexShrink: 0,
                                        transition: "color 0.2s ease",
                                    }}
                                >
                                    {openFaq === index ? "−" : "+"}
                                </span>
                            </div>

                            {/* Answer */}
                            {openFaq === index && (
                                <div
                                    style={{
                                        padding: "0 28px 24px 28px",
                                        fontFamily: "'Poppins',sans-serif",
                                        fontSize: "16px",
                                        color: "#292626",
                                        lineHeight: "1.5",
                                        borderTop: "1px solid #eee",
                                        paddingTop: "20px",
                                    }}
                                >
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
            <ScrollToTop />
        </div>
    );
}