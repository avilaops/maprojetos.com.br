type MeasurementWindow = Window & {
  __avilaMeasurement?: { track: (name: string, parameters: Record<string, string>) => boolean };
};

/** The contact form opens WhatsApp; this is intent, not a confirmed lead. */
export function pushDataLayer(payload: Record<string, unknown>) {
  if (typeof window === 'undefined' || payload.event !== 'generate_lead' || payload.lead_source !== 'formulario') return;
  (window as MeasurementWindow).__avilaMeasurement?.track('contact_click', { contact_channel: 'whatsapp' });
}
