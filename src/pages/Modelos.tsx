import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { NavLink } from "react-router-dom";
import { Users, Maximize, CheckCircle, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import tipiClassic from "@/assets/tipi-classic.jpg";
import tipiFamily from "@/assets/tipi-family.jpg";
import tipiDeluxe from "@/assets/tipi-deluxe.jpg";

const Modelos = () => {
  const models = [
    {
      name: "Tipi Classic",
      image: tipiClassic,
      capacity: "2-4 personas",
      size: "25m²",
      description: "Perfecto para parejas y familias pequeñas que buscan una experiencia auténtica de glamping.",
      features: [
        "Cama doble o dos individuales",
        "Mobiliario de madera natural",
        "Iluminación LED",
        "Toma de corriente",
        "Ventilación superior",
        "Aislamiento térmico",
      ],
      badge: "Popular",
    },
    {
      name: "Tipi Family",
      image: tipiFamily,
      capacity: "4-6 personas",
      size: "40m²",
      description: "Espacioso y versátil, ideal para familias y grupos que valoran el espacio y comodidad.",
      features: [
        "Zona de dormitorio separada",
        "Área de estar amplia",
        "Mobiliario completo",
        "Múltiples tomas eléctricas",
        "Ventanas panorámicas",
        "Terraza exterior incluida",
      ],
      badge: "Recomendado",
    },
    {
      name: "Tipi Deluxe",
      image: tipiDeluxe,
      capacity: "6-8 personas",
      size: "55m²",
      description: "La opción premium con todas las comodidades para una experiencia de glamping de lujo.",
      features: [
        "Baño privado integrado",
        "Cocina equipada",
        "Calefacción y aire acondicionado",
        "Terraza privada de 15m²",
        "Mobiliario de diseño",
        "Sistema de sonido",
      ],
      badge: "Premium",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-muted to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
            Nuestros Modelos
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre nuestra gama de tipis diseñados para ofrecer experiencias únicas de glamping
          </p>
        </div>
      </section>

      {/* Models Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {models.map((model, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={model.image} 
                    alt={model.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
                    {model.badge}
                  </Badge>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-2xl">{model.name}</CardTitle>
                  <CardDescription className="text-base">{model.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex-grow">
                  <div className="flex gap-6 mb-6">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="w-5 h-5 text-primary" />
                      <span>{model.capacity}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Maximize className="w-5 h-5 text-primary" />
                      <span>{model.size}</span>
                    </div>
                  </div>

                  <div className="space-y-2 mb-6">
                    {model.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button asChild className="w-full" variant="default">
                    <NavLink to="/contacto">
                      Solicitar Información
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </NavLink>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customization Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">
            Personalización a Medida
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            ¿Necesitas un diseño específico? Podemos adaptar cualquier modelo a tus necesidades 
            particulares. Contacta con nosotros para discutir tu proyecto personalizado.
          </p>
          <Button asChild size="lg">
            <NavLink to="/contacto">
              Consultar Personalización
              <ArrowRight className="ml-2 w-5 h-5" />
            </NavLink>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Modelos;
