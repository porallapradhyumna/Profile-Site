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
  return (
    <div className="App">
      <NavBar></NavBar>
      <header className="App-header">
        <HomeScreen/>
      </header>
      <body className='body'>
      
      <About />

      <Experience/>

      <Academics/>

      <Details/>

      </body>
      
      <div className='flt_btn' onClick={Open_Contact_Stack} style={flt_btn_style} >
        <BsLink45Deg color='black' size={30}/>
        {
          open_stack?(
            <>
            <SiGmail  color='black' size={30}/>
            <AiFillLinkedin color='black' size={30}/>
            <AiFillGithub color='black' size={30}/>
            <AiFillPhone  color='black' size={30}/></>
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