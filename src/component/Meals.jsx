"use client"
import { mealsData} from '@/app/Services/postApi';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

const Meals = () => {
    const [search,setSearch]=useState('')
    const [meals,setMeals]=useState([])

//   mealsData(search,setMeals)
    
    
const handleText=(e)=>{
    const value=e.target.value

    
    setSearch(value.slice(0,1))

}
    // useEffect(()=>{
    //     mealsData(search,setMeals)
    // },[search])

    console.log(meals.meals);

    return (
        <div className='mt-12'>
        <input onChange={handleText} type="text" className='p-4 border-4   text-slate-900' />
        <button  onClick={()=> mealsData(search,setMeals)} className="bg-red-400 p-4">Search</button>
      

          {meals &&  
          <div className='grid grid-cols-4 p-3 m-10'> 
            { meals?.meals?.map(m=>
            <div className='border border-red-600 p-3 m-4' key={m.idMeal}>
            <Image src={m?.strMealThumb}  height={500} width={767} alt="..."/>
                <h2><span className='text-3xl font'>Name:</span>{m.strMeal}</h2>
                <p><span className='text-3xl font'>Instructions</span>: {m.strInstructions}</p>
            </div>
           )}
           </div>}
    </div>
    );
};

export default Meals;