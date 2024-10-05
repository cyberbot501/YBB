import React from 'react'
import Nav from '../layout/nav/nav'
import Hero from '../components/hero'
import About from '../components/about'
import MandV from '../components/mandv'

export default function landing() {
  return (
    <div>

      <Nav />
      <Hero />
      <About />
      <MandV />
    </div>
  )
}
