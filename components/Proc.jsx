import { Link, animateScroll as scroll } from 'react-scroll'
import { HeartIcon, FingerPrintIcon, CashIcon } from '@heroicons/react/outline';

const Proc = () => {
  return (
  <div name='proc' className='w-full mt-36'>
      <div className='max-w-[1240px] mx-auto px-6 relative'>
          <div className='pt-12'>
            <h2>
            PROČ <span className="text-main-blue">JOVE?</span>
            </h2>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-12 sm:pt-20 pt-12'>
              <div className='bg-white rounded-xl shadow-2xl flex flex-col justify-between'>
                  <div className='p-8'>
                      <HeartIcon className='w-16 p-4 bg-main-blue text-white rounded-lg mt-[-4rem]' />
                      <h3>Český výrobek</h3>
                      <p>Kvalitní materiál. Poctivě navrženo a vyrobeno velezkušeným sportovcem z Krkonoš. </p>
                  </div>
                  <div className='bg-slate-100 rounded-b-xl pl-8 py-4 cursor-pointer'>
                    <Link to="cta" smooth={true}><p className='flex items-center text-main-blue text-xl text-center font-semibold'>Objednat</p></Link>
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-2xl flex flex-col justify-between'>
                  <div className='p-8'>
                      <FingerPrintIcon className='w-16 p-4 bg-main-blue text-white rounded-lg mt-[-4rem]' />
                      <h3>Unikátní jízdní vlastnosti</h3>
                      <p>Díky speciálně navrženým velkým kolečkům jsou jízdní vlastnosti zcela unikátní. </p>
                  </div>
                  <div className='bg-slate-100 rounded-b-xl pl-8 py-4 cursor-pointer'>
                    <Link to="cta" smooth={true}><p className='flex items-center text-main-blue text-xl font-semibold'>Objednat</p></Link>
                  </div>
              </div>
              <div className='bg-white rounded-xl shadow-2xl flex flex-col justify-between'>
                  <div className='p-8'>
                      <CashIcon className='w-16 p-4 bg-main-blue text-white rounded-lg mt-[-4rem]' />
                      <h3>Poměr cena výkon</h3>
                      <p>I přes unikátní vlastnosti lyží je cena v porovnání s konkurencí velice rozumná. </p>
                  </div>
                  <div className='bg-slate-100 rounded-b-xl pl-8 py-4 cursor-pointer'>
                    <Link to="cta" smooth={true}><p className='flex items-center text-main-blue text-xl font-semibold'>Objednat</p></Link>
                  </div>
              </div>
          </div>
      </div>
  </div>
  );
};

export default Proc;
