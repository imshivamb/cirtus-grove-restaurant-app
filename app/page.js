import { About } from '@/components/About'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Specials from '@/components/Specials'
import Testimonials from '@/components/Testimonials'
import Image from 'next/image'

export default function Home() {
  return (
    <main className=" bg-white">
      {/* <section className="h-[120px]">
        <Navbar />
      </section> */}

      <section className="h-[460px] md:pt-4 ">
        <Hero />
      </section>
      <section className="sm:px-16 px-8 sm:py-24 py-12">
        <Specials />
      </section>
      <section className="bg-primary h-[500px] ">
        <Testimonials />
      </section>
      <section id="about">
        <About />
      </section>
    </main>
  )
}
