import './App.css';
import NavBar from './Components/Navbar/NavBar';
import FavList from './Components/favList/FavList';
import Home from './Components/home/Home'

import { Routes, Route } from 'react-router-dom';


function App() {


  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/fav' element={<FavList />}/>
      </Routes>



    </>
  );

}

export default App;
