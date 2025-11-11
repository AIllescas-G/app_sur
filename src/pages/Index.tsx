import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { NavLink } from "react-router-dom";
import { Tent, Users, Sparkles, Clock, CheckCircle, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-glamping.jpg";

const Index = () => {
  const features = [
    {
      icon: Tent,
      title: "Diseño Único",
      description: "Tipis fabricados con materiales premium y diseño exclusivo para experiencias inolvidables.",
    },
    {
      icon: Users,
      title: "Para Todos",
      description: "Modelos desde 2 hasta 8 personas, perfectos para parejas, familias o grupos.",
    },
    {
      icon: Sparkles,
      title: "Máximo Confort",
      description: "Equipados con todo lo necesario para disfrutar del glamping sin renunciar al bienestar.",
    },
    {
      icon: Clock,
      title: "Instalación Rápida",
      description: "Nuestro equipo se encarga del montaje completo en tu ubicación preferida.",
    },
  ];

  const benefits = [
    "Fabricación personalizada según necesidades",
    "Materiales resistentes a la intemperie",
    "Instalación y desmontaje incluidos",
    "Mantenimiento y soporte continuo",
    "Opciones de personalización",
    "Garantía de calidad",
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
            Experiencias de Glamping Únicas
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-primary-foreground/90">
            Diseño, fabricación y montaje de tipis premium para campings y espacios naturales
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-lg">
              <NavLink to="/modelos">
                Ver Modelos
                <ArrowRight className="ml-2 w-5 h-5" />
              </NavLink>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-lg bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <NavLink to="/contacto">Solicitar Información</NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-b from-background to-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              ¿Por Qué TipiTop Tents?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ofrecemos soluciones completas de glamping para transformar tu espacio en un destino único
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">
                Servicio Integral de Glamping
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Nos encargamos de todo el proceso: desde el diseño personalizado hasta la instalación 
                final. Nuestros tipis están diseñados para ofrecer la mejor experiencia de glamping, 
                combinando confort y naturaleza.
              </p>
              
              <div className="space-y-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              <Button asChild size="lg" className="mt-8">
                <NavLink to="/nosotros">
                  Conocer Más
                  <ArrowRight className="ml-2 w-5 h-5" />
                </NavLink>
              </Button>
            </div>

            <div className="relative">
              <div className="aspect-square bg-muted rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={heroImage} 
                  alt="Tipi de glamping TipiTop" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-accent/20 rounded-full blur-3xl -z-10" />
              <div className="absolute -top-6 -left-6 w-48 h-48 bg-primary/20 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/90">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary-foreground">
            ¿Listo para Empezar?
          </h2>
          <p className="text-xl mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
            Contacta con nosotros y descubre cómo podemos transformar tu espacio 
            con nuestras soluciones de glamping premium
          </p>
          <Button asChild size="lg" variant="secondary" className="text-lg">
            <NavLink to="/contacto">
              Solicitar Presupuesto
              <ArrowRight className="ml-2 w-5 h-5" />
            </NavLink>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
