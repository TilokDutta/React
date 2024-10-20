import {useState} from "react"

export default function LudoBoard(){
    let [moves,setMoves] = useState({blue : 0, red : 0,green : 0,yellow : 0});

    let updateBlueMoves = () => {
        setMoves( (prevMoves) => {
            return { ...prevMoves, blue:prevMoves.blue +1}
        })
    }
    let updateGreenMoves = () => {
        setMoves( (prevMoves) => {
            return { ...prevMoves, green:prevMoves.green+1}
        })
    }
    let updateRedMoves = () => {
        setMoves( (prevMoves) => {
            return { ...prevMoves, red:prevMoves.red+1}
        })
    }
    let updateYellowMoves = () => {
        setMoves( (prevMoves) => {
            return { ...prevMoves, yellow:prevMoves.yellow+1}
        })
    }

    return(
        <div>
            <h2>Game Begins</h2>
            <div className = "board">
                <p>Blue Moves : {moves.blue}</p>
                <button style={{backgroundColor:"blue"}} onClick={updateBlueMoves}> +1</button>
                <p>Green Moves : {moves.green}</p>
                <button style={{backgroundColor:"green"}}onClick={updateGreenMoves}> +1</button>
                <p>Red Moves : {moves.red}</p>
                <button style={{backgroundColor:"red"}}onClick={updateRedMoves}> +1</button>
                <p>Yellow Moves : {moves.yellow}</p>
                <button style={{backgroundColor:"yellow", color:"black"}}onClick={updateYellowMoves}> +1</button>

            </div>
        </div>
    )
}