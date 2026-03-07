import { Link } from "react-router-dom";
import { Mail, Phone, Linkedin, Instagram } from "lucide-react";
import logo from "@/assets/logo.svg";
import footerLogo from "@/assets/hedge-footer.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-800 text-black-content">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-start">
          {/* Brand */}
          <div className="flex flex-col pt-0">
            <h3 className="font-semibold mb-4 text-base opacity-0 select-none">Brand</h3>
            <div className="-mt-8">
              <Link to="/" className="inline-block group">
                <img 
                  src={footerLogo} 
                  alt="HEGDE Resources Footer Logo" 
                  className="h-24 transition-transform duration-300 group-hover:scale-105"
                  style={{ 
                    objectFit: 'contain', 
                    background: 'transparent',
                    width: 'auto',
                    display: 'block'
                  }}
                  onError={(e) => {
                    // Fallback to regular logo if footer logo fails to load
                    const target = e.target as HTMLImageElement;
                    target.src = logo;
                    target.className = "h-20 transition-transform duration-300 group-hover:scale-105";
                    target.style.background = 'transparent';
                    target.style.width = 'auto';
                  }}
                />
              </Link>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Sustainable solutions for agriculture and packaging. 
              Made with care for the planet and future generations.
            </p>
          </div>

          {/* Quick Links */}
          <div className="pt-0">
            <h3 className="font-semibold mb-4 text-base">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm font-medium hover:text-green-600 transition-smooth">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm font-medium hover:text-green-600 transition-smooth">
                  About
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-sm font-medium hover:text-green-600 transition-smooth">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm font-medium hover:text-green-600 transition-smooth">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="pt-0">
            <h3 className="font-semibold mb-4 text-base">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2 text-sm">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span className="break-all">hegde.resources@gmail.com</span>
              </li>
              <li className="flex items-start space-x-2 text-sm">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>+91 96191 11045</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="pt-0">
            <h3 className="font-semibold mb-4 text-base">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-green-600 hover:text-white transition-smooth"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-green-600 hover:text-white transition-smooth"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-600">
            © {currentYear} HEGDE Resources. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
