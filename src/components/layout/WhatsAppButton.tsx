import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const whatsappNumber = "9691365052";
  const message = "Hello! I'm interested in insurance plans from Policy Pioneer.";

  return (
    <motion.a
      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-shadow"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle className="w-7 h-7 text-white fill-white" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-cta rounded-full animate-ping" />
      <span className="absolute -top-1 -right-1 w-4 h-4 bg-cta rounded-full" />
    </motion.a>
  );
};

export default WhatsAppButton;
