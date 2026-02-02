import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    location: "Mumbai",
    rating: 5,
    text: "Excellent service! Got my car insurance renewed in just 10 minutes. The cashless claim process was smooth and hassle-free. Highly recommended!",
    vehicle: "Car Insurance",
  },
  {
    name: "Priya Sharma",
    location: "Delhi",
    rating: 5,
    text: "Policy Pioneer made buying bike insurance so easy. The premium was 40% lower than my previous insurer, and the coverage is comprehensive.",
    vehicle: "Bike Insurance",
  },
  {
    name: "Amit Patel",
    location: "Bangalore",
    rating: 5,
    text: "Had an accident last month. The claim was settled within 10 days with zero hassle. The 24/7 support team was extremely helpful throughout.",
    vehicle: "Car Insurance",
  },
  {
    name: "Sneha Reddy",
    location: "Hyderabad",
    rating: 4,
    text: "Very transparent pricing with no hidden charges. The comparison feature helped me choose the best plan for my needs. Great platform!",
    vehicle: "Bike Insurance",
  },
];

const Testimonials = () => {
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
            Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
            What Our Customers Say
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Policy Pioneer for their insurance needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-shadow border border-border/50"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-accent/30 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < testimonial.rating
                        ? "text-cta fill-cta"
                        : "text-muted-foreground"
                    }`}
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-muted-foreground text-sm mb-6 line-clamp-4">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.location} • {testimonial.vehicle}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
