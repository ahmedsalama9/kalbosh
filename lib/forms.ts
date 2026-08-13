/**
 * Form submission abstractions. There is intentionally NO real backend wired
 * up — these simulate a successful request so the UI states work end to end.
 * Replace the body with a fetch to your API / Laravel endpoint when ready.
 */

export type AppointmentPayload = {
  name: string;
  phone: string;
  age?: string;
  reason?: string;
  priorTreatment?: string;
  priorIvf?: string;
  message?: string;
  date?: string;
  time?: string;
};

export type ContactPayload = {
  name: string;
  phone: string;
  message: string;
};

async function simulate(payload: object): Promise<{ ok: true }> {
  await new Promise((r) => setTimeout(r, 900));
  // TODO: integrate real API, e.g.
  // await fetch("/api/appointments", { method: "POST", body: JSON.stringify(payload) })
  void payload;
  return { ok: true };
}

export async function submitAppointment(
  payload: AppointmentPayload,
): Promise<{ ok: true }> {
  return simulate(payload);
}

export async function submitContact(
  payload: ContactPayload,
): Promise<{ ok: true }> {
  return simulate(payload);
}
