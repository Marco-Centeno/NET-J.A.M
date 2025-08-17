"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Star } from "lucide-react"

export function Portfolio() {
  const projects = [
    {
      title: "E-Commerce Premium",
      description:
        "Plataforma de comercio electrónico con IA para recomendaciones personalizadas y análisis predictivo.",
      image: "/ecommerce-ai-dashboard.png",
      tags: ["Next.js", "TypeScript", "AI/ML", "Stripe"],
      category: "Web Development",
      gradient: "from-cyan-500 to-blue-600",
      rating: 5,
    },
    {
      title: "App Fintech Móvil",
      description: "Aplicación móvil para gestión financiera personal con integración bancaria y análisis de gastos.",
      image: "/placeholder-y4v28.png",
      tags: ["React Native", "Node.js", "MongoDB", "APIs"],
      category: "Mobile App",
      gradient: "from-purple-500 to-pink-600",
      rating: 5,
    },
    {
      title: "Sistema ERP Cloud",
      description: "Sistema de gestión empresarial en la nube con módulos de inventario, ventas y recursos humanos.",
      image: "/cloud-erp-dashboard.png",
      tags: ["Vue.js", "AWS", "PostgreSQL", "Microservicios"],
      category: "Cloud Solution",
      gradient: "from-emerald-500 to-teal-600",
      rating: 5,
    },
    {
      title: "Chatbot IA Empresarial",
      description: "Asistente virtual inteligente para atención al cliente con procesamiento de lenguaje natural.",
      image: "/ai-chatbot-interface.png",
      tags: ["Python", "NLP", "TensorFlow", "API REST"],
      category: "Artificial Intelligence",
      gradient: "from-orange-500 to-red-600",
      rating: 5,
    },
    {
      title: "Plataforma EdTech",
      description:
        "Sistema de aprendizaje online con videoconferencias, evaluaciones automáticas y seguimiento de progreso.",
      image: "/online-learning-platform.png",
      tags: ["React", "WebRTC", "Socket.io", "Redis"],
      category: "Web Development",
      gradient: "from-indigo-500 to-purple-600",
      rating: 5,
    },
    {
      title: "IoT Dashboard",
      description: "Panel de control para dispositivos IoT con monitoreo en tiempo real y alertas automáticas.",
      image: "/iot-dashboard.png",
      tags: ["Angular", "MQTT", "InfluxDB", "Docker"],
      category: "Cloud Solution",
      gradient: "from-yellow-500 to-orange-600",
      rating: 5,
    },
  ]

  return (
    <section id="portafolio" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-accent/10 to-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-br from-secondary/10 to-accent/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            <span className="text-foreground">Nuestro </span>
            <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
              Portafolio
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in-delay">
            Casos de éxito que demuestran nuestra capacidad para transformar ideas en soluciones tecnológicas
            innovadoras
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="glass hover:glow-accent transition-all duration-500 group border-border/30 hover:border-accent/50 overflow-hidden hover:shadow-2xl hover:-translate-y-3 animate-slide-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <div className="relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="absolute top-4 left-4 transform group-hover:scale-110 transition-transform duration-300">
                    <span
                      className={`px-4 py-2 text-xs font-bold bg-gradient-to-r ${project.gradient} text-white rounded-full shadow-lg backdrop-blur-sm`}
                    >
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 flex space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {[...Array(project.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              <CardContent className="p-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs bg-gradient-to-r from-primary/20 to-secondary/20 text-primary border border-primary/20 rounded-full hover:scale-105 transition-transform duration-300"
                        style={{ transitionDelay: `${tagIndex * 50}ms` }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      variant="outline"
                      className="flex-1 glass border-primary/30 hover:bg-gradient-to-r hover:from-primary/20 hover:to-secondary/20 bg-transparent hover:border-primary/60 hover:shadow-lg transition-all duration-300"
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Ver Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="glass border-secondary/30 hover:bg-gradient-to-r hover:from-secondary/20 hover:to-accent/20 bg-transparent hover:border-secondary/60 hover:shadow-lg transition-all duration-300"
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button
            size="lg"
            variant="outline"
            className="glass border-accent/30 hover:bg-gradient-to-r hover:from-accent/20 hover:to-primary/20 bg-transparent hover:border-accent/60 hover:shadow-xl hover:scale-105 transition-all duration-300 px-8 py-3"
          >
            Ver Todos los Proyectos
          </Button>
        </div>
      </div>
    </section>
  )
}
