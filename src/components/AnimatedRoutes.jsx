import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'

import Header from './Header'
import Home from './Home'
import Services from './Services'
import About from './About'
import Popular from './Popular'
import Review from './Review'
import Footer from './Footer'
import ScrollUp from './ScrollUp'

const AnimatedRoutes = () => {
  const location = useLocation()

  useEffect(() => {
    AOS.init({ duration: 1700, once: false ,mirror: true,})
  }, [])

  useEffect(() => {
    AOS.refresh()
  }, [location])

  return (
    <>
      <Header />
      {/* Show all sections on one page */}
      <Home />
      <Services />
      <About />
      <Popular />
      <Review />
      <Footer />
      <ScrollUp />
    </>
  )
}

export default AnimatedRoutes
