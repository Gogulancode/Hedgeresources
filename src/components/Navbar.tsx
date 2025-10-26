import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/Hedge Header.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    // Set initial scroll state based on current page
    const isHomePage = location.pathname === '/';
    if (!isHomePage) {
      setIsScrolled(true); // Force scrolled state on non-home pages
    }
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Sustainability", path: "/sustainability" },
    { name: "Contact", path: "/contact" },
  ];

  const isHomePage = location.pathname === '/';
  const shouldShowScrolledState = isScrolled || !isHomePage;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        shouldShowScrolledState 
          ? "bg-white shadow-lg border-b border-gray-200" 
          : "bg-white/95 backdrop-blur-sm shadow-md"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center group">
            <img 
              src={logo} 
              alt="HEGDE Resources" 
              className="h-10 w-auto lg:h-16 lg:w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative px-4 py-2 text-sm font-bold rounded-lg transition-all duration-300 group ${
                  location.pathname === link.path
                    ? "text-green-700 bg-green-50" 
                    : "text-black hover:text-green-700 hover:bg-gray-50"
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-green-500 transition-all duration-300 ${
                  location.pathname === link.path ? "w-6" : "w-0 group-hover:w-6"
                }`}></span>
              </Link>
            ))}
          </nav>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Link to="/contact">
              <Button 
                className={`hidden md:flex items-center space-x-2 px-6 py-2 rounded-full font-bold transition-all duration-300 hover:scale-105 bg-green-600 hover:bg-green-700 text-white shadow-lg hover:shadow-xl`}
              >
                <span>Contact Us</span>
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg transition-all duration-300 text-black hover:bg-gray-100"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
        isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
      }`}>
        <div className="bg-white/95 backdrop-blur-xl border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <nav className="space-y-2">
              {navLinks.map((link, index) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 rounded-xl font-bold transition-all duration-300 ${
                    location.pathname === link.path
                      ? "text-green-700 bg-green-50 border-l-4 border-green-500"
                      : "text-black hover:text-green-700 hover:bg-gray-50"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                  }}
                  data-animate={isMobileMenuOpen}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
            
            <div className="mt-6 pt-6 border-t border-gray-200">
              <Link to="/contact">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-xl py-3 font-bold flex items-center justify-center space-x-2">
                  <span>Contact Us</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
