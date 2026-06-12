import type { Metadata } from "next";
import Link from "next/link";
import { STUDIO } from "@/lib/data";

export const metadata: Metadata = {
  title: "Chi siamo",
  description:
    "Scopri la storia e il team di Studio Giansante, dottori commercialisti e consulenti a Pescara. Professionalità e cura di uno studio di famiglia da oltre trent'anni.",
  alternates: { canonical: "/studio" },
};

const TEAM = [
  {
    name: "Dott. [Nome] Giansante",
    role: "Dottore Commercialista e Revisore Legale",
    bio: "Iscritto all'ODCEC di Pescara, si occupa principalmente di fiscalità d'impresa, operazioni straordinarie e consulenza strategica. Affianca imprenditori e gruppi familiari nelle fasi di crescita e di passaggio generazionale.",
  },
  {
    name: "Dott.ssa [Nome] Giansante",
    role: "Dottore Commercialista",
    bio: "Specializzata in contabilità, bilancio e consulenza del lavoro. Gestisce i rapporti con enti previdenziali e assicurativi e coordina l'elaborazione paghe per le aziende clienti.",
  },
  {
    name: "[Nome] [Cognome]",
    role: "Collaboratore — Consulente fiscale",
    bio: "Supporta lo studio nelle attività dichiarative e nel contenzioso tributario, con particolare attenzione alle problematiche IVA e alle agevolazioni per le imprese innovative.",
  },
] as const;

const VALUES = [
  {
    title: "Fiducia",
    desc: "Costruiamo relazioni durature fondate sulla trasparenza. I nostri clienti sono partner, non pratiche.",
  },
  {
    title: "Competenza",
    desc: "Aggiornamento continuo su normativa, prassi e giurisprudenza per offrire sempre la consulenza più accurata.",
  },
  {
    title: "Personalizzazione",
    desc: "Ogni impresa è diversa. Le nostre soluzioni sono su misura, non standard.",
  },
  {
    title: "Continuità",
    desc: "La storia dello studio si tramanda. La conoscenza accumulata negli anni è un patrimonio per i nostri clienti.",
  },
] as const;

export default function StudioPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">
              Chi siamo
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-white leading-tight mb-6">
              Una storia di famiglia al servizio delle imprese
            </h1>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed">
              {STUDIO.name} è uno studio associato fondato sulla passione per la
              professione e sulla cura delle persone. Da oltre trent&rsquo;anni
              affianchiamo imprenditori, professionisti e famiglie in tutte le
              fasi della vita economica e aziendale.
            </p>
          </div>
        </div>
      </section>

      {/* Storia */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">
                La nostra storia
              </p>
              <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy mb-6">
                Da una generazione all&rsquo;altra
              </h2>
              <div className="space-y-4 text-gray-600 text-base leading-relaxed">
                <p>
                  Lo studio nasce dall&rsquo;esperienza del fondatore e cresce
                  grazie all&rsquo;ingresso dei figli, portando in dote la
                  stessa attenzione al cliente e la stessa etica professionale
                  che hanno contraddistinto la nostra attività fin
                  dall&rsquo;inizio.
                </p>
                <p>
                  Nel corso degli anni abbiamo ampliato le competenze, integrato
                  nuove professionalità e adottato strumenti digitali per
                  offrire un servizio sempre più efficiente — pur mantenendo il
                  calore e la prossimità che solo uno studio di famiglia può
                  garantire.
                </p>
                <p>
                  Oggi operiamo a Pescara e su tutto il territorio nazionale
                  grazie alla consulenza da remoto, servendo clienti che vanno
                  dal libero professionista alla piccola e media impresa, dalla
                  startup innovativa al gruppo familiare strutturato.
                </p>
              </div>
            </div>
            <div
              role="img"
              aria-label="Foto storica dello studio — da sostituire con immagine reale"
              className="w-full aspect-4/3 rounded-xl bg-sand flex items-center justify-center text-sm text-gray-400"
            >
              <div className="text-center space-y-1">
                <PlaceholderIcon />
                <p className="font-medium">Foto storica / studio</p>
                <p className="text-xs">1200 × 900 px consigliata</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Valori */}
      <section className="bg-cream py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">
              I nostri principi
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy">
              I valori che ci guidano
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((v) => (
              <div
                key={v.title}
                className="bg-white rounded-[10px] p-6 border border-sand"
              >
                <h3 className="font-serif text-xl font-semibold text-navy mb-3">
                  {v.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">
              Le persone
            </p>
            <h2 className="font-serif text-3xl md:text-4xl font-semibold text-navy">
              Il nostro team
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TEAM.map((member) => (
              <div
                key={member.name}
                className="border border-sand rounded-[10px] overflow-hidden"
              >
                <div
                  role="img"
                  aria-label={`Foto di ${member.name} — da sostituire con immagine reale`}
                  className="w-full aspect-square bg-sand flex items-center justify-center text-sm text-gray-400"
                >
                  <div className="text-center space-y-1">
                    <PlaceholderIcon />
                    <p className="font-medium text-xs">Foto profilo</p>
                    <p className="text-xs">400 × 400 px</p>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg font-semibold text-navy">
                    {member.name}
                  </h3>
                  <p className="text-gold text-xs font-semibold uppercase tracking-wide mt-1 mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-14 md:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-semibold text-white mb-4">
            Vuoi conoscerci di persona?
          </h2>
          <p className="text-white/70 text-base md:text-lg mb-8">
            Prenota un primo colloquio gratuito, senza impegno. Ti ascoltiamo e
            ti proponiamo la soluzione più adatta alle tue esigenze.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contatti"
              className="inline-flex items-center justify-center min-h-12 px-7 py-3 bg-gold text-white font-medium rounded-[10px] hover:opacity-90 transition-opacity"
            >
              Richiedi una consulenza
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
