import { useState } from 'react'
import './App.css'
import Counter from './counter.jsx'
import LikeButton from './likeButton.jsx'
import LudoBoard from './ludoBoard.jsx'
import Todo from './todo.jsx'
import Lottery from './Lottery.jsx'
function App() {

  return (
    <>
      {/* <LikeButton/> */}
      {/* <Counter/> */}
      {/* <LudoBoard/> */}
      {/* <Todo/> */}
      <Lottery n={4} winSum = {20}/>
    </>
  )
}

export default App
