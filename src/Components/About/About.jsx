import React, { useEffect, useState } from 'react'
import "./About.css"
import { db } from '../utils/firebase'
import { onValue, ref } from "firebase/database";
import { ReactComponent as Rectangle } from '../../Assets/Rectangle4.svg'



export default function About() {
  const [about,setabout] = useState()
  useEffect(()=>{
    const query = ref(db, "About");
    return onValue(query, (snapshot) => {
      const data = snapshot.val();
      
      if (snapshot.exists()) {
        Object.values(data).map((project) => {
          setabout(project)
        });
      }
    
    })
  })
  return (
    <div className="About" id="about">
      <div className="rect">
      <Rectangle/>
      </div>
      <div className="text_container">
      <p className="text">
        About Me:<br/>
        {about}
        </p>
      </div>
    </div>
  )
}
