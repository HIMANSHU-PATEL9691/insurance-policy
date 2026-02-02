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
    <section className="py-20 bg-hero-gradient text-primary-foreground">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Simple Process
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-2">
            How It Works
          </h2>
          <p className="text-primary-foreground/80 mt-4 max-w-2xl mx-auto">
            Get insured in just 4 simple steps. It's quick, easy, and hassle-free.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-full h-0.5 bg-primary-foreground/20" />
              )}

              <div className="relative bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-6 text-center border border-primary-foreground/20 h-full">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-accent rounded-full flex items-center justify-center text-sm font-bold text-accent-foreground">
                  {item.step}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-primary-foreground/10 rounded-2xl flex items-center justify-center mx-auto mb-4 mt-2">
                  <item.icon className="w-8 h-8 text-accent" />
                </div>

                <h3 className="font-display font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm">
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
