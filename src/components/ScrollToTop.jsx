import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      style={{
        position: "fixed",
        bottom: "21px",   /* anchored to bottom */
        right: "20px",
        width: "32px",
        height: "30px",
        background: "#070980",
        color: "#fff",
        border: "none",
        borderRadius: "10px",
        fontSize: "25px",
        lineHeight: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        zIndex: 9999,
        boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
        transition: "background 0.2s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "#282bd4";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "#08095e";
      }}
      aria-label="Scroll to top"
    >
     ∧
    </button>
  );
}