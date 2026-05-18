"use client";

import { useState, useCallback } from "react";
import { submitForm } from "@/lib/api";

interface FormField {
  name: string;
  required?: boolean;
  type?: "email" | "tel" | "text" | "textarea";
}

interface UseFormOptions {
  formKey: string;
  fields: FormField[];
  pageSource: string;
}

export function useForm({ formKey, fields, pageSource }: UseFormOptions) {
  const [values, setValues] = useState<Record<string, string>>(() => {
    const init: Record<string, string> = {};
    for (const f of fields) init[f.name] = "";
    return init;
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const setValue = useCallback((name: string, value: string) => {
    setValues(prev => ({ ...prev, [name]: value }));
    setErrors(prev => {
      const next = { ...prev };
      delete next[name];
      return next;
    });
  }, []);

  const validate = useCallback((): boolean => {
    const errs: Record<string, string> = {};

    for (const f of fields) {
      const val = values[f.name]?.trim() || "";
      if (f.required && !val) {
        errs[f.name] = "This field is required";
      } else if (f.type === "email" && val && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
        errs[f.name] = "Invalid email";
      } else if (f.type === "tel" && val && !/^[+\d\s()-]{7,20}$/.test(val)) {
        errs[f.name] = "Invalid phone number";
      }
    }

    if (!consent) {
      errs._consent = "Please agree to continue";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  }, [values, consent, fields]);

  const handleSubmit = useCallback(async () => {
    if (!validate()) return;

    setLoading(true);
    setSubmitError("");

    const result = await submitForm({ formKey, data: values, pageSource, consent });

    setLoading(false);

    if (result.success) {
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setValues(() => {
          const init: Record<string, string> = {};
          for (const f of fields) init[f.name] = "";
          return init;
        });
        setConsent(false);
      }, 3000);
    } else {
      setSubmitError(result.error || "Something went wrong");
    }
  }, [validate, formKey, values, pageSource, consent, fields]);

  return {
    values,
    setValue,
    errors,
    consent,
    setConsent,
    loading,
    success,
    submitError,
    handleSubmit,
  };
}
