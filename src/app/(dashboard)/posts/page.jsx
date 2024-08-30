import { getData } from '@/app/Services/postApi';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import React from 'react';
import { authOptions } from '../api/auth/[...nextauth]/route';

export const metadata = {
    title:"Posts",
    description: "Start",
    keywords:['k','l','m']
  };




const PostsPage =async () => {
    const data= await getData()

    const session=await getServerSession(authOptions)
    console.log({session});
    
    
    return (
        <div className='grid grid-cols-4'>
            {data.slice(0,10).map(({id,title,body:description})=>

<div className='border-2 border-red-500 m-8 p-4' key={id}>
    <h3>Title:{title}</h3>
    <p>Description:{description}</p>
    <Link href={`/posts/${id}` }> <button className='px-4 py-2 bg-green-500 mt-2 mx-2 rounded'>Go to details</button> </Link>

</div>

            )}
        </div>
    );
};

export default PostsPage;