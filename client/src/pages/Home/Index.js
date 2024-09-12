import React from 'react'

import Intro from './Intro'
import About from './About'
import Products from './Products'
import Testimonials from './Testimonials'
import Contact from './Contact'
import Videos from './Videos'

import Footer from '../../Components/Footer'
import Work from './Work'

import ScrollToTopButton from './ScrollToTopButton'
import Accordion from './Accordion'
import AutomaticPopup from '../../Components/AutomaticPopup'

function Home() {
  
  return (
    <>
    <div>
        {/* <Header/> */}
        <ScrollToTopButton/>
        <Intro/>
        <AutomaticPopup/>
        <About/>
        <Products/>
        <Testimonials/>
        <Work/>
        <Accordion/>
        <Videos/>
        <Contact/>
       <Footer/>
       

    </div>
    </>
  )
}

export default Home