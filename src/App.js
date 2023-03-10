import './App.css';
import { HomeScreen } from './Components/Home/HomeScreen';
import NavBar from './Components/NavBar/NavBar';
import About from './Components/About/About';
import { useEffect, useState } from 'react';
import Experience from './Components/Experience/Experience';
import Academics from './Components/Acedamics/Academics';
import Details from './Components/Details/Details';
//import { ReactComponent as Chatbubble } from './Assets/Chat_bubble.svg' //Chat_bubble.svg
import { BsLink45Deg } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { AiFillGithub, AiFillLinkedin, AiFillPhone } from 'react-icons/ai';
import Projects from './Components/Projects/Projects';

function App() {
  const [open_stack,setOpen_stack] = useState(false)

  const Open_Contact_Stack = ()=>{
      setOpen_stack(!open_stack)
      console.log(open_stack)
  }
  let flt_btn_style = open_stack ? {
    'transform': 'translate(0px,0%)',
    'transition-duration': '1s',
    'transition-property': 'transform',
    'justify-content':'space-evenly'
  }:{
    'transform': 'translate(0px,90%)',
    'transition-duration': '1s',
    'transition-property': 'transform',
  }

  const contact_pressed = (value) =>{
      setOpen_stack(value)
  }

  return (
    <div className="App">
      <NavBar contactpressed={contact_pressed}></NavBar>
      <header className="App-header">
        <HomeScreen/>
      </header>
      <body className='body'>
      
      <About />

      <Experience/>

      <Academics/>

      <Details/>

      <Projects/>

      </body>
      
      <div className='flt_btn'  style={flt_btn_style} onClick={()=>{setOpen_stack(!open_stack)}} >
        <BsLink45Deg color='black' size={30} onClick={Open_Contact_Stack}/>
        {
          open_stack?(
            <>
            <a href="mailto:pradhyumnaporalla99@gmail.com"><SiGmail  color='black' size={30}/></a>
            <a href="https://www.linkedin.com/in/pradhyumna-poralla-60ab641a3/"><AiFillLinkedin color='black' size={30} /></a>
            <a href="https://github.com/porallapradhyumna"><AiFillGithub color='black' size={30}/></a>
            <a href="tel:+19408433284"><AiFillPhone  color='black' size={30}/></a>
            </>
          ):(
            <></>
          )
        }
        
      </div>
    </div>
  );
}

export default App;
//<GrChat color='black' size={25} style={{position: 'fixed'}}></GrChat>

/**
 * <div className='inner' style={{'display':open_stack ? 'flex':'none',}}>
            <SiGmail  className='icon' size={30}/>
            <AiFillLinkedin className='icon' size={30}/>
            <AiFillGithub className='icon' size={30}/>
            <AiFillPhone  className='icon' size={30}/>
        </div>

    <div className='cht_bubble'>
          <BsLink45Deg color='black' size={30}/>
          <p>Connect with me</p>
        </div>
 */