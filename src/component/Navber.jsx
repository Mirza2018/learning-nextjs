"use client"
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams, usePathname, useRouter } from 'next/navigation';
import React from 'react';

const Navber = () => {
  const pathName=usePathname()
  const navigate=useRouter()
  const session=useSession()
// console.log(session.data?.user?.image);

const handleClick=()=>{
  navigate.push('/api/auth/signin')
}

  
  const links=[
    {
      title:"About",
      path:"/about"
    },
    {
      title:"Meals",
      path:"/meals"
    },
    {
      title:"Posts",
      path:"/posts"
    },
    {
      title:"Sevices",
      path:"/services"
    },
    {
      title:"Protfolio",
      path:"/protfolio"
    },
    {
      title:"Contacts",
      path:"/contacts"
    },
    {
      title:"Blogs",
      path:"/blog"
    },
    {
      title:"Sign up",
      path:"/api/auth/signup"
    },
  ]
  return (
    <nav className="px-6 py-4 flex justify-between items-center bg-red-600 text-white">
    <h2 className='text-3xl'>Next<span className='text-violet-600'> Hero</span> </h2>
    <ul  className=' flex justify-between items-center'>
      <li className='space-x-3'>
        {
          links.map(link=><Link className={`${link.path ===pathName && "text-cyan-400"}`} key={link.path} href={link.path}>{link.title}</Link>)
        }
      </li>
      {
        session.status==="authenticated" ? <>
        <div className='flex gap-3 mx-3'>
            <h4>{session?.data?.user?.name}</h4>
        <Image 
        className='rounded object-contain  mx-2 '
        height={10}
        width={25}
        alt={session?.data?.user?.name}
        src={session?.data?.user?.image}
        />
      
        </div>
        

        
        <button onClick={signOut} className="px-4 py-1 rounded mx-2  bg-teal-500  hover:bg-teal-600 ">LogOut</button>
        
        </> :  <button onClick={handleClick} className="px-4 py-1 rounded mx-2  bg-teal-500  hover:bg-teal-600 ">Login</button>
      }
      
      
    </ul>
  </nav>
  );
};

export default Navber;