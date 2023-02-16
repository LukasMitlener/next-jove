import Image from 'next/image'
import logo from "../assets/jove-logo.png"
import { SocialIcon } from 'react-social-icons';

const Footer = () => (
  <footer className="sm:px-16 px-6 py-8"
  >
    <div className="xl:max-w-[1280px] w-full mx-auto flex flex-col gap-8">
      

      <div className="flex flex-col">
        <div className="mb-[50px] h-[2px] bg-white opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <div class="flex justify-center text-teal-600 lg:justify-start">
            <Image src={logo} alt='/' style={{ width: '200px'}} />
          </div>
          <p className="font-normal text-[14px] text-grey-700 opacity-50">
            Copyright © 2023 Jove. All rights reserved.
          </p>

          <div className="flex items-center mt-4 space-x-2 sm:mt-0">
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
);

export default Footer;
