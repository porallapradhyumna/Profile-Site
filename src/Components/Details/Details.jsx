import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react'
import './Details.css';

import { db } from '../utils/firebase'
import { onValue, ref } from "firebase/database";

export default function Details() {
    const [Programming,setexp] = useState([])
    const [Skills,setSkills] = useState([])
    const [FrameWork,setFrameWork] = useState([])
    useEffect(()=>{
      setexp([])
      const query = ref(db, "ProgrammingLanguage");
      return onValue(query, (snapshot) => {
        const data = snapshot.val();
        
        if (snapshot.exists()) {
          Object.values(data).map((project) => {
            setexp((projects) => [...projects, project]);
            //console.log(Skills)
          });
        }
        }
      )
    },[]);
    useEffect(()=>{
      setSkills([])
        const query = ref(db, "Skills");
        return onValue(query, (snapshot) => {
          const data = snapshot.val();
          
          if (snapshot.exists()) {
            Object.values(data).map((project) => {
              setSkills((projects) => [...projects, project]);
              console.log(Skills)
            });
          }
          }
        )
      },[]);

      useEffect(()=>{
        setFrameWork([])
        const query = ref(db, "FrameWorks");
        return onValue(query, (snapshot) => {
          const data = snapshot.val();
          
          if (snapshot.exists()) {
            Object.values(data).map((project) => {
              setFrameWork((projects) => [...projects, project]);
              //console.log(Skills)
            });
          }
          }
        )
      },[]);

  return (
    <div className="details" id="details">
        <div className="skills">
            <h1><span>P</span>rogramming <span>S</span>kills</h1>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }} style={{padding:'1%',display: 'flex',justifyContent: 'center',alignItems: 'center',maxWidth:"80%"}}>
            {
                Programming.map((cat,index)=>(
                    <div className="chip" key={index}>{cat}</div>
                ))
            }
            </Grid>
            <h1><span>G</span>ood <span>A</span>t</h1>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }} style={{padding:'1%',display: 'flex',justifyContent: 'center',alignItems: 'center',maxWidth:"80%"}}>
            {
                Skills.map((cat,index)=>(
                    <div className="chip" key={index}>{cat}</div>
                ))
            }
            </Grid>
            <h1><span>F</span>rame <span>W</span>orks</h1>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }} style={{padding:'1%',display: 'flex',justifyContent: 'center',alignItems: 'center',maxWidth:"80%"}}>
            {
                FrameWork.map((cat,index)=>(
                    <div className="chip" key={index}>{cat}</div>
                ))
            }
            </Grid>
        </div>
    </div>
  )
}
