import { motion } from "framer-motion";
import { Car, Bike, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const insuranceTypes = [
  {
    icon: Car,
    title: "Car Insurance",
    description: "Comprehensive protection for your four-wheeler with cashless repairs, zero depreciation, and roadside assistance.",
    features: ["Cashless Repairs", "Zero Depreciation", "NCB Protection"],
    link: "/car-insurance",
    gradient: "from-primary to-accent",
  },
  {
    icon: Bike,
    title: "Bike Insurance",
    description: "Complete coverage for your two-wheeler with instant claims, personal accident cover, and affordable premiums.",
    features: ["Personal Accident", "Third-Party Cover", "Own Damage"],
    link: "/bike-insurance",
    gradient: "from-accent to-primary",
  },
];

const InsuranceTypes = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
            Choose Your Insurance Type
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Whether you drive a car or ride a bike, we have the perfect insurance plan tailored to your needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {insuranceTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group"
            >
              <div className="bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all duration-300 border border-border/50 h-full flex flex-col">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${type.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <type.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                  {type.title}
                </h3>
                <p className="text-muted-foreground mb-6 flex-1">
                  {type.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {type.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Link to={type.link}>
                  <Button variant="outline" className="w-full group/btn">
                    View Plans
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InsuranceTypes;
