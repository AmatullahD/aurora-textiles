import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/971554172009"
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: "80px",   /* sits above ScrollToTop (30px + 35px height + 15px gap) */
        right: "20px",
        width: "56px",
        height: "56px",
        background: "#25D366",
        color: "white",
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "30px",
        textDecoration: "none",
        zIndex: 9999,
        boxShadow: "0 4px 15px rgba(0,0,0,0.25)",
        transition: "transform 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
      }}
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp />
    </a>
  );
}