import type { Metadata } from "next";
import { STUDIO } from "@/lib/data";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contatti",
  description:
    "Contatta Studio Giansante a Pescara. Prenota una consulenza, scrivi un messaggio o chiamaci. Risposta garantita entro un giorno lavorativo.",
  alternates: { canonical: "/contatti" },
};

export default function ContattiPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-gold text-xs font-semibold uppercase tracking-widest mb-4">
              Parliamoci
            </p>
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-white leading-tight mb-4">
              Contattaci
            </h1>
            <p className="text-white/70 text-lg leading-relaxed">
              Compila il modulo o scrivici direttamente: ti risponderemo entro
              un giorno lavorativo. Per le urgenze, puoi chiamarci durante gli
              orari di studio.
            </p>
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-cream py-14 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-2 bg-white rounded-xl p-6 md:p-8 shadow-(--shadow-card)">
              <h2 className="font-serif text-2xl font-semibold text-navy mb-6">
                Inviaci un messaggio
              </h2>
              <ContactForm />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Phone */}
              <div className="bg-white rounded-xl p-6 border border-sand">
                <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">
                  Telefono
                </p>
                <a
                  href={`tel:${STUDIO.phone}`}
                  className="flex items-center gap-3 text-navy font-semibold text-lg hover:text-gold transition-colors"
                  aria-label={`Chiama lo studio al numero ${STUDIO.phoneDisplay}`}
                >
                  <PhoneIcon />
                  {STUDIO.phoneDisplay}
                </a>
                <p className="text-sm text-gray-500 mt-2">
                  Disponibili durante gli orari di apertura
                </p>
              </div>

              {/* Email */}
              <div className="bg-white rounded-xl p-6 border border-sand">
                <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">
                  Email
                </p>
                <a
                  href={`mailto:${STUDIO.email}`}
                  className="flex items-center gap-3 text-navy font-semibold hover:text-gold transition-colors break-all"
                >
                  <MailIcon />
                  {STUDIO.email}
                </a>
                <p className="text-sm text-gray-500 mt-2">
                  Risposta entro 1 giorno lavorativo
                </p>
              </div>

              {/* Address */}
              <div className="bg-white rounded-xl p-6 border border-sand">
                <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">
                  Indirizzo
                </p>
                <address className="not-italic text-sm text-gray-700 leading-relaxed">
                  <p className="font-semibold text-navy">{STUDIO.name}</p>
                  <p>{STUDIO.address.street}</p>
                  <p>
                    {STUDIO.address.cap} {STUDIO.address.city} (
                    {STUDIO.address.province})
                  </p>
                </address>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-xl p-6 border border-sand">
                <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-3">
                  Orari di apertura
                </p>
                <div className="text-sm text-gray-700 space-y-1">
                  <p className="font-medium text-navy">Lunedì — Venerdì</p>
                  <p>9:00 – 13:00</p>
                  <p>15:00 – 18:30</p>
                  <p className="text-gray-400 mt-2">
                    Sabato e domenica: chiuso
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.61 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function MapIcon() {
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
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}
