import { motion, useMotionValue, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Shield, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-vehicles.jpg";
import ShinyText from "@/components/ShinyText";

const HeroSection = () => {
  /* 🧲 MAGNET MOTION */
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 120, damping: 15 });
  const springY = useSpring(y, { stiffness: 120, damping: 15 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    x.set(offsetX * 0.15);
    y.set(offsetY * 0.15);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-trust-light via-background to-secondary">

      {/* CONTENT */}
      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* 🔵 LEFT CONTENT */}
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

            {/* Heading */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              Secure Your{" "}
              <ShinyText
                text="Car & Bike"
                speed={2}
                color="#1f2937"
                shineColor="#ffffff"
                spread={120}
                pauseOnHover
              />{" "}
              with Trusted Insurance Plans
            </h1>

            {/* Description */}
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

            {/* CTA */}
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

            {/* Stats */}
            <div className="flex items-center gap-6 pt-4">
              <Stat value="₹50 Cr+" label="Claims Settled" />
              <Divider />
              <Stat value="4.8★" label="Customer Rating" />
              <Divider />
              <Stat value="5000+" label="Network Garages" />
            </div>
          </motion.div>

          {/* 🧲 RIGHT IMAGE WITH MAGNET EFFECT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center"
          >
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{ x: springX, y: springY }}
              whileHover={{ scale: 1.03 }}
              className="relative cursor-pointer"
            >
              <img
                src={heroImage}
                alt="Car and Bike Insurance"
                className="w-full h-auto rounded-2xl shadow-2xl select-none"
                draggable={false}
              />

              {/* Floating Cards */}
              <div className="hidden md:block">
                <FloatingCard
                  position="-left-8 top-1/4"
                  icon={<CheckCircle className="w-5 h-5 text-success" />}
                  title="Claim Approved!"
                  desc="₹45,000 settled in 2 days"
                />

                <FloatingCard
                  position="-right-4 bottom-1/4"
                  icon={<Shield className="w-5 h-5 text-accent" />}
                  title="Policy Active"
                  desc="Comprehensive Cover"
                />
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

/* SMALL COMPONENTS */
const Stat = ({ value, label }) => (
  <div className="text-center">
    <p className="font-display text-2xl font-bold text-primary">{value}</p>
    <p className="text-xs text-muted-foreground">{label}</p>
  </div>
);

const Divider = () => <div className="w-px h-10 bg-border" />;

const FloatingCard = ({ position, icon, title, desc }) => (
  <div className={`absolute ${position} bg-card p-4 rounded-xl shadow-card-hover`}>
    <div className="flex items-center gap-3">
      {icon}
      <div>
        <p className="font-semibold text-sm">{title}</p>
        <p className="text-xs text-muted-foreground">{desc}</p>
      </div>
    </div>
  </div>
);

export default HeroSection;
