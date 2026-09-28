import Footer from '@/components/layout/Footer'
import Navbar from '@/components/layout/Navbar'
import WhatsAppFloat from '@/components/layout/WhatsAppFloat'
import About from '@/sections/About'
import Catalog from '@/sections/Catalog'
import Contact from '@/sections/Contact'
import Faq from '@/sections/Faq'
import Hero from '@/sections/Hero'
import HowToOrder from '@/sections/HowToOrder'
import Marquee from '@/sections/Marquee'
import Testimonials from '@/sections/Testimonials'

/**
 * Estructura de la landing.
 * Para reordenar, quitar o agregar secciones, solo mueve estas líneas.
 */
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Catalog />
        <HowToOrder />
        <About />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
