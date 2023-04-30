import './App.css';
import { Route, Routes } from 'react-router';
<<<<<<< HEAD
import Home from './Components/home/Home';
import FavList from './Components/favList/FavList';
=======
import Home from './Components/home/Home.js';
>>>>>>> class-18
import NavBar from './Components/Navbar/NavBar';


function App() {
  return (

    <>
   <NavBar/>
    <div id = 'main'>
      <Routes>
      <Route path='/' element = {<Home/>}></Route>
<<<<<<< HEAD
      <Route path='/favList' element = {<FavList/>}></Route>
      </Routes>
    </div>
   
=======
      </Routes>
    </div>
  
>>>>>>> class-18
    </>
  );
}

export default App;