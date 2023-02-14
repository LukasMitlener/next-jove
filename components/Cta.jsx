import styles from "../styles/styles";
import Image from 'next/image'
import Img3 from "../assets/cesta-krkonose3.jpg"

const Cta = () => {
  return (
    <div name="cta" className="w-full mt-24">
        <div className="max-w-[1240px] mx-auto px-12">
            <div className='px-4 py-12 text-black uppercase'>
                <h2>
                Jste připraveni zažít unikátní zážitek z <span className="text-main-blue">jízdy?</span>
                </h2>
            </div>
            
            <div className="space-y-4">
                    <p className="text-md mt-4 ">
                        &#127752; &#127912; Zvažte model lyží dle Vašeho preferovaného stylu jízdy, vysněte si barvu a objednejte na níže uvedeném e-mailu.
                    </p>

                    <p>
                        &#128161; PRO TIP: Možnost vylaserovat cokoliv dle Vašeho výběru (věnování, slogan, obrázek,...)
                    </p>

                    <p className="flex items-center">
                        &#128222; 123456789
                    </p>

                    <p className="flex items-center">
                    &#128231; contact@business.com
                    </p>
                    
                    <Image src={Img3} className="rounded-lg" alt="Tree"/>
            </div>
            
        </div>
    </div>
  )
}

export default Cta