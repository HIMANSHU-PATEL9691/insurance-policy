import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Car, Bike, Calculator } from "lucide-react";
import { Link } from "react-router-dom";

const vehicleBrands = {
  car: ["Maruti Suzuki", "Hyundai", "Tata", "Mahindra", "Honda", "Toyota", "Kia", "Volkswagen"],
  bike: ["Hero", "Honda", "TVS", "Bajaj", "Royal Enfield", "Yamaha", "Suzuki", "KTM"],
};

const years = Array.from({ length: 15 }, (_, i) => 2024 - i);

const CalculatorSection = () => {
  const [vehicleType, setVehicleType] = useState<"car" | "bike">("car");
  const [brand, setBrand] = useState("");
  const [year, setYear] = useState("");

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Premium Calculator
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
              Calculate Your Insurance Premium
            </h2>
            <p className="text-muted-foreground mt-4">
              Get an instant estimate for your vehicle insurance in just a few clicks.
            </p>
          </motion.div>

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
                  onClick={() => setVehicleType("car")}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                    vehicleType === "car"
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Car className="w-5 h-5" />
                  Car
                </button>
                <button
                  onClick={() => setVehicleType("bike")}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                    vehicleType === "bike"
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Bike className="w-5 h-5" />
                  Bike
                </button>
              </div>
            </div>

            {/* Form */}
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Vehicle Brand
                </label>
                <select
                  value={brand}
                  onChange={(e) => setBrand(e.target.value)}
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
                  Model
                </label>
                <input
                  type="text"
                  placeholder="Enter model name"
                  className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Registration Year
                </label>
                <select
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
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
            </div>

            <div className="mt-8 text-center">
              <Link to="/calculator">
                <Button variant="cta" size="xl" className="gap-2">
                  <Calculator className="w-5 h-5" />
                  Calculate Premium
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
