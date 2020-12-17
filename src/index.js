import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import logo from '../src/assets/logo.svg';
import dna from '../src/assets/dna.gif';
import micro from '../src/assets/micro.png';


ReactDOM.render(
  <React.StrictMode>   
   <h1>Biomedicina</h1>
   <corpo>
   <img src={dna} alt ='DNA'height='250px'/>
   <App /> 
   <img src={micro}  alt ='Micro' height='250px'/>
     </corpo> 
    
   
    <h2>
    <img src={logo}  alt ='unisales'/> 
    </h2>
  </React.StrictMode>,  
  document.getElementById('root')
);
