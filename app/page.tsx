"use client"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { WhyChooseUs } from "@/components/why-choose-us"
import { Portfolio } from "@/components/portfolio"
import { Testimonials } from "@/components/testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Navbar } from "@/components/navbar"
import { ReactLenis, useLenis } from 'lenis/react'

export default function HomePage() {

  const lenis = useLenis((lenis) => {
    // called every scroll
    console.log(lenis)
  })


  return (
    <main className="relative">
      <ReactLenis root />
      <Navbar />
      <Hero />
      <Services />
      <WhyChooseUs />
      <Portfolio />
      {/*<Testimonials />*/}
      <Contact />
      <Footer />
    </main>
  )
}
