import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // const [count, setCount] = useState(0)
  const [color,setColor] = useState("black");

  return (
    <div className="w-full h-screen duration-20" style={{backgroundColor:color}}>
      <div className="fixed flex flexwrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white p-2">
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-
        2 px-4 rounded" onClick={() => setColor("green")}>green</button>
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-
        2 px-4 rounded" onClick={() => setColor("red")}>red</button>
        <button className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-
        2 px-4 rounded" onClick={() => setColor("yellow")}>yellow</button>
        </div>
      </div>
    </div>
  )
}

export default App
