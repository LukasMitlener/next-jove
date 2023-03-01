import Image from 'next/image'
import CtaImg from "../assets/cesta-krkonose3.jpg"

const Cta1 = () => {
  return (
    <div name="cta" className="w-full mt-24 py-12">
      <div className="max-w-[1240px] mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="lg:pr-10">


            <div className="flex items-start">
              <h2 className="text-start uppercase mb-6">
                Jste připraveni zažít unikátní zážitek z <span className="text-main-blue">jízdy?</span>
              </h2>
            </div>
            <p className="mb-6 text-gray-900">
            Zvažte model lyží dle Vašeho preferovaného stylu jízdy, vysněte si barvu a objednejte na níže uvedeném e-mailu.
            &#128161; PRO TIP: Možnost vylaserovat cokoliv dle Vašeho výběru (věnování, slogan, obrázek,...)
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
                  vejnar3@seznam.cz
              </a>
            </div>
          </div>
          <div>
            <Image src={CtaImg} className="rounded-lg" alt="svatba pár"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cta1