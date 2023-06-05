import Image from 'next/image'
import Link from 'next/link'
import Balt from '../assets/pepa.webp'

const About = () => {
  return (
    <div name='about' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-6'>
        <div className='py-12'>
          <h2>
              PŘÍBĚH LYŽÍ <span className="text-main-blue font-bold">JOVE</span>
          </h2>
        </div>

        <div className='grid md:grid-cols-2 space-y-12 md:space-y-0'>
          <div className='flex flex-col justify-center md:items-start w-full'>
            <Image className='w-full object-cover rounded-lg shadow-xl' src={Balt} alt="na lyžích Jove u Baltu" />
          </div>

          <div className='px-0 md:px-10'>
            <p>Představujeme Vám český výrobek, který je srdcovou záležitostí jednoho 
              vášnivého sportovce z Krkonoš. Kolečkové lyže JOVE jsou poctivě navrženy 
              a vyrobeny z kvalitního materiálu, aby vám poskytly nejlepší zážitek 
              z jízdy. Každý detail byl pečlivě promyšlen a vylepšen
              na základě dlouhodobé zkušenosti a poznání toho, co sportovci při jízdě potřebují.
            </p>  
            <br />
            <p>
              Svou kvalitou se kolečkové lyže JOVE vyrovnají i těm nejlepším zahraničním 
              značkám. Navíc, když si pořídíte kolečkové lyže JOVE, podpoříte tuzemskou 
              výrobu a pomůžete udržet tradici kvalitního českého zpracování.
            </p>
            <br />
            <p>Výrobce Josef Vejnar chtěl vytvořit kolečkové lyže pro skate, které se pocitově 
              blíží lyžování na sněhu a umožňují bezúdržbový provoz. K dispozici jsou kolečkové
              lyže kombi s volnoběžkovými ložisky pro odraz a možností brzdy pro jízdu na špatných
              cestách. Tyto lyže nabízejí simulaci bruslařské techniky a umožňují přejezd různých
              profilů a kvalit cest. 
            </p>
            <br />
            <p>
              
              Lyže prošli zátěžovou zkoužkou, když se mnou ujeli {" "}
              <a href="https://www.youtube.com/watch?v=av3Dsnsy-3s&ab_channel=lyzeJOVE" className="text-main-blue hover:text-blue-400" title='500km k Baltu na kolečkových lyžích JOVE'>
               500Km k Baltu a zpět. 
              </a>
              <br />
              Další informace o kolečkových lyžích JOVE v <Link href="/proc-zacit-jezdit-na-koleckovych-lyzich-jove" className="text-xl text-main-blue hover:text-blue-400">našem článku</Link>
            </p>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default About;