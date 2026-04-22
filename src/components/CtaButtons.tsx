import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/contact";
import { cn } from "@/lib/utils";

interface CtaButtonsProps {
  className?: string;
  size?: "default" | "lg" | "xl";
  layout?: "row" | "stack";
}

export const CtaButtons = ({ className, size = "lg", layout = "row" }: CtaButtonsProps) => {
  const sizeClasses =
    size === "xl"
      ? "h-14 px-8 text-base sm:h-16 sm:px-10 sm:text-lg"
      : size === "lg"
      ? "h-12 px-6 text-base"
      : "h-11 px-5 text-sm";

  return (
    <div
      className={cn(
        "flex w-full gap-3 sm:gap-4",
        layout === "stack" ? "flex-col sm:flex-row" : "flex-col xs:flex-row sm:flex-row",
        className
      )}
    >
      <Button
        asChild
        className={cn(
          "group flex-1 rounded-full bg-call font-bold uppercase tracking-wide text-call-foreground shadow-call hover:bg-call/90 hover:scale-[1.02] transition-bounce",
          sizeClasses
        )}
      >
        <a href={`tel:${CONTACT.phoneRaw}`} aria-label="Call Grow More Cricket Academy">
          <Phone className="mr-2 h-5 w-5 group-hover:rotate-12 transition-smooth" />
          Call Now
        </a>
      </Button>
      <Button
        asChild
        className={cn(
          "group flex-1 rounded-full bg-whatsapp font-bold uppercase tracking-wide text-whatsapp-foreground shadow-whatsapp hover:bg-whatsapp/90 hover:scale-[1.02] transition-bounce",
          sizeClasses
        )}
      >
        <a
          href={`https://wa.me/${CONTACT.whatsappRaw}?text=${encodeURIComponent(CONTACT.whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp Grow More Cricket Academy"
        >
          <MessageCircle className="mr-2 h-5 w-5 group-hover:scale-110 transition-smooth" />
          WhatsApp Now
        </a>
      </Button>
    </div>
  );
};
