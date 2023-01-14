import React, { useState } from 'react'
import "./NavBar.css"
export default function NavBar({contactpressed}) {
  const [clciked,setClicked] = useState("home")
  const [value,setValue] = useState(false)
  const contact_pressed = (value) => {
    contactpressed(value)           
  } 
  let s = "lis_p"
  return (
    <div className="nav">
      <div className="List_opt">
        <a className={(clciked === "home")?"lis_p_clicke":s} href='/#home' onClick={()=>{setClicked("home")}}>Home</a>
        <a className={(clciked === "about")?"lis_p_clicke":s} href='/#about' onClick={()=>{setClicked("about")}}>About</a>
        <a className={(clciked === "experience")?"lis_p_clicke":s} href='/#experience' onClick={()=>{setClicked("experience")}}>Experience</a>
        <a className={(clciked === "academics")?"lis_p_clicke":s} href='/#academics' onClick={()=>{setClicked("academics")}}>Academics</a>
        <a className={(clciked === "details")?"lis_p_clicke":s} href='/#details' onClick={()=>{setClicked("details")}}>Details</a>
        <a className={(clciked === "projects")?"lis_p_clicke":s} href='/#projects' onClick={()=>{setClicked("projects")}}>Projects</a>
        <a className={(clciked === "contact")?"lis_p_clicke":s} onClick={()=>{setClicked("contact"); setValue(!value);contact_pressed(value) }}>Contact</a>
      </div>
    </div>
  )
}
