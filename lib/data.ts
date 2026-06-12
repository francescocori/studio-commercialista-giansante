// Centralised content — replace these values with real client data

export const STUDIO = {
  name: "Studio Giansante",
  tagline: "Dottori commercialisti e consulenti",
  fullName: "Studio Giansante — Dottori Commercialisti e Consulenti Associati",
  address: {
    street: "Via Nazionale, 00",
    city: "Pescara",
    province: "PE",
    cap: "65100",
    country: "Italy",
  },
  piva: "XXXXXXXXXXXXXXXXXX",
  odcec: "Iscritti all'ODCEC di Pescara",
  phone: "+390854000000",
  phoneDisplay: "+39 085 400 0000",
  email: "info@studiogiansante.it",
  emailNotify: "notifiche@studiogiansante.it",
  hours: "Lun–Ven 9:00–13:00 / 15:00–18:30",
  siteUrl: "https://www.studiogiansante.it",
} as const;

export const SERVICES = [
  {
    id: "fiscale",
    title: "Fiscale e tributario",
    shortDesc:
      "Dichiarazioni, adempimenti IVA, consulenza su imposte dirette e indirette, contenzioso tributario.",
    longDesc: `Gestiamo tutti gli adempimenti dichiarativi (UNICO, 770, IVA, IRAP) e forniamo consulenza continuativa su imposte dirette, indirette e agevolazioni fiscali. Assistiamo i clienti nelle istruttorie con l'Agenzia delle Entrate e nella gestione del contenzioso tributario davanti alle Corti di Giustizia Tributaria.`,
    icon: "receipt",
    anchor: "fiscale",
  },
  {
    id: "contabilita",
    title: "Contabilità e bilanci",
    shortDesc:
      "Tenuta della contabilità ordinaria e semplificata, redazione del bilancio d'esercizio e analisi economico-finanziaria.",
    longDesc: `Teniamo la contabilità ordinaria, semplificata e forfettaria per imprese e professionisti. Redigiamo il bilancio d'esercizio secondo i principi OIC, accompagnandolo con analisi economico-finanziarie utili alle decisioni strategiche del management.`,
    icon: "chart",
    anchor: "contabilita",
  },
  {
    id: "impresa",
    title: "Consulenza d'impresa",
    shortDesc:
      "Pianificazione strategica, operazioni straordinarie, due diligence, start-up e passaggi generazionali.",
    longDesc: `Affianchiamo gli imprenditori nelle fasi cruciali della vita aziendale: dalla costituzione della società alla pianificazione della crescita, dalle operazioni straordinarie (fusioni, scissioni, cessioni) alla gestione del passaggio generazionale. Supportiamo anche le startup nella scelta della forma giuridica e nei rapporti con gli investitori.`,
    icon: "building",
    anchor: "impresa",
  },
  {
    id: "lavoro",
    title: "Lavoro e collaboratori",
    shortDesc:
      "Elaborazione paghe, assunzioni, gestione dei rapporti di lavoro dipendente e autonomo.",
    longDesc: `Ci occupiamo dell'elaborazione delle buste paga, delle comunicazioni agli enti previdenziali (INPS, INAIL), dei contratti di assunzione e delle pratiche di cessazione. Forniamo consulenza su contrattualistica del lavoro, gestione di collaboratori autonomi e ottimizzazione del costo del personale.`,
    icon: "users",
    anchor: "lavoro",
  },
] as const;

export const TRUST_ITEMS = [
  {
    icon: "odcec",
    label: "Iscritti all'ODCEC",
    sub: "Ordine dei Dottori Commercialisti e degli Esperti Contabili di Pescara",
  },
  {
    icon: "family",
    label: "Studio di famiglia",
    sub: "Un'esperienza tramandata da generazione in generazione",
  },
  {
    icon: "location",
    label: "Pescara e online",
    sub: "In studio o da remoto, dove ti è più comodo",
  },
] as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Chi siamo", href: "/studio" },
  { label: "Servizi", href: "/servizi" },
  { label: "Contatti", href: "/contatti" },
] as const;

export const SERVICE_OPTIONS = SERVICES.map((s) => ({
  value: s.id,
  label: s.title,
}));
