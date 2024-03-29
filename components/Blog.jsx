import Link from 'next/link'
import Image from 'next/image'
import bp1 from '../assets/1.webp'
import bp2 from '../assets/2.webp'

const Blog = () => {
  return (
    <div name="blog" className="w-full mt-36">
        <div class="max-w-[1240px] mx-auto px-6">
            <div className='py-12 text-black'>
                <h2>
                PÍŠEME O <span className="text-main-blue">KOLEČKOVÉM LYŽOVÁNÍ</span>
                </h2>
            </div>

            <div class="grid grid-cols-1 gap-12 md:grid-cols-2">
                <div>
                    <Image className="object-cover object-center w-full h-64 rounded-lg lg:h-80 shadow-lg" src={bp1} alt="pár na kolečkovych lyžích na kopci" />

                    <div className="mt-8">
                        <h2 className="mt-4 text-2xl font-bold text-gray-700 text-start">
                            <Link href="/jak-se-jezdi-na-koleckovych-lyzich-a-jake-vybrat" className="  hover:text-gray-900">Jak se jezdí na kolečkových lyžích a jaké vybrat?</Link>
                        </h2>

                        <p className="mt-4">
                          Běžkování v létě na suchu jako tréninková příprava na zimu. I toto jsou kolečkové lyže.
                        </p>

                        <div className="flex items-center justify-between mt-4">
                            <div>
                                <p className="text-lg font-medium text-gray-700">
                                    Josef Vejnar
                                </p>

                                <p className="text-base text-gray-500 dark:text-gray-400">1. února, 2022</p>
                            </div>

                            <Link href="/jak-se-jezdi-na-koleckovych-lyzich-a-jake-vybrat" className="text-xl text-main-blue  hover:text-blue-400">Číst více</Link>
                        </div>
                    </div>
                </div>

                <div>
                    <Image className="object-cover object-center w-full h-64 rounded-lg lg:h-80 shadow-lg" src={bp2} alt="pár na kolečkových lyžích u jezera" />

                    <div className="mt-8">
                        <h2 className="mt-4 text-2xl font-bold text-gray-700 text-start">
                            <Link href="/proc-zacit-jezdit-na-koleckovych-lyzich-jove" className="hover:text-gray-900">8 důvodů proč začít jezdit na kolečkových lyžích JOVE.</Link>
                        </h2>

                        <p className="mt-4">
                            Klasika, skate nebo na soupaž? Jsou vhodné i do terénu? A jsou vůbec kolečkové lyže vhodné i pro začátečníky?
                        </p>

                        <div className="flex items-center justify-between mt-4">
                            <div>
                                <p className="text-lg font-medium text-gray-700">
                                    Josef Vejnar
                                </p>

                                <p className="text-base text-gray-500 dark:text-gray-400">6. března, 2022</p>
                            </div>

                            <Link href="/proc-zacit-jezdit-na-koleckovych-lyzich-jove" className="text-xl text-main-blue hover:text-blue-400">Číst více</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Blog