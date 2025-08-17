"use client"

import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Instagram } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    servicios: [
      { name: "Desarrollo Web", href: "#servicios" },
      { name: "Aplicaciones Móviles", href: "#servicios" },
      { name: "Soluciones en la Nube", href: "#servicios" },
      { name: "Inteligencia Artificial", href: "#servicios" },
      { name: "Soporte Técnico", href: "#servicios" },
    ],
    empresa: [
      { name: "Sobre Nosotros", href: "#nosotros" },
      { name: "Nuestro Equipo", href: "#nosotros" },
      { name: "Metodología", href: "#nosotros" },
      { name: "Casos de Éxito", href: "#portafolio" },
      { name: "Blog", href: "/blog" },
    ],
    recursos: [
      { name: "Documentación", href: "/docs" },
      { name: "Guías Técnicas", href: "/guias" },
      { name: "Webinars", href: "/webinars" },
      { name: "Whitepapers", href: "/recursos" },
      { name: "FAQ", href: "/faq" },
    ],
    legal: [
      { name: "Términos de Servicio", href: "/terminos" },
      { name: "Política de Privacidad", href: "/privacidad" },
      { name: "Cookies", href: "/cookies" },
      { name: "GDPR", href: "/gdpr" },
      { name: "Contratos", href: "/contratos" },
    ],
  }

  const socialLinks = [
    { icon: Github, href: "https://github.com/net-jam", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/company/net-jam", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/netjam", label: "Twitter" },
    { icon: Instagram, href: "https://instagram.com/netjam", label: "Instagram" },
  ]

  return (
    <footer className="relative py-20 border-t border-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              NET-J.A.M
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Consultoría premium especializada en transformar ideas en soluciones tecnológicas innovadoras. Tu socio
              estratégico para el crecimiento digital.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-sm text-muted-foreground">
                <Mail className="h-4 w-4 mr-3 text-primary" />
                ya.que.tengamos.correo.xd@net-jam.com
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Phone className="h-4 w-4 mr-3 text-primary" />
                +52 337742789
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-3 text-primary" />
                ni ubicaion tenemos xdd
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Servicios</h4>
            <ul className="space-y-2">
              {footerLinks.servicios.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Empresa</h4>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Recursos</h4>
            <ul className="space-y-2">
              {footerLinks.recursos.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Newsletter Section 
        <div className="glass rounded-3xl p-8 mb-12">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Mantente actualizado con las últimas tendencias tecnológicas</h3>
            <p className="text-muted-foreground mb-6">
              Suscríbete a nuestro newsletter y recibe insights exclusivos, casos de estudio y guías técnicas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="tu@email.com"
                className="flex-1 px-4 py-3 rounded-lg glass border border-border/30 focus:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20"
              />
              <Button className="glow-primary hover:glow-primary">Suscribirse</Button>
            </div>
          </div>
        </div>*/}

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/30">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} NET-J.A.M. Todos los derechos reservados. | Hecho con ❤️ para impulsar la innovación.
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:glow-primary transition-all duration-300 group"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* SEO Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "NET-J.A.M",
              description:
                "Consultoría premium especializada en desarrollo web, aplicaciones móviles, soluciones en la nube e inteligencia artificial",
              url: "https://net-jam.com",
              logo: "https://net-jam.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-555-123-4567",
                contactType: "customer service",
                email: "contacto@net-jam.com",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Tech Avenue",
                addressLocality: "Innovation District",
                addressCountry: "País",
              },
              sameAs: [
                "https://github.com/net-jam",
                "https://linkedin.com/company/net-jam",
                "https://twitter.com/netjam",
                "https://instagram.com/netjam",
              ],
            }),
          }}
        />
      </div>
    </footer>
  )
}
