import React from 'react'
import Nav from '../layout/nav/nav'
import Hero from '../components/hero'
import About from '../components/about'
import MandV from '../components/mandv'
import Core from '../components/core'

export default function landing() {
  return (
    <div>

      <Nav />
      <Hero />
      <About />
      <MandV />
      <Core />
    </div>
  )
}
