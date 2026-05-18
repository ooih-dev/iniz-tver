import { SITE } from "@/lib/site";

export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function LocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.fullName,
    image: SITE.url + SITE.ogImage,
    "@id": SITE.url,
    url: SITE.url,
    telephone: SITE.phoneTel,
    email: SITE.email,
    priceRange: "₽₽",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Промышленный пр-д, 12, оф. 4",
      addressLocality: "Тверь",
      addressRegion: "Тверская область",
      postalCode: "170100",
      addressCountry: "RU",
    },
    geo: { "@type": "GeoCoordinates", latitude: 56.85, longitude: 35.91 },
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "09:00", closes: "18:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "10:00", closes: "14:00" },
    ],
    areaServed: { "@type": "AdministrativeArea", name: "Тверская область" },
  };
}

export function ServiceSchema(opts: { name: string; description: string; price?: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: opts.name,
    provider: { "@type": "LocalBusiness", name: SITE.fullName, telephone: SITE.phoneTel },
    areaServed: { "@type": "AdministrativeArea", name: "Тверская область" },
    name: opts.name,
    description: opts.description,
    offers: opts.price ? { "@type": "Offer", price: opts.price, priceCurrency: "RUB" } : undefined,
  };
}

export function FaqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((it) => ({
      "@type": "Question",
      name: it.q,
      acceptedAnswer: { "@type": "Answer", text: it.a },
    })),
  };
}

export function BreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: SITE.url + it.path,
    })),
  };
}
