import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

// ✅ Logo import
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              {/* ✅ Image Logo */}
              
                <img
                  src={logo}
                  alt="Policy Pioneer Insurance Logo"
                  className="h-10 w-auto object-contain"
                />
              

              <div className="flex flex-col">
                <span className="font-display font-bold text-lg leading-tight">
                  Policy Pioneer
                </span>
                <span className="text-xs text-primary-foreground/70">
                  Insurance
                </span>
              </div>
            </div>

            <p className="text-primary-foreground/80 text-sm leading-relaxed">
              Your trusted partner for comprehensive car and bike insurance
              solutions in India. We make insurance simple, affordable, and
              accessible.
            </p>

            <div className="flex gap-3">
              <a
                href="#"
                className="w-9 h-9 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/car-insurance"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Car Insurance
                </Link>
              </li>
              <li>
                <Link
                  to="/bike-insurance"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Bike Insurance
                </Link>
              </li>
              <li>
                <Link
                  to="/calculator"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Premium Calculator
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Insurance Types */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">
              Insurance Types
            </h4>
            <ul className="space-y-3">
              <li className="text-primary-foreground/80 text-sm">
                Comprehensive Cover
              </li>
              <li className="text-primary-foreground/80 text-sm">
                Third-Party Insurance
              </li>
              <li className="text-primary-foreground/80 text-sm">
                Zero Depreciation
              </li>
              <li className="text-primary-foreground/80 text-sm">
                Personal Accident Cover
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  123 Insurance Tower, Financial District, Mumbai, Maharashtra
                  400001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="tel:9691365052">
                <span className="text-primary-foreground/80 text-sm">
                  9691365052 (Toll Free)
                </span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  patelhimanshu6006@gmail.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/70 text-sm text-center md:text-left">
            © 2026 Policy Pioneer Insurance. All Rights Reserved | Crafted by
            Himanshu Patel
          </p>
          <div className="flex gap-6 text-sm">
            <a
              href="#"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              Terms & Conditions
            </a>
            <a
              href="#"
              className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
