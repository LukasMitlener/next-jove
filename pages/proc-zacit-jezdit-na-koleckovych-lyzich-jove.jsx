import Link from 'next/link'
import Image from 'next/image'
import logo from "../assets/jove-logo.png"
import bp2 from '../assets/2.webp'
import { SocialIcon } from 'react-social-icons';

const clanek2 = () => {
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
            <Image className="object-cover object-center w-full h-96 rounded-lg lg:h-500" src={bp2} alt="lyzari u jezera" />
            <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">8 důvodů proč začít jezdit na kolečkových lyžích JOVE.</h1>
            <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-400">
              <div className="flex items-center md:space-x-2">
                <img src="https://source.unsplash.com/75x75/?portrait" alt="" className="w-4 h-4 border rounded-full dark:bg-gray-500 dark:border-gray-700" />
                <p className="text-sm">Josef Vejnar • 1. března, 2023</p>
              </div>
              <p className="flex-shrink-0 mt-3 text-sm md:mt-0">4 min čtení</p>
            </div>
          </div>
          <div className="dark:text-gray-100 text-start">


            <h2 className='text-start pb-3'>1. Výrazné zdravotní přínosy</h2>
            <p>Kolečkové lyže JOVE jsou ideálním sportem pro zlepšení celkové fyzické kondice a posílení srdce. Díky nafukovacím kolečkům budete mít minimální zátěž kloubů, zároveň si procvičíte celé tělo a podpoříte kardiovaskulární zdraví. Navíc, díky vytrvalostnímu charakteru tohoto sportu zlepšíte svou fyzickou i psychickou odolnost.</p>
            <br></br>
            <h2 className='text-start'>2. Průzkum nových terénů</h2>
            <p>S kolečkovými lyžemi JOVE můžete objevovat různé povrchy, včetně rozbitých a děravých cest, aniž byste museli hledat dokonalý asfaltový povrch. S nimi můžete prozkoumávat okolí a objevovat úžasná místa, kam byste se jinak nedostali.</p>
            <br></br>
            <h2 className='text-start'>3. Jízda za každého počasí</h2>
            <p>Díky nesmekajícím nafukovacím kolečkům je jízda na kolečkových lyžích JOVE možná i na mokrém povrchu. To znamená, že nebudete muset přerušovat svůj trénink kvůli nepřízni počasí, a zároveň zlepšíte svou techniku jízdy za různých podmínek.</p>
            <br></br>
            <h2 className='text-start'>4. Ideální příprava na závody</h2>
            <p>Kolečkové lyže JOVE jsou dokonalým tréninkovým nástrojem pro zimní běžecké závody. Rozvíjejí vaši techniku, zlepšují vytrvalost a zvyšují rychlost – všechny klíčové faktory pro úspěch na sněhu.</p>
            <br></br>
            <h2 className='text-start'>5. Únik do přírody</h2>
            <p>S kolečkovými lyžemi JOVE se můžete vydat do přírody a užít si klid a krásu, které nabízí. Je to skvělá příležitost pro meditativní únik od každodenního shonu a stresu. Ponořte se do harmonie přírody a naplňte svoji duši klidem a pohodou.</p>
            <br></br>
            <h2 className='text-start'>6. Flexibilita tréninku</h2>
            <p>S kolečkovými lyžemi JOVE si můžete vybrat různé úrovně intenzity a způsoby tréninku. Přizpůsobte si jízdu podle svých potřeb a cílů – ať už chcete zlepšit kondici, zhubnout nebo se jen uvolnit a užít si jízdu. Možností je nespočet!</p>
            <br></br>
            <h2 className='text-start'>7. Snadná údržba a skladování</h2>
            <p>Kolečkové lyže JOVE jsou velmi snadné na údržbu a nevyžadují žádné složité čištění nebo konzervaci. Navíc, díky kompaktním rozměrům je skladování snadné a praktické. Ušetříte tak čas i místo.</p>
            <br></br>
            <h2 className='text-start'>8. Investice do zdraví a kvality života</h2>
            <p>Kolečkové lyže JOVE nejsou jen další sportovní vybavení. Jsou investicí do vašeho zdraví, fyzické i psychické pohody a kvality života. Užijte si radost z pohybu, učte se nové dovednosti a stávejte se aktivním, zdravým a šťastným člověkem.</p>
            <br></br>
            <p className='pb-6'>Začněte jezdit na kolečkových lyžích JOVE ještě dnes a objevte všechny výhody, které vám tento jedinečný sport nabízí! Staňte se součástí rostoucí komunity nadšenců a získejte nejen zdravější tělo, ale i obohacenou mysl.</p>
          </div>
        </article>

        <div>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold">Další články</h4>
            <ul className="ml-4 space-y-1 list-disc">
              <li>
                <Link rel="noopener noreferrer" href="/clanek1" className="hover:underline">Jak se jezdí na kolečkových lyžích a jaké vybrat?</Link>
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

export default clanek2