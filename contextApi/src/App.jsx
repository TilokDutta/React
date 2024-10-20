import { useState } from 'react'
import userContextProvider from './context/userContextProvider'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <userContextProvider>
      <h1>Hi there  new to React ? Dont't worry we are here. </h1>
    </userContextProvider>
  )
}

export default App
