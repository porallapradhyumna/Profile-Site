import logo from './logo.svg';
import './App.css';
import { HomeScreen } from './Components/Home/HomeScreen';
import NavBar from './Components/NavBar/NavBar';

function App() {
  return (
    <>
    <NavBar></NavBar>
    <div className="App">
      <header className="App-header">
        <HomeScreen/>
      </header>
      <body>
        
      </body>
    </div>
    </>
  );
}

export default App;
