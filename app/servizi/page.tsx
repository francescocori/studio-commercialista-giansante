import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES, STUDIO } from "@/lib/data";

export const metadata: Metadata = {
  title: "Servizi",
  description:
    "I servizi di Studio Giansante: consulenza fiscale e tributaria, contabilità e bilanci, consulenza d'impresa e operazioni straordinarie, gestione del lavoro e delle paghe.",
  alternates: { canonical: "/servizi" },
};

const ICONS: Record<string, React.ReactNode> = {
  receipt: (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
      <path d="M16 8H8M16 12H8M12 16H8" />
    </svg>
  ),
  chart: (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" x2="18" y1="20" y2="10" />
      <line x1="12" x2="12" y1="20" y2="4" />
      <line x1="6" x2="6" y1="20" y2="14" />
      <line x1="2" x2="22" y1="20" y2="20" />
    </svg>
  ),
  building: (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01" />
    </svg>
  ),
  users: (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
};

export default function ServiziPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">
              Cosa facciamo
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-white leading-tight mb-6">
              I nostri servizi
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Offriamo una consulenza integrata che copre tutti gli aspetti
              della vita fiscale, contabile e aziendale. Un unico interlocutore
              di fiducia per le tue esigenze professionali.
            </p>
          </div>
          {/* Quick jump links */}
          <nav
            aria-label="Salta a un servizio"
            className="mt-8 flex flex-wrap gap-2"
          >
            {SERVICES.map((s) => (
              <a
                key={s.anchor}
                href={`#${s.anchor}`}
                className="inline-flex items-center min-h-11 px-4 py-2 bg-white/10 hover:bg-white/20 text-white text-sm font-medium rounded-[10px] transition-colors"
              >
                {s.title}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Service sections */}
      {SERVICES.map((service, i) => (
        <section
          key={service.id}
          id={service.anchor}
          className={`py-16 md:py-24 scroll-mt-20 ${i % 2 === 0 ? "bg-white" : "bg-cream"}`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${i % 2 !== 0 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              {/* Text */}
              <div>
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-[10px] bg-navy text-gold mb-5">
                  {ICONS[service.icon]}
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
                  {service.longDesc}
                </p>
                <Link
                  href="/contatti"
                  className="inline-flex items-center justify-center min-h-12 px-6 py-3 bg-navy text-white font-medium rounded-[10px] hover:bg-navy-deep transition-colors"
                >
                  Richiedi informazioni
                </Link>
              </div>
              {/* Image placeholder */}
              <div
                role="img"
                aria-label={`Immagine per il servizio ${service.title} — da sostituire`}
                className="w-full aspect-4/3 rounded-xl bg-sand flex items-center justify-center text-sm text-gray-400"
              >
                <div className="text-center space-y-1">
                  <PlaceholderIcon />
                  <p className="font-medium">{service.title}</p>
                  <p className="text-xs">1200 × 900 px consigliata</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA bottom */}
      <section className="bg-navy py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-4">
            Non sai da dove cominciare?
          </h2>
          <p className="text-white/70 text-base md:text-lg mb-8">
            Contattaci per un primo colloquio gratuito. Capiremo insieme di
            quale supporto hai bisogno e ti proporremo una soluzione su misura.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contatti"
              className="inline-flex items-center justify-center min-h-12 px-7 py-3 bg-gold text-white font-medium rounded-[10px] hover:opacity-90 transition-opacity"
            >
              Contattaci
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function PlaceholderIcon() {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="mx-auto mb-1 text-gray-300"
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  );
}
