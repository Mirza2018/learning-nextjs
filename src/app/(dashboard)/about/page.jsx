import AboutContent from '@/component/AboutContent';
import React from 'react';
export const metadata = {
    title:{
   absolute:"only about"    
   },
   description: "Start",
   keywords:['k','l','m']
 };

const Aboutpage = () => {

    return (
        <div>
            This is about page
            <AboutContent/>
 
        </div>
    );
};

export default Aboutpage;