
import './App.css'

import { useState } from 'react'



function App() {
let [counter,setCounter]=useState(0)


 
 const addValue = ()=>{
// counter= counter + 1
    setCounter(counter+1)
 }
 
 const removeValue = ()=>{ 
      setCounter(counter-1)
   }
  return (
    <>
     <h1>counter value :{counter}</h1> 
     <button onClick={addValue}>Add value</button>
     <br/>
    <button onClick={removeValue} >remove value</button>

    </>
  )
}

export default App
