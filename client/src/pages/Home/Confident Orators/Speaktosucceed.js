import React from 'react'
import Intro from './Intro'
import Header from '../../../Components/Header'
import Footer from '../../../Components/Footer'
import SpeakAbout from './SpeakAbout'
import SpeakContent from './SpeakContent'
import SpeakTest from './SpeakTest'
import SpeakBanner from './SpeakBanner'
import ScrollToTopButton from '../ScrollToTopButton'
import SpeakFaq from './SpeakFaq'



function Speaktosucceed() {
  return (
    <>
      <Header/>
      <ScrollToTopButton/>
        <Intro/>
        <SpeakAbout/>
        <SpeakContent/>
        <SpeakTest/>
        <SpeakBanner/>
        <SpeakFaq/>
        <Footer/>
    </>
  )
}

export default Speaktosucceed