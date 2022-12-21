import React from 'react'
import Home1 from "../../components/Home1/Home1"
import CardHome from '../../components/CardHome/CardHome'
import Slider from '../../components/Slider/Slider'
import Testimonio from '../../components/Testimonio/Testimonio'


export default function Home() {
  return (
    <div style={{backgroundColor:'#000'}}>
    <Home1/>
    <CardHome/>
    <Slider/>
    <Testimonio/>
    </div>
  )
}