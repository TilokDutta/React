import { useState } from "react";

export default function LikeButton() {
  let [isLiked, setIsLiked] = useState(false);

  let clicked = () => {
    setIsLiked(!isLiked);
  };
  let bstyle = {fontSize:"30px", color:"red"}
  let styleHeart = {color : "red",fontSize:"50px"};
  return (
    <div>
      <p onClick={clicked}>
        {
            isLiked ? (<i className="fa-solid fa-heart" style={styleHeart}></i>) : (<i className="fa-regular fa-heart" style={bstyle}></i>)
        }  
      </p>
    </div>
  );
}
