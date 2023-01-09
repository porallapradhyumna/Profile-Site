import React from 'react'
import NavBar from '../NavBar/NavBar'
import "./HomeScreen.css"
import { ReactComponent as Shape } from '../../Assets/Ellipse2.svg'
import { ReactComponent as ImgShape } from '../../Assets/Ellipse1_photo.svg'
export const HomeScreen = () => {
  return (
    <div className="home">

    <div className="Heading">
      <h1>I'm Pradhyumna Poralla </h1>
    </div>
      <Shape className="shape"/>
      <ImgShape className="img"/>
    </div>
  )
}
