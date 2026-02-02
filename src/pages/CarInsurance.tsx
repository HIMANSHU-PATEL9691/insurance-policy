import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Car,
  Shield,
  CheckCircle,
  ArrowRight,
  AlertTriangle,
  Zap,
  FileText,
  HelpCircle,
  ChevronDown,
} from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const insuranceTypes = [
  {
    icon: Shield,
    title: "Comprehensive Insurance",
    description:
      "Complete protection for your car against accidents, theft, fire, natural disasters, and third-party liabilities. The most recommended cover for new cars.",
    features: [
      "Own damage cover",
      "Third-party liability",
      "Personal accident cover",
      "Fire & theft protection",
      "Natural calamity cover",
    ],
    recommended: true,
  },
  {
    icon: AlertTriangle,
    title: "Third-Party Insurance",
    description:
      "Mandatory by law, this covers damages caused to third-party property, vehicle, or person. Essential for all vehicles on Indian roads.",
    features: [
      "Third-party property damage",
      "Third-party injury cover",
      "Legal liability protection",
      "Court expenses covered",
      "Affordable premium",
    ],
    recommended: false,
  },
  {
    icon: Zap,
    title: "Zero Depreciation",
    description:
      "Get full claim amount without depreciation deduction on parts. Ideal for new cars and those who want complete peace of mind.",
    features: [
      "No depreciation on parts",
      "Full claim settlement",
      "Covers plastic & rubber parts",
      "Glass & fiber coverage",
      "Best for new cars",
    ],
    recommended: false,
  },
];

const benefits = [
  "Cashless repairs at 5000+ network garages",
  "Instant policy issuance in 10 minutes",
  "24/7 roadside assistance",
  "No Claim Bonus (NCB) protection",
  "Personal accident cover up to ₹15 lakhs",
  "Engine & gearbox protection add-on",
  "Return to invoice cover available",
  "Key replacement cover",
];

const claimSteps = [
  {
    step: "01",
    title: "Report the Incident",
    description: "Call our 24/7 helpline or report via app immediately after the accident.",
  },
  {
    step: "02",
    title: "Document Everything",
    description: "Take photos of the damage, collect witness details, and file FIR if needed.",
  },
  {
    step: "03",
    title: "Submit Claim Form",
    description: "Fill the claim form online or at our branch with required documents.",
  },
  {
    step: "04",
    title: "Vehicle Inspection",
    description: "Our surveyor will inspect the damage at the garage or your location.",
  },
  {
    step: "05",
    title: "Get Repairs Done",
    description: "Choose cashless repair at network garage or reimbursement claim.",
  },
  {
    step: "06",
    title: "Claim Settlement",
    description: "Receive settlement within 15 days of submitting all documents.",
  },
];

const faqs = [
  {
    question: "What is the difference between comprehensive and third-party insurance?",
    answer:
      "Third-party insurance only covers damages you cause to others, while comprehensive insurance covers both third-party liability and damage to your own vehicle. Comprehensive is recommended for complete protection.",
  },
  {
    question: "How is car insurance premium calculated?",
    answer:
      "Premium depends on factors like car's make & model, manufacturing year, city of registration, engine capacity, insured declared value (IDV), add-ons selected, and your No Claim Bonus (NCB).",
  },
  {
    question: "What is No Claim Bonus (NCB)?",
    answer:
      "NCB is a discount on premium offered for not making any claims during a policy year. It can go up to 50% and is transferable to a new insurer or vehicle of the same class.",
  },
  {
    question: "Can I choose any garage for repairs?",
    answer:
      "For cashless claims, you must use our network garages. For reimbursement claims, you can use any garage but will need to pay upfront and claim later.",
  },
  {
    question: "What documents are needed for a car insurance claim?",
    answer:
      "You'll need the policy document, RC copy, driving license, claim form, FIR (for theft/major accident), and repair bills/estimates. Our team will guide you through the process.",
  },
];

const CarInsurance = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-trust-light via-background to-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="w-20 h-20 bg-hero-gradient rounded-2xl flex items-center justify-center mx-auto shadow-lg">
                <Car className="w-10 h-10 text-primary-foreground" />
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                Car Insurance Plans
              </h1>
              <p className="text-lg text-muted-foreground">
                Protect your car with comprehensive coverage. Compare plans from top insurers
                and save up to 75% on your premium.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/calculator">
                  <Button variant="cta" size="xl" className="gap-2">
                    Get Instant Quote
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </Link>
                <Button variant="outline" size="xl">
                  Compare Plans
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Insurance Types */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Coverage Options
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              Types of Car Insurance
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {insuranceTypes.map((type, index) => (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                {type.recommended && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cta text-cta-foreground px-4 py-1 rounded-full text-xs font-semibold">
                    RECOMMENDED
                  </div>
                )}
                <div
                  className={`bg-card rounded-2xl p-8 shadow-card hover:shadow-card-hover transition-all border h-full ${
                    type.recommended ? "border-accent" : "border-border/50"
                  }`}
                >
                  <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mb-6">
                    <type.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-3">
                    {type.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    {type.description}
                  </p>
                  <ul className="space-y-2">
                    {type.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-foreground"
                      >
                        <CheckCircle className="w-4 h-4 text-success flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-trust-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Benefits
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Why Choose Our Car Insurance?
              </h2>
              <p className="text-muted-foreground mb-8">
                Get the best-in-class coverage with features designed to give you complete
                peace of mind on the road.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 shadow-card-hover border border-border/50"
            >
              <h3 className="font-display text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                <FileText className="w-6 h-6 text-accent" />
                Quick Premium Estimate
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-muted-foreground">Vehicle Type</span>
                  <span className="font-semibold text-foreground">Sedan (Petrol)</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-muted-foreground">IDV</span>
                  <span className="font-semibold text-foreground">₹5,00,000</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-muted-foreground">NCB Discount</span>
                  <span className="font-semibold text-success">-25%</span>
                </div>
                <div className="flex justify-between items-center py-4">
                  <span className="text-foreground font-semibold">Starting Premium</span>
                  <span className="font-display text-2xl font-bold text-accent">₹8,999/yr</span>
                </div>
                <Link to="/calculator">
                  <Button variant="cta" className="w-full">
                    Calculate Your Premium
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Claim Process */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Claims
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              How to File a Claim
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Our streamlined claim process ensures quick settlement with minimum hassle.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {claimSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-card border border-border/50"
              >
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-accent-foreground font-bold text-sm mb-4">
                  {step.step}
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-trust-light">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              FAQs
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card rounded-xl border border-border/50 px-6"
                >
                  <AccordionTrigger className="text-left font-semibold text-foreground hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
            Ready to Insure Your Car?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Get instant quotes from top insurers and save up to 75% on your premium.
          </p>
          <Link to="/calculator">
            <Button variant="cta" size="xl">
              Get Free Quote Now
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default CarInsurance;
