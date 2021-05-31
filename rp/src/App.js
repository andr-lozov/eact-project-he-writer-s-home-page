import React from 'react'
import './App.css';
import Hd from './Hd';
import Nav from './Nav';
import {BrowserRouter, Route} from "react-router-dom";
import Quot from './Quot';
import Foot from './Foot'

function App() {
   
    return (
      <div className='app-wrapper'>
       <Hd/>
       <Nav/>
       <Quot/>
       <Foot/>
        
        
    </div>
  );
}

export default App;
