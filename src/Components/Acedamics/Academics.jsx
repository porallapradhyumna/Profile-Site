import React, { useEffect, useState } from 'react'
import "./Academics.css"
import { db } from '../utils/firebase'
import { onValue, ref } from "firebase/database";
export default function Academics() {
    const [academics,setexp] = useState([])

    useEffect(()=>{
      setexp([])
      const query = ref(db, "Academics");
      return onValue(query, (snapshot) => {
        const data = snapshot.val();
        
        if (snapshot.exists()) {
          Object.values(data).map((project) => {
            setexp((projects) => [...projects, project]);
            console.log(academics)
          });
        }
      
      })
    },[]);
  return (
    <>
    <div className="heading" id="academics"><span>A</span>cademics</div>
    <div className="Ace">

      {academics.map((item,index) =>(
        <div className="part1" key={index}>
        <div className="part2">
          {(item.School)?(
          <p className="univ">{item.University}<br/>({item.School})<br/>{item.Address}</p>
          ):(
          <p className="univ">{item.University}<br/>{item.Address}</p>
          )}
          <p className="edu">{item.level} in {item.major} <br/>{item.Start} - {item.End} </p>
        </div>
      </div>
      )
      )}
      
    </div>
    </>
  )
}
