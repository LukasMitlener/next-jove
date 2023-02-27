import Link from 'next/link'
import Image from 'next/image'
import logo from "../assets/jove-logo.png"
import bp2 from '../assets/blogpic2.webp'
import Footer from "../components/Footer"

const clanek2 = () => {
  return (
    <div>
      <div className='max-w-[1240px] m-auto h-[80px] bg-transparent drop-shadow-lg px-6'>
        <div className='flex justify-between items-center w-full h-full'>
          <div className='flex items-center'>
            <a href='/'><Image src={logo} alt='/' style={{ width: '200px'}} /></a>
          </div>
        </div>
      </div>

      <div className="max-w-[1240px] px-6 pb-8 pt-4 mx-auto">
        <article className="space-y-8">
          <div className="space-y-6">
            <Image className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src={bp2} alt="" />
            <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">Proč začít jezdit na kolečkových lyžích JOVE?</h1>
            <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-400">
              <div className="flex items-center md:space-x-2">
                <img src="https://source.unsplash.com/75x75/?portrait" alt="" className="w-4 h-4 border rounded-full dark:bg-gray-500 dark:border-gray-700" />
                <p className="text-sm">Josef Vejnar • 1. března, 2023</p>
              </div>
              <p className="flex-shrink-0 mt-3 text-sm md:mt-0">4 min čtení</p>
            </div>
          </div>
          <div className="dark:text-gray-100">
            <p className='pb-12'>
              Na tuto otázku se musíme podívat z několika stránek .
              Ta první je zdravotní , druhá je sportovní a třetí je zážitková.
              Po zdravotní stránce se jedná o sport na čerstvém vzduchu a o pohyb, který je
              šetrný na klouby , tak jako na většině kolečkových lyžích či bruslích . Na k.l.
              JOVE je vzhledem k používaným nafukovacím kolečkům toto ještě umocněno,
              neboť pružnost koleček tlumí otřesy nejen na běžné silnici , ale i na rozbitých a
              děravých cestách . Navíc se jedná o vytrvalostní sport , který rozvíjí celé tělo a
              všechny svalové partie rovnoměrně s neopominutelným vlivem na podporu
              činnosti a rozvoje kardiovaskulární soustavy . Při delších a častějších jízdách
              nehrozí přetížení z otřesů v oblasti holenních partií , blížící se k příznakům
              únavové zlomeniny .
              Po sportovní a tréninkové stránce je zde hned několik plusových argumentů .
              Asi nejpodstatnější je ten , že na k.l. JOVE nemusíte řešit , zda je vybraná trasa
              s kvalitním asfaltovým povrchem a se sjezdem , protože snadno překonáte hrbolaté
              úseky , včetně dláždění a díky originálnímu a jednoduchému brzdění sjedete

              většinu vámi vybraných tras. Z vlastní zkušenosti mohu doložit sjíždění od
              Vrbatovy boudy přes Mísečky až do Jilemnice. Na to si pravděpodobně troufne jen
              málokdo , ale pro představu jsem tento příklad uvedl .
              K.l. JOVE s nafukovacími kolečky umožňují jízdu i na mokrém povrchu , protože
              kolečka nesmekají, takže i v zimním období výborně poslouží pro přípravu na
              závody , např. Jizerskou 50. Toto využívám v případě špatných sněhových
              podmínek i v prosinci či lednu. Technika jízdy na skatových lyžích JOVE neodpustí
              lyžaři žádnou chybu , takže je výbornou kontrolou o správném provedení. Plně
              nahradí lyžování a každý se tak může připravovat i na závodní sezonu prakticky
              celoročně. Těžil jsem z toho i před závody v Austrálii a na Novém Zélandu v r. 2012
              , které se konají v srpnu a přechod na sníh mi nedělal žádný problém o čemž svědčí
              výsledky na Kangaroos loppetu i Meryno race ,kde jsem dlouho držel krok s elitními
              závodníky - Černousov , Legkov , Polka Kovalčuk a další , kteří se tam
              dlouhodobě připravovali na sezonu. ...
              Zážitková stránka spočívá v možnosti oprostit se od nutnosti používat na kratší
              vzdálenosti dopravní prostředky a jednoduše se na kolečkových lyžích přesunout ,
              kam si naplánujete . Při vhodné volbě trasy se dostanete na zapomenutá zákoutí,
              dnes již na mnoha horských vyasfaltovaných cest a můžete tak vychutnávat klid a
              krásy přírody . A konečně je to pocit , že jste pro své zdraví udělali něco , o čem
              ostatní ani netuší a tak buďte originální .
              Rady pro začátečníky – na kolečkových lyžích začít od jízdy vestoje zaměřené
              pouze na odpich soupaž. Po nabytí jistoty přejít při jízdě do mírného kopečku na
              chůzi ve stromečku a postupně prodlužovat skluz a odraz. Jakmile i toto zvládnete
              můžete se pokusit o jízdu 1:1 , to je na každou soupaž probíhá současně jízda po
              jedné lyži . Tato technika už ale klade vyšší nároky na rovnováhu , která je
              základem běžeckého lyžování .
            </p>
          </div>
        </article>

        <div>
          <div className="space-y-2">
            <h4 className="text-lg font-semibold">Další články</h4>
            <ul className="ml-4 space-y-1 list-disc">
              <li>
                <Link rel="noopener noreferrer" href="/clanek1" className="hover:underline">Jak se jezdí na kolečkových lyžích a jaké vybrat?</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    <Footer />
    </div>
  )
}

export default clanek2