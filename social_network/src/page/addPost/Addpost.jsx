import React, { useState } from "react";
import './Addpost.css';
const Addpost = () => {
  const submitPost=()=>{
    console.log("Enter ");
  }
  const [text, setText] = useState("")
  const changeText=(e)=>{
    setText(e.target.value)
    console.log(text);
  }
  return (
    <>
      <div className="post_main_box">
        <div className="post_box1">
          <div className="post">Add Post</div>
          <form onSubmit={submitPost}>
            <input type="file" id="myFile" name="filename" />
            <input className="submit-post" type="submit" />
          </form>
        </div>
        <div className="post_box2">
          <textarea id="review" name="review" rows="10" cols="50" placeholder="Enter Description" value={text} onChange={changeText}>
          </textarea>
        </div>
      </div>
    </>
  );
};

export default Addpost;
