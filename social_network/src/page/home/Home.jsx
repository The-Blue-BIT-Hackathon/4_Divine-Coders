import React, { useEffect, useState } from "react";
import { db } from "../../firebase/Firebase";
import "./Home.css";
import { getDocs, collection } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import checkLogedIn from "../../hook/checkLogin";
const Home = () => {

  const [likepost, setLikepost] = useState(false);
const[isloggedIn,setLoggedIn]=useState(false);
  const like=()=>{
    setLikepost(!likepost);
    if(likepost)
    {
      
    }
    else
    {
      
    }
  }
const navigate=useNavigate();
  const [loading, setLoading] = useState(false);
  const postCollectionRef = collection(db, "posts");
  useEffect(() => {

       if(checkLogedIn)
       {
        console.log("Welcome")
       }
       else{
        navigate('/login')
       }

    // console.log("In Home Screen");
    getPostList();
  }, []);
  const [posts, setPosts] = useState([]);

  const getPostList = async () => {
    try {
      const data = await getDocs(postCollectionRef);
      setLoading(true);
      // console.log(data);
      const filteredData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(filteredData);
 
      setPosts(filteredData);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  const results = [];
  posts.forEach((post, index) => {
    results.push(
        <div className="post_main_body" key={index}>
          <div className="post_m_body">
            <div className="nav_post">
            <div className="logo_post">
              <img src="" alt="photo" />
            </div>
            <div className="head">{post.useremail}</div>
            </div>
            <div className="post_body">{post.post}</div>
            <div className="icon_post">
            <i className={`${likepost==false?"fa-regular fa-heart":"fa-solid fa-heart"}`} onClick={like}></i>
            <div className="like_post">{post.likes}</div>
            </div>
          </div>
        </div>
    );
  });
  // console.log(typeof posts);
  return <div>{loading ? <div>Loading</div> : <div>{results}</div>}</div>;
};

export default Home;
