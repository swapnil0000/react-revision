import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Post from './Post';

const Home = () => {
  const [posts, setPosts] = useState([]);


  useEffect(()=>{
     const callback= async()=>{
     const result=await fetch("https://jsonplaceholder.typicode.com/posts");
     const res= await result.json()
     setPosts(res)}
     callback();
  },[])


  // useEffect(()=>{

  //   const promise=new Promise((resolve,reject)=>{
  //     fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((res)=>{
  //       if(!res){
  //         reject("Api is not working");
  //       }
  //       return res.json();
  //     })
  //     .then((res)=>resolve(res))
  //     .catch((err)=>reject(err))  
  //   })
  //   promise.then((res)=>setPosts(res))
  // },[])


  // useEffect(() => {
  //   const allPosts = async () => {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  //     const response = await res.json();
  //     setPosts(response);
  //   };
  //   allPosts();
  // }, []);

  return (
    <div>
      <ul>
        {posts.map((ele) => (
          <li
            key={ele.id}
            style={{
              backgroundColor: 'lightgray',
              margin: '10px',
              listStyle: 'none',
              padding: '10px',
              cursor: 'pointer',
            }}
          >
            <Link
              to={`/post/${ele.id}`}
              style={{ textDecoration: 'none', color: 'inherit' }} // Link styles
            >
              {ele.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
