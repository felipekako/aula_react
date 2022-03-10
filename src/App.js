
import './App.css';
import NaveBar from './components/navbar';
import Home from './components/home';
import Fps from './components/fps';
import { Routes, Route } from "react-router-dom";
import Rodape from './components/rodape';
import Favoritos from './components/favoritos';

function App (){

  return(
    <>
       <NaveBar/>
       <Routes>
       <Route path='/favoritos' element={ <Favoritos/>}/>
         <Route path='/' element={ <Home/>}/>
         <Route path='/fps' element={ <Fps/>}/>
       </Routes>
      
    </>
   
  )
}

export default App;