import Image from 'next/image'
import cesta from "../assets/cesta-krkonose3.jpg"
import barvy from "../assets/barvy.jpg"

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
            <p className="text-center  md:text-start mb-6 text-gray-900">💪 VÝRAZNÉ ZDRAVOTNÍ PŘÍNOSY: Kolečkové lyže JOVE zlepší celkovou fyzickou kondici a psychickou odolnost. Stáňte se zdravějším, aktivním a šťastným člověkem!</p>
            <p className="text-center  md:text-start mb-6 text-gray-900">🚀 PŘIPRAVTE SE NA ZÁVODY: Rozvíjejte svou techniku, vytrvalost a rychlost pro úspěch na zimních běžeckých závodech. Kolečkové lyže JOVE jsou ideálním tréninkovým nástrojem. </p>
            <p className="text-center  md:text-start mb-6 text-gray-900">🏆 KOMFORT A VÝKON: Naše nafukovací kolečka zaručují maximální pohodlí, minimální zátěž kloubů a skvělou trakci na různých površích - za každého počasí.</p>
            <p className="text-center  md:text-start mb-6 text-gray-900">➡️ Vyberte model lyží dle Vašeho preferovaného stylu jízdy, vyberte si z nabídky barev a objednejte na níže uvedeném e-mailu.</p>
            <p className="text-center  md:text-start mb-6 text-gray-900">⚡ AKTUÁLNÍ NABÍDKA: Nečekejte, objednejte si kolečkové lyže JOVE dnes a získejte možnost vylaserovat vlastní věnování, slogan nebo obrázek přímo na lyže.</p>

            <hr className="mb-5 border-gray-300" />

            <div className="flex items-center space-x-2 justify-center md:justify-start">
              <p>
                &#128222; 
              </p>
              <p className='pr-12'>
                737840857
              </p>

              <p className="flex items-center">
                &#128231; 
                
              </p>
              <a className="text-lg" href="mailto:vejnar3@seznam.cz">
                  jove@volny.cz
              </a>
            </div>
          </div>

          <div className='flex flex-col space-y-4'>
            <div>
              <Image src={barvy} className="rounded-lg shadow-lg" alt="barvy lyží"/>
            </div>
            <div>
              <Image src={cesta} className="rounded-lg shadow-lg" alt="cesta v lese"/>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Cta