import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Bike,
  Shield,
  CheckCircle,
  ArrowRight,
  AlertTriangle,
  FileText,
} from "lucide-react";
import { Link } from "react-router-dom";
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
      "All-round protection for your bike covering own damage, theft, fire, natural disasters, and third-party liabilities.",
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
      "Legally mandatory coverage protecting against damages caused to third-party property, vehicle, or person.",
    features: [
      "Third-party property damage",
      "Third-party injury cover",
      "Legal liability protection",
      "Court expenses covered",
      "Most affordable option",
    ],
    recommended: false,
  },
];

const benefits = [
  "Cashless repairs at 3000+ network garages",
  "Instant policy issuance in 5 minutes",
  "24/7 roadside assistance",
  "No Claim Bonus up to 50%",
  "Personal accident cover up to ₹15 lakhs",
  "Pillion rider cover available",
  "Helmet protection add-on",
  "EMI on premium available",
];

const claimSteps = [
  {
    step: "01",
    title: "Report Immediately",
    description: "Call our helpline or use the app to report the incident as soon as possible.",
  },
  {
    step: "02",
    title: "Gather Evidence",
    description: "Take photos, collect witness information, and file FIR for theft/major accidents.",
  },
  {
    step: "03",
    title: "Submit Documents",
    description: "Fill claim form and submit with RC, license, and other required documents.",
  },
  {
    step: "04",
    title: "Bike Inspection",
    description: "Our surveyor will assess the damage at your location or the garage.",
  },
  {
    step: "05",
    title: "Repair & Settle",
    description: "Get cashless repairs at network garage or reimbursement within 15 days.",
  },
];

const faqs = [
  {
    question: "Is bike insurance mandatory in India?",
    answer:
      "Yes, as per the Motor Vehicles Act, at least third-party insurance is mandatory for all two-wheelers in India. Riding without valid insurance can result in fines up to ₹2000 and/or imprisonment.",
  },
  {
    question: "What factors affect bike insurance premium?",
    answer:
      "Premium depends on bike's make, model, cubic capacity (CC), manufacturing year, city of registration, IDV (Insured Declared Value), add-ons selected, and your No Claim Bonus.",
  },
  {
    question: "What is IDV for bike insurance?",
    answer:
      "IDV (Insured Declared Value) is the maximum amount your insurer will pay if your bike is stolen or totally damaged. It's the current market value of your bike minus depreciation.",
  },
  {
    question: "Can I transfer my NCB to a new bike?",
    answer:
      "Yes, NCB is linked to the owner, not the vehicle. You can transfer your NCB to a new bike or even a new insurer. Just ensure there's no gap in policy renewal.",
  },
  {
    question: "What's covered under personal accident cover?",
    answer:
      "Personal accident cover provides compensation for death or disability of the owner-driver due to an accident while riding. It offers cover up to ₹15 lakhs as per IRDAI guidelines.",
  },
];

const BikeInsurance = () => {
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
                <Bike className="w-10 h-10 text-primary-foreground" />
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                Bike Insurance Plans
              </h1>
              <p className="text-lg text-muted-foreground">
                Affordable two-wheeler insurance with instant policy issuance. 
                Protect your ride with comprehensive coverage starting at just ₹499/year.
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
              Types of Bike Insurance
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                Why Choose Our Bike Insurance?
              </h2>
              <p className="text-muted-foreground mb-8">
                Get affordable coverage with premium benefits designed for Indian roads
                and riding conditions.
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
                  <span className="text-muted-foreground">Bike Type</span>
                  <span className="font-semibold text-foreground">150cc Motorcycle</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-muted-foreground">IDV</span>
                  <span className="font-semibold text-foreground">₹75,000</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="text-muted-foreground">NCB Discount</span>
                  <span className="font-semibold text-success">-25%</span>
                </div>
                <div className="flex justify-between items-center py-4">
                  <span className="text-foreground font-semibold">Starting Premium</span>
                  <span className="font-display text-2xl font-bold text-accent">₹1,499/yr</span>
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
              Simple 5-step process for quick claim settlement.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {claimSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-card border border-border/50 text-center"
              >
                <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-accent-foreground font-bold text-sm mb-4 mx-auto">
                  {step.step}
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">
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
            Ready to Insure Your Bike?
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Get instant quotes and coverage starting at just ₹499/year.
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

export default BikeInsurance;
