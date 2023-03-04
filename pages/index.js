import Head from "next/head"
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import About from "../components/About"
import Proc from "../components/Proc"
import Video from "../components/Video"
import Blog from "../components/Blog"
import Pricing from "../components/Pricing"
import Testimonial from "../components/Testimonial"
import Cta1 from "../components/Cta1"
import Footer from "../components/Footer"

export default function Home() {
  return (
    <div className="bg-main-light w-full overflow-hidden font-poppins">
      <Head>
        <title>Kolečkové lyže Jove</title>
        <meta name="description" content="Kolečkové lyže s unikátními jízdními vlastnostmi. Množství barevných provedení."></meta>
        <meta name="keywords" content="originální, unikátní, kolečkové lyže, jak vybrat, letní trénink, letní běžky, bežky na kolečkách, běžky v létě na suchu, klasika, skate, na soupaž, barevné provedení"></meta>
        <meta
          property="og:image"
          content="https://example.com/images/cool-page.jpg"
        />
        <link rel="icon" href="../assets/favicon.ico"></link>
      </Head>
      <Navbar/ >
      <Hero />
      <About />
      <Video />
      <Proc />
      <Blog />
      <Testimonial />
      <Pricing />
      <Cta1 />
      <Footer />
    </div>
  )
}
