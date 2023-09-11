import { menuItems } from '@/assets/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Specials = () => {
  return (
    <section className="max-w-screen-lg w-full mx-auto bg-white">
      <div className="flex items-center justify-between pb-8">
        <h1 className="font-markazi font-bold text-[70px]">
          This Weeks Specials!
        </h1>
        <Link href="/menu">
          <button className="px-5 py-3 font-karla font-bold text-xl bg-button rounded-2xl hover:text-white">
            Online Menu
          </button>
        </Link>
      </div>

      <div className="flex flex-wrap  justify-between ">
        {menuItems.map((item) => (
          <div
            key={item.name}
            className="flex relative flex-col w-[270px] h-[440px] bg-primary rounded-xl"
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
            <div className="flex flex-1 items-center gap-5 px-5 pb-4 pt-0">
              <p className="font-bold font-karla text-[16px]">{item.tag}</p>
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
