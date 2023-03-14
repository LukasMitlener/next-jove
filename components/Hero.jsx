import Image from 'next/image'
import heroImg from '../assets/JOVE-PNG-Blue-transparent.png'

const Hero = () => {
  return (
    <div name='home' className='w-full h-[54rem] flex flex-col justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto px-6'>
          <div className='text-center flex flex-col justify-center md:items-start w-full py-8'>
            <h1 className='text-center py-3 text-5xl md:text-left md:text-7xl font-bold'>Unikátní<br />
            <span className='text-center text-main-blue p-0'>kolečkové lyže</span><br />
            ze ❤️ Krkonoš</h1>
            <p className='text-center md:text-left text-3xl'>Vyrobeno a navrženo zkušeným sportovcem.</p>
          </div>
            
          <div className="bg-transparent flex items-center justify-center ">
            <div className="relative w-full">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-[#40B7FF] rounded-full mix-blend-multiply filter blur-xl opacity-80 animate-blob"></div>
                <div className="absolute top-0 -right-4 w-72 h-72 bg-[#F55658] rounded-full mix-blend-multiply filter blur-xl opacity-80 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#F5F249] rounded-full mix-blend-multiply filter blur-xl opacity-80 animate-blob animation-delay-4000"></div>
                <div className="relative">
                  <Image className='w-full' src={heroImg} alt="/" />
                </div>
            </div>
          </div>
        </div>       
    </div>
  )
}

export default Hero