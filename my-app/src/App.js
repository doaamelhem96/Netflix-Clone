
import NavBar from './Components/Navbar/NavBar';
import FavList from './Components/favList/FavList';
import Home from './Components/home/Home'

import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {


  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favList' element={<FavList/>}/>
      </Routes>



    </>
  );

}

export default App;
