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
                <span className="font-bold text-lg md:text-2xl text-gray-700"><span className="text-main-blue">JOVE</span> FullSkate</span><p className="mt-2 text-sm md:text-lg text-gray-700">plná kolečka, <span className='text-xl md:text-3xl'>⌀</span>100mm</p>
              </td>
              <td>
                <span className="font-bold text-lg md:text-2xl text-gray-700"><span className="text-main-blue">JOVE</span> Skate</span><p className="mt-2 text-sm md:text-lg text-gray-700">nafukovací kolečka, <span className='text-xl md:text-3xl'>⌀</span>150mm</p>
              </td>
              <td>
                <span className="font-bold text-lg md:text-2xl text-gray-700"><span className="text-main-blue">JOVE</span> Classic</span><p className="mt-2 text-sm md:text-lg text-gray-700">nafukovací kolečka, <span className='text-xl md:text-3xl'>⌀</span>150mm</p>
              </td>
            </tr>

            <tr>
              <th scope="row" className="text-left">
                <h3 className="py-3 font-bold text-lg md:text-2xl">Cena jednoho páru</h3>
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
                  4400 Kč
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
                <h3 className="py-3 text-base md:text-xl">Náhradní kolečko</h3>
              </th>
              <th scope="col">
                <p className="mb-3 font-semibold text-sm md:text-xl text-gray-500">
                  350 Kč
                </p>
              </th>
              <th scope="col">
                <p className="mb-3 font-semibold text-sm md:text-xl text-gray-500">
                  550 Kč
                </p>
              </th>
              <th scope="col">
                <p className="mb-3 font-semibold text-sm md:text-xl text-gray-500">
                  1 250 Kč
                </p>
              </th>
            </tr>

            <tr>
              <th scope="row" className="text-left">
                <h3 className="py-3 text-base md:text-xl">Náhradní ložisko</h3>
              </th>
              <th scope="col">
                <p className="mb-3 font-semibold text-sm md:text-xl text-gray-500">
                  90 Kč
                </p>
              </th>
              <th scope="col">
                <p className="mb-3 font-semibold text-sm md:text-xl text-gray-500">
                  120 Kč
                </p>
              </th>
              <th scope="col">
                <p className="mb-3 font-semibold text-sm md:text-xl text-gray-500">
                  350 Kč
                </p>
              </th>
            </tr>

            <tr>
              <th scope="row" className="text-left">
                <h3 className="py-3 text-base md:text-xl">Náhradní duše</h3>
              </th>
              <th scope="col">
                <p className="mb-3 font-semibold text-sm md:text-xl text-gray-500">
                  x
                </p>
              </th>
              <th scope="col">
                <p className="mb-3 font-semibold text-sm md:text-xl text-gray-500">
                  90 Kč
                </p>
              </th>
              <th scope="col">
                <p className="mb-3 font-semibold text-sm md:text-xl text-gray-500">
                  90 Kč
                </p>
              </th>
            </tr>

            <tr>
              <th scope="row" className="text-left">
                <h3 className="py-3 text-base md:text-xl">Náhradní plášť</h3>
              </th>
              <th scope="col">
                <p className="mb-3 font-semibold text-sm md:text-xl text-gray-500">
                  x
                </p>
              </th>
              <th scope="col">
                <p className="mb-3 font-semibold text-sm md:text-xl text-gray-500">
                  400 Kč
                </p>
              </th>
              <th scope="col">
                <p className="mb-3 font-semibold text-sm md:text-xl text-gray-500">
                  400 Kč
                </p>
              </th>
            </tr>

            <tr>
              <th scope="row" className="text-left">
                <h3 className="py-3 text-base md:text-xl">Náhradní opěrka k brzdě</h3>
              </th>
              <th scope="col">
                <p className="mb-3 font-semibold text-sm md:text-xl text-gray-500">
                  x
                </p>
              </th>
              <th scope="col">
                <p className="mb-3 font-semibold text-sm md:text-xl text-gray-500">
                  80 Kč
                </p>
              </th>
              <th scope="col">
                <p className="mb-3 font-semibold text-sm md:text-xl text-gray-500">
                  80 Kč
                </p>
              </th>
            </tr>

            <tr>
              <th scope="row" className="text-left">
                <h3 className="py-3 text-base md:text-xl">Náhradní přední blatník</h3>
              </th>
              <th scope="col">
                <p className="mb-3 font-semibold text-sm md:text-xl text-gray-500">
                  x
                </p>
              </th>
              <th scope="col">
                <p className="mb-3 font-semibold text-sm md:text-xl text-gray-500">
                  80 Kč
                </p>
              </th>
              <th scope="col">
                <p className="mb-3 font-semibold text-sm md:text-xl text-gray-500">
                  80 Kč
                </p>
              </th>
            </tr>

            <tr>
              <th scope="row" className="text-left">
                <h3 className="py-3 text-base md:text-xl">Náhradní karbonový přední blatník</h3>
              </th>
              <th scope="col">
                <p className="mb-3 font-semibold text-sm md:text-xl text-gray-500">
                  x
                </p>
              </th>
              <th scope="col">
                <p className="mb-3 font-semibold text-sm md:text-xl text-gray-500">
                  350 Kč
                </p>
              </th>
              <th scope="col">
                <p className="mb-3 font-semibold text-sm md:text-xl text-gray-500">
                  350 Kč
                </p>
              </th>
            </tr>

            <tr>
              <th scope="row" className="text-left">
                <h3 className="py-3 text-base md:text-xl">Náhradní brzda - zadní blatník</h3>
              </th>
              <th scope="col">
                <p className="mb-3 font-semibold text-sm md:text-xl text-gray-500">
                  x
                </p>
              </th>
              <th scope="col">
                <p className="mb-3 font-semibold text-sm md:text-xl text-gray-500">
                  x
                </p>
              </th>
              <th scope="col">
                <p className="mb-3 font-semibold text-sm md:text-xl text-gray-500">
                  600 Kč
                </p>
              </th>
            </tr>

            <tr>
              <th scope="row" className="text-left">
                <h3 className="py-3 text-base md:text-xl">Náhradní osička ke kolu</h3>
              </th>
              <th scope="col">
                <p className="mb-3 font-semibold text-sm md:text-xl text-gray-500">
                  75 Kč
                </p>
              </th>
              <th scope="col">
                <p className="mb-3 font-semibold text-sm md:text-xl text-gray-500">
                  75 Kč
                </p>
              </th>
              <th scope="col">
                <p className="mb-3 font-semibold text-sm md:text-xl text-gray-500">
                  75 Kč
                </p>
              </th>
            </tr>
          </tbody>
        </table>
        <p className='text-sm md:text-lg'>* Uvedené ceny jsou bez 21% DPH. Při odběru více párů lze dohodnout slevu.</p>
        
      </div>
    </div>
  )
}

export default Pricing