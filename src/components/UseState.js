import React, { useRef, useState } from 'react'
const UseState = () => {
    const [data,setData]=useState({
        username:"",
        email:"",
        mobile:""
    })
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(data)
    }
    const handleChange=(e)=>{
        const {name,value}=e.target;
        console.log(name,value);
        setData({...data,[name]:value})
    }


    const usernameRef=useRef(null);
    const emailRef=useRef(null);
    const mobileRef=useRef(null);



    const handleRefSubmit=(e)=>{
        e.preventDefault();

       const username=usernameRef.current.value
       const email=emailRef.current.value
       const mobile=mobileRef.current.value

       console.log(username,email,mobile )


    }






    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
        
            <form  style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}} onSubmit={handleSubmit}>
            <h2>Controlled Form using useState</h2>

                <div style={{ display: 'flex', flexDirection: 'column', margin: '20px' }}>
                    <label>Username</label>
                    <input   name='username' onChange={handleChange} style={{ width: '400px', padding: '10px' }} placeholder='username' type='text' />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', margin: '20px' }}>
                    <label>Email</label>
                    <input  name='email' onChange={handleChange} style={{ width: '400px', padding: '10px' }} placeholder='email' type='text' />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', margin: '20px' }}>
                    <label>Mobile No</label>
                    <input  name='mobile' onChange={handleChange} style={{ width: '400px', padding: '10px' }} placeholder='94959...' type='number' />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', margin: '20px' }}>
                    <button type='submit' style={{ padding: '10px', fontSize: '17px', backgroundColor: 'grey', border: 'none' }}> Submit </button>
                </div>
            </form>
                         
            <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}  onSubmit={handleRefSubmit}>
            <h2>Uncontrolled Form using useRef </h2>
            <div style={{ display: 'flex', flexDirection: 'column', margin: '20px' }}>
                <label>Username</label>
                <input   ref={usernameRef} style={{ width: '400px', padding: '10px' }} placeholder='username' type='text' />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', margin: '20px' }}>
                <label>Email</label>
                <input ref={emailRef} style={{ width: '400px', padding: '10px' }} placeholder='email' type='text' />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', margin: '20px' }}>
                <label>Mobile No</label>
                <input   ref={mobileRef} style={{ width: '400px', padding: '10px' }} placeholder='94959...' type='number' />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', margin: '20px' }}>
                <button type='submit' style={{ padding: '10px', fontSize: '17px', backgroundColor: 'grey', border: 'none' }}> Submit </button>
            </div>
        </form>
        </div>
    )
}

export default UseState