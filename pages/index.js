import Head from "next/head"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Proc from "../components/Proc"
import Video from "../components/Video"
import Blog from "../components/Blog"
import Pricing from "../components/Pricing"
import Testimonial from "../components/Testimonial"
import Testimonials from "../components/Testimonials"
import Cta from "../components/Cta"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div className="bg-main-light w-full overflow-hidden font-poppins">
      <Head>
        <title>Kolečkové lyže Jove</title>
        <meta name="description" content="Unikátní kolečkové lyže Jove nabízejí skvělé jízdní vlastnosti pro letní trénink. Mnoho barevných možností. Navrženo a vyrobeno zkušeným sportovcem." />

        <meta name="keywords" content="kolečkové lyže, Jove, letní trénink, letní běžky, běžky na kolečkách, běžky v létě, na suchu, klasika, skate, na soupaž, barevné provedení, unikátní, originální, jak vybrat" />

        <meta property="og:title" content="Kolečkové lyže Jove - Unikátní lyže pro letní trénink" />
        <meta property="og:description" content="Unikátní kolečkové lyže Jove nabízejí skvělé jízdní vlastnosti pro letní trénink. Mnoho barevných možností. Navrženo a vyrobeno zkušeným sportovcem." />
        <meta property="og:image" content="https://example.com/images/cool-page.jpg" />
        <meta property="og:url" content="https://example.com" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="../assets/favicon.ico"></link>
      </Head>
      <Navbar />
      <Hero />
      <About />
      <Video />
      <Proc />
      <Blog />
      <Testimonial />
      <Testimonials />
      <Pricing />
      <Cta />
      <Footer />
    </div>
  )
}
