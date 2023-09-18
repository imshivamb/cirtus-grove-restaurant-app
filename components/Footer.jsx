import Image from 'next/image'
import footerlogo from '../assets/images/footerlogo.png'
import Link from 'next/link'
import { navLinks, socialMedialinks } from '@/assets/constants'

const Footer = () => {
  return (
    <>
      <footer className="flex flex-wrap flex-col md:flex-row items-center justify-between mx-auto max-w-screen-lg w-full leading-none">
        <div>
          <Link href="/">
            <Image
              src={footerlogo}
              alt="footer-logo"
              width={165}
              height={260}
            />
          </Link>
        </div>
        <ul
          className="flex flex-col justify-start 
            items-center gap-2 mt-4 "
        >
          <li className="text-xl font-karla leading-normal text-orange font-extrabold">
            Navigation
          </li>
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
        <div
          className="flex flex-col justify-start 
            items-center gap-2 mt-4 "
        >
          <h3 className="font-karla font-bold text-orange text-xl leading-normal">
            Contact
          </h3>
          <h5 className="underline underline-offset-4 text-green font-bold text-lg font-karla">
            Address
          </h5>
          <p className="text-center font-medium font-karla">
            123 Citrus Street <br />
            New York, NY 10001 <br />
            United States
          </p>
          <h5 className="underline underline-offset-4 text-green font-bold text-lg font-karla">
            Email
          </h5>
          <p className="text-center font-medium font-karla underline underline-offset-4">
            info@citrusrv.com
          </p>
          <h5 className="underline underline-offset-4 text-green font-bold text-lg font-karla">
            Phone No.
          </h5>
          <p className="text-center font-medium font-karla">(555) 123-4567</p>
        </div>
        <div
          className="flex flex-col justify-start 
            items-start gap-2  leading-none pb-10 mt-4"
        >
          <h5 className="font-karla font-bold text-orange text-xl ">
            Social Media
          </h5>
          {socialMedialinks.map((item) => (
            <div key={item.name}>
              <Link
                href={item.link}
                className="flex flex-1 items-center gap-1 my-1"
              >
                <Image src={item.icon} alt={item.name} width={25} height={25} />
                <span className="font-karla font-bold text-green text-[16px] px-2 items-start hover:underline">
                  {item.name}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </footer>
    </>
  )
}

export default Footer
