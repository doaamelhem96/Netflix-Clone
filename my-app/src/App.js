import './App.css';
import { Route, Routes } from 'react-router';
import Home from './Components/home/Home';
import FavList from './Components/favList/FavList';
import NavBar from './Components/Navbar/NavBar';


function App() {
  return (
    <>
   <NavBar/>
    <div id = 'main'>
      <Routes>
      <Route path='/' element = {<Home/>}></Route>
      <Route path='/favList' element = {<FavList/>}></Route>
      </Routes>
    </div>
   
    </>
  );
}

export default App;