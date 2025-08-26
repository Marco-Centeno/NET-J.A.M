"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle, AlertCircle } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: data.message,
        })
        // Reset form on success
        setFormData({
          name: "",
          email: "",
          company: "",
          message: "",
        })
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Error al enviar el mensaje",
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Error de conexión. Por favor intenta más tarde.",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contacto" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Hablemos de tu </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              próximo proyecto
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ¿Tienes una idea innovadora? Estamos aquí para ayudarte a convertirla en realidad. Contáctanos para una
            consulta gratuita.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="glass border-border/30">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center">
                <MessageCircle className="h-6 w-6 mr-3 text-primary" />
                Envíanos un mensaje
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {submitStatus.type && (
                  <div
                    className={`p-4 rounded-lg flex items-center space-x-3 ${
                      submitStatus.type === "success"
                        ? "bg-green-500/10 border border-green-500/20 text-green-400"
                        : "bg-red-500/10 border border-red-500/20 text-red-400"
                    }`}
                  >
                    {submitStatus.type === "success" ? (
                      <CheckCircle className="h-5 w-5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="h-5 w-5 flex-shrink-0" />
                    )}
                    <p className="text-sm">{submitStatus.message}</p>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Nombre completo *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                      className="glass border-border/30 focus:border-primary/50"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isLoading}
                      className="glass border-border/30 focus:border-primary/50"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Empresa
                  </label>
                  <Input
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    disabled={isLoading}
                    className="glass border-border/30 focus:border-primary/50"
                    placeholder="Nombre de tu empresa"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensaje *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    rows={6}
                    className="glass border-border/30 focus:border-primary/50 resize-none"
                    placeholder="Cuéntanos sobre tu proyecto..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full glow-primary hover:glow-primary" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Enviar Mensaje
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="glass border-border/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Información de contacto</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-primary/70 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                    
                      <p className="text-muted-foreground">alphaline.dev@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-secondary to-secondary/70 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Teléfono</h4>

                      <p className="text-muted-foreground">+52 (333) 774 2789</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/70 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0">
                      <MapPin className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Oficina</h4>
                      <p className="text-muted-foreground">
                    Próximamente
                        <br />
                        qui
                        <br />
                        Guadalajara, Jalisco
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 
            <Card className="glass border-border/30">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">¿Prefieres una llamada?</h3>
                <p className="text-muted-foreground mb-6">
                  Agenda una consulta gratuita de 30 minutos para discutir tu proyecto.
                </p>
                <Button
                  variant="outline"
                  className="w-full glass border-secondary/30 hover:bg-secondary/10 bg-transparent"
                >
                  Agendar Consulta Gratuita
                </Button>
              </CardContent>
            </Card>
*/}
            <Card className="glass border-border/30">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4">Horarios de atención</h3>
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    <span className="font-medium text-foreground">Lunes - Viernes:</span> 9:00 AM - 6:00 PM
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Sábados:</span> 10:00 AM - 2:00 PM
                  </p>
                  <p>
                    <span className="font-medium text-foreground">Domingos:</span> Cerrado
                  </p>
                  <p className="text-sm mt-4 text-primary">
                    * Soporte de emergencia disponible 24/7 para clientes premium
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
