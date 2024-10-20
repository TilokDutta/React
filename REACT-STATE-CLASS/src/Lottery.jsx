import {useState} from 'react'
import {genTicket,sum} from './helper.js'
import Ticket from './Ticket.jsx'
export default function Lottery({n,winSum}){
    let [ticket,setTicket] = useState(genTicket(n))
    let isWin = sum(ticket) === winSum;
    let buyTicket = () => {
        setTicket(genTicket(n));
    }
    return (
        <div>
            <h1>Lottery Game</h1> 
            <Ticket ticket={ticket}/>
            <br />
            <button onClick={buyTicket}> Buy a New Ticket</button>
            <h3> {isWin && "Congrats on winning the lottery ticket"}</h3>
        </div>
    )
}