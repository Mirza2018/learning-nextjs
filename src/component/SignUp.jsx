"use client"
import React from 'react';

const SignUp =() => {




    const handleSubmit= async (e)=>{
e.preventDefault()
const fromData=new FormData(e.target)
const {name,email,password}=Object.fromEntries(fromData)
console.log(name,email,password);

const newUser={name,email,password}
try {
    const res=await fetch("http://localhost:3000/api/auth/signup/new-user",{
    method:"POST",
    body:JSON.stringify(newUser),
    headers:{
         'Content-Type': 'application/json'
    }
})


console.log(res);

} catch (error) {
    console.log(error);
    
}




    }








    return (
        <div className='place-items-center self-center text-center '>
            <form onSubmit={handleSubmit} action="">

                <label htmlFor="Name">Name</label>
                <br />
                <input 
                type="text"
                name="name"
                placeholder='Your Name'
                className='border-3 border-green-400 rounded border-transparent p-3 text-slate-700'/>


<br /><br />

                <label htmlFor="Email">Email</label>
                <br />
                <input 
                type="text"
                name="email"
                placeholder='Your Email'
                className='outline-none border-2 border-green-400 rounded border-transparent p-3 text-slate-700'/>

<br /><br />

                <label htmlFor="Email">Password</label>
                <br />
                <input 
                type="password"
                name="password"
                placeholder='Your Password'
                className='outline-none border-2 border-green-400 rounded border-transparent p-3 text-slate-700'/>
                <br /><br />


                <button  className='outline-none border-2 bg-green-400 rounded border-transparent p-3 text-slate-700' type="submit" >Submit</button>
            </form>
        </div>
    );
};

export default SignUp;