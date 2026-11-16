import { test } from 'node:test';
import assert from 'node:assert/strict';
import { pushDataLayer } from '../src/lib/analytics.ts';
test('WhatsApp form intent emits only a consent-controlled contact event', () => {
  const calls = [];
  globalThis.window = { __avilaMeasurement: { track: (...args) => calls.push(args) } };
  pushDataLayer({ event: 'generate_lead', lead_source: 'formulario', email: 'private@example.com', link_url: 'https://wa.me/555' });
  assert.deepEqual(calls, [['contact_click', { contact_channel: 'whatsapp' }]]);
  assert.equal(window.dataLayer, undefined);
  delete globalThis.window;
});
