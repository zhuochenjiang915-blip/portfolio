import Nav from '@/sections/Nav'
import Hero from '@/sections/Hero'
import Marquee from '@/sections/Marquee'
import Works from '@/sections/Works'
import About from '@/sections/About'
import Footer from '@/sections/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Works />
        <About />
      </main>
      <Footer />
    </>
  )
}
