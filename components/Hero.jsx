import styles from "../styles/styles";
import Image from 'next/image'
import heroImg from '../assets/JOVE-PNG-Blue-transparent.png'

const Hero = () => {
  return (
    <div name='home' className='w-full h-screen flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
          <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
            <h1 className='py-3 text-5xl md:text-6xl font-bold'>Unikátní<br />
            <span className='text-main-blue p-0'>kolečkové lyže</span><br />
            ze &#128151; Krkonoš</h1>
            <p className='text-2xl'>Vyrobeno a navrženo zkušeným sportovcem.</p>
          </div>
            
          <div className="bg-transparent flex items-center justify-center ">
            <div className="relative w-full max-w-l">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-[#40B7FF] rounded-full mix-blend-multiply filter blur-xl opacity-80 animate-blob"></div>
                <div className="absolute top-0 -right-4 w-72 h-72 bg-[#F55658] rounded-full mix-blend-multiply filter blur-xl opacity-80 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#F5F249] rounded-full mix-blend-multiply filter blur-xl opacity-80 animate-blob animation-delay-4000"></div>
                <div className="m-8 relative space-y-4">
                  <Image className='w-full' src={heroImg} alt="/" />
                </div>
            </div>
          </div>
        </div>       
    </div>
  )
}

export default Hero