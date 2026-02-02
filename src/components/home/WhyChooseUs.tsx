import { motion } from "framer-motion";
import { Zap, Building2, Headphones, IndianRupee, Shield, Clock } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Instant Policy Issuance",
    description: "Get your policy document in minutes via email & WhatsApp",
  },
  {
    icon: Building2,
    title: "5000+ Cashless Garages",
    description: "Nationwide network for hassle-free cashless repairs",
  },
  {
    icon: Headphones,
    title: "24/7 Claim Support",
    description: "Round-the-clock assistance for all your claim needs",
  },
  {
    icon: IndianRupee,
    title: "Affordable Premiums",
    description: "Compare & save up to 75% on your insurance premium",
  },
  {
    icon: Shield,
    title: "Comprehensive Coverage",
    description: "Protection against accidents, theft, natural disasters & more",
  },
  {
    icon: Clock,
    title: "Quick Claims Settlement",
    description: "Average claim settlement time of just 15 days",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-trust-light">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Why Policy Pioneer
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
            Why Choose Us?
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Experience the Policy Pioneer difference with our customer-first approach and industry-leading service.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-card rounded-xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50 h-full">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
