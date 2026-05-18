"use client";

import { useForm } from "@/hooks/useForm";

interface InlineFormProps {
  formKey: string;
  pageSource: string;
  inputClassName?: string;
  buttonClassName?: string;
  inputWidth?: string;
  compact?: boolean;
  fields?: Array<{ name: string; type: "text" | "email" | "tel"; required: boolean; placeholder: string }>;
}

const DEFAULT_FIELDS = [
  { name: "name", type: "text" as const, required: true, placeholder: "First and Last Name" },
  { name: "email", type: "email" as const, required: true, placeholder: "Email" },
  { name: "phone", type: "tel" as const, required: true, placeholder: "Phone Number" },
];

export default function InlineForm({
  formKey,
  pageSource,
  inputClassName = "f-small bg-[#d9d9d9] text-black placeholder:text-black/40 outline-none px-4",
  buttonClassName = "f-btn bg-black text-white",
  inputWidth = "w-full lg:w-[224px]",
  compact = false,
  fields = DEFAULT_FIELDS,
}: InlineFormProps) {
  const formFields = fields.map(f => ({ name: f.name, type: f.type, required: f.required }));

  const { values, setValue, errors, consent, setConsent, loading, success, submitError, handleSubmit } = useForm({
    formKey,
    fields: formFields,
    pageSource,
  });

  const h = compact ? "h-[36px]" : "h-[50px]";

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center py-6 animate-fade-in">
        <span className="text-4xl mb-2 text-green-600">✓</span>
        <p className="f-btn text-black text-center">Thank you!</p>
        <p className="f-body text-black/60 text-center mt-1 text-sm">We will contact you soon.</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3 w-full lg:w-auto">
      {fields.map(f => (
        <div key={f.name}>
          <input
            type={f.type}
            placeholder={f.placeholder}
            value={values[f.name] || ""}
            onChange={e => setValue(f.name, e.target.value)}
            className={`${inputClassName} ${inputWidth} ${h} ${errors[f.name] ? "ring-2 ring-red-500" : ""}`}
          />
          {errors[f.name] && <p className="text-red-500 text-xs mt-1">{errors[f.name]}</p>}
        </div>
      ))}
      <label className="flex items-start gap-2 cursor-pointer text-black/60">
        <input type="checkbox" checked={consent} onChange={e => setConsent(e.target.checked)} className="mt-0.5 accent-black" />
        <span className="text-xs leading-tight">I agree to the processing of personal data</span>
      </label>
      {errors._consent && <p className="text-red-500 text-xs -mt-1">{errors._consent}</p>}
      <button
        onClick={handleSubmit}
        disabled={loading}
        className={`${buttonClassName} ${inputWidth} ${h} flex items-center justify-center gap-2 disabled:opacity-60`}
      >
        {loading ? (
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
        ) : "send"}
      </button>
      {submitError && <p className="text-red-400 text-xs mt-1">{submitError}</p>}
    </div>
  );
}
