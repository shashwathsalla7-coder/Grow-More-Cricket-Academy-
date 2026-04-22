import { Phone, MessageCircle } from "lucide-react";
import { CONTACT } from "@/lib/contact";

export const StickyButtons = () => {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3 sm:bottom-6 sm:right-6">
      <a
        href={`https://wa.me/${CONTACT.whatsappRaw}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp us"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-whatsapp-foreground shadow-whatsapp transition-bounce hover:scale-110 sm:h-16 sm:w-16 animate-pulse-ring"
      >
        <MessageCircle className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={2.5} />
        <span className="sr-only">WhatsApp</span>
      </a>
      <a
        href={`tel:${CONTACT.phoneRaw}`}
        aria-label="Call us now"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-call text-call-foreground shadow-call transition-bounce hover:scale-110 sm:h-16 sm:w-16 animate-pulse-call"
      >
        <Phone className="h-7 w-7 sm:h-8 sm:w-8" strokeWidth={2.5} />
        <span className="sr-only">Call</span>
      </a>
    </div>
  );
};
