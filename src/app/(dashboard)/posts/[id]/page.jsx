import { getData, getSingleData } from '@/app/Services/postApi';
import React from 'react';


export const generateMetadata=async ({params})=>{
    const post=await getSingleData(params.id)
    return  { 
        title:post.title,
        description:post.body.split(" ")
    
    }
}



const post =async ({params}) => {
    // console.log(params);
    // const data=await getData()
    // const post =data.find(post=>post.id==params.id)
    // console.log(post);
    const post=await getSingleData(params.id)
    
    return (
        <div>
            <div className='m-44 p-16 border-4 border-cyan-700'>
                <h3>Title:{post.title}</h3>
                <p>body{post.body}</p>
            </div>
        </div>
    );
};

export default post;