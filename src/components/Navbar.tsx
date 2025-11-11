import { NavLink } from "react-router-dom";
import { Menu, X, Tent } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Inicio" },
    { to: "/modelos", label: "Modelos" },
    { to: "/nosotros", label: "Nosotros" },
    { to: "/contacto", label: "Contacto" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 group">
            <Tent className="w-8 h-8 text-primary transition-transform group-hover:scale-110" />
            <span className="text-2xl font-bold text-primary">TipiTop Tents</span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `text-foreground hover:text-primary transition-colors font-medium ${
                    isActive ? "text-primary" : ""
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
            <Button asChild variant="default" className="ml-4">
              <NavLink to="/contacto">Solicitar Información</NavLink>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `text-foreground hover:text-primary transition-colors font-medium px-2 py-1 ${
                      isActive ? "text-primary" : ""
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <Button asChild variant="default" className="mt-2" onClick={() => setIsOpen(false)}>
                <NavLink to="/contacto">Solicitar Información</NavLink>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
