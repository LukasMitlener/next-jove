import Head from "next/head"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Proc from "../components/Proc"
import Video from "../components/Video"
import Blog from "../components/Blog"
import Pricing from "../components/Pricing"
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
        <meta property="og:url" content="https://jove-rollerski.com" />
        <meta property="og:type" content="website" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Navbar />
      <Hero />
      <About />
      <Video />
      <Proc />
      <Blog />
      <Testimonials />
      <Pricing />
      <Cta />
      <Footer />
    </div>
  )
}
