import Link from 'next/link';
import React from 'react';

const AboutContent = () => {
    return (
        <div className='flex justify-between'>
            <Link href="about/mission">Mission</Link>
            <Link href="/about/history" >History</Link>
            
        </div>
    );
};

export default AboutContent;