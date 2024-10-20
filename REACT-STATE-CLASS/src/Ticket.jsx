import TicketNum from './TicketNum.jsx'
import './ticket.css'
export default function Ticket({ticket}){
    return(
        <div className="tickets">
            {ticket.map((num,idx) => (
                <TicketNum num = {num} key ={idx}/>
            ))}
        </div>
    )
}