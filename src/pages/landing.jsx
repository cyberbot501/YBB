import React from 'react'
import Nav from '../layout/nav/nav'
import Hero from '../components/hero'
import About from '../components/about'
import MandV from '../components/mandv'
import Core from '../components/core'
import Ourleader from '../components/ourlearders'
import Footer from '../layout/footer/footer'
import Stay from '../components/stay'

export default function landing() {
  return (
    <div>

      <Nav />
      <Hero />
      <About />
      <MandV />
      <Core />
      <Ourleader />
      <Stay />
      <Footer />
    </div>
  )
}
