import React, { useEffect, useState } from 'react'
import { AiOutlineCaretDown,AiOutlineCaretUp } from 'react-icons/ai'
import './Projects.css'
import { db } from '../utils/firebase'
import { onValue, ref } from "firebase/database";


const Card=({item})=>{
    const [expand,setexpand] = useState(false)
    let expand_card = expand ? {
        'min-height': 'fit-content',
        'transition-duration': '1s',
        'transition-property': 'min-height',
      }:{
        'min-height': '0px',
        'display': 'none',
        'transition-duration': '1s',
        'transition-property': 'min-height',
      }
    return (
            <div className="card_1">
                <div className="hea">
                    <div className="heading_1">{item.name}</div>

                    {
                        expand?(
                            <AiOutlineCaretUp color='#ffd000' size={18} onClick={()=>(setexpand(!expand))}/>
                        ):(
                            <AiOutlineCaretDown color='#ffd000' size={18} onClick={()=>(setexpand(!expand))}/>
                        )
                    }
                </div>
                <div className="cont_projects" style={expand_card}>
                    {item.details}
                </div>
            </div>
    )
}

function Projects() {

    const [projects,setprojects] = useState([])
    useEffect(()=>{
        setprojects([])
      const query = ref(db, "Projects");
      return onValue(query, (snapshot) => {
        const data = snapshot.val();
        
        if (snapshot.exists()) {
          Object.values(data).map((project) => {
            setprojects((projects) => [...projects, project]);
            console.log(projects)
          });
        }
      
      })
    },[]);
    
  return (
    <div className="main" id='projects'>
        <p className="pro_head"><span>P</span>rojects</p>
        
        {
            projects.reverse().map((item,index)=>(
                <Card item={item}/>
            ))
        }
    </div>
    )
}

export default Projects