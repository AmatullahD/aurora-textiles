"use client";

import React from "react";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      style={{
        width: "100%",
                    maxWidth: "1200px",
                    margin: "70px auto 20px auto",
                    padding: "0 40px",
                    boxSizing: "border-box",
                    display: "flex",
                    alignItems: "center",
                    gap: "60px",
                    flexWrap: window.innerWidth < 768 ? "wrap" : "nowrap",
      }}
    >
      <div
        style={{
          display: "flex",
          // justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          style={{
            flex: "1",
            minWidth: "320px",
          }}
        >
          {/* Heading */}
          <div style={{ marginBottom: "40px" }}>
            <h3
              style={{
                fontSize: "42px",
                color: "#0B2C66",
                margin: 0,
                fontFamily: "'Cinzel Decorative', sans-serif",
                fontWeight: "700",
                textAlign: "center",
              }}
            >
              About Us
            </h3>

            {/* Yellow Underline */}
            <div
              style={{
                width: "220px",
                height: "5px",
                background: "#E2B13C",
                marginTop: "5px",
                margin: "10px auto 0",
              }}
            ></div>
          </div>

          {/* Paragraphs */}
          <div
            style={{
              fontFamily: "'Poppins', Sans-serif",
              fontSize: "17px",
              fontWeight: "400",
              lineHeight: "30px",
              letterSpacing: ".3px",
              color: "#000",
            }}
          >
            <p>
              Aurora Textile is a wholesale textile business based in the Old
              Textile Market in Dubai. We are specialized in men’s Shirting,
              and Suiting and now are expanding to offer men’s ethnics as well.
            </p>

            <p>
              We are fabrics material wholesaler and we offer multiple types of
              fabrics including: Wool, Polywool, Cotton, Linen, Poly Viscose,
              Denim, Tencel Blend and much more from the brands like: Donear,
              Klopman, Oxford , Reliance, Sammaan and Nemesis so our customers
              will only step out from our store with quality fabrics in their
              hand.
            </p>

            <p>
              We also export our high-quality fabrics into MENA countries such
              as Riyadh, Qatar, Saudi Arabia, Malaysia, Kuwait, Bahrain, Iran,
              Iraq, etc. You don’t have to worry about shipping or delivery
              time as we offer fast shipping services so your fabrics will reach
              to you at their perfect time.
            </p>
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          style={{
            flex: "1",
            minWidth: "320px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "430px",
              maxWidth: "100%",
            }}
          >
            {/* Blue Background Shadow */}
            <div
              style={{
                position: "absolute",
                top: "-55px",
                right: "-35px",
                width: "100%",
                height: "100%",
                background: "#33488F",
                zIndex: 1,
              }}
            ></div>

            {/* Main Image */}
            <img
              src="/image-2.png"
              alt="About Us"
              style={{
                width: "100%",
                position: "relative",
                zIndex: 2,
                display: "block",
              }}
            />
          </div>
        </motion.div>
      </div >
    </section >
  );
}