import Link from "next/link";
import { STUDIO, NAV_LINKS, SERVICES } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy-deep text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* 3-column grid on desktop, stacked on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* Col 1 — Studio info */}
          <div>
            <p className="font-serif text-xl font-semibold text-white mb-1">
              {STUDIO.name}
            </p>
            <p className="text-gold text-xs font-medium uppercase tracking-widest mb-4">
              {STUDIO.tagline}
            </p>
            <address className="not-italic text-sm text-white/70 leading-relaxed space-y-1">
              <p>{STUDIO.address.street}</p>
              <p>
                {STUDIO.address.cap} {STUDIO.address.city} (
                {STUDIO.address.province})
              </p>
              <p className="pt-2">P.IVA: {STUDIO.piva}</p>
            </address>
          </div>

          {/* Col 2 — Navigation */}
          <nav aria-label="Link rapidi nel footer">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">
              Link rapidi
            </p>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-white/10 mt-2">
                <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-2 pt-2">
                  Servizi
                </p>
              </li>
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/servizi#${s.anchor}`}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Col 3 — Contacts */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gold mb-4">
              Contatti
            </p>
            <ul className="space-y-3 text-sm text-white/70">
              <li>
                <a
                  href={`tel:${STUDIO.phone}`}
                  className="flex items-center gap-2 hover:text-white transition-colors"
                  aria-label={`Chiama lo studio al numero ${STUDIO.phoneDisplay}`}
                >
                  <PhoneIcon />
                  <span className="font-medium text-white">
                    {STUDIO.phoneDisplay}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${STUDIO.email}`}
                  className="flex items-center gap-2 hover:text-white transition-colors break-all"
                >
                  <MailIcon />
                  {STUDIO.email}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <ClockIcon />
                <span>{STUDIO.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>
            © {year} {STUDIO.name}. Tutti i diritti riservati.
          </p>
          <div className="flex gap-4">
            <Link
              href="/privacy-policy"
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/cookie-policy"
              className="hover:text-white transition-colors"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function PhoneIcon() {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 mt-0.5 text-gold"
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
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 mt-0.5 text-gold"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0 mt-0.5 text-gold"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
