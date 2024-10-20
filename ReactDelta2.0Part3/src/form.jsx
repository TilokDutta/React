function handleFormSubmit(event){
    console.log("Form was submitted")
    event.preventDefault();
}

export default function Form(){
    return(
        <form onSubmit={handleFormSubmit}>
            <input type="text" placeholder = "Write something" />
            <button onClick={handleFormSubmit}>Submit</button>
        </form>
    )
}