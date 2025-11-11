import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, Leaf, Award } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-glamping.jpg";

const Nosotros = () => {
  const values = [
    {
      icon: Target,
      title: "Misión",
      description: "Proporcionar experiencias únicas en la naturaleza sin renunciar al confort y bienestar de los huéspedes.",
    },
    {
      icon: Heart,
      title: "Pasión",
      description: "Amamos lo que hacemos y nos dedicamos a crear espacios que conecten a las personas con la naturaleza.",
    },
    {
      icon: Leaf,
      title: "Sostenibilidad",
      description: "Utilizamos materiales sostenibles y procesos respetuosos con el medio ambiente.",
    },
    {
      icon: Award,
      title: "Calidad",
      description: "Cada tipi es fabricado con los más altos estándares de calidad y durabilidad.",
    },
  ];

  const team = [
    {
      role: "Diseño",
      description: "Nuestro equipo de diseñadores crea espacios únicos que combinan funcionalidad y estética.",
    },
    {
      role: "Fabricación",
      description: "Artesanos expertos fabrican cada tipi con atención al detalle y materiales premium.",
    },
    {
      role: "Instalación",
      description: "Técnicos especializados garantizan un montaje perfecto en cualquier ubicación.",
    },
    {
      role: "Soporte",
      description: "Equipo dedicado a ofrecer mantenimiento y asistencia continua a nuestros clientes.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Sobre TipiTop Tents
            </h1>
            <p className="text-xl text-muted-foreground">
              Somos especialistas en la fabricación de tipis premium para glamping, 
              centrados en crear experiencias memorables en la naturaleza.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Nuestra Historia
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg">
                  TipiTop Tents nace de la pasión por la naturaleza y el deseo de ofrecer 
                  experiencias únicas de alojamiento al aire libre. Nos especializamos en el 
                  concepto de glamping: una fusión perfecta entre camping tradicional y el 
                  confort de un hotel.
                </p>
                <p className="text-lg">
                  Nuestro equipo de profesionales se encarga de todo el proceso, desde el diseño 
                  inicial hasta la instalación final. Cada tipi es único y está diseñado para 
                  integrarse armoniosamente con su entorno natural.
                </p>
                <p className="text-lg">
                  Trabajamos con campings, espacios naturales y empresas de turismo ecológico 
                  que buscan ofrecer a sus clientes una experiencia diferencial, combinando 
                  naturaleza, confort y sostenibilidad.
                </p>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={heroImage} 
                  alt="TipiTop Tents" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Nuestros Valores
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Los principios que guían nuestro trabajo y definen quiénes somos
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Nuestro Equipo
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Profesionales dedicados a crear las mejores soluciones de glamping
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{member.role}</h3>
                  <p className="text-muted-foreground">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-primary-foreground">
            ¿Quieres Saber Más?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Contacta con nosotros para descubrir cómo podemos ayudarte a crear 
            tu espacio de glamping perfecto
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Nosotros;
