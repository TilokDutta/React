import {useState} from "react"
export default function Joker(){
    const url = "https://official-joke-api.appspot.com/random_joke";

    

    let getNewJoke = async() => {
        let response = await fetch(url);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        setJoke(jsonResponse)
    }

    let [joke, setJoke] = useState(getNewJoke)
    return(
        <div>
            <h3>Joker!</h3>
            <button onClick={getNewJoke}> New Joke </button>
            <h4> Setup : {joke.setup}</h4>
            <h4> Punchline : {joke.punchline}</h4>
        </div>
    )
}