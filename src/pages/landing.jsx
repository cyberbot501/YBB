import React from 'react'
import Nav from '../layout/nav/nav'
import Hero from '../components/hero'
import About from '../components/about'
import MandV from '../components/mandv'
import Core from '../components/core'
import Ourleader from '../components/ourlearders'
import Footer from '../layout/footer/footer'
import Stay from '../components/stay'
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';



export default function Landing() {

  const location = useLocation();

  useEffect(() => {
      if (location.hash) {
          const section = document.querySelector(location.hash);
          if (section) {
              section.scrollIntoView({ behavior: 'smooth' });
          }
      }
  }, [location]);
  return (
    <div>

      <Nav />
      <Hero />
      <section id="about"><About /></section>
      <MandV />
      <Core />
      <Ourleader />
      <Stay />
      <Footer />
    </div>
  )
}
