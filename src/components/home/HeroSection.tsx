import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Shield, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-vehicles.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-trust-light via-background to-secondary">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Content FIRST */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium"
            >
              <Shield className="w-4 h-4" />
              IRDAI Registered | 2 Lakh+ Happy Customers
            </motion.div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Secure Your{" "}
              <span className="text-gradient">Car & Bike</span>{" "}
              with Trusted Insurance Plans
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl">
              Get instant policy issuance, cashless claims at 5000+ garages, and
              affordable premiums. Compare plans from top insurers and save up
              to 75%.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-4">
              {["Instant Policy", "Cashless Claims", "24/7 Support"].map(
                (feature, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 text-sm text-foreground"
                  >
                    <CheckCircle className="w-5 h-5 text-success" />
                    {feature}
                  </div>
                )
              )}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link to="/calculator">
                <Button variant="cta" size="xl" className="gap-2">
                  Get Instant Quote
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>

              <a href="tel:9691365052">
                <Button variant="outline" size="xl" className="gap-2">
                  <Phone className="w-5 h-5" />
                  Talk to Expert
                </Button>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="text-center">
                <p className="font-display text-2xl font-bold text-primary">
                  ₹50 Cr+
                </p>
                <p className="text-xs text-muted-foreground">Claims Settled</p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <p className="font-display text-2xl font-bold text-primary">
                  4.8★
                </p>
                <p className="text-xs text-muted-foreground">
                  Customer Rating
                </p>
              </div>
              <div className="w-px h-10 bg-border" />
              <div className="text-center">
                <p className="font-display text-2xl font-bold text-primary">
                  5000+
                </p>
                <p className="text-xs text-muted-foreground">
                  Network Garages
                </p>
              </div>
            </div>
          </motion.div>

          {/* Image AFTER text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative order-last"
          >
            <div className="relative">
              <img
                src={heroImage}
                alt="Car and Bike Insurance"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />

              {/* Floating cards – desktop only */}
              <div className="hidden md:block">
                <div className="absolute -left-8 top-1/4 bg-card p-4 rounded-xl shadow-card-hover">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-success" />
                    <div>
                      <p className="font-semibold text-sm">Claim Approved!</p>
                      <p className="text-xs text-muted-foreground">
                        ₹45,000 settled in 2 days
                      </p>
                    </div>
                  </div>
                </div>

                <div className="absolute -right-4 bottom-1/4 bg-card p-4 rounded-xl shadow-card-hover">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-accent" />
                    <div>
                      <p className="font-semibold text-sm">Policy Active</p>
                      <p className="text-xs text-muted-foreground">
                        Comprehensive Cover
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
