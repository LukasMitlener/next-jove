import React, {useState} from 'react';
import Image from 'next/image'
import logo from "../assets/jove-logo.png"
import { Link, animateScroll as scroll } from 'react-scroll'
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    const handleClose =()=> setNav(!nav)

  return (
    <div className='max-w-[1240px] m-auto h-[80px] bg-transparent drop-shadow-lg px-6'>
      <div className='flex justify-between items-center w-full h-full'>
        <div className='flex items-center'>
          <Image src={logo} alt='/' style={{ width: '200px'}} />
        </div>

        <div className='hidden md:flex pr-4 text-lg font-semibold'>
          <ul className='hidden md:flex'>
            <li className='hover:text-main-blue'><Link to="about" smooth={true} duration={500}>O JOVE</Link></li>
            <li className='hover:text-main-blue'><Link to="video" smooth={true} duration={500}>VIDEO</Link></li>
            <li className='hover:text-main-blue'><Link to="proc" smooth={true} duration={500}>PROČ JOVE?</Link></li>
            <li className='hover:text-main-blue'><Link to="blog" smooth={true} duration={500}>BLOG</Link></li>
            <li className='hover:text-main-blue'><Link to="cena" smooth={true} offset={-50} duration={500}>CENA</Link></li>
          </ul>
          <div className='pl-8 flex items-center'>
            <button className='px-4 py-3'><Link to="cta" smooth={true} offset={-50} duration={500}>OBJEDNAT</Link></button>
          </div>
            
        </div>

        <div className='md:hidden mr-4' onClick={handleClick}>
            {!nav ? <MenuIcon className='w-12 text-main-blue' /> : <XIcon className='w-12 text-main-blue' />}
        </div>
      </div>

      <ul className={!nav ? 'hidden' : 'absolute bg-main-light w-full px-8'}>
          <li className='border-b-2 border-zinc-100 w-full'><Link onClick={handleClose} to="about" smooth={true} offset={-200} duration={500}>O JOVE</Link></li>
          <li className='border-b-2 border-zinc-100 w-full'><Link onClick={handleClose} to="video" smooth={true} offset={-100} duration={500}>VIDEO</Link></li>
          <li className='border-b-2 border-zinc-100 w-full'><Link onClick={handleClose} to="proc" smooth={true} offset={-50} duration={500}>PROČ JOVE?</Link></li>
          <li className='border-b-2 border-zinc-100 w-full'><Link onClick={handleClose} to="blog" smooth={true} offset={-100} duration={500}>BLOG</Link></li>
          <li className='border-b-2 border-zinc-100 w-full'><Link onClick={handleClose} to="cena" smooth={true} offset={-50} duration={500}>CENA</Link></li>
        <div className='flex flex-col my-4'>
          <button className='px-8 py-3'><Link to="cta">Objednat</Link></button>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;
