import styles from "../styles/styles";
import Link from 'next/link'
import Image from 'next/image'
import bp1 from '../assets/blogpic1.webp'
import bp2 from '../assets/blogpic2.webp'
import bp3 from '../assets/blogpic3.webp'
import bp4 from '../assets/blogpic4.webp'

const Blog = () => {
  return (
    <div name='blog' className='w-full mt-24'>
      <div className='max-w-[1240px] mx-auto'>
        <div className='px-4 py-12 text-black'>
            <h2>
            PÍŠEME O <span className="text-main-blue">KOLEČKOVÉM LYŽOVÁNÍ</span>
            </h2>
        </div>

        <div className="mx-auto space-y-6 sm:space-y-12 px-12">
          <a rel="noopener noreferrer" href="/clanek1" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900">
            <Image src={bp2} alt="lidé na kolečkových lyžích na silnici" className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500" />
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">Jak se jezdí na kolečkových lyžích a jaké vybrat?</h3>
              <span className="text-xs dark:text-gray-400">February 19, 2021</span>
              <p>Běžkování v létě na suchu, letní biatlon nebo letní tréninková příprava na zimu. I toto jsou kolečkové lyže.</p>
            </div>
          </a>
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Link rel="noopener noreferrer" href="/clanek2" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
              <Image role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={bp1} />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Proč začít jezdit na kolečkových lyžích JOVE?</h3>
                <span className="text-xs dark:text-gray-400">January 21, 2021</span>
                <p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
              </div>
            </Link>
            <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
              <Image role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={bp3} />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Jak se jezdí na kolečkových lyžích?</h3>
                <span className="text-xs dark:text-gray-400">January 22, 2021</span>
                <p>Klasika, skate nebo na soupaž? Jsou vhodné i do terénu? A jsou vůbec kolečkové lyže vhodné i pro začátečníky? </p>
              </div>
            </a>
            <a rel="noopener noreferrer" href="#" className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900">
              <Image role="presentation" className="object-cover w-full rounded h-44 dark:bg-gray-500" src={bp4} />
              <div className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Cesta k Baltu - zkouška ohněm</h3>
                <span className="text-xs dark:text-gray-400">January 23, 2021</span>
                <p>Mei ex aliquid eleifend forensibus, quo ad dicta apeirian neglegentur, ex has tantas percipit perfecto. At per tempor albucius perfecto, ei probatus consulatu patrioque mea, ei vocent delicata indoctum pri.</p>
              </div>
            </a>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Blog