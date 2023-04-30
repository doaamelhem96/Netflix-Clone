import './App.css';
import { Route, Routes } from 'react-router';
import Home from './Components/home/Home.js';
import NavBar from './Components/Navbar/NavBar';


function App() {
  return (

    <>
   <NavBar/>
    <div id = 'main'>
      <Routes>
      <Route path='/' element = {<Home/>}></Route>
      </Routes>
    </div>
  
    </>
  );
}

export default App;