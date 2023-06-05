import { CheckIcon, XIcon } from '@heroicons/react/solid';


const Pricing = () => {
  return (
    <div name='cena' className='w-full mt-36'>
      <div className='max-w-[1240px] mx-auto px-6'>

        <div className='px-4 py-12'>
          <h2>
            CENA LYŽÍ <span className="text-main-blue">JOVE</span>
          </h2>
          
          {/* <p className='py-4 text-3xl'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
            laudantium odio ullam inventore aliquid ipsum quasi tenetur velit
            voluptatum iste.
          </p> */}
        </div>

        <div className='grid md:grid-cols-2 gap-8'>

          <div className='bg-white p-8 rounded-xl shadow-xl relative'>
            <span className='uppercase px-3 py-1 bg-main-blue text-white rounded-2xl text-LG'>Standard</span>
            <div>
              <p className='text-5xl font-bold py-4 flex text-gray-700'>8 480 Kč</p>
            </div>
            <h3 className='text-2xl font-bold text-gray-700'>Základní model lyží JOVE</h3>
            <div className='text-lg'>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-main-blue'  />Unikátní jízdní vlastnosti.</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-main-blue'  />Duralové komponenty</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-main-blue'  />Nafukovací kolečka</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-main-blue'  />Montáž vázání.</p>
                <p className='flex py-4'><XIcon className='w-8 mr-5 text-red-400'  />Vylepšená kolečka s výplní</p>
                <p className='flex py-4'><XIcon className='w-8 mr-5 text-red-400'  />Přední karbonový blatník</p>
            </div>
          </div>

          <div className='bg-white text-slate-900 p-8 rounded-xl shadow-xl relative'>
            <span className='uppercase px-3 py-1 bg-main-blue text-white rounded-2xl text-LG'>Premium</span>
            <div>
              <p className='text-5xl font-bold py-4 flex text-gray-700'>9 980 Kč</p>
            </div>
            <h3 className='text-2xl font-bold text-gray-700'>Vylepšený model JOVE  Olymp</h3>
            <div className='text-lg'>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-main-blue'  />Unikátní jízdní vlastnosti</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-main-blue'  />Duralové komponenty</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-main-blue'  />Nafukovací kolečka</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-main-blue'  />Montáž vázání</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-main-blue'  />Vylepšená kolečka s výplní</p>
                <p className='flex py-4'><CheckIcon className='w-8 mr-5 text-main-blue'  />Odlehčený karbonový brzdový blatník</p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
