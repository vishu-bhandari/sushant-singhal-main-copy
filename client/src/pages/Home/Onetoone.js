import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import Intro from './one-to-one/Intro'

import OneContent from './one-to-one/OneContent'
import OneTest from './one-to-one/OneTest'
import Onebanner from './one-to-one/Onebanner'

import EmpowerFaq from './one-to-one/EmpowerFaq'

function Onetoone() {
  return (
    <>
    <Header/>
    <Intro/>
    <OneTest/>
   
    <OneContent/>
    <Onebanner/>
    <EmpowerFaq/>
    
    <Footer/>
  


    </>
  )
}

export default Onetoone