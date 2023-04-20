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
            <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">10 důvodů proč začít jezdit na kolečkových lyžích JOVE?</h1>
            <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-400">
              <div className="flex items-center md:space-x-2">
                <img src="https://source.unsplash.com/75x75/?portrait" alt="" className="w-4 h-4 border rounded-full dark:bg-gray-500 dark:border-gray-700" />
                <p className="text-sm">Josef Vejnar • 1. března, 2023</p>
              </div>
              <p className="flex-shrink-0 mt-3 text-sm md:mt-0">4 min čtení</p>
            </div>
          </div>
          <div className="dark:text-gray-100">
            <ol>
              <li>
                  <h2>Výborný celotělový trénink</h2>
                  <p>Jízda na kolečkových lyžích JOVE poskytuje skvělý celotělový trénink, který aktivuje svaly horní i dolní části těla, zlepšuje vytrvalost, posiluje srdce a zvyšuje spalování kalorií.</p>
              </li>
              <li>
                  <h2>Prevence zranění</h2>
                  <p>Kolečkové lyže JOVE mají nízký dopad na klouby a snižují riziko zranění, což je ideální pro ty, kteří hledají šetrnou formu pohybu.</p>
              </li>
              <li>
                  <h2>Technická dovednost</h2>
                  <p>Jízda na kolečkových lyžích JOVE vám pomůže zlepšit koordinaci, rovnováhu a technickou dovednost, což vám přinese užitek i v dalších sportovních aktivitách.</p>
              </li>
              <li>
                  <h2>Účinná rehabilitace</h2>
                  <p>Pokud se zotavujete ze zranění nebo operace, kolečkové lyže JOVE mohou být skvělým nástrojem pro rehabilitaci, který vám pomůže získat zpět sílu, mobilitu a důvěru.</p>
              </li>
              <li>
                  <h2>Stres a relaxace</h2>
                  <p>Jízda na kolečkových lyžích JOVE vám pomůže zapomenout na každodenní starosti a stres. Ponořte se do harmonie přírody a naplňte svůj duch klidem a pohodou.</p>
              </li>
              <li>
                  <h2>Společenský zážitek</h2>
                  <p>Jízda na kolečkových lyžích JOVE může být i skvělým společenským zážitkem. Pozvěte své přátele nebo rodinu a užijte si společně zábavu a vzájemnou motivaci.</p>
              </li>
              <li>
                  <h2>Flexibilita tréninku</h2>
                  <p>S kolečkovými lyžemi JOVE si můžete vybrat různé úrovně intenzity a způsoby tréninku. Přizpůsobte si jízdu podle svých potřeb a cílů – ať už chcete zlepšit kondici, zhubnout nebo se jen uvolnit a užít si jízdu. Možností je nespočet!</p>
              </li>
              <li>
                  <h2>Snadná údržba a skladování</h2>
                  <p>Kolečkové lyže JOVE jsou velmi snadné na údržbu a nevyžadují žádné složité čištění nebo konzervaci. Navíc, díky kompaktním rozměrům je skladování snadné a praktické. Ušetříte tak čas i místo.</p>
              </li>
              <li>
                  <h2>Investice do zdraví a kvality života</h2>
                  <p>Kolečkové lyže JOVE nejsou jen další sportovní vybavení. Jsou investicí do vašeho zdraví, fyzické i psychické pohody a kvality života. Užijte si radost z pohybu, učte se nové dovednosti a stávejte se aktivním, zdravým a šťastným člověkem.</p>
              </li>
            </ol>
            <p>Začněte jezdit na kolečkových lyžích JOVE ještě dnes a objevte všechny výhody, které vám tento jedinečný sport nabízí! Staňte se součástí rostoucí komunity nadšenců a získejte nejen zdravější tělo, ale i obohacenou mysl.</p>
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