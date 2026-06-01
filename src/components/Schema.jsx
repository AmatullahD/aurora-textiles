import { Helmet } from "react-helmet-async";

export default function Schema() {
  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Aurora Textiles",
          "url": "https://aurora-textiles.com",
          "logo": "https://aurora-textiles.com/aurora-logo.png",
          "image": "https://aurora-textiles.com/aurora-logo.png",
          "description": "Aurora Textiles is a wholesale fabric supplier in Dubai specializing in men's suiting, shirting, uniform and ethnic fabrics from top global brands.",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Warehouse 47, Al Awir Road, Dubai Textile City",
            "addressLocality": "Dubai",
            "addressRegion": "Dubai",
            "addressCountry": "AE"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": "25.1845",
            "longitude": "55.4118"
          },
          "telephone": "+97143532696",
          "email": "info@aurora-textiles.com",
          "openingHours": "Mo-Sa 09:00-18:00",
          "sameAs": [
            "https://www.facebook.com/auroratextiles",
            "https://www.instagram.com/auroratextiles",
            "https://www.linkedin.com/company/auroratextiles"
          ],
          "priceRange": "$$",
          "currenciesAccepted": "AED",
          "paymentAccepted": "Cash, Credit Card",
          "areaServed": ["UAE", "GCC", "Africa"]
        })}
      </script>
    </Helmet>
  );
}