// import React from 'react'
function clickMe(){
    console.log("Hello")
}
export default function Button(){
    return(
        <div>
            <button onClick={clickMe}>Click here !</button>
        </div>
    )
}