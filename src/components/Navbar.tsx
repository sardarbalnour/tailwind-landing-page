import { AnimatePresence, motion } from "framer-motion";
import { Code2, Menu, X } from "lucide-react";
import type React from "react";
import { useState } from "react";
import Button from "./ui/Button";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Features", href: "#features" },
  { name: "Courses", href: "#courses" },
  { name: "Pricing", href: "#pricing" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    // in order to use smooth scroll behavior
    setIsMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50
        transition-all duration-300"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "#home")}
              className="flex items-center gap-2.5 group"
            >
              <div
                className="bg-linear-to-br from-primary
               to-accent-blue relative w-9 h-9 flex items-center
                justify-center rounded-lg group-hover:shadow-lg
                group-hover:shadow-primary/30 transition-shadow
                duration-300"
              >
                <Code2 className="font-bold text-white h-5 w-5" />
              </div>
              <span className="text-lg font-bold text-text-primary">
                Sardar<span className="text-primary-light">Balnour</span>
              </span>
            </a>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-2 text-sm font-medium
                  text-text-secondary hover:text-text-primary
                  transition-colors duration-200 rounded-lg
                  hover:bg-surface-light/30"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center gap-3">
              <Button variant="ghost" size="sm">
                Login
              </Button>
              <Button variant="primary" size="sm">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-text-secondary
              hover:text-text-primary transition-colors "
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-dark-900/80 backdrop-blur-sm"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-16 left-4 right-4 glass rounded-2xl p-6 shadow-2xl"
              >
                <div className="flex flex-col gap-1">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="px-4 py-3 text-base font-medium
                      text-text-secondary hover:text-text-primary
                      hover:bg-surface-light/30 rounded-xl transition-colors"
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
                <div
                  className="mt-4 pt-4 border-t
                border-surface-border flex flex-col gap-2"
                >
                  <Button variant="outline" size="md" className="w-full">
                    Log In
                  </Button>
                  <Button variant="primary" size="md" className="w-full">
                    Get Started
                  </Button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
