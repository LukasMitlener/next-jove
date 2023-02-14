import Link from 'next/link'

const clanek1 = () => {
  return (
    <div className="max-w-[1240px] px-6 py-16 mx-auto space-y-12">
      <article className="space-y-8 dark:bg-gray-800 dark:text-gray-50">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">Cesta k Baltu - zkouška ohněm</h1>
          <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-400">
            <div className="flex items-center md:space-x-2">
              <img src="https://source.unsplash.com/75x75/?portrait" alt="" className="w-4 h-4 border rounded-full dark:bg-gray-500 dark:border-gray-700" />
              <p className="text-sm">Josef Vejnar • 1. června, 2023</p>
            </div>
            <p className="flex-shrink-0 mt-3 text-sm md:mt-0">4 min čtení</p>
          </div>
        </div>
        <div className="dark:text-gray-100">
          <p>Zde něco napsat...</p>
        </div>
      </article>
      <div>
        <div className="space-y-2">
          <h4 className="text-lg font-semibold">Další články</h4>
          <ul className="ml-4 space-y-1 list-disc">
            <li>
              <Link rel="noopener noreferrer" href="/clanek2" className="hover:underline">5 důvodů, proč začít jezdit na kolečkových lyžích</Link>
            </li>
            <li>
              <Link rel="noopener noreferrer" href="/clanek3" className="hover:underline">Jak se jezdí na kolečkových lyžích?</Link>
            </li>
            <li>
              <Link rel="noopener noreferrer" href="/clanek1" className="hover:underline">Proč vůbec začít lyžovat na kolečkách a jaké vybrat?</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default clanek1