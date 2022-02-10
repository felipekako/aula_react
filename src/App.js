
import './App.css';
import NaveBar from './components/navbar';
import { BrowserRouter } from "react-router-dom";
import Home from './components/home';
import Fps from './components/fps';
import { Routes, Route } from "react-router-dom";
function App (){
  return(
    <>
       <NaveBar/>
       <Routes>
         <Route path='/'elpement={ <Home/>}/>
         <Route path='/Fps'element={ <Fps/>}/>
       </Routes>
           </>
   
  )
}

export default App;