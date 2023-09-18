import { restaurantTestimonials } from '@/assets/constants'
import Image from 'next/image'
import star from '../assets/images/star.png'

const Testimonials = () => {
  return (
    <>
      <div className="w-full max-w-screen-lg mx-auto flex flex-col ">
        <h1 className="text-center font-markazi text-[36px] font-bold m-10">
          Testimonials
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  my-8 gap-4">
          {restaurantTestimonials.map((person) => (
            <div
              key={person.name}
              className="border-1 bg-white mx-4 h-auto lg:p-4   "
            >
              <p className="flex flex-1 px-6 pb-2 pt-4">
                {person.rating}
                <span>
                  <Image src={star} alt="rating" width={24} height={24} />
                </span>
              </p>
              <div className="flex flex-1 items-center">
                <Image
                  src={person.imgURL}
                  alt={person.name}
                  width={80}
                  height={80}
                />
                <span className="text-center leading-none font-karla font-bold">
                  {person.name}
                </span>
              </div>
              <p className="pt-4 font-karla text-sm  px-2 py-3">{person.review}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Testimonials
