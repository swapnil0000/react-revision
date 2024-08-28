import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Post = () => {
    const {id}=useParams();
    const [data,setData]=useState([]);
    useEffect(() => {
        const allPosts = async () => {
          const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
          const response = await res.json();
          setData(response)
        };
        allPosts();
      }, []);

  return (
    <div style={{height:'500px',width:'100%',backgroundColor:'black'}}>

       <h1 style={{color:'white'}}>{data.title}</h1>
       <h1 style={{color:'white'}}>{data.body}</h1>
     
    </div>
  )
}

export default Post