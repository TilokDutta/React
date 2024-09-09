import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './card'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-blue-800 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      <Card channel="TilokDutta" btnText="Allow Me"/>
      <Card channel="Soumi Ghosh" btnText = "Don't Disturb"/>
    </>
  )
}

export default App
