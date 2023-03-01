import Image from 'next/image'
import Balt from '../assets/pepa.webp'

const About = () => {
  return (
    <div name='about' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-6'>
        <div className='px-4 py-12'>
          <h2>
              PŘÍBĚH LYŽÍ <span className="text-main-blue font-bold">JOVE</span>
          </h2>
        </div>

        <div className='grid md:grid-cols-2 space-y-12'>
            <div className='flex flex-col justify-center md:items-start w-full'>
              <Image className='w-full object-cover rounded-lg' src={Balt} alt="lyže Jove u Baltu" />
            </div>

            <div className='px-0 md:px-10'>
              
                <p>Mým cílem bylo vyrobit kolečkové lyže pro skate, 
                  které odpovídají pocitově lyžování na sněhu a dá se na nich 
                  jezdit kdekoliv při bezúdržbovém provozu.  
                  Zákazníci velice oceňují možnost jízdy na špatných cestách s využitím brzd. 
                  
                </p>
                <br />

                <p>Kolečkové lyže s volnoběžkovými ložisky umožňující odraz. 
                  Přední kolečka se točí pouze dopředu, jsou to vlastně 
                  kolečkové lyže kombi. Simulace bruslařské techniky na klasických
                  kolečkových lyžích je možná a vzhledem k případné montáži brzd 
                  prakticky umožňují přejezdy všech profilů a kvality cest bez 
                  nutného svážení lyžaře z kopce dolů autem atd. Na těchto lyžích, 
                  i když jsou delší je možné i bruslit. Vzhledem k 100% odrazu 
                  z předního kolečka, se může vytvářet u lyžařů syndrom pozdního 
                  odrazu a kazit se technika na klasiku na sněhu. Proto raději 
                  doporučuji kolečkové lyže na skate, kde je technika běhu téměř 
                  totožná s jízdou na lyžích v zimě
                </p>
                <br />

                <p>
                  Lyže prošli zátěžovou zkoužkou, když se mnou ujeli 500Km k Baltu a zpět. <br /> <br /><a href="https://www.youtube.com/watch?v=av3Dsnsy-3s&ab_channel=lyzeJOVE" className="text-main-blue" title='500km k Baltu na kolečkových lyžích JOVE'>Více ve videu</a>
                </p>
              
            </div>

        </div>

      </div>  
    </div>
  );
};

export default About;