import React from 'react'
import NavBar from '../NavBar/NavBar'
import "./HomeScreen.css"
import { ReactComponent as Shape } from '../../Assets/Ellipse2.svg'
import { ReactComponent as ImgShape } from '../../Assets/Ellipse1_photo.svg'
import { SiGmail } from "react-icons/si";
import {AiFillLinkedin} from "react-icons/ai"
import {AiFillGithub} from "react-icons/ai"
import {AiFillPhone} from "react-icons/ai"
export const HomeScreen = () => {
  return (
    <div className="home" id="home">
      <div className="half1">
        <div className="content">
          <p className="name">I’m Pradhyumna <span className="span">Poralla</span><br></br>
          student at <br></br>
          University of North Texas</p> 
          <p className="subject">Master’s in Artificial Intelligence</p>
        </div>
        <div className="current_job">
          <p className="cj_p">
          Now:<br/>
          Working as Research Assistant <br/>
          Under/Mentor : Dr.Yunhe Feng <br/>
          Responsible AI Lab<br/>
          <a href='https://yunhefeng.me/lab/' className='a-cj-p'>https://yunhefeng.me/lab/</a>
          </p>
        </div>
      </div>
      <div className="half2">
        <div className="img_content">
          <Shape className="shape"/>
          <ImgShape className="img"/>
        </div>
        <div className="icons_content">
          <div className="contact_icons">
          <a href="mailto:pradhyumnaporalla99@gmail.com"><SiGmail  className='icon'/></a>
          <a href="https://www.linkedin.com/in/pradhyumna-poralla-60ab641a3/"><AiFillLinkedin className='icon'/></a>
          <a href="https://github.com/porallapradhyumna"><AiFillGithub className='icon'/></a>
          <a href="tel:+19408433284"><AiFillPhone  className='icon'/></a>
          </div>
        </div>
      </div>
    </div>
  )
}
