
import AboutContent from '@/component/AboutContent';
import Image from 'next/image';
import React from 'react';
export const metadata = {
    title:{
   absolute:"only about"    
   },
   description: "Start",
   keywords:['k','l','m']
 };

const  getTime=async()=>{
    // const res=await fetch("http://localhost:3000/time",{cache:"no-store"})
    const res=await fetch("http://localhost:3000/time",{next:{revalidate:5}})
    const data=res.json()
    return data
}



const Aboutpage =async () => {
const currentTime=await getTime()
console.log(currentTime.currentTime);

    return (
        <div>
            This is about page
            <AboutContent/>
            <h2>Time: {currentTime.currentTime} </h2>
 
        </div>
    );
};

export default Aboutpage;