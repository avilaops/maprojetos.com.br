/**
 * Generates a direct WhatsApp click-to-chat link with a pre-filled, URL-encoded message.
 * Base Number: +55 17 99141-7883 (Matheus Amarante - M.A. Projetos e Construções)
 * 
 * @param message The raw message to be sent.
 * @returns The formatted WhatsApp URL.
 */
export function createWhatsAppLink(message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/5517991417883?text=${encodedMessage}`;
}
