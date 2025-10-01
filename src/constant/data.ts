//  -------------------- Navlinks
export const navlinks = [
  {
    label: 'Home',
    path: '#home',
  },
  {
    label: 'Destination',
    path: '#destination',
  },
  {
    label: 'Hotels',
    path: '/hotels',
  },
  {
    label: 'Flights',
    path: '/flights',
  },
  {
    label: 'Bookings',
    path: '/bookings',
  },
]

//  -------------------- Services
import WeatherImage from '@/assets/services/weather.svg'
import FlightImage from '@/assets/services/flight.svg'
import EventImage from '@/assets/services/events.svg'
import CustomizationImage from '@/assets/services/customization.svg'

export const services = [
  {
    title: 'Calculated Weather ',
    description: 'Built Wicket longer admire do barton vanity itself do in it.',
    image: WeatherImage,
  },
  {
    title: 'Best Flights',
    description: 'Engrossed listening. Park gate sell they west hard for the.',
    image: FlightImage,
  },
  {
    title: 'Local Events',
    description: 'Barton vanity itself do in it. Preferd to men it engrossed listening. ',
    image: EventImage,
  },
  {
    title: 'Customizations',
    description: 'We deliver outsourced aviation services for military customers',
    image: CustomizationImage,
  },
]

//  -------------------- Top Destination

import Destination1 from '@/assets/destinations/des3.jpg'
import Destination2 from '@/assets/destinations/dest1.jpg'
import Destination3 from '@/assets/destinations/dest2.jpg'

export const destinations = [
  {
    location: 'Rome, Italy',
    price: '5.42',
    duration: '10 ',
    image: Destination1,
  },
  {
    location: 'London, UK',
    price: '4.2',
    duration: '12 ',
    image: Destination2,
  },
  {
    location: 'Full Europe',
    price: '15',
    duration: '28 ',
    image: Destination3,
  },
]

//  -------------------- Testimonials

import Client1 from '@/assets/clients/client-1.jpg'
import Client2 from '@/assets/clients/client-2.jpg'
import Client3 from '@/assets/clients/client-3.jpg'

export const testimonials = [
  {
    name: 'Mike Taylor',
    title: 'Business Executive',
    message:
      '“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”',
    image: Client1,
  },
  {
    name: 'David Nguyen',
    title: 'Travel Enthusiast',
    message:
      ' As a busy professional, time is of the essence. This website made planning my vacation a breeze, allowing me to focus on what matters most: making memories with my family.',
    image: Client2,
  },
  {
    name: 'Mike Taylor',
    title: 'Business Executive',
    message:
      "I've been using this service for years, and it never disappoints. The convenience of booking my flights, accommodations, and activities all in one place saves me time and stress every trip.",
    image: Client3,
  },
]
