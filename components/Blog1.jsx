import Link from 'next/link'
import Image from 'next/image'
import bp1 from '../assets/1.webp'
import bp2 from '../assets/2.webp'

const Blog1 = () => {
  return (
    <div name="blog" className="w-full mt-24">
        <div class="max-w-[1240px] mx-auto px-6">
            <div className='px-4 py-12 text-black'>
                <h2>
                PÍŠEME O <span className="text-main-blue">KOLEČKOVÉM LYŽOVÁNÍ</span>
                </h2>
            </div>

            <div class="grid grid-cols-1 gap-16 md:grid-cols-2 xl:grid-cols-2 ">
                <div>
                    <Image className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={bp1} alt="" />

                    <div className="mt-8">
                        <h2 className="mt-4 text-2xl font-semibold text-start">
                            <Link href="/jak-se-jezdi-na-koleckovych-lyzich-a-jake-vybrat" className="  hover:text-gray-900">Jak se jezdí na kolečkových lyžích a jaké vybrat?</Link>
                        </h2>

                        <h3 className="mt-2 text-lg text-gray-700 m-0 leading-normal">
                          Běžkování v létě na suchu jako tréninková příprava na zimu. I toto jsou kolečkové lyže.
                        </h3>

                        <div className="flex items-center justify-between mt-4">
                            <div>
                                <p className="text-lg font-medium text-gray-700">
                                    Josef Vejnar
                                </p>

                                <p className="text-sm text-gray-500 dark:text-gray-400">1. února, 2022</p>
                            </div>

                            <Link href="/jak-se-jezdi-na-koleckovych-lyzich-a-jake-vybrat" className="text-main-blue  hover:text-blue-400">Číst více</Link>
                        </div>

                    </div>
                </div>

                <div>
                    <Image className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={bp2} alt="" />

                    <div className="mt-8">
                        <h2 className="mt-4 text-2xl font-semibold text-start">
                            <Link href="/proc-zacit-jezdit-na-koleckovych-lyzich-jove" className="hover:text-gray-900">Proč začít jezdit na kolečkových lyžích JOVE?</Link>
                        </h2>

                        <h3 className="mt-2 text-lg text-gray-700 m-0 leading-normal">
                            Klasika, skate nebo na soupaž? Jsou vhodné i do terénu? A jsou vůbec kolečkové lyže vhodné i pro začátečníky?
                        </h3>

                        <div className="flex items-center justify-between mt-4">
                            <div>
                                <p className="text-lg font-medium text-gray-700">
                                    Josef Vejnar
                                </p>

                                <p className="text-sm text-gray-500 dark:text-gray-400">6. března, 2022</p>
                            </div>

                            <Link href="/proc-zacit-jezdit-na-koleckovych-lyzich-jove" className="inline-block text-main-blue hover:text-blue-400">Číst více</Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog1