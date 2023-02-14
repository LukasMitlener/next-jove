import styles from "../styles/styles";
import { Link, animateScroll as scroll } from 'react-scroll'
import { SocialIcon } from 'react-social-icons';
import Image from 'next/image'
import logo from "../assets/jove-logo.png"

const Footer2 = () => {
  return (
    <footer className="w-full mt-24 bg-gray-100">
      <div className='max-w-[1240px] mx-auto relative'>
        <div
          className="relative mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:pt-24"
        >
          <div className="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8">
            <Link
              className="inline-block rounded-full bg-main-blue p-2 text-white shadow transition hover:bg-main-blue sm:p-3 lg:p-4 cursor-pointer"
              to="home"
            >
              <span className="sr-only">Back to top</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </Link>
          </div>

          <div className="lg:flex lg:items-end lg:justify-between">
            <div>
              <div class="flex justify-center text-teal-600 lg:justify-start">
                <Image src={logo} alt='/' style={{ width: '200px', marginRight: "50px"}} />
              </div>

              <p
                class="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 lg:text-left"
              >
                Unikátní zážitek z jízdy.
              </p>
            </div>

            <nav aria-label="Footer Nav" class="mt-12 lg:mt-0">
              <ul
                class="flex flex-wrap justify-center gap-6 md:gap-8 lg:justify-end lg:gap-12"
              >
                <li className="text-gray-700 transition hover:text-gray-700/75">
                  <Link to="about" smooth={true} duration={500}>O Jove</Link>
                </li>

                <li className="text-gray-700 transition hover:text-gray-700/75">
                  <Link to="proc" smooth={true} duration={500}>Proč Jove?</Link>
                </li>

                <li className="text-gray-700 transition hover:text-gray-700/75">
                  <Link to="video" smooth={true} duration={500}>Video</Link>
                </li>

                <li className="text-gray-700 transition hover:text-gray-700/75">
                  <Link to="blog" smooth={true} duration={500}>Blog</Link>
                </li>

                <li className="text-gray-700 transition hover:text-gray-700/75">
                  <Link to="cena" smooth={true} offset={-50} duration={500}>Cena</Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex flex-col justify-between mt-6 pt-5 pb-10 border-t border-gray-800 sm:flex-row">
            <p className="text-sm text-gray-500">
              © Copyright 2023 Jove. All rights reserved.
            </p>
            <div className="flex items-center mt-4 space-x-4 sm:mt-0">
              <SocialIcon 
                        url="https://www.facebook.com"
                        fgColor="#3FB1FF"
                        bgColor="transparent" />
              <SocialIcon 
                        url="https://www.youtube.com/"
                        fgColor="#3FB1FF"
                        bgColor="transparent" />
              <SocialIcon 
                        url="https://www.instagram.com/lukas.mitlener/"
                        fgColor="#3FB1FF"
                        bgColor="transparent" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer2