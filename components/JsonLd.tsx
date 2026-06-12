import { STUDIO } from "@/lib/data";

export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["AccountingService", "LocalBusiness"],
    name: STUDIO.name,
    description:
      "Studio di dottori commercialisti e consulenti a Pescara. Servizi di consulenza fiscale, contabilità, bilanci, consulenza d'impresa e gestione del lavoro.",
    url: STUDIO.siteUrl,
    telephone: STUDIO.phone,
    email: STUDIO.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: STUDIO.address.street,
      addressLocality: STUDIO.address.city,
      addressRegion: STUDIO.address.province,
      postalCode: STUDIO.address.cap,
      addressCountry: "IT",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "13:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "15:00",
        closes: "18:30",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Pescara" },
      { "@type": "Country", name: "Italia" },
    ],
    serviceType: [
      "Consulenza fiscale",
      "Contabilità",
      "Consulenza d'impresa",
      "Elaborazione paghe",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
