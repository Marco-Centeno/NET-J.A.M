"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "María González",
      position: "CEO, TechStart Solutions",
      content:
        "NET-J.A.M transformó completamente nuestra presencia digital. Su enfoque profesional y la calidad de su trabajo superaron nuestras expectativas. El equipo es excepcional.",
      rating: 5,
      avatar: "/professional-woman-ceo.png",
    },
    {
      name: "Carlos Rodríguez",
      position: "CTO, InnovateLab",
      content:
        "La experiencia trabajando con NET-J.A.M ha sido extraordinaria. Desarrollaron nuestra plataforma de IA en tiempo récord sin comprometer la calidad. Altamente recomendados.",
      rating: 5,
      avatar: "/professional-cto-headshot.png",
    },
    {
      name: "Ana Martínez",
      position: "Directora de Marketing, EcoTech",
      content:
        "Su capacidad para entender nuestras necesidades y traducirlas en soluciones tecnológicas innovadoras es impresionante. El soporte post-lanzamiento es excepcional.",
      rating: 5,
      avatar: "/professional-marketing-director.png",
    },
    {
      name: "Roberto Silva",
      position: "Fundador, FinanceApp",
      content:
        "NET-J.A.M no solo desarrolló nuestra app móvil, sino que nos asesoró en toda la estrategia tecnológica. Su expertise en fintech fue clave para nuestro éxito.",
      rating: 5,
      avatar: "/professional-founder-headshot.png",
    },
    {
      name: "Laura Fernández",
      position: "Gerente de Operaciones, LogiFlow",
      content:
        "La migración a la nube que realizaron fue perfecta. Cero downtime y una mejora significativa en el rendimiento. Su metodología ágil nos mantuvo informados en todo momento.",
      rating: 5,
      avatar: "/professional-woman-operations-manager-headshot.png",
    },
    {
      name: "Diego Morales",
      position: "Director de IT, RetailMax",
      content:
        "Implementaron un sistema ERP completo que revolucionó nuestros procesos. La integración con nuestros sistemas existentes fue impecable. Excelente trabajo.",
      rating: 5,
      avatar: "/it-director-headshot.png",
    },
  ]

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Lo que dicen </span>
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              nuestros clientes
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            La confianza de nuestros clientes es nuestro mayor logro. Estas son sus experiencias trabajando con
            nosotros.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              className="glass hover:glow-primary transition-all duration-300 border-border/30 hover:border-primary/30 relative"
            >
              <CardContent className="p-8">
                <Quote className="h-8 w-8 text-primary mb-4 opacity-50" />

                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-accent fill-current" />
                  ))}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>

                <div className="flex items-center">
                  <img
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-20">
          <div className="glass rounded-3xl p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold mb-8">Confían en nosotros</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60">
              {["TechStart Solutions", "InnovateLab", "EcoTech", "FinanceApp"].map((company) => (
                <div key={company} className="text-lg font-semibold text-muted-foreground">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
