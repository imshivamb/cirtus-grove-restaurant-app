import { menuItems } from '@/assets/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Specials = () => {
  return (
    <section className="max-w-screen-lg w-full mx-auto flex flex-col bg-white">
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between pb-8">
        <h1 className="font-markazi font-bold text-[70px] text-center md:text-left">
          This Weeks Specials!
        </h1>
        <Link href="/menu">
          <button className="px-5 py-3 font-karla font-bold text-xl bg-button hover:scale-105 rounded-2xl hover:text-white">
            Online Menu
          </button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto md:mx-4  ">
        {menuItems.map((item) => (
          <div
            key={item.name}
            className="flex  flex-col w-[270px] h-[440px] bg-primary border border-slate-200 rounded-xl"
          >
            <div className=" w-[270px] h-[188px] overflow-hidden rounded-t-xl">
              <Image
                src={item.imgURL}
                alt={item.name}
                width={270}
                height={188}
                className="object-cover"
              />
            </div>
            <div className="flex flex-1 justify-between px-5 py-4">
              <p className="font-markazi font-medium text-[28px] leading-none ">
                {item.name}
              </p>
              <span className="text-lime font-bold font-karla">
                {item.price}
              </span>
            </div>
            <p className="pb-4 pt-0 px-5 font-karla font-normal text-[16px] leading-normal text-green">
              {item.description}
            </p>
            <div className="flex flex-1 items-center gap-3 px-5 pb-4 pt-0">
              <Link href="/order" className='hover:text-orange hover:scale-105'>
                <p className="font-bold font-karla text-[16px]">{item.tag}</p>
                </Link>
                <span>
                <Image src={item.icon} alt="delivery" width={20} height={20} />
              </span>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Specials
