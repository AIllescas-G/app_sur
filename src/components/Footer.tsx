import { NavLink } from "react-router-dom";
import { Tent, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Tent className="w-8 h-8" />
              <span className="text-2xl font-bold">TipiTop Tents</span>
            </div>
            <p className="text-primary-foreground/80">
              Experiencias únicas de glamping, diseño y confort en la naturaleza.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Navegación</h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Inicio
                </NavLink>
              </li>
              <li>
                <NavLink to="/modelos" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Modelos
                </NavLink>
              </li>
              <li>
                <NavLink to="/nosotros" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Nosotros
                </NavLink>
              </li>
              <li>
                <NavLink to="/contacto" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Contacto
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@tipitoptents.com" className="hover:text-primary-foreground transition-colors">
                  info@tipitoptents.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-primary-foreground/80">
                <Phone className="w-4 h-4" />
                <a href="tel:+34123456789" className="hover:text-primary-foreground transition-colors">
                  +34 123 456 789
                </a>
              </li>
              <li className="flex items-start gap-2 text-primary-foreground/80">
                <MapPin className="w-4 h-4 mt-1" />
                <span>Barcelona, España</span>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Horario</h3>
            <p className="text-primary-foreground/80">
              Lunes - Viernes<br />
              9:00 - 18:00
            </p>
            <p className="text-primary-foreground/80 mt-4">
              Sábados<br />
              10:00 - 14:00
            </p>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} TipiTop Tents. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
