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

const Aboutpage = () => {

    return (
        <div>
            This is about page
            <AboutContent/>
            <Image src="https://i.ibb.co/4Phssk0/Screenshot-2024-08-22-010252.png" height={1080} width={1920} alt="" />
 
        </div>
    );
};

export default Aboutpage;