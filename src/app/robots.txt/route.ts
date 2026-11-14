export const dynamic = 'force-static';

export function GET() {
  const baseUrl = 'https://maprojetos.com.br';
  // /_next/static/ permanece acessível para renderização pelos buscadores.
  const texto = [
    'User-agent: *',
    'Content-Signal: search=yes, ai-input=yes, ai-train=yes',
    'Allow: /',
    '',
    `Sitemap: ${baseUrl}/sitemap.xml`,
    '',
  ].join('\n');
  return new Response(texto, { headers: { 'content-type': 'text/plain; charset=utf-8' } });
}
