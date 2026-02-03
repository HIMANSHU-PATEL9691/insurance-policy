import { motion } from "framer-motion";
import { ClipboardList, GitCompare, CreditCard, FileCheck } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    step: "01",
    title: "Enter Vehicle Details",
    description: "Provide your vehicle information like brand, model, and registration year.",
  },
  {
    icon: GitCompare,
    step: "02",
    title: "Compare Plans",
    description: "View and compare insurance plans from top insurers side by side.",
  },
  {
    icon: CreditCard,
    step: "03",
    title: "Make Payment",
    description: "Choose your preferred plan and pay securely online.",
  },
  {
    icon: FileCheck,
    step: "04",
    title: "Get Policy Instantly",
    description: "Receive your policy document instantly via email and WhatsApp.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-hero-gradient text-primary-foreground relative overflow-hidden">
      <div className="container mx-auto px-4">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1 mb-3 rounded-full bg-accent/15 text-accent font-semibold text-xs uppercase tracking-wider">
            Simple Process
          </span>

          <h2 className="font-display text-3xl md:text-4xl font-bold">
            How It Works
          </h2>

          <p className="text-primary-foreground/70 mt-4 max-w-2xl mx-auto">
            Get insured in just 4 simple steps. It’s quick, easy, and hassle-free.
          </p>
        </motion.div>

        {/* STEPS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -8 }}
              className="relative group"
            >
              {/* CONNECTOR LINE */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-[52px] left-[60%] w-full h-[2px] bg-gradient-to-r from-accent/40 to-transparent" />
              )}

              {/* CARD */}
              <div className="relative bg-primary-foreground/10 backdrop-blur-md rounded-2xl p-8 text-center border border-primary-foreground/20 h-full transition-all duration-300 group-hover:border-accent/40 group-hover:shadow-2xl">

                {/* STEP BADGE */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-9 h-9 bg-accent rounded-full flex items-center justify-center text-xs font-bold text-accent-foreground shadow-lg">
                  {item.step}
                </div>

                {/* ICON */}
                <div className="w-16 h-16 bg-accent/15 rounded-2xl flex items-center justify-center mx-auto mb-5 mt-4 transition-transform duration-300 group-hover:scale-110">
                  <item.icon className="w-8 h-8 text-accent" />
                </div>

                {/* TEXT */}
                <h3 className="font-display font-semibold text-lg mb-2">
                  {item.title}
                </h3>

                <p className="text-primary-foreground/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
