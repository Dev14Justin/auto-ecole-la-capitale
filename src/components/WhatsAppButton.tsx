"use client";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/22890865351"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-2 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 md:bottom-14 md:right-4 group"
      aria-label="Contactez-nous sur WhatsApp"
    >
      <div className="flex items-center gap-2">
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 font-bold whitespace-nowrap text-sm">
          Besoin d&apos;aide ?
        </span>
        <MessageCircle size={18} className="fill-current" />
      </div>
    </a>
  );
};

export default WhatsAppButton;
