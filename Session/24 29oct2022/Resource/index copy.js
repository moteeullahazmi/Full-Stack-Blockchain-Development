import React from 'react'
import ReactDOM from 'react-dom';
import './index.css'

function Ineuron()
{
  return(
    <div className='hyder'>
      <Blockchain/>
      <Blockchain/>
      <Blockchain/>
      <Blockchain/>
      <ReactJS/>
   </div>
   
  );
 
}

const Blockchain = ()=>
{
   return <h4>Blockchain + React is Deadly </h4>
}
const ReactJS = ()=>
{
   return <h4>Learning React can get us More pay. FOCUS is key </h4>
}

 ReactDOM.render( <Ineuron />
  , document.getElementById('root'));