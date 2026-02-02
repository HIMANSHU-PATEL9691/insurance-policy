import { motion } from "framer-motion";

const partners = [
  "ICICI Lombard",
  "HDFC ERGO",
  "Bajaj Allianz",
  "New India Assurance",
  "Tata AIG",
  "SBI General",
  "Reliance General",
  "United India",
];

const Partners = () => {
  return (
    <section className="py-16 bg-background border-y border-border/50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Our Partners
          </span>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mt-2">
            Trusted Insurance Partners
          </h2>
        </motion.div>

        <div className="relative overflow-hidden">
          <div className="flex animate-[scroll_30s_linear_infinite] gap-12 items-center">
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={`${partner}-${index}`}
                className="flex-shrink-0 bg-card px-8 py-4 rounded-xl shadow-card border border-border/50 min-w-[180px] flex items-center justify-center"
              >
                <span className="font-semibold text-muted-foreground whitespace-nowrap">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </div>
    </section>
  );
};

export default Partners;
