import type { Metadata } from "next";
import { STUDIO } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Informativa sul trattamento dei dati personali ai sensi del GDPR — ${STUDIO.name}`,
  alternates: { canonical: "/privacy-policy" },
  robots: { index: false },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-14 md:py-20">
        <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-3">
          Informativa legale
        </p>
        <h1 className="font-serif text-3xl md:text-4xl font-semibold text-navy mb-2">
          Privacy Policy
        </h1>
        <p className="text-sm text-gray-400 mb-10">
          Ultimo aggiornamento: [inserire data]
        </p>

        <div className="prose prose-gray max-w-none space-y-8 text-gray-700 text-base leading-relaxed">
          <section>
            <h2 className="font-serif text-xl font-semibold text-navy mb-3">
              1. Titolare del trattamento
            </h2>
            <p>
              Il titolare del trattamento dei dati personali è{" "}
              <strong>{STUDIO.name}</strong>, con sede in{" "}
              {STUDIO.address.street}, {STUDIO.address.cap}{" "}
              {STUDIO.address.city} ({STUDIO.address.province}), P.IVA{" "}
              {STUDIO.piva}, email:{" "}
              <a
                href={`mailto:${STUDIO.email}`}
                className="text-navy underline hover:text-gold transition-colors"
              >
                {STUDIO.email}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-navy mb-3">
              2. Dati raccolti e finalità
            </h2>
            <p>
              I dati personali (nome, email, telefono, contenuto del messaggio)
              forniti tramite il modulo di contatto sono trattati
              esclusivamente per rispondere alle richieste ricevute e, previo
              consenso, per l&rsquo;invio di comunicazioni commerciali. Non
              vengono ceduti a terzi.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-navy mb-3">
              3. Base giuridica
            </h2>
            <p>
              Il trattamento è fondato sul consenso espresso dell&rsquo;
              interessato (art. 6, par. 1, lett. a GDPR) e sull&rsquo;
              esecuzione di un contratto o misure precontrattuali (lett. b).
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-navy mb-3">
              4. Conservazione
            </h2>
            <p>
              I dati sono conservati per il tempo strettamente necessario alle
              finalità per cui sono stati raccolti, e comunque non oltre 24
              mesi dalla richiesta, salvo obblighi di legge.
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-navy mb-3">
              5. Diritti degli interessati
            </h2>
            <p>
              L&rsquo;interessato ha diritto di accesso, rettifica,
              cancellazione, limitazione e portabilità dei dati, nonché di
              opporsi al trattamento. Per esercitare tali diritti è possibile
              scrivere a{" "}
              <a
                href={`mailto:${STUDIO.email}`}
                className="text-navy underline hover:text-gold transition-colors"
              >
                {STUDIO.email}
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="font-serif text-xl font-semibold text-navy mb-3">
              6. Cookie
            </h2>
            <p>
              Per informazioni sull&rsquo;uso dei cookie consulta la nostra{" "}
              <a
                href="/cookie-policy"
                className="text-navy underline hover:text-gold transition-colors"
              >
                Cookie Policy
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
