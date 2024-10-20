import {useState} from "react"

export default function commentsForm(){
    let [formData, setFormData] = useState({
        username:"",
        remark:"",
        rating:1
    });

    let handleFormData = (event) => {
        setFormData((currData) => {
            return { ...currData, [event.target.name] : event.target.value };
        });
    };

    let handleSubmit = (event) => {
        console.log(formData);
        event.preventDefault();
        setFormData({
            username:"",
            remark:"",
            rating:1
        })
    };
    return (
      <div>
        <h3>Give your Comment</h3>
        <form  onSubmit={handleSubmit}>
            <label htmlFor = "username">Username : </label> &nbsp;&nbsp;
            <input type="text" placeholder="Enter Username" value={formData.username} name="username" onChange={handleFormData} id="username"
            />
            <br /><br />
            <label htmlFor = "remark">Remark : </label> &nbsp;&nbsp;
            <textarea
                name="remark"
                id="remark"
                placeholder="Write your thought"
                value={formData.remark}
                onChange={handleFormData}
            ></textarea>
            <br /><br />
            <label htmlFor = "rating">Rating : </label> &nbsp;&nbsp;
            <input 
                id="rating"
                type="number" 
                placeholder="Rating" 
                min={1} 
                max={5} 
                value={formData.rating} 
                name="rating"onChange={handleFormData}
            />
            <br /><br />
            <button >Add Comment</button>
        </form>
      </div>
    );
}