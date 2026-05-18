"use client";

import { useForm } from "@/hooks/useForm";

const FIELDS = [
  { name: "email", type: "email" as const, required: true },
];

export default function NewsletterForm() {
  const { values, setValue, errors, consent, setConsent, loading, success, submitError, handleSubmit } = useForm({
    formKey: "Newsletter",
    fields: FIELDS,
    pageSource: "footer",
  });

  if (success) {
    return (
      <div className="flex items-center gap-2 h-[50px]">
        <span className="text-green-600 text-xl">✓</span>
        <p className="f-small text-black">Subscribed! Thank you.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-2 w-full lg:w-auto">
      <div className="flex flex-col sm:flex-row gap-0 w-full lg:w-auto">
        <input
          type="email"
          placeholder="Email"
          value={values.email}
          onChange={e => setValue("email", e.target.value)}
          className={`f-small border border-[#d9d9d9] bg-white px-4 h-[50px] w-full sm:w-[300px] outline-none ${errors.email ? "ring-2 ring-red-500" : ""}`}
        />
        <button
          onClick={handleSubmit}
          disabled={loading}
          className="f-btn bg-black text-white px-6 h-[50px] hover:bg-black/80 transition-colors flex items-center justify-center gap-2 disabled:opacity-60"
        >
          {loading ? (
            <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
          ) : "Subscribe"}
        </button>
      </div>
      {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
      <label className="flex items-start gap-2 cursor-pointer text-black/50">
        <input type="checkbox" checked={consent} onChange={e => setConsent(e.target.checked)} className="mt-0.5 accent-black" />
        <span className="text-xs leading-tight">I agree to the processing of personal data</span>
      </label>
      {errors._consent && <p className="text-red-500 text-xs">{errors._consent}</p>}
      {submitError && <p className="text-red-400 text-xs">{submitError}</p>}
    </div>
  );
}
