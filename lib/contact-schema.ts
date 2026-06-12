import { z } from "zod";

export const contactSchema = z.object({
  nome: z.string().min(2, "Inserisci il tuo nome (min. 2 caratteri)").max(100),
  email: z.string().email("Inserisci un indirizzo email valido"),
  telefono: z
    .string()
    .max(20)
    .optional()
    .or(z.literal("")),
  servizio: z.string().min(1, "Seleziona un servizio di interesse"),
  messaggio: z
    .string()
    .min(10, "Il messaggio deve contenere almeno 10 caratteri")
    .max(2000),
  privacy: z.literal(true, {
    message: "Devi accettare la Privacy Policy per continuare",
  }),
  // Honeypot — must be empty
  website: z.string().max(0).optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
