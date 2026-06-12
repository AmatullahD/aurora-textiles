import { useState, useEffect } from "react";

const slides = [
  {
    image: "/banner1.png",
    heading1: " 30 Years of Excellence in",
    heading2: " Men's Fine fabrics",
    text: "Supplying Premium Men's Suiting & Shirting Fabrics from top brands.",
  },
  {
    image: "/banner2.jpg",
    heading1: "Men's Shirting and Suiting",
    heading2: "Fabric Store in Dubai",
    text: "We are the leading fabric store in Dubai with a wider range of fabrics offered from multiple brands.",
  },
  {
    image: "/banner3.jpg",
    heading1: "Wholesale Textile Shop and Suppliers in Dubai",
    text: "Aurora Textiles are suppliers of the highest quality textiles in the UAE, Middle East and North African countries.",
  },
];

export default function BannerSlider() {
  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: isMobile ? "85vh" : "100vh",
        backgroundImage: `url(${slides[current].image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(0, 0, 0, 0.35)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "900px",
          paddingLeft: isMobile ? "20px" : "60px",
          paddingRight: isMobile ? "20px" : "0px",
          color: "white",
        }}
      >
        <h1
          style={{
            fontSize: isMobile ? "34px" : "38px",
            lineHeight: "1.4",
            fontWeight: "600",
            marginBottom: "22px",
            fontFamily: "'Cinzel Decorative', sans-serif",
          }}
        >
          {slides[current].heading1}
          <br />
          {slides[current].heading2}
        </h1>

        <p
          style={{
            fontSize: isMobile ? "16px" : "16px",
            lineHeight: isMobile ? "1.6" : "1.8",
            marginBottom: "35px",
            maxWidth: "650px",
            fontFamily: "'poppins', sans-serif",
            fontWeight: "400",
          }}
        >
          {slides[current].text}
        </p>

        <button
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={{
            padding: isMobile ? "12px 24px" : "16px 34px",
            background: hovered ? "white" : "transparent",
            border: "2px solid white",
            color: hovered ? "black" : "white",
            fontSize: isMobile ? "16px" : "20px",
            cursor: "pointer",
            transition: "0.3s ease",
          }}
        >
          Explore Our Collection
        </button>
      </div>

      {/* Left Arrow */}
      <button
        onClick={prevSlide}
        style={{
          position: "absolute",
          top: "50%",
          left: "10px",
          transform: "translateY(-50%)",
          zIndex: 5,
          background: "transparent",
          border: "none",
          color: "white",
          fontSize: isMobile ? "28px" : "42px",
          cursor: "pointer",
          padding: "10px",
        }}
      >
        ❮
      </button>

      {/* Right Arrow */}
      <button
        onClick={nextSlide}
        style={{
          position: "absolute",
          top: "50%",
          right: "10px",
          transform: "translateY(-50%)",
          zIndex: 5,
          background: "transparent",
          border: "none",
          color: "white",
          fontSize: isMobile ? "28px" : "42px",
          cursor: "pointer",
          padding: "10px",
        }}
      >
        ❯
      </button>
    </div>
  );
}