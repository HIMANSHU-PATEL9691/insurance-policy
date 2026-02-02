import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Car, Bike, Calculator as CalcIcon, CheckCircle, ArrowRight, Shield } from "lucide-react";
import { toast } from "sonner";

const vehicleBrands = {
  car: ["Maruti Suzuki", "Hyundai", "Tata", "Mahindra", "Honda", "Toyota", "Kia", "Volkswagen", "Ford", "Skoda"],
  bike: ["Hero", "Honda", "TVS", "Bajaj", "Royal Enfield", "Yamaha", "Suzuki", "KTM", "Kawasaki", "BMW"],
};

const carModels: Record<string, string[]> = {
  "Maruti Suzuki": ["Swift", "Baleno", "Dzire", "Alto", "WagonR", "Brezza", "Ertiga"],
  "Hyundai": ["i20", "Creta", "Venue", "Grand i10", "Verna", "Tucson"],
  "Tata": ["Nexon", "Punch", "Altroz", "Harrier", "Safari", "Tiago"],
  "Mahindra": ["XUV700", "Scorpio N", "Thar", "XUV300", "Bolero"],
  "Honda": ["City", "Amaze", "Elevate", "WR-V"],
  "Toyota": ["Innova", "Fortuner", "Glanza", "Urban Cruiser"],
  "Kia": ["Seltos", "Sonet", "Carens", "EV6"],
  "Volkswagen": ["Polo", "Vento", "Taigun", "Virtus"],
  "Ford": ["EcoSport", "Endeavour", "Figo"],
  "Skoda": ["Slavia", "Kushaq", "Octavia", "Superb"],
};

const bikeModels: Record<string, string[]> = {
  "Hero": ["Splendor", "HF Deluxe", "Passion", "Glamour", "Xpulse"],
  "Honda": ["Activa", "Shine", "Unicorn", "SP125", "Hornet"],
  "TVS": ["Jupiter", "Apache", "Ntorq", "Raider", "Sport"],
  "Bajaj": ["Pulsar", "Platina", "CT100", "Avenger", "Dominar"],
  "Royal Enfield": ["Classic 350", "Bullet", "Meteor", "Hunter", "Himalayan"],
  "Yamaha": ["FZ", "R15", "MT-15", "Fascino", "Ray ZR"],
  "Suzuki": ["Access", "Gixxer", "Burgman", "Intruder"],
  "KTM": ["Duke 125", "Duke 200", "Duke 390", "RC 390", "Adventure"],
  "Kawasaki": ["Ninja 300", "Z650", "Versys 650"],
  "BMW": ["G 310 R", "G 310 GS", "S 1000 RR"],
};

const years = Array.from({ length: 15 }, (_, i) => 2024 - i);

const plans = [
  {
    name: "Third-Party Only",
    coverage: "Basic",
    features: ["Third-party liability", "Legal compliance", "Personal accident cover"],
    discount: 0,
  },
  {
    name: "Comprehensive Basic",
    coverage: "Standard",
    features: ["Own damage cover", "Third-party liability", "Personal accident", "Fire & theft"],
    discount: 0,
    recommended: true,
  },
  {
    name: "Comprehensive Premium",
    coverage: "Full",
    features: ["All basic features", "Zero depreciation", "Roadside assistance", "Engine protection", "NCB protection"],
    discount: 5,
  },
];

const Calculator = () => {
  const [vehicleType, setVehicleType] = useState<"car" | "bike">("car");
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [ncb, setNcb] = useState("0");
  const [showResults, setShowResults] = useState(false);
  const [calculating, setCalculating] = useState(false);

  const models = vehicleType === "car" ? carModels[brand] || [] : bikeModels[brand] || [];

  const calculateBasePremium = () => {
    if (vehicleType === "car") {
      const yearFactor = 1 - (2024 - parseInt(year)) * 0.05;
      return Math.round(12000 * Math.max(yearFactor, 0.4));
    } else {
      const yearFactor = 1 - (2024 - parseInt(year)) * 0.05;
      return Math.round(2500 * Math.max(yearFactor, 0.4));
    }
  };

  const handleCalculate = async () => {
    if (!brand || !model || !year) {
      toast.error("Please fill all vehicle details");
      return;
    }
    setCalculating(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setCalculating(false);
    setShowResults(true);
  };

  const basePremium = calculateBasePremium();
  const ncbDiscount = parseInt(ncb) / 100;

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
                <CalcIcon className="w-10 h-10 text-primary-foreground" />
              </div>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                Premium Calculator
              </h1>
              <p className="text-lg text-muted-foreground">
                Get an instant estimate of your insurance premium. Compare plans and choose the best coverage for your vehicle.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Calculator Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card rounded-2xl p-8 shadow-card-hover border border-border/50"
            >
              {/* Vehicle Type Toggle */}
              <div className="flex justify-center mb-8">
                <div className="bg-muted p-1.5 rounded-xl inline-flex">
                  <button
                    onClick={() => {
                      setVehicleType("car");
                      setBrand("");
                      setModel("");
                      setShowResults(false);
                    }}
                    className={`flex items-center gap-2 px-8 py-4 rounded-lg font-medium transition-all ${
                      vehicleType === "car"
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Car className="w-5 h-5" />
                    Car Insurance
                  </button>
                  <button
                    onClick={() => {
                      setVehicleType("bike");
                      setBrand("");
                      setModel("");
                      setShowResults(false);
                    }}
                    className={`flex items-center gap-2 px-8 py-4 rounded-lg font-medium transition-all ${
                      vehicleType === "bike"
                        ? "bg-primary text-primary-foreground shadow-md"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Bike className="w-5 h-5" />
                    Bike Insurance
                  </button>
                </div>
              </div>

              {/* Form Fields */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Vehicle Brand *
                  </label>
                  <select
                    value={brand}
                    onChange={(e) => {
                      setBrand(e.target.value);
                      setModel("");
                      setShowResults(false);
                    }}
                    className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  >
                    <option value="">Select Brand</option>
                    {vehicleBrands[vehicleType].map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Model *
                  </label>
                  <select
                    value={model}
                    onChange={(e) => {
                      setModel(e.target.value);
                      setShowResults(false);
                    }}
                    disabled={!brand}
                    className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent transition-all disabled:opacity-50"
                  >
                    <option value="">Select Model</option>
                    {models.map((m) => (
                      <option key={m} value={m}>
                        {m}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Registration Year *
                  </label>
                  <select
                    value={year}
                    onChange={(e) => {
                      setYear(e.target.value);
                      setShowResults(false);
                    }}
                    className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  >
                    <option value="">Select Year</option>
                    {years.map((y) => (
                      <option key={y} value={y}>
                        {y}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    No Claim Bonus (NCB)
                  </label>
                  <select
                    value={ncb}
                    onChange={(e) => {
                      setNcb(e.target.value);
                      setShowResults(false);
                    }}
                    className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                  >
                    <option value="0">0% (New Policy)</option>
                    <option value="20">20% (1 Year)</option>
                    <option value="25">25% (2 Years)</option>
                    <option value="35">35% (3 Years)</option>
                    <option value="45">45% (4 Years)</option>
                    <option value="50">50% (5+ Years)</option>
                  </select>
                </div>
              </div>

              <div className="text-center">
                <Button
                  variant="cta"
                  size="xl"
                  className="gap-2"
                  onClick={handleCalculate}
                  disabled={calculating}
                >
                  {calculating ? (
                    <>
                      <div className="w-5 h-5 border-2 border-cta-foreground/30 border-t-cta-foreground rounded-full animate-spin" />
                      Calculating...
                    </>
                  ) : (
                    <>
                      <CalcIcon className="w-5 h-5" />
                      Calculate Premium
                    </>
                  )}
                </Button>
              </div>
            </motion.div>

            {/* Results */}
            {showResults && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-12"
              >
                <div className="text-center mb-8">
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                    Available Plans for Your {vehicleType === "car" ? "Car" : "Bike"}
                  </h2>
                  <p className="text-muted-foreground mt-2">
                    {brand} {model} ({year})
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  {plans.map((plan, index) => {
                    const planPremium = Math.round(
                      basePremium * (1 - ncbDiscount) * (index === 0 ? 0.4 : index === 1 ? 1 : 1.5)
                    );
                    const finalPremium = Math.round(planPremium * (1 - plan.discount / 100));

                    return (
                      <motion.div
                        key={plan.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="relative"
                      >
                        {plan.recommended && (
                          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cta text-cta-foreground px-4 py-1 rounded-full text-xs font-semibold">
                            RECOMMENDED
                          </div>
                        )}
                        <div
                          className={`bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all border h-full flex flex-col ${
                            plan.recommended ? "border-accent" : "border-border/50"
                          }`}
                        >
                          <div className="flex items-center gap-2 mb-2">
                            <Shield className="w-5 h-5 text-accent" />
                            <span className="text-xs font-medium text-muted-foreground uppercase">
                              {plan.coverage} Coverage
                            </span>
                          </div>

                          <h3 className="font-display text-xl font-bold text-foreground mb-4">
                            {plan.name}
                          </h3>

                          <div className="mb-6">
                            <div className="flex items-baseline gap-1">
                              <span className="font-display text-3xl font-bold text-accent">
                                ₹{finalPremium.toLocaleString()}
                              </span>
                              <span className="text-muted-foreground">/year</span>
                            </div>
                            {plan.discount > 0 && (
                              <p className="text-sm text-success mt-1">
                                Save {plan.discount}% with this plan
                              </p>
                            )}
                          </div>

                          <ul className="space-y-2 mb-6 flex-1">
                            {plan.features.map((feature) => (
                              <li
                                key={feature}
                                className="flex items-start gap-2 text-sm text-foreground"
                              >
                                <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                                {feature}
                              </li>
                            ))}
                          </ul>

                          <Button
                            variant={plan.recommended ? "cta" : "outline"}
                            className="w-full gap-2"
                          >
                            Buy Now
                            <ArrowRight className="w-4 h-4" />
                          </Button>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="mt-8 text-center">
                  <p className="text-sm text-muted-foreground">
                    * Prices are indicative. Final premium may vary based on additional factors.
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Calculator;
