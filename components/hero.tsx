"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Smartphone, Cloud, Brain, Headphones } from "lucide-react"
import { redirect } from "next/navigation"

export function Hero() {
  return (
    <section id="inicio" className="relative h-screen flex  overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className=" z-10 max-w-7xl mx-auto py-12 my-16 sm:py-6 sm:my-6 px-4 sm:px-6 lg:px-8 text-left">
        <div className="glass rounded-3xl p-8 md:p-12 lg:p-16 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tech-title">
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Agencia De
            </span>
            <br />
            <span className="text-foreground">Software Y </span>
            <br />
            <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
              Consultoria
            </span>
          </h1>

          <p className="text-md md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Consultoría premium especializada en desarrollo web con un enfoque en la
            <span className="text-primary font-semibold"> innovación que impulsa tu negocio.</span>
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button onClick={() => (redirect("#contacto"))} size="lg" className="glow-primary hover:bg-white text-white hover:text-black cursor-pointer border-2 border-white bg-transparent">
              Comenzar Proyecto
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
             onClick={() => (redirect("#portafolio"))}
              variant="outline"
              size="lg"
              className="text-lg px-8 py-4 glass border-primary/30 hover:bg-primary/20 hover:text-foreground hover:border-primary/50 bg-transparent transition-all duration-300 cursor-pointer"
            >
              Ver Portafolio
            </Button>
          </div>

          {/* Service icons */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-2xl mx-auto">
            {[
              { icon: Code, label: "Desarrollo Web" },
              { icon: Smartphone, label: "Apps Móviles" },
              { icon: Cloud, label: "Soluciones Nube" },
              { icon: Brain, label: "Inteligencia Artificial" },
              //{ icon: Headphones, label: "Soporte 24/7" },
            ].map((service, index) => (
              <div key={service.label} className="flex flex-col items-center group">
                <div
                  className="glass rounded-2xl p-4 mb-2 group-hover:glow-primary transition-all duration-300 float "
                  style={{ animationDelay: `${index * 0.5}s` }}
                >
                  <service.icon className="h-8 w-8 text-zinc-400" />
                </div>
                <span className="text-sm text-muted-foreground text-center">{service.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
