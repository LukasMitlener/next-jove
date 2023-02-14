import Link from 'next/link'
import Image from 'next/image'
import bp1 from '../assets/blogpic1.webp'
import bp2 from '../assets/blogpic2.webp'

const Blog1 = () => {
  return (
    <div name="blog" className="w-full mt-24">
        <div class="max-w-[1240px] mx-auto">
            <div className='px-4 py-12 text-black'>
                <h2>
                PÍŠEME O <span className="text-main-blue">KOLEČKOVÉM LYŽOVÁNÍ</span>
                </h2>
            </div>

            <div class="grid grid-cols-1 gap-16 md:grid-cols-2 xl:grid-cols-2">
                <div>
                    <Image className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={bp1} alt="" />

                    <div className="mt-8">
                        <h2 className="mt-4 text-2xl font-semibold text-start">
                          Jak se jezdí na kolečkových lyžích a jaké vybrat?
                        </h2>

                        <h3 className="mt-2 text-lg text-gray-700 m-0 leading-normal">
                          Běžkování v létě na suchu jako tréninková příprava na zimu. I toto jsou kolečkové lyže.
                        </h3>

                        <div className="flex items-center justify-between mt-4">
                            <div>
                                <p className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500">
                                    Josef Vejnar
                                </p>

                                <p className="text-sm text-gray-500 dark:text-gray-400">1. února, 2022</p>
                            </div>

                            <Link href="/clanek1" className="inline-block text-blue-500 underline hover:text-blue-400">Číst více</Link>
                        </div>

                    </div>
                </div>

                <div>
                    <Image className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={bp2} alt="" />

                    <div className="mt-8">
                        <h2 className="mt-4 text-2xl font-semibold text-start">
                          Proč začít jezdit na kolečkových lyžích JOVE?
                        </h2>

                        <h3 className="mt-2 text-lg text-gray-700 m-0 leading-normal">
                          Klasika, skate nebo na soupaž? Jsou vhodné i do terénu? A jsou vůbec kolečkové lyže vhodné i pro začátečníky?
                        </h3>

                        <div className="flex items-center justify-between mt-4">
                            <div>
                                <p className="text-lg font-medium text-gray-700 dark:text-gray-300 hover:underline hover:text-gray-500">
                                    Josef Vejnar
                                </p>

                                <p className="text-sm text-gray-500 dark:text-gray-400">6. března, 2022</p>
                            </div>

                            <Link href="/clanek2" className="inline-block text-blue-500 underline hover:text-blue-400">Číst více</Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog1