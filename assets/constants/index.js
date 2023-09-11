import greeksalad from '../images/greeksalad.jpg'
import bruchetta from '../images/bruchetta.jpg'
import lemondessert from '../images/lemondessert.jpg'
import delivery from '../images/delivery.png'
import one from '../images/1.png'
import two from '../images/2.png'
import three from '../images/3.png'
import four from '../images/4.png'
import instagram from '../images/instagram.png'
import facebook from '../images/facebook.png'
import youtube from '../images/youtube.png'

export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '/menu', label: 'Menu' },
  { href: '/reservations', label: 'Reservations' },
  { href: '/order', label: 'Order Online' },
  { href: '/login', label: 'Login' },
]

export const menuItems = [
  {
    imgURL: greeksalad,
    name: 'Greek Salad',
    price: '$12.99',
    description:
      'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    tag: 'Order a Delivery',
    icon: delivery,
  },

  {
    imgURL: bruchetta,
    name: 'Bruchetta',
    price: '$5.99',
    description:
      'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    tag: 'Order a Delivery',
    icon: delivery,
  },

  {
    imgURL: lemondessert,
    name: 'Lemon dessert',
    price: '$5.00',
    description:
      'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
    tag: 'Order a Delivery',
    icon: delivery,
  },
]

export const restaurantTestimonials = [
  {
    name: 'John Smith',
    imgURL: four,
    rating: 5,
    review: "The food here is amazing! I had the best steak I've ever tasted.",
  },
  {
    name: 'Jane Doe',
    imgURL: two,
    rating: 4,
    review: 'A cozy and charming place with delicious desserts. Loved it!',
  },
  {
    name: 'David Johnson',
    imgURL: three,
    rating: 4.5,
    review:
      'The service was excellent, and the seafood options were outstanding.',
  },
  {
    name: 'Sarah Williams',
    imgURL: one,
    rating: 5,
    review: "I can't get enough of their pasta dishes. Great atmosphere too!",
  },
]

export const socialMedialinks = [
  {
    icon: facebook,
    link: 'www.facebook.com',
    name: 'Facebook',
  },

  {
    icon: instagram,
    link: 'www.instagram.com',
    name: 'Instagram',
  },

  {
    icon: youtube,
    link: 'www.youtube.com',
    name: 'Youtube',
  },
]
