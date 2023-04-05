import Image from 'next/image'
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
              na základě dlouhodobé zkušenosti a poznání toho, co sportovci při ježdění potřebují.
            </p>  
            <br />
            <p>
              Svou kvalitou se kolečkové lyže JOVE vyrovnají i těm nejlepším zahraničním 
              značkám. Navíc, když si pořídíte kolečkové lyže JOVE, podpoříte tuzemskou 
              výrobu a pomůžete udržet tradici kvalitního českého zpracování.
            </p>

            <p>Výrobce Josef Vejnar chtěl vytvořit kolečkové lyže pro skate, které se pocitově 
              blíží lyžování na sněhu a umožňují bezúdržbový provoz. K dispozici jsou kolečkové
              lyže kombi s volnoběžkovými ložisky pro odraz a možností brzdy pro jízdu na špatných
              cestách. Tyto lyže nabízejí simulaci bruslařské techniky a umožňují přejezd různých
              profilů a kvality cest. Lyže Jove jsou vhodné pro skate, kde je technika běhu téměř
              totožná s jízdou na sněhu.
            </p>
            <br />
            <p>
              Další informace o lyžích Jove naleznete v <a href>našem článku</a>
              Lyže prošli zátěžovou zkoužkou, když se mnou ujeli 500Km k Baltu a zpět. <br /> <br />
              <a href="https://www.youtube.com/watch?v=av3Dsnsy-3s&ab_channel=lyzeJOVE" className="text-main-blue hover:text-blue-400" title='500km k Baltu na kolečkových lyžích JOVE'>
                Více ve videu
              </a>
            </p>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default About;