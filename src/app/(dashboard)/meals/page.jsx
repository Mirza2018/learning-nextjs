
import Meals from '@/component/Meals';
import React  from 'react';
const page = () => {

    return ( 
        <div className='p-12'>
            <h1 className='text-3xl font-semibold text-red-400'>Choose your meals</h1>
            <p>Chosse meals of your choice by searching....</p>
           <Meals/>
        </div>
    );
};

export default page;