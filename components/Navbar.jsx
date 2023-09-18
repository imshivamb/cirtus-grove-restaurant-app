"use client";

import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../assets/images/logo.png'
import { navLinks } from '@/assets/constants'
import Link from 'next/link'
import reservation from '../assets/images/reservation.png'
import { TbTruckDelivery } from 'react-icons/tb'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import { BsBasket } from 'react-icons/bs'

const Navbar = () => {
  const [nav, setNav] = useState(false)

  const toggleNav = () => {
    setNav(!nav)
  }

  return (
    <header className="sm:px-16 px-8 md:py-8 py-5 w-full absolute z-10 bg-white-400 shadow-md">
      <nav className="max-w-screen-lg flex flex-wrap items-center  mx-auto">
        <div>
          <Link href="/">
            <Image src={logo} alt="logo" width={240} height={70} />
          </Link>
        </div>

        <ul
          className={`flex-1 flex justify-end 
            items-center gap-10 max-lg:hidden`}
        >
          {navLinks.map((link) => (
            <li key={link.label} className='hover:scale-105'>
              <Link
                href={link.href}
                className=" text-lg font-league leading-normal text-[#1C7453] font-bold  hover:text-orange hover:underline"
              >
                {link.label}{' '}
              </Link>
            </li>
          ))}
        </ul>
        <div onClick={toggleNav} className='lg:hidden px-3 cursor-pointer'>
          <AiOutlineMenu size={25} />
        </div>
        <div>
          <div>

          </div>
          <div className={nav ? 'lg:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
            <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' :
              'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
              <div>
                <div className='flex w-full items-center justify-between'>
                  <Image src={logo} alt='logo' width={200} height={80} />
                  <div onClick={toggleNav} className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer'>
                    <AiOutlineClose />
                  </div>
                </div>
                <div className='border-b border-gray-300 my-4'>
                  <p className='w-[85%] md:w-[90%] py-4 font-bold tracking-widest'>A Mediterranean restaurant</p>
                </div>
              </div>
              <div className='py-4 flex flex-col'>
                <ul className='uppercase'>
                  {navLinks.map((link) => (
                    <li key={link.label} className='py-3'>
                      <Link
                        href={link.href}
                        className=" text-lg font-karla leading-normal text-[#1C7453] font-bold  hover:text-orange hover:underline"
                      >
                        {link.label}{' '}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className='pt-40'>

                  <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                    <div className='rounded-full shadow-lg p-4 shadow-gray-400 cursor-pointer hover:scale-105 ease-in duration-300'>
                      <TbTruckDelivery size={25} />
                    </div>
                    <div className='rounded-full shadow-lg p-4 shadow-gray-400 cursor-pointer hover:scale-105 ease-in duration-300'>
                      <BsBasket size={25} />
                    </div>
                    <Link href='/reservations'>
                      <div className='rounded-full shadow-lg p-4 shadow-gray-400 cursor-pointer hover:scale-105 ease-in duration-300'>
                        <Image src={reservation} width={25} height={25} />
                      </div>
                    </Link>


                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
