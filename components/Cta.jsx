import Image from 'next/image'
import CtaImg from "../assets/cesta-krkonose3.jpg"

const Cta = () => {
  return (
    <div name="cta" className="w-full mt-36 py-12 bg-main-blue/20">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="lg:pr-10">


            <div className="flex items-start">
              <h2 className="text-center md:text-start uppercase mb-6">
              Chcete zlepšit svou kondici a užít si adrenalinové <span className="text-main-blue">jízdy?</span> 
                
              </h2>
            </div>
            <p className="text-center md:text-start mb-6 text-gray-900">
            🏆 KOMFORT A VÝKON: Naše nafukovací kolečka zaručují maximální pohodlí, minimální zátěž kloubů a skvělou trakci na různých površích - za každého počasí.<br></br>
            💪 VÝRAZNÉ ZDRAVOTNÍ PŘÍNOSY: Kolečkové lyže JOVE zlepší celkovou fyzickou kondici a psychickou odolnost. Stáňte se zdravějším, aktivním a šťastným člověkem!<br></br>
            🚀 PŘIPRAVTE SE NA ZÁVODY: Rozvíjejte svou techniku, vytrvalost a rychlost pro úspěch na zimních běžeckých závodech. Kolečkové lyže JOVE jsou ideálním tréninkovým nástrojem. <br></br>
            ⚡ AKTUÁLNÍ NABÍDKA: Nečekejte, objednejte si kolečkové lyže JOVE dnes a získejte možnost vylaserovat vlastní věnování, slogan nebo obrázek přímo na lyže.<br></br>
            ➡️ Vyberte model lyží dle Vašeho preferovaného stylu jízdy, vysněte si barvu a objednejte na níže uvedeném e-mailu.

            </p>
            <hr className="mb-5 border-gray-300" />
            <div className="flex items-center space-x-2">
              <p>
                &#128222; 
              </p>
              <p className='pr-12'>
                123456789
              </p>

              <p className="flex items-center">
                &#128231; 
                
              </p>
              <a className="text-lg" href="mailto:vejnar3@seznam.cz">
                  jove@volny.cz
              </a>
            </div>
          </div>
          <div>
            <Image src={CtaImg} className="rounded-lg shadow-lg" alt="svatba pár"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cta