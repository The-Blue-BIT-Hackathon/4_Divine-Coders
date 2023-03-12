import React, { useState } from "react";
import './Addpost.css';
import { db } from "../../firebase/Firebase";
import { addDoc,collection } from "firebase/firestore";
const Addpost = () => {
 

  const [userEmail,setUserEmail]=useState("");
  const [text, setText] = useState("")
  const postCollectionRef = collection(db, "posts");
  const changeText=(e)=>{
    setText(e.target.value)
    console.log(text);
  }
  const submitPost=async(e)=>{
try{
e.preventDefault();
  await addDoc(postCollectionRef,{
    likes:0,
    post:text,
    useremail:"arnavd2840@gmail.com"
   })

}catch(err)
{
  console.error(err)
}

   
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
