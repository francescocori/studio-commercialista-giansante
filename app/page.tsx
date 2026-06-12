import type { Metadata } from "next";
import Link from "next/link";
import { STUDIO, SERVICES, TRUST_ITEMS } from "@/lib/data";

export const metadata: Metadata = {
  title: `${STUDIO.name} — ${STUDIO.tagline} a Pescara`,
  description:
    "Studio Giansante: dottori commercialisti e consulenti a Pescara. Consulenza fiscale, contabilità, bilanci, consulenza d'impresa e lavoro. Prenota una consulenza.",
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      {/* ── 1. HERO ── */}
      <section className="bg-white pt-14 pb-16 md:pt-20 md:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text */}
            <div>
              <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">
                {STUDIO.tagline}
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-navy leading-[1.15] mb-6">
                Al fianco della tua impresa, da una generazione all&rsquo;altra
              </h1>
              <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8 max-w-xl">
                Professionalità, discrezione e la cura tipica di uno studio di
                famiglia. Fiscalità, bilanci, consulenza strategica e gestione
                del personale — tutto da un unico studio di fiducia.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contatti"
                  className="inline-flex items-center justify-center min-h-12 px-7 py-3 bg-navy text-white font-medium rounded-[10px] hover:bg-navy-deep transition-colors text-base"
                >
                  Contattaci
                </Link>
                <Link
                  href="/servizi"
                  className="inline-flex items-center justify-center min-h-12 px-7 py-3 border-2 border-navy text-navy font-medium rounded-[10px] hover:bg-cream transition-colors text-base"
                >
                  I nostri servizi
                </Link>
              </div>
            </div>

            {/* Image placeholder */}
            <div
              role="img"
              aria-label="Foto dello studio professionale — da sostituire con immagine reale"
              className="w-full aspect-4/3 rounded-xl bg-sand flex items-center justify-center text-sm text-gray-400 order-first lg:order-last"
            >
              <div className="text-center space-y-1">
                <ImagePlaceholderIcon />
                <p className="font-medium">Foto studio</p>
                <p className="text-xs">1200 × 900 px consigliata</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. TRUST STRIP ── */}
      <section className="bg-cream py-10 md:py-12" aria-label="Punti di forza">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8">
            {TRUST_ITEMS.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <TrustIcon type={item.icon} />
                <div>
                  <p className="font-semibold text-navy text-base">
                    {item.label}
                  </p>
                  <p className="text-sm text-gray-600 mt-0.5">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3. SERVICES ── */}
      <section className="bg-white py-16 md:py-24" id="servizi">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">
              Cosa facciamo
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy">
              I nostri servizi
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <Link
                key={service.id}
                href={`/servizi#${service.anchor}`}
                className="group p-6 rounded-[10px] border border-sand bg-white hover:border-gold hover:shadow-(--shadow-card) transition-all duration-200"
              >
                <ServiceIcon type={service.icon} />
                <h3 className="font-serif text-xl font-semibold text-navy mt-4 mb-2 group-hover:text-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.shortDesc}
                </p>
                <p className="mt-4 text-gold text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  Scopri di più <ArrowRight />
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. CHI SIAMO TEASER (navy bg) ── */}
      <section className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image placeholder */}
            <div
              role="img"
              aria-label="Foto del team dello studio — da sostituire con immagine reale"
              className="w-full aspect-4/3 rounded-xl bg-navy-deep flex items-center justify-center text-sm text-white/40"
            >
              <div className="text-center space-y-1">
                <ImagePlaceholderIcon className="text-white/30" />
                <p className="font-medium">Foto del team</p>
                <p className="text-xs">1200 × 900 px consigliata</p>
              </div>
            </div>
            {/* Text */}
            <div>
              <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">
                Chi siamo
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white leading-snug mb-6">
                Oltre trent&rsquo;anni di esperienza al servizio delle imprese
                del territorio
              </h2>
              <p className="text-white/70 text-base md:text-lg leading-relaxed mb-4">
                {STUDIO.name} nasce dall&rsquo;unione di professionalità
                complementari e dalla passione per il lavoro ben fatto.
                Affianchiamo imprenditori, professionisti e famiglie con
                un&rsquo;approccio su misura, costruito sulla fiducia e sul
                dialogo continuo.
              </p>
              <p className="text-white/70 text-base leading-relaxed mb-8">
                Siamo {STUDIO.odcec} e operiamo a Pescara e in tutta Italia
                anche da remoto.
              </p>
              <Link
                href="/studio"
                className="inline-flex items-center justify-center min-h-12 px-7 py-3 border-2 border-gold text-gold font-medium rounded-[10px] hover:bg-gold hover:text-white transition-colors"
              >
                Scopri lo studio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. QUICK CONTACT ── */}
      <section className="bg-cream py-14 md:py-20" id="contatto-rapido">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">
            Hai una domanda?
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy mb-4">
            Scrivici subito
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-8 max-w-xl mx-auto">
            Compila il modulo oppure{" "}
            <a
              href={`tel:${STUDIO.phone}`}
              className="text-navy font-semibold underline underline-offset-2 hover:text-gold transition-colors"
            >
              chiamaci al {STUDIO.phoneDisplay}
            </a>
            . Ti risponderemo entro un giorno lavorativo.
          </p>
          <div className="bg-white rounded-xl p-6 md:p-8 shadow-(--shadow-card) text-left space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="quick-nome"
                  className="block text-sm font-medium text-navy mb-1"
                >
                  Nome e cognome
                </label>
                <input
                  id="quick-nome"
                  name="nome"
                  type="text"
                  autoComplete="name"
                  placeholder="Mario Rossi"
                  className="w-full min-h-11 px-4 py-2 border border-sand rounded-[10px] text-base placeholder:text-gray-400 focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy transition"
                />
              </div>
              <div>
                <label
                  htmlFor="quick-email"
                  className="block text-sm font-medium text-navy mb-1"
                >
                  Email
                </label>
                <input
                  id="quick-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="mario@esempio.it"
                  className="w-full min-h-11 px-4 py-2 border border-sand rounded-[10px] text-base placeholder:text-gray-400 focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy transition"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="quick-messaggio"
                className="block text-sm font-medium text-navy mb-1"
              >
                Messaggio
              </label>
              <textarea
                id="quick-messaggio"
                name="messaggio"
                rows={3}
                placeholder="Come possiamo aiutarti?"
                className="w-full px-4 py-3 border border-sand rounded-[10px] text-base placeholder:text-gray-400 focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy transition resize-none"
              />
            </div>
            <Link
              href="/contatti"
              className="flex items-center justify-center w-full min-h-12 px-6 py-3 bg-navy text-white font-medium rounded-[10px] hover:bg-navy-deep transition-colors text-center"
            >
              Vai al modulo completo →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

/* ─── Icon helpers ─── */
function ImagePlaceholderIcon({
  className = "text-gray-300",
}: {
  className?: string;
}) {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`mx-auto mb-1 ${className}`}
    >
      <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
    </svg>
  );
}

function ServiceIcon({ type }: { type: string }) {
  const cls = "w-10 h-10 p-2.5 bg-cream rounded-[10px] text-gold";
  if (type === "receipt")
    return (
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cls}
      >
        <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z" />
        <path d="M16 8H8M16 12H8M12 16H8" />
      </svg>
    );
  if (type === "chart")
    return (
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cls}
      >
        <line x1="18" x2="18" y1="20" y2="10" />
        <line x1="12" x2="12" y1="20" y2="4" />
        <line x1="6" x2="6" y1="20" y2="14" />
        <line x1="2" x2="22" y1="20" y2="20" />
      </svg>
    );
  if (type === "building")
    return (
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cls}
      >
        <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
        <path d="M9 22v-4h6v4" />
        <path d="M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01" />
      </svg>
    );
  if (type === "users")
    return (
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cls}
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    );
  return null;
}

function TrustIcon({ type }: { type: string }) {
  const cls =
    "w-11 h-11 p-2.5 bg-white rounded-full border border-sand text-gold shrink-0";
  if (type === "odcec")
    return (
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cls}
      >
        <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    );
  if (type === "family")
    return (
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cls}
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    );
  if (type === "location")
    return (
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cls}
      >
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    );
  return null;
}

function ArrowRight() {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );
}
