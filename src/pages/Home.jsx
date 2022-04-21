import React from 'react'
import Anouncement from '../components/Anouncement'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Slider from '../components/Slider'

export default function Home() {
  return (
    <div>
        <Slider/>
        <Products/>
    </div>
  )
}
