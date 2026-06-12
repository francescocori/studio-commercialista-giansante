"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, type ContactFormData } from "@/lib/contact-schema";
import { SERVICE_OPTIONS } from "@/lib/data";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  async function onSubmit(data: ContactFormData) {
    // Honeypot check — if filled, silently succeed
    if (data.website) {
      setStatus("success");
      return;
    }
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) throw new Error(json.message ?? "Errore sconosciuto");
      setStatus("success");
      reset();
    } catch (e) {
      setStatus("error");
      setErrorMessage(
        e instanceof Error ? e.message : "Si è verificato un errore. Riprova."
      );
    }
  }

  if (status === "success") {
    return (
      <div
        role="alert"
        aria-live="polite"
        className="bg-cream border border-sand rounded-xl p-8 text-center space-y-3"
      >
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-navy text-gold mx-auto">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </div>
        <h3 className="font-serif text-2xl font-semibold text-navy">
          Messaggio inviato!
        </h3>
        <p className="text-gray-600">
          Abbiamo ricevuto la tua richiesta. Ti risponderemo entro un giorno
          lavorativo all&rsquo;indirizzo email che hai indicato.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-2 inline-flex items-center justify-center min-h-11 px-5 py-2 border border-navy text-navy text-sm font-medium rounded-[10px] hover:bg-navy hover:text-white transition-colors"
        >
          Invia un altro messaggio
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      aria-label="Modulo di contatto"
      className="space-y-5"
    >
      {/* Honeypot — hidden from real users */}
      <input
        type="text"
        tabIndex={-1}
        aria-hidden="true"
        autoComplete="off"
        className="sr-only"
        {...register("website")}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Nome */}
        <div>
          <label htmlFor="nome" className="block text-sm font-medium text-navy mb-1">
            Nome e cognome <span className="text-gold" aria-hidden="true">*</span>
          </label>
          <input
            id="nome"
            type="text"
            autoComplete="name"
            aria-required="true"
            aria-invalid={!!errors.nome}
            aria-describedby={errors.nome ? "nome-error" : undefined}
            placeholder="Mario Rossi"
            {...register("nome")}
            className={`w-full min-h-11 px-4 py-2 border rounded-[10px] text-base placeholder:text-gray-400 focus:outline-none focus:ring-1 transition ${
              errors.nome
                ? "border-red-400 focus:border-red-400 focus:ring-red-400"
                : "border-sand focus:border-navy focus:ring-navy"
            }`}
          />
          {errors.nome && (
            <p id="nome-error" role="alert" className="mt-1 text-xs text-red-600">
              {errors.nome.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-navy mb-1">
            Email <span className="text-gold" aria-hidden="true">*</span>
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            aria-required="true"
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            placeholder="mario@esempio.it"
            {...register("email")}
            className={`w-full min-h-11 px-4 py-2 border rounded-[10px] text-base placeholder:text-gray-400 focus:outline-none focus:ring-1 transition ${
              errors.email
                ? "border-red-400 focus:border-red-400 focus:ring-red-400"
                : "border-sand focus:border-navy focus:ring-navy"
            }`}
          />
          {errors.email && (
            <p id="email-error" role="alert" className="mt-1 text-xs text-red-600">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Telefono */}
        <div>
          <label htmlFor="telefono" className="block text-sm font-medium text-navy mb-1">
            Telefono{" "}
            <span className="text-gray-400 font-normal text-xs">(opzionale)</span>
          </label>
          <input
            id="telefono"
            type="tel"
            autoComplete="tel"
            placeholder="+39 000 000 0000"
            {...register("telefono")}
            className="w-full min-h-11 px-4 py-2 border border-sand rounded-[10px] text-base placeholder:text-gray-400 focus:outline-none focus:border-navy focus:ring-1 focus:ring-navy transition"
          />
        </div>

        {/* Servizio */}
        <div>
          <label htmlFor="servizio" className="block text-sm font-medium text-navy mb-1">
            Servizio di interesse <span className="text-gold" aria-hidden="true">*</span>
          </label>
          <select
            id="servizio"
            aria-required="true"
            aria-invalid={!!errors.servizio}
            aria-describedby={errors.servizio ? "servizio-error" : undefined}
            {...register("servizio")}
            className={`w-full min-h-11 px-4 py-2 border rounded-[10px] text-base bg-white focus:outline-none focus:ring-1 transition ${
              errors.servizio
                ? "border-red-400 focus:border-red-400 focus:ring-red-400"
                : "border-sand focus:border-navy focus:ring-navy"
            }`}
          >
            <option value="">Seleziona un servizio…</option>
            {SERVICE_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
            <option value="altro">Altro / Non so ancora</option>
          </select>
          {errors.servizio && (
            <p id="servizio-error" role="alert" className="mt-1 text-xs text-red-600">
              {errors.servizio.message}
            </p>
          )}
        </div>
      </div>

      {/* Messaggio */}
      <div>
        <label htmlFor="messaggio" className="block text-sm font-medium text-navy mb-1">
          Messaggio <span className="text-gold" aria-hidden="true">*</span>
        </label>
        <textarea
          id="messaggio"
          rows={5}
          aria-required="true"
          aria-invalid={!!errors.messaggio}
          aria-describedby={errors.messaggio ? "messaggio-error" : undefined}
          placeholder="Descrivici la tua situazione o la tua domanda…"
          {...register("messaggio")}
          className={`w-full px-4 py-3 border rounded-[10px] text-base placeholder:text-gray-400 focus:outline-none focus:ring-1 transition resize-none ${
            errors.messaggio
              ? "border-red-400 focus:border-red-400 focus:ring-red-400"
              : "border-sand focus:border-navy focus:ring-navy"
          }`}
        />
        {errors.messaggio && (
          <p id="messaggio-error" role="alert" className="mt-1 text-xs text-red-600">
            {errors.messaggio.message}
          </p>
        )}
      </div>

      {/* Privacy checkbox */}
      <div>
        <div className="flex items-start gap-3">
          <input
            id="privacy"
            type="checkbox"
            aria-required="true"
            aria-invalid={!!errors.privacy}
            aria-describedby={errors.privacy ? "privacy-error" : undefined}
            {...register("privacy")}
            className="mt-1 w-5 h-5 min-w-[20px] rounded border-sand accent-navy cursor-pointer"
          />
          <label htmlFor="privacy" className="text-sm text-gray-600 leading-relaxed cursor-pointer">
            Ho letto e accetto la{" "}
            <a
              href="/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy underline underline-offset-2 hover:text-gold transition-colors"
            >
              Privacy Policy
            </a>
            . Acconsento al trattamento dei miei dati personali per rispondere
            alla mia richiesta.{" "}
            <span className="text-gold" aria-hidden="true">*</span>
          </label>
        </div>
        {errors.privacy && (
          <p id="privacy-error" role="alert" className="mt-1 text-xs text-red-600 ml-8">
            {errors.privacy.message}
          </p>
        )}
      </div>

      {/* Error state */}
      {status === "error" && (
        <div
          role="alert"
          aria-live="assertive"
          className="p-4 bg-red-50 border border-red-200 rounded-[10px] text-sm text-red-700"
        >
          <strong>Errore nell&rsquo;invio:</strong>{" "}
          {errorMessage || "Si è verificato un problema. Riprova o contattaci direttamente."}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full inline-flex items-center justify-center gap-2 min-h-12 px-7 py-3 bg-navy text-white font-medium rounded-[10px] hover:bg-navy-deep transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "loading" ? (
          <>
            <Spinner />
            Invio in corso…
          </>
        ) : (
          "Invia il messaggio"
        )}
      </button>

      <p className="text-xs text-gray-400 text-center">
        I campi contrassegnati con <span className="text-gold">*</span> sono obbligatori.
      </p>
    </form>
  );
}

function Spinner() {
  return (
    <svg
      aria-hidden="true"
      className="animate-spin"
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
}
