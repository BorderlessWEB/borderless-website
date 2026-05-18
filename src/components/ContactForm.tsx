"use client";

import { useForm } from "@/hooks/useForm";

const FIELDS = [
  { name: "name", type: "text" as const, required: true },
  { name: "email", type: "email" as const, required: true },
  { name: "phone", type: "tel" as const, required: false },
  { name: "message", type: "textarea" as const, required: false },
];

export default function ContactForm() {
  const { values, setValue, errors, consent, setConsent, loading, success, submitError, handleSubmit } = useForm({
    formKey: "ContactUs",
    fields: FIELDS,
    pageSource: "/about",
  });

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[300px] animate-fade-in">
        <span className="text-5xl mb-3 text-green-600">✓</span>
        <p className="f-btn-lg text-black text-center">Thank you!</p>
        <p className="f-body text-black/60 text-center mt-1">We will contact you soon.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <div>
        <input
          type="text" placeholder="First and Last Name"
          value={values.name} onChange={e => setValue("name", e.target.value)}
          className={`f-input bg-white text-black placeholder:text-black/40 outline-none px-4 h-[50px] w-full ${errors.name ? "ring-2 ring-red-500" : ""}`}
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>
      <div>
        <input
          type="email" placeholder="Email"
          value={values.email} onChange={e => setValue("email", e.target.value)}
          className={`f-input bg-white text-black placeholder:text-black/40 outline-none px-4 h-[50px] w-full ${errors.email ? "ring-2 ring-red-500" : ""}`}
        />
        {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
      </div>
      <div>
        <input
          type="tel" placeholder="Phone Number"
          value={values.phone} onChange={e => setValue("phone", e.target.value)}
          className={`f-input bg-white text-black placeholder:text-black/40 outline-none px-4 h-[50px] w-full ${errors.phone ? "ring-2 ring-red-500" : ""}`}
        />
        {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
      </div>
      <div>
        <textarea
          placeholder="Message"
          value={values.message} onChange={e => setValue("message", e.target.value)}
          className="f-input bg-white text-black placeholder:text-black/40 outline-none p-4 resize-none w-full"
          style={{ height: 120 }}
        />
      </div>
      <label className="flex items-start gap-2 cursor-pointer text-black/60">
        <input type="checkbox" checked={consent} onChange={e => setConsent(e.target.checked)} className="mt-1 accent-black" />
        <span className="text-xs leading-tight">I agree to the processing of personal data</span>
      </label>
      {errors._consent && <p className="text-red-500 text-xs -mt-1">{errors._consent}</p>}
      <button
        onClick={handleSubmit}
        disabled={loading}
        className="f-btn bg-black text-white w-full lg:w-[224px] h-[54px] flex items-center justify-center gap-2 disabled:opacity-60"
      >
        {loading ? (
          <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
        ) : "Send"}
      </button>
      {submitError && <p className="text-red-400 text-sm">{submitError}</p>}
    </div>
  );
}
