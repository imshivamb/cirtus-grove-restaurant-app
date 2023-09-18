import Image from 'next/image'
import restaurantone from '../assets/images/restaurant.jpg'
import restauranttwo from '../assets/images/restaurant2.jpg'

export const About = () => {
  return (
    <div className="max-w-screen-lg w-full mx-auto">
      <div className="flex flex-wrap items-center justify-evenly w-auto">
        <article className="flex flex-col items-start mt-5 lg:mt-0">
          <h1 className="text-orange text-[70px] font-markazi font-medium leading-none">
            Citrus Grove
          </h1>
          <p className="text-[36px] font-medium font-markazi leading-none text-green align-text-top">
            New York City
          </p>
          <p className="w-[425px] font-medium text-[16px] text-black font-karla py-4 leading-relaxed">
            In the heart of the city that never sleeps, Citrus Grove draws
            inspiration from the rich tapestry of cultures that make up New York
            City. Our menu reflects this diversity, offering a fusion of global
            cuisines that pays homage to the city's cosmopolitan spirit. <br />
            Make a reservation or drop by for an unforgettable dining experience
            that will leave you craving more. We look forward to serving you in
            the heart of New York City.
          </p>
        </article>
        <div className="">
          <Image
            src={restaurantone}
            alt="restaurant one"
            width={400}
            className="pt-10 mb-10 lg:mb-0"
          />
          <Image
            src={restauranttwo}
            alt="restaurant two"
            width={400}
            className="hidden lg:block top-1/2 left-1/2 transform translate-x-1/4 -translate-y-1/4"
          />
        </div>
      </div>
    </div>
  )
}
