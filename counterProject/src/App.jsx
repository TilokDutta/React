import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter,setCounter] = useState(0)


  // let counter = 0;

  const addvalue = () =>{
    // counter = counter+1;
    console.log("value added",counter);
    setCounter(counter+1);
  }
  const removeValue = () =>{
    setCounter(counter-1);
  }
  return (
    <>
      <h1>simple React</h1>
      <h3>counter : {counter}</h3>
      <button
      onClick={addvalue}>Increase</button><br />
      <button
      onClick={removeValue}>Decrease</button>
    </>
  )
}

export default App
