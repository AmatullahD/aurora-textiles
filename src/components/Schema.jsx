import { Helmet } from "react-helmet-async";

export default function Schema() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Aurora Textiles",
    "url": "https://aurora-textiles.vercel.app",
    "logo": "https://aurora-textiles.com/wp-content/uploads/2024/12/Aurora-Textiles-Logo.png",
    "description": "Aurora Textiles is Dubai's premier wholesale fabric supplier with 45+ years of experience supplying premium men's suiting, shirting, uniform and ethnic fabrics across UAE, GCC and Africa.",
    "telephone": ["+97143532696", "+971554172009"],
    "email": "info@aurora-textiles.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Dubai Textile City, Warehouse 47, Al Awir Road",
      "addressLocality": "Dubai",
      "addressCountry": "AE"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+971554172009",
      "contactType": "sales",
      "areaServed": ["AE", "SA", "EG", "ZA"],
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://www.facebook.com/share/15UnfGtpkR/",
      "https://www.instagram.com/aurora.textiles",
      "https://www.linkedin.com/company/aurora-textiles-uae/"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Aurora Textiles",
    "url": "https://aurora-textiles.vercel.app",
    "description": "Premium wholesale fabric supplier in Dubai — men's suiting, shirting, uniform and ethnic fabrics.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://aurora-textiles.vercel.app/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Aurora Textiles",
    "image": "https://aurora-textiles.com/wp-content/uploads/2024/12/Aurora-Textiles-Logo.png",
    "url": "https://aurora-textiles.vercel.app",
    "telephone": "+97143532696",
    "email": "info@aurora-textiles.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Dubai Textile City, Warehouse 47, Al Awir Road",
      "addressLocality": "Dubai",
      "addressRegion": "Dubai",
      "addressCountry": "AE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.1972,
      "longitude": 55.3296
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    "priceRange": "$$"
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
    </Helmet>
  );
}