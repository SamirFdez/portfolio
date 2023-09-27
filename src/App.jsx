import React from 'react'
import './App.css'
import { NavbarMenu } from './components/navbar/navbar'
import { Hero } from './components/hero/hero'
import { Footer } from './components/footer/footer'

function App() {
  return (
    <>
      <div className="App">
        <NavbarMenu/>
        <Hero/>
        <Footer/>
      </div>

    </>
  )
}

export default App
