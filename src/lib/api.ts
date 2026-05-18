const API_URL = process.env.NEXT_PUBLIC_API_URL || "https://borderless-admin-rumata.agenthub.md";

interface SubmitFormParams {
  formKey: string;
  data: Record<string, string>;
  pageSource: string;
  lang?: string;
  consent: boolean;
}

interface SubmitResult {
  success: boolean;
  id?: string;
  error?: string;
}

export async function submitForm({ formKey, data, pageSource, lang = "en", consent }: SubmitFormParams): Promise<SubmitResult> {
  try {
    const res = await fetch(`${API_URL}/api/public/forms/submit`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ formKey, data, pageSource, lang, consent }),
    });

    const json = await res.json();

    if (!res.ok) {
      return { success: false, error: json.error || "Something went wrong" };
    }

    return { success: true, id: json.id };
  } catch {
    return { success: false, error: "Network error. Please try again." };
  }
}
