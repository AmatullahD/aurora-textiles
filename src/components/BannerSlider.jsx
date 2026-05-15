import { useState, useEffect } from "react";
import "./BannerSlider.css";

const slides = [
  {
    image: "/banner1.png",
    heading1: " 30 YEARS OF EXCELLENCE IN MEN'S FINE FABRICS",
    text: "Supplying Premium Men's Suiting & Shirting Fabrics from top brands.",
  },
  {
    image: "/banner2.jpg",
    heading1: "MEN'S SHIRTING AND SUITING",
    heading2: "FABRIC STORE IN DUBAI",
    text: "We are the leading fabric store in Dubai with a wider range of fabrics offered from multiple brands.",
  },
  {
    image: "/banner3.jpg",
    heading1: "WHOLESALE TEXTILE SHOP AND SUPPLIERS IN DUBAI",
    text: "Aurora Textiles are suppliers of the highest quality textiles in the UAE, Middle East and North African countries.",
  },
];

export default function BannerSlider() {
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? slides.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  return (
    <div
      className="banner"
      style={{
        backgroundImage: `url(${slides[current].image})`,
      }}
    >
      {/* Overlay */}
      <div className="overlay"></div>

      {/* Content */}
      <div className="banner-content">
        <h1>
          {slides[current].heading1}
          <br />
          {slides[current].heading2}
        </h1>

        <p>{slides[current].text}</p>

        <button className="banner-btn">
          Explore Our Collection
        </button>
      </div>

      {/* Arrows */}
      <button className="arrow left" onClick={prevSlide}>
        ❮
      </button>

      <button className="arrow right" onClick={nextSlide}>
        ❯
      </button>
    </div>
  );
}