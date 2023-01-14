import React, { useEffect, useState } from 'react'
import "./Experience.css"
import { db } from '../utils/firebase'
import { onValue, ref } from "firebase/database";
import { Grid } from '@mui/material';
export default function Experience() {
    const [experiences,setexp] = useState([])

    useEffect(()=>{
      setexp([])
      const query = ref(db, "Experience");
      return onValue(query, (snapshot) => {
        const data = snapshot.val();
        
        if (snapshot.exists()) {
          Object.values(data).map((project) => {
            setexp((projects) => [...projects, project]);
            console.log(experiences)
          });
        }
      
      })
    },[]);
  return (
    <div className="exper" id="experience">
      <div className="title_container">
        <p><span>E</span>xperience</p>
      </div>
      
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }} style={{padding:'1%',display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
        {experiences.map((item, index) => (
          <Grid item xs={6} key={index} style={{display: 'flex',justifyContent: 'center',alignItems: 'center'}}>
            <div className="card">
              <div className="card_in1">
              <p className="comp_name">{item.Company}</p>
              <div className="pos_container">
              <p>{item.position} &nbsp;</p>
              {
                (item.Type)?<p>({item.Type})</p>:<></>
              }
              </div>
              <p>{item.description}</p>
              </div>
              <div className="card_in2">
                {
                  (item.Type)?<p>{item.From} - {item.To}</p>:<p>{item.From} - present</p>
                }
              
              </div>
            </div>
          </Grid>
        ))}
      </Grid>
      
    </div>
  )
}
