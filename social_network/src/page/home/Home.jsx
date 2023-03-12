import React, { useEffect,useState } from 'react'
import { db } from '../../firebase/Firebase';
import { getDocs,collection } from 'firebase/firestore';
const Home = () => {


  const [posts,getPosts]=useState([]);
  const postCollectionRef=collection(db,"posts");
  useEffect(()=>{
getPostList()
  },[])


  const getPostList=async()=>{
    try{

      const data=await getDocs(postCollectionRef);
      console.log(data)
      const filteredData=data.docs.map((doc)=>({
        ...doc.data(),
        id:doc.id
      }));
      console.log(filteredData)
      getPosts(filteredData);
      console.log(posts)
    }
    catch(err)
    {
      console.error(err)
    }

  }
  return (
    <div>
        
    </div>
  )
}

export default Home