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

        <div className="flex lg:flex-row flex-col h-auto justify-between items-center my-8">
          {restaurantTestimonials.map((person) => (
            <div className="border-1 bg-white mx-4 h-auto p-4 ">
              <p className="flex flex-1 px-6 pb-2">
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
              <p className="pt-4 font-karla text-sm  px-2">{person.review}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Testimonials
