import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

const Api = () => {


    const [data,setData]=useState([]);
    const [data1,setData1]=useState([]);
    const [data2,setData2]=useState([]);
    const [data3,setData3]=useState([]);



   useEffect(()=>{
     const api=async()=>{
        const res=await fetch("https://jsonplaceholder.typicode.com/posts");
        const response=await res.json();
        setData(response);
     }
     api();
   },[])


  useEffect(()=>{
    const promise=new Promise((resolve,reject)=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res)=>{
            if(!res){
                reject("Wrong API");
            }
            return res.json();
        })
        .then((res)=>resolve(res))
        .catch((err)=>reject(err))
    })
    promise.then((res)=>setData1(res))
  },[])

  useEffect(()=>
    {
        try{
            const data=async()=>{
                const res=await fetch("https://jsonplaceholder.typicode.com/posts");
                const response=await res.json();
                setData2(response);
              }
              data();
        }catch(err){
            console.log(err)
        }
  },[ ])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setData3(res.data); // Set the data with the response's data property
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []); 
  return (
    <div>
    <ul>
      {data3.map((ele) => (
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
  )
}

export default Api