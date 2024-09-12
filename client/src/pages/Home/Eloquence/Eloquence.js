import React from 'react'
import Header from '../../../Components/Header'
import Footer from '../../../Components/Footer'
import EloquenceIntro from './EloquenceIntro'
// import EloquenceAbout from './EloquenceAbout'
import EloquenceContent from './EloquenceContent'
// import EloquenceTest from './EloquenceTest'
// import EloquenceBanner from './EloquenceBanner'
import EloquenceFaq from './EloquenceFaq'

function Eloquence() {
  return (
    <>
        <Header/>
        <EloquenceIntro/>
        {/* <EloquenceAbout/> */}
        {/* <EloquenceTest/> */}
        <EloquenceContent/>
        {/* <EloquenceBanner/> */}
        <EloquenceFaq/>
        <Footer/>
        
    </>
  )
}

export default Eloquence