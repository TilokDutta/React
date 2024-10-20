import {useState} from "react"

function init(){
    console.log("Init was logged")
    return Math.random();
}

export default function Counter(){
    let [count, setCount] = useState(init);//initialised
    console.log("this is after the state call")

    let incCount = () => {
        setCount((currCount) => {
            return currCount + 1;
        });    
        console.log(`Count value is : ${count}`)    
    }
    return (
        <>
            <h3 >Count = {count}</h3>
            <button onClick={incCount}>Increase Count</button>
        </>
    )
}