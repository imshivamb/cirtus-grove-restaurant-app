import React from 'react'
import { famousDishes } from '@/assets/constants'
import Image from 'next/image'

const page = () => {
  return (
    <main className='flex flex-col items-center justify-center bg-white'>
    <div className="max-w-screen-lg m-auto px-5 w-full h-auto py-10">
        <h1 className='text-5xl font-league text-center px-4 py-5 pb-10 leading-relaxed font-bold text-orange underline underline-offset-4'>Our Menu</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center gap-5 ">
        {famousDishes.map((item) => (
          <div
            key={item.name}
            className="flex relative flex-col w-[270px] h-[440px] bg-primary rounded-xl shadow-md"
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
    </div>
    </main>
  )
}

export default page
