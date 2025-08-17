"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Smartphone, Cloud, Brain, Headphones, Database } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Code,
      title: "Desarrollo Web",
      description:
        "Aplicaciones web modernas y responsivas con las últimas tecnologías. React, Next.js, TypeScript y más.",
      features: ["Frontend Moderno", "Backend Escalable", "SEO Optimizado", "Performance Premium"],
      color: "from-cyan-500 via-blue-500 to-purple-600",
      glowColor: "shadow-cyan-500/25",
      hoverGlow: "hover:shadow-cyan-500/40",
    },
    {
      icon: Smartphone,
      title: "Aplicaciones Móviles",
      description: "Apps nativas e híbridas para iOS y Android. Experiencias móviles excepcionales.",
      features: ["React Native", "Flutter", "Apps Nativas", "UI/UX Premium"],
      color: "from-purple-500 via-pink-500 to-rose-500",
      glowColor: "shadow-purple-500/25",
      hoverGlow: "hover:shadow-purple-500/40",
    },
    {
      icon: Cloud,
      title: "Soluciones en la Nube",
      description: "Infraestructura escalable y segura. AWS, Azure, Google Cloud y arquitecturas serverless.",
      features: ["Arquitectura Cloud", "DevOps", "Microservicios", "Escalabilidad"],
      color: "from-emerald-500 via-teal-500 to-cyan-500",
      glowColor: "shadow-emerald-500/25",
      hoverGlow: "hover:shadow-emerald-500/40",
    },
    {
      icon: Brain,
      title: "Inteligencia Artificial",
      description: "Integración de IA y Machine Learning. Automatización inteligente para tu negocio.",
      features: ["Machine Learning", "Procesamiento NLP", "Automatización", "Análisis Predictivo"],
      color: "from-orange-500 via-red-500 to-pink-500",
      glowColor: "shadow-orange-500/25",
      hoverGlow: "hover:shadow-orange-500/40",
    },
    {
      icon: Database,
      title: "Bases de Datos",
      description: "Diseño y optimización de bases de datos. SQL, NoSQL y soluciones híbridas.",
      features: ["Diseño DB", "Optimización", "Migración", "Backup & Recovery"],
      color: "from-indigo-500 via-purple-500 to-blue-500",
      glowColor: "shadow-indigo-500/25",
      hoverGlow: "hover:shadow-indigo-500/40",
    },
    {
      icon: Headphones,
      title: "Soporte Técnico",
      description: "Soporte continuo y mantenimiento. Monitoreo 24/7 y actualizaciones constantes.",
      features: ["Soporte 24/7", "Mantenimiento", "Monitoreo", "Actualizaciones"],
      color: "from-yellow-500 via-orange-500 to-red-500",
      glowColor: "shadow-yellow-500/25",
      hoverGlow: "hover:shadow-yellow-500/40",
    },
  ]

  return (
    <section id="servicios" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Nuestros Servicios
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-delay">
            Ofrecemos soluciones tecnológicas integrales para impulsar tu negocio hacia el futuro digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={`glass hover:glow-primary transition-all duration-500 group border-border/30 hover:border-primary/50 relative overflow-hidden animate-slide-up ${service.glowColor} ${service.hoverGlow} hover:shadow-2xl hover:-translate-y-2`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-4 right-4 w-2 h-2 bg-primary/30 rounded-full animate-float"></div>
                <div className="absolute bottom-8 left-6 w-1 h-1 bg-secondary/40 rounded-full animate-float-delay"></div>
              </div>

              <CardHeader className="text-center pb-4 relative z-10">
                <div
                  className={`w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-125 group-hover:rotate-6 transition-all duration-500 shadow-lg group-hover:shadow-2xl`}
                >
                  <service.icon className="h-10 w-10 text-white drop-shadow-lg" />
                </div>
                <CardTitle className="text-2xl mb-3 group-hover:text-primary transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={feature}
                      className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-300"
                      style={{ transitionDelay: `${featureIndex * 50}ms` }}
                    >
                      <div className="w-2 h-2 bg-gradient-to-r from-primary to-secondary rounded-full mr-3 group-hover:scale-125 transition-transform duration-300"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full glass border-primary/30 hover:bg-gradient-to-r hover:from-primary/20 hover:to-secondary/20 bg-transparent hover:border-primary/60 hover:text-primary hover:shadow-lg transition-all duration-300"
                >
                  <span className="relative z-10">Más Información</span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
