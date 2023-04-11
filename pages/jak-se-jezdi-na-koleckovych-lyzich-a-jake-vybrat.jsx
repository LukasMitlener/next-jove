import Link from 'next/link'
import Image from 'next/image'
import logo from "../assets/jove-logo.png"
import bp1 from '../assets/1.webp'
import { SocialIcon } from 'react-social-icons';

const clanek1 = () => {
  return (
    <div>
      <div className='max-w-[920px] m-auto h-[80px] bg-transparent drop-shadow-lg px-6'>
        <div className='flex justify-between items-center w-full h-full'>
          <div className='flex items-center'>
            <a href='/'><Image src={logo} alt='/' style={{ width: '200px'}} /></a>
          </div>
        </div>
      </div>

      <div className="max-w-[920px] px-6 pb-8 pt-4 mx-auto">
        <article className="space-y-8">
          <div className="space-y-6">
            <Image className="object-cover object-center w-full h-96 rounded-lg lg:h-128" src={bp1} alt="" />
            <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">Jak se jezdí na kolečkových lyžích a jaké vybrat?</h1>
            <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-400">
              <div className="flex items-center md:space-x-2">
                <img src="https://source.unsplash.com/75x75/?portrait" alt="" className="w-4 h-4 border rounded-full dark:bg-gray-500 dark:border-gray-700" />
                <p className="text-sm">Josef Vejnar • 1. března, 2023</p>
              </div>
              <p className="flex-shrink-0 mt-3 text-sm md:mt-0">4 min čtení</p>
            </div>
          </div>
          <div className="dark:text-gray-100">
            <p className='pb-12'>
            Kolečkové lyže jsou ideální pro každého, kdo miluje běžecké sporty a chce se pohybovat venku i v letních měsících. Tento sport je velmi podobný běhu na lyžích v zimě, ale s výhodou, že můžete jezdit po asfaltu a nejste závislí na sněhových podmínkách. Pokud uvažujete o koupi kolečkových lyží, může být obtížné vědět, na co se zaměřit. Zde jsou některé tipy, které vám pomohou při výběru správných kolečkových lyží.
            <br />
            <br />
            Při výběru kolečkových lyží musíte brát v úvahu své zkušenosti s jízdou na běžkách. Pokud jste začátečník, určitě byste měli zvážit nákup lyží, které jsou stabilní a snadno ovladatelné. Na druhé straně, pokud jste zkušený lyžař, můžete si vybrat něco s více technickými vlastnostmi, které vám umožní dosáhnout větší rychlosti a výkonu.
            <br />
            <br />
            Většina kolečkových lyží je k dispozici ve dvou základních typech: pro skating (bruslení) a pro klasiku. Pro skating jsou lyže kratší a širší než pro klasiku a mají volnou patu. To vám umožňuje dosáhnout větší rychlosti a lepšího skluzu. Pro tento styl jsou vhodné lyže s obousměrnými ložisky a kratším nosníkem. Zatímco pro klasiku jsou lyže delší, uchycení boty na lyži je pevnější a jsou vhodné lyže s jednosměrnými ložisky a delším nosníkem. 
            <br />
            <br />
            Materiál koleček je nejčastěji pryž a existují různé tvrdosti, které ovlivňují rychlost a trvanlivost koleček. Pro trénink na rovinatém terénu se doporučují kolečka s menším průměrem a pro trénink soupaží jsou vhodné lyže se širokými a nízkými kolečky. Nosníky mohou být vyrobeny z hliníku, dřevěných laminátů, karbonu nebo plastu. Začátečníkům se doporučuje pořídit si levnější variantu s hliníkovým nosníkem a pryžovými kolečky.
            <br />
            <br />
            Při výběru kolečkových lyží musíte také brát v úvahu typ terénu, na kterém budete jezdit. Pokud budete jezdit na hladkém asfaltu, můžete si vybrat menší kolečka. Pokud plánujete jezdit v terénu s nerovnostmi, vybírejte lyže s většími kolečky, které vám poskytnou lepší stabilitu.
            <br />
            <br />
            Při začátcích s kolečkovými lyžemi zvažte, zda chcete jezdit klasicky nebo bruslit, jestli plánujete projížďky, tréninky nebo závody a jaký typ vázání bot máte k dispozici nebo si plánujete pořídit. 
            <br />
            <br />
            Měli byste brát v úvahu i výběr bot. Boty by měly být pohodlné a pevné, aby vám poskytly správnou oporu a kontrolu nad lyžemi.
            <br />
            <br />
            Pro jízdu na kolečkových lyžích budete také potřebovat hole se speciálními hroty na asfalt, stejně dlouhé jako vaše zimní hole a nezapomeňte na cyklistickou přilbu a rukavice.
            </p>
          </div>
        </article>

        <div>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold">Další články</h4>
            <ul className="ml-4 space-y-1 list-disc">
              <li>
                <Link href="/proc-zacit-jezdit-na-koleckovych-lyzich-jove" className="hover:underline">Proč začít jezdit na kolečkových lyžích JOVE?</Link>
              </li>
            </ul>
          </div>
        </div>
      
      </div>
      <footer className="py-8 bg-main-blue/30"
      >
        <div className="max-w-[920px] mx-auto px-6">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex justify-center text-teal-600 lg:justify-start">
                <Image src={logo} alt='/' style={{ width: '200px'}} />
              </div>

              <p className="font-normal text-[14px] text-grey-700 opacity-50">
                Copyright © 2023 Jove. All rights reserved.
              </p>

              <div className="flex items-center mt-4 space-x-2 sm:mt-0">
                <SocialIcon 
                  url="https://www.facebook.com"
                  fgColor="#3FB1FF"
                  bgColor="transparent" />
                <SocialIcon 
                  url="https://www.youtube.com/"
                  fgColor="#3FB1FF"
                  bgColor="transparent" />
                <SocialIcon 
                  url="https://www.instagram.com/lukas.mitlener/"
                  fgColor="#3FB1FF"
                  bgColor="transparent" />
              </div>
            </div>

        </div>
      </footer>
    </div>
  )
}

export default clanek1