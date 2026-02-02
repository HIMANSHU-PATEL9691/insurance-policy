import { useState } from "react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";
import { toast } from "sonner";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["9691365052 (Toll Free)"],
    description: "Mon-Sat, 9 AM - 8 PM",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["patelhimanshu6006@gmail.com"],
    description: "We respond within 24 hours",
  },
  {
    icon: MapPin,
    title: "Office",
    details: ["123 Insurance Tower", "Financial District, Mumbai 400001"],
    description: "Visit us for in-person assistance",
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Monday - Saturday", "9:00 AM - 8:00 PM"],
    description: "Sunday & holidays closed",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast.success("Thank you! Your message has been sent. We'll get back to you soon.");
    setFormData({ name: "", email: "", mobile: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

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
              <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground">
                Contact Us
              </h1>
              <p className="text-lg text-muted-foreground">
                Have questions about insurance? Need help with a claim? Our team is here to assist you 24/7.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-card rounded-xl p-6 shadow-card border border-border/50 text-center"
              >
                <div className="w-14 h-14 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-7 h-7 text-accent" />
                </div>
                <h3 className="font-display font-semibold text-lg text-foreground mb-2">
                  {info.title}
                </h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-foreground text-sm">
                    {detail}
                  </p>
                ))}
                <p className="text-muted-foreground text-xs mt-2">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-16 bg-trust-light">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                Get in Touch
              </span>
              <h2 className="font-display text-3xl font-bold text-foreground mt-2 mb-6">
                Send Us a Message
              </h2>

              <form
                onSubmit={handleSubmit}
                className="bg-card rounded-2xl p-8 shadow-card-hover border border-border/50"
              >
                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      value={formData.mobile}
                      onChange={(e) =>
                        setFormData({ ...formData, mobile: e.target.value })
                      }
                      required
                      pattern="[0-9]{10}"
                      className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                      placeholder="10-digit number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      required
                      className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
                    >
                      <option value="">Select subject</option>
                      <option value="new-policy">New Policy Inquiry</option>
                      <option value="renewal">Policy Renewal</option>
                      <option value="claim">Claim Related</option>
                      <option value="complaint">Complaint</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-accent focus:border-transparent transition-all resize-none"
                    placeholder="How can we help you?"
                  />
                </div>

                <Button
                  type="submit"
                  variant="cta"
                  size="lg"
                  className="w-full gap-2"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Map & WhatsApp */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <span className="text-accent font-semibold text-sm uppercase tracking-wider">
                  Visit Us
                </span>
                <h2 className="font-display text-3xl font-bold text-foreground mt-2 mb-6">
                  Our Location
                </h2>
              </div>

              {/* Map Embed */}
              <div className="rounded-2xl overflow-hidden shadow-card-hover border border-border/50 h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.755802903091!2d72.86427!3d19.045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAyJzQyLjAiTiA3MsKwNTEnNTEuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Policy Pioneer Office Location"
                />
              </div>

              {/* WhatsApp CTA */}
              <div className="bg-card rounded-2xl p-6 shadow-card border border-border/50">
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 bg-[#25D366]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-7 h-7 text-[#25D366]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                      Chat on WhatsApp
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Get instant assistance on WhatsApp. Our team is available 24/7.
                    </p>
                    <a
                      href="https://wa.me/9691365052?text=Hello!%20I%20need%20help%20with%20insurance."
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="success" className="gap-2">
                        <MessageCircle className="w-5 h-5" />
                        Chat Now
                      </Button>
                    </a>
                  </div>
                </div>
              </div>

              {/* Quick Help */}
              <div className="bg-hero-gradient rounded-2xl p-6 text-primary-foreground">
                <h3 className="font-display font-semibold text-lg mb-2">
                  Need Immediate Help?
                </h3>
                <p className="text-primary-foreground/80 text-sm mb-4">
                  For urgent claim assistance or roadside help, call our 24/7 helpline.
                </p>
                <a href="tel:9691365052">
                  <Button variant="heroOutline" className="gap-2">
                    <Phone className="w-5 h-5" />
                    9691365052
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
