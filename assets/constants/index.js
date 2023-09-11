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
import oneDish from '../menu images/1.jpg'
import twoDish from '../menu images/2.jpg'
import threeDish from '../menu images/3.jpg'
import fourDish from '../menu images/4.jpg'
import fiveDish from '../menu images/5.jpg'
import sixDish from '../menu images/6.jpg'
import sevenDish from '../menu images/7.jpg'
import eightDish from '../menu images/8.jpg'
import nineDish from '../menu images/9.jpg'

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

export const famousDishes = [
  {
    imgURL: oneDish,
    name: 'Pizza Margherita',
    description:
      'A classic Italian pizza topped with tomato sauce, fresh mozzarella cheese, basil leaves, and a drizzle of olive oil.',
    price: '$10.99',
    tag: 'Order a Delivery',
    icon: delivery,
  },

  {
    imgURL: twoDish,
    name: 'Sushi Sashimi',
    description:
      'A Japanese dish consisting of thinly sliced raw fish or seafood served without rice, often accompanied by soy sauce and wasabi.',
    price: '$14.99',
    tag: 'Order a Delivery',
    icon: delivery,
  },
  {
    imgURL: threeDish,
    name: 'Tacos al Pastor',
    description:
      'A popular Mexican street food made with marinated and spit-roasted pork, usually served in small tortillas with pineapple and cilantro.',
    price: '$9.25',
    tag: 'Order a Delivery',
    icon: delivery,
  },
  {
    imgURL: fourDish,
    name: 'Chicken Tikka Masala',
    description:
      'A creamy and tomato-based Indian curry dish with marinated and roasted chicken pieces, typically served with rice or naan bread.',
    price: '$13.50',
    tag: 'Order a Delivery',
    icon: delivery,
  },
  {
    imgURL: fiveDish,
    name: 'Pasta Carbonara',
    description:
      'An Italian pasta dish made with eggs, Pecorino Romano cheese, guanciale (cured pork jowl), and black pepper.',
    price: '$11.25',
    tag: 'Order a Delivery',
    icon: delivery,
  },
  {
    imgURL: sixDish,
    name: 'Pho',
    description:
      'A Vietnamese noodle soup made with beef or chicken broth, rice noodles, and various toppings such as herbs, bean sprouts, and lime.',
    price: '$10.50',
    tag: 'Order a Delivery',
    icon: delivery,
  },
  {
    imgURL: sevenDish,
    name: 'Sushi Rolls',
    description:
      'Japanese sushi rolls made with seaweed, rice, and various fillings, such as avocado, cucumber, fish, and more.',
    price: '$12.99',
    tag: 'Order a Delivery',
    icon: delivery,
  },
  {
    imgURL: eightDish,
    name: 'Lasagna',
    description:
      'An Italian pasta dish made with layers of flat pasta, ricotta cheese, meat sauce, and mozzarella cheese, baked to perfection.',
    price: '$12.75',
    tag: 'Order a Delivery',
    icon: delivery,
  },
  {
    imgURL: nineDish,
    name: 'Miso Soup',
    description:
      'A traditional Japanese soup made with fermented soybean paste (miso), seaweed, tofu, and sometimes green onions or other ingredients.',
    price: '$4.75',
    tag: 'Order a Delivery',
    icon: delivery,
  },
]
