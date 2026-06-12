import type { Metadata } from "next";
import { STUDIO } from "@/lib/data";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `Informativa sull'uso dei cookie — ${STUDIO.name}`,
  alternates: { canonical: "/cookie-policy" },
  robots: { index: false },
};

export default function CookiePolicyPage() {
  return (
    <div className="bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 md:py-20">
        <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">
          Informativa legale
        </p>
        <h1 className="font-serif text-3xl md:text-4xl font-semibold text-navy mb-2">
          Cookie Policy
        </h1>
        <p className="text-sm text-gray-400 mb-10">
          Ultimo aggiornamento: [inserire data]
        </p>

        <div className="space-y-8 text-gray-700 text-base leading-relaxed">
          <section>
            <h2 className="font-serif text-xl font-semibold text-navy mb-3">
              1. Cosa sono i cookie
            </h2>
            <p>
              I cookie sono piccoli file di testo che vengono salvati nel tuo
              browser quando visiti un sito web. Vengono utilizzati per
              migliorare l&rsquo;esperienza di navigazione e raccogliere
              informazioni statistiche in forma anonima.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-navy mb-3">
              2. Cookie tecnici
            </h2>
            <p>
              Questo sito utilizza esclusivamente cookie tecnici necessari al
              corretto funzionamento delle pagine. Non vengono installati cookie
              di profilazione o di terze parti senza il tuo esplicito consenso.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-navy mb-3">
              3. Cookie di analisi
            </h2>
            <p>
              [Se vengono utilizzati strumenti di analisi come Google Analytics,
              indicare qui la tipologia, la durata e le modalità di consenso.]
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-navy mb-3">
              4. Come disabilitare i cookie
            </h2>
            <p>
              Puoi disabilitare i cookie nelle impostazioni del tuo browser. La
              disabilitazione dei cookie tecnici potrebbe compromettere il
              funzionamento di alcune funzionalità del sito.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-navy mb-3">
              5. Contatti
            </h2>
            <p>
              Per qualsiasi informazione sull&rsquo;utilizzo dei cookie scrivi a{" "}
              <a
                href={`mailto:${STUDIO.email}`}
                className="text-navy underline hover:text-gold transition-colors"
              >
                {STUDIO.email}
              </a>
              .
            </p>
          </section>

          <p className="text-sm text-gray-400 border-t border-sand pt-6 mt-8">
            [Questa è una bozza. Il testo definitivo dovrà essere redatto da un
            consulente legale specializzato in GDPR.]
          </p>
        </div>
      </div>
    </div>
  );
}
