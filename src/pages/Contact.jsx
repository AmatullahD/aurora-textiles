import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ContactPage() {
    return (
        <div
            style={{
                width: "100%",
                overflowX: "hidden",
                background: "#ffffff",
            }}
        >
            {/* NAVBAR */}
            <Navbar />

            {/* HERO BANNER */}
            <section
                style={{
                    width: "100%",
                    height: "210px",
                    position: "relative",
                    overflow: "hidden",
                    marginBottom: "2px",
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
                            fontSize: "58px",
                            fontWeight: "600",
                            margin: 0,
                            lineHeight: "1.1",
                            fontFamily: "'Cormorant Garamond', serif",
                            textTransform: "uppercase",
                        }}
                    >
                        CONTACT US
                    </h1>
                </div>
            </section>

            {/* CONTACT FORM SECTION */}
            <section
                style={{
                    width: "100%",
                   padding: window.innerWidth < 768 ? "20px 20px" : "25px 7%",
                    boxSizing: "border-box",
                    background: "#ffffff",
                }}
            >
                {/* HEADING */}
                <div
                    style={{
                        textAlign: "center",
                        marginBottom: "10px",
                    }}
                >
                    <h2
                        style={{
                            color: "#122a4b",
                            fontSize: window.innerWidth < 768 ? "28px" : "32px",
                            fontFamily: "'Cormorant Garamond', serif",
                            margin: 0,
                            fontWeight: "600",
                            textTransform: "uppercase",
                        }}
                    >
                        Reach Us At
                    </h2>
                </div>

                {/* CONTACT DETAILS */}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: window.innerWidth < 768 ? "15px" : "30px",
                        flexWrap: "wrap",
                        marginBottom: "40px",
                    }}
                >
                    <div
                        style={{
                            fontSize: window.innerWidth < 768 ? "15px" : "18px",
                            color: "#444",
                            fontFamily: "'Poppins', sans-serif",
                        }}
                    >
                        📞 +971 4 353 2696
                    </div>

                    <div
                        style={{
                            fontSize: window.innerWidth < 768 ? "15px" : "18px",
                            color: "#444",
                            fontFamily: "'Poppins', sans-serif",
                        }}
                    >
                        ✉ info@aurora-textiles.com
                    </div>
                </div>

                {/* FORM */}
                <form
                    style={{
                        width: "100%",
                        maxWidth: "1150px",
                        margin: "0 auto",
                    }}
                >
                    {/* NAME */}
                    <div style={{ marginBottom: "22px" }}>
                        <label
                            style={{
                                display: "block",
                                marginBottom: "8px",
                                fontSize: "16px",
                                color: "#111",
                                fontFamily: "'Poppins', sans-serif",
                            }}
                        >
                            Name
                        </label>

                        <input
                            type="text"
                            placeholder="Name"
                            style={{
                                width: "100%",
                                height: "52px",
                                padding: "0 16px",
                                border: "1px solid #122a4b",
                                borderRadius: "4px",
                                fontSize: "16px",
                                outline: "none",
                                boxSizing: "border-box",
                            }}
                        />
                    </div>

                    {/* PHONE */}
                    <div style={{ marginBottom: "22px" }}>
                        <label
                            style={{
                                display: "block",
                                marginBottom: "8px",
                                fontSize: "16px",
                                color: "#111",
                                fontFamily: "'Poppins', sans-serif",
                            }}
                        >
                            Phone Number
                        </label>

                        <input
                            type="text"
                            placeholder="Number"
                            style={{
                                width: "100%",
                                height: "52px",
                                padding: "0 16px",
                                border: "1px solid #122a4b",
                                borderRadius: "4px",
                                fontSize: "16px",
                                outline: "none",
                                boxSizing: "border-box",
                            }}
                        />
                    </div>

                    {/* EMAIL */}
                    <div style={{ marginBottom: "22px" }}>
                        <label
                            style={{
                                display: "block",
                                marginBottom: "8px",
                                fontSize: "16px",
                                color: "#111",
                                fontFamily: "'Poppins', sans-serif",
                            }}
                        >
                            Email
                        </label>

                        <input
                            type="email"
                            placeholder="Email"
                            style={{
                                width: "100%",
                                height: "52px",
                                padding: "0 16px",
                                border: "1px solid #122a4b",
                                borderRadius: "4px",
                                fontSize: "16px",
                                outline: "none",
                                boxSizing: "border-box",
                            }}
                        />
                    </div>

                    {/* MESSAGE */}
                    <div style={{ marginBottom: "22px" }}>
                        <label
                            style={{
                                display: "block",
                                marginBottom: "8px",
                                fontSize: "16px",
                                color: "#111",
                                fontFamily: "'Poppins', sans-serif",
                            }}
                        >
                            Message
                        </label>

                        <textarea
                            placeholder="Message"
                            rows={6}
                            style={{
                                width: "100%",
                                padding: "16px",
                                border: "1px solid #122a4b",
                                borderRadius: "4px",
                                fontSize: "16px",
                                outline: "none",
                                resize: "none",
                                boxSizing: "border-box",
                            }}
                        ></textarea>
                    </div>

                    {/* BUTTON */}
                    <button
                        type="submit"
                        style={{
                            width: "100%",
                            height: "52px",
                            background: "#122a4b",
                            color: "#ffffff",
                            border: "none",
                            borderRadius: "4px",
                            fontSize: "18px",
                            fontWeight: "600",
                            cursor: "pointer",
                            fontFamily: "'Poppins', sans-serif",
                        }}
                    >
                        Send
                    </button>
                </form>
            </section>

            <Footer />
        </div>
    );
}