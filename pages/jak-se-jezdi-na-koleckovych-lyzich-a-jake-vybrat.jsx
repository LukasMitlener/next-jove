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
              Jak se jezdí na kolečkových lyžích a jaké vybrat?
              Jízda na kolečkových lyžích JOVE se přibližuje jízdě na běžkách . Rozdíl je
              pochopitelně v oblečení . Podle venkovní teploty volíte v létě trenky a tričko . Zde
              doporučuji reflexní barvy nebo navlékat reflexní vestu. Používáme rukavice , kvůli
              tvorbě puchýřů – mohou být i cyklistické . Na hlavu doporučuji přilbu a brýle.
              Tak jako v zimě na běžkách rozlišujeme dvě základní běžecké techniky skate a
              klasika , když nepočítáme stále populárnější soupaž. JOVE se zaměřily hlavně na
              výrobu kolečkových lyží na bruslení – skatových. Rozdíl oproti in –line bruslím je
              v tom , že při jízdě na kolečkových lyžích máte volnou patu a tím máte i delšískluz
              a šetříte energii. K jejich výrobě jsem se v roce 2008 rozhodl poté, co jsem si
              pořídil brusle POWERSSLIDY . Vadilo mi na nich pevné uchycení boty na šasí a
              proto jsem metodou pokus –omyl vylepšoval první k.l. až do současné podoby.
              Pro ty z vás, kteří se chystají na laufařské závody je ideální používat lyže na skate i
              na soupažnou techniku běhu . Rychlost k. lyží odpovídá zimním podmínkám jízdě
              na středně zmrzlém firnu.
              Na zakázku vyrábíme i k.l. na klasiku , které jsou delší a mají reversní ložiska
              v předních kolečkách , ze kterých se také odrážíte. Bruslení na nich je obtížnější a
              museli byste příliš zvedat nohu, z důvodu posunutého těžiště na lyži dopředu .
              Boty na kolečkové lyže – používat můžete boty na zimní lyžování . Na skate
              rozhodně vysoké s adaptérem , tak , aby noha byla dostatečně zpevněná . Na
              klasiku doporučuji tzv. combi boty , které jsou vyšší a mají ohebnější podrážku .
              Některé firmy vyrábějí i speciální boty na kolečkové lyže , které jsou vzdušnější a
              lehčí/Botana , Alpina / . Z vlastní zkušenosti mohu ujistit , že většině postačí boty
              používané na běžky.
              Hole na kolečkové lyže používáme o něco delší /cca 3 cm / než na běžky . Tzn. na
              klasiku by měly dosahovat do výše ramen a na skate ke kořenu nosu . Je to však
              individuální a když budete mít hole, které používáte na běžky , nic se nestane .
              Takže hlavní změna je u kroužků , když používáme hrotové nástavce na asfalt .
              Jejich výměna na stávajících holích je jednoduchá a zvládne ji každý . Kroužky
              nahřejeme horkovzdušnou pistolí a hroty po nasunutí s pomocí tavné svíčky
              zafixujeme.
            </p>
          </div>
        </article>

        <div>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold">Další články</h4>
            <ul className="ml-4 space-y-1 list-disc">
              <li>
                <Link href="/clanek2" className="hover:underline">Proč začít jezdit na kolečkových lyžích JOVE?</Link>
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