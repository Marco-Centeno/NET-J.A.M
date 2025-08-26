"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Award, Users, Zap, Shield, Rocket, TrendingUp } from "lucide-react"

export function WhyChooseUs() {
  const benefits = [
    {
      icon: Award,
      title: "Experiencia Comprobada",
      description: "+5 años desarrollando soluciones tecnológicas para empresas líderes en diversos sectores.",
      gradient: "from-yellow-500 to-orange-600",
      iconBg: "from-yellow-500/20 to-orange-500/20",
    },
    {
      icon: Users,
      title: "Equipo Especializado",
      description:
        "Desarrolladores senior, arquitectos de software y especialistas en UX/UI trabajando en tu proyecto.",
      gradient: "from-blue-500 to-purple-600",
      iconBg: "from-blue-500/20 to-purple-500/20",
    },
    {
      icon: Zap,
      title: "Metodología Ágil",
      description: "Desarrollo iterativo con entregas frecuentes. Adaptabilidad y transparencia en cada fase.",
      gradient: "from-cyan-500 to-teal-600",
      iconBg: "from-cyan-500/20 to-teal-500/20",
    },
    {
      icon: Shield,
      title: "Seguridad Premium",
      description: "Implementamos las mejores prácticas de seguridad y cumplimiento de estándares internacionales.",
      gradient: "from-emerald-500 to-green-600",
      iconBg: "from-emerald-500/20 to-green-500/20",
    },
    {
      icon: Rocket,
      title: "Tecnología de Vanguardia",
      description: "Utilizamos las últimas tecnologías y frameworks para garantizar soluciones futuro-proof.",
      gradient: "from-purple-500 to-pink-600",
      iconBg: "from-purple-500/20 to-pink-500/20",
    },
    {
      icon: CheckCircle,
      title: "Soporte Continuo",
      description: "Acompañamiento post-lanzamiento con mantenimiento, actualizaciones y soporte técnico 24/7.",
      gradient: "from-indigo-500 to-blue-600",
      iconBg: "from-indigo-500/20 to-blue-500/20",
    },
  ]

  return (
    <section id="nosotros" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full blur-3xl animate-pulse delay-1500"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            <span className="text-foreground">¿Por qué elegir </span>
            <span className="bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent">
              Alphaline?
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-delay">
            Somos más que una consultoría. Somos tu socio tecnológico para el crecimiento y la innovación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={benefit.title}
              className="glass hover:glow-secondary transition-all duration-500 group border-border/30 hover:border-secondary/50 relative overflow-hidden hover:shadow-2xl hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${benefit.iconBg} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              ></div>

              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-3 right-3 w-2 h-2 bg-secondary/40 rounded-full animate-float"></div>
                <div className="absolute bottom-6 left-4 w-1 h-1 bg-accent/50 rounded-full animate-float-delay"></div>
                <div className="absolute top-1/2 right-6 w-1.5 h-1.5 bg-primary/30 rounded-full animate-float delay-1000"></div>
              </div>

              <CardContent className="p-8 text-center relative z-10">
                <div
                  className={`w-20 h-20 mx-auto mb-6 rounded-3xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 shadow-lg group-hover:shadow-2xl`}
                >
                  <benefit.icon className="h-10 w-10 text-white drop-shadow-lg" />
                </div>
                <h3 className="text-xl font-bold mb-4 group-hover:text-secondary transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/90 transition-colors duration-300">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20">
          <div className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center relative z-10">
              {[
                {
                  number: "100+",
                  label: "Proyectos Completados",
                  icon: TrendingUp,
                  color: "from-cyan-500 to-blue-500",
                },
                { number: "50+", label: "Clientes Satisfechos", icon: Users, color: "from-purple-500 to-pink-500" },
                { number: "99%", label: "Tasa de Éxito", icon: Award, color: "from-emerald-500 to-teal-500" },
                { number: "24/7", label: "Soporte Disponible", icon: Shield, color: "from-orange-500 to-red-500" },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="group/stat hover:scale-105 transition-transform duration-300"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div
                    className={`w-12 h-12 mx-auto mb-3 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center group-hover/stat:scale-110 transition-transform duration-300`}
                  >
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                  <div
                    className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2 group-hover/stat:scale-110 transition-transform duration-300`}
                  >
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground group-hover/stat:text-foreground transition-colors duration-300">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
