import React from 'react'

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
        <table className="w-full">
          <caption className="sr-only">Pricing plan comparison</caption>
          
          <tbody className="space-y-6 text-center divide-y divide-gray-700">
            <tr>
              <th scope="row" className="text-left">
                <h3 className="py-3 font-bold text-lg md:text-2xl">Typ lyží</h3>
              </th>
              <td>
                <span className="font-bold text-lg md:text-2xl text-gray-700"><span className="text-main-blue">JOVE</span> FullSkate</span>
              </td>
              <td>
                <span className="font-bold text-lg md:text-2xl text-gray-700"><span className="text-main-blue">JOVE</span> Skate</span>
              </td>
              <td>
                <span className="font-bold text-lg md:text-2xl text-gray-700"><span className="text-main-blue">JOVE</span> Classic</span>
              </td>
            </tr>

            <tr>
              <th scope="row" className="text-left">
                <h3 className="py-3 font-bold text-lg md:text-2xl">Cena (bez DPH)</h3>
              </th>
              <th scope="col">
                <p className="mb-3 font-semibold text-base md:text-2xl text-gray-700">
                  3 000 Kč
                </p>
              </th>
              <th scope="col">
                <p className="mb-3 font-semibold text-base md:text-2xl text-gray-700">
                  7 000 Kč
                </p>
              </th>
              <th scope="col">
                <p className="mb-3 font-semibold text-base md:text-2xl text-gray-700">
                  8 400 Kč
                </p>
              </th>
            </tr>

            <tr>
              <th scope="row" className="text-left">
                <h3 className="py-3 font-bold text-lg md:text-2xl">Cena včetně vázání</h3>
              </th>
              <th scope="col">
                <p className="mb-3 font-semibold text-base md:text-2xl text-gray-700">
                  ?
                </p>
              </th>
              <th scope="col">
                <p className="mb-3 font-semibold text-base md:text-2xl text-gray-700">
                  8 400 Kč
                </p>
              </th>
              <th scope="col">
                <p className="mb-3 font-semibold text-base md:text-2xl text-gray-700">
                  9 800 Kč
                </p>
              </th>
            </tr>

            <tr>
              <th scope="row" className="text-left">
                <h3 className="py-3 font-bold text-lg md:text-2xl">Náhradní nafukovací kolečko</h3>
              </th>
              <th scope="col">
                <p className="mb-3 font-semibold text-base md:text-2xl text-gray-700">
                  ?
                </p>
              </th>
              <th scope="col">
                <p className="mb-3 font-semibold text-base md:text-2xl text-gray-700">
                  550 Kč
                </p>
              </th>
              <th scope="col">
                <p className="mb-3 font-semibold text-base md:text-2xl text-gray-700">
                  1 250 Kč
                </p>
              </th>
            </tr>

            <tr>
              <th scope="row" className="text-left">
                <h3 className="py-3 font-bold text-lg md:text-2xl">Náhradní ložisko</h3>
              </th>
              <th scope="col">
                <p className="mb-3 font-semibold text-base md:text-2xl text-gray-700">
                  ?
                </p>
              </th>
              <th scope="col">
                <p className="mb-3 font-semibold text-base md:text-2xl text-gray-700">
                  90 Kč
                </p>
              </th>
              <th scope="col">
                <p className="mb-3 font-semibold text-base md:text-2xl text-gray-700">
                  350 Kč
                </p>
              </th>
            </tr>
            
          </tbody>
        </table>
        <p className='text-sm md:text-lg'>* Další náhradní díly: plné kolečko - 600 Kč, duše - 80 Kč, plášť - 300 Kč, opěrka k brzdě - 80 Kč, přední blatník - 80 Kč, brzda-zadní blatník - 300 Kč, osička ke kolu - 70 Kč</p>
        
      </div>
    </div>
  )
}

export default Pricing