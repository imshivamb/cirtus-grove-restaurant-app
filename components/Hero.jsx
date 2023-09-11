import Link from 'next/link'
import hero from '../assets/images/hero.jpg'
import Image from 'next/image'

const Hero = () => {
  return (
    <section className="pb-8  bg-green h-[400px] w-full">
      <div className="flex items-center md:justify-between justify-center mx-auto max-w-screen-lg ">
        <div className="flex flex-col items-start md:pb-10   max-w-[380px]">
          <p className="font-markazi text-[70px] font-bold leading-none text-orange  ">
            Citrus Grove
          </p>
          <p className="text-[36px] font-medium font-markazi leading-none text-white align-text-top">
            New York City
          </p>
          <p className="w-[320px] font-medium text-lg text-white font-karla py-4 leading-relaxed">
            We are a family owned Mediterranean restaurant, focus on traditional
            recipes served with a modern twist.
          </p>
          <Link href="/reservations">
            <button className="px-6 py-3 bg-button mt-4 rounded-xl font-bold font-karla text-lg hover:text-white">
              Reserve a Table
            </button>
          </Link>
        </div>
        <div className="w-[380px] h-[430px] overflow-hidden rounded-xl pt-8  max-md:hidden  ">
          <Image
            src={hero}
            alt="hero-image"
            width={380}
            height={420}
            className=" rounded-xl object-fill"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
