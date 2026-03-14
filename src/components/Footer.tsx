import { Link } from "react-router-dom";
import { Mail, Phone, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/Hedge.webp";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-900 text-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <img
                src={logo}
                alt="HEGDE Resources"
                className="h-16 brightness-0 invert"
                width={160}
                height={64}
                style={{ objectFit: "contain" }}
              />
            </Link>
            <p className="text-green-300 text-xs leading-relaxed">
              Sustainable solutions for agriculture and packaging.
              Made with care for the planet and future generations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/products", label: "Products" },
                { to: "/sustainability", label: "Sustainability" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-green-300 hover:text-white text-xs transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-xs text-green-300">
                <Mail className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                <span className="break-all">hegde.resources@gmail.com</span>
              </li>
              <li className="flex items-start gap-2 text-xs text-green-300">
                <Phone className="w-3.5 h-3.5 mt-0.5 flex-shrink-0" />
                <span>+91 96191 11045</span>
              </li>
            </ul>
          </div>

          {/* Social - hidden for now */}
          {/*
          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-8 h-8 rounded-md bg-green-800 flex items-center justify-center hover:bg-green-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-8 h-8 rounded-md bg-green-800 flex items-center justify-center hover:bg-green-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
          */}
        </div>

        <div className="mt-10 pt-6 border-t border-green-800 text-center">
          <p className="text-xs text-green-400">
            &copy; {currentYear} HEGDE Resources. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
