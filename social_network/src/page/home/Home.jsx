import React, { useEffect, useState } from "react";
import { db } from "../../firebase/Firebase";
import { getDocs, collection } from "firebase/firestore";
const Home = () => {
  const [loading, setLoading] = useState(false);
  const postCollectionRef = collection(db, "posts");
  useEffect(() => {
    console.log("In Home Screen");
    getPostList();
  }, []);
  const [posts, setPosts] = useState([]);
  const [post, setPost] = useState([]);

  const getPostList = async () => {
    try {
      const data = await getDocs(postCollectionRef);
      setLoading(true);
      console.log(data);
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
      <div key={index}>
        <h1>{post.useremail}</h1>
        <h1>{post.post}</h1>
      </div>
    );
  });
  console.log(typeof posts);
  return <div>{loading ? <div>Loading</div> : <div></div>}</div>;
};

export default Home;
