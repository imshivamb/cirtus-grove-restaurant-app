import React from 'react'
import Image from 'next/image'
import logo from '../assets/images/logo.png'
import { navLinks } from '@/assets/constants'
import Link from 'next/link'
import menu from '../assets/images/menu.png'

const Navbar = () => {
  return (
    <header className="sm:px-16 px-8 md:py-8 py-5 w-full absolute z-10 bg-white-400 shadow-md">
      <nav className="max-w-screen-lg flex items-center justify-between mx-auto  ">
        <div>
          <Link href="/">
            <Image src={logo} alt="logo" width={240} height={70} />
          </Link>
        </div>

        <ul
          className="flex-1 flex justify-end 
            items-center gap-10 max-lg:hidden "
        >
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className=" text-lg font-karla leading-normal text-[#1C7453] font-bold  hover:text-orange hover:underline"
              >
                {link.label}{' '}
              </Link>
            </li>
          ))}
        </ul>

        <div>
          <Image
            src={menu}
            alt="menu"
            width={30}
            height={30}
            className="hidden max-lg:block"
          />
        </div>
      </nav>
    </header>
  )
}

export default Navbar
