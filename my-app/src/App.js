import './App.css';
import NavBar from './Components/Navbar/NavBar';
import Home from './Components/home/Home'
import Movie from './Components/movie/Movie'
import { Routes, Route } from 'react-router-dom';


function App() {


  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/favMovi' element={<Movie />} />
      </Routes>



    </>
  );

}

export default App;
