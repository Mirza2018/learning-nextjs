import React from 'react';

const page = ({params}) => {

    const singleBlog=blogs.find(b=>b.id==params.id)
    return (
        <div className='p-20 m-64 border border-red-600'>
            <h2>{singleBlog.title}</h2>
            <p>{singleBlog.description}</p>
        </div>
    );
};

export default page;

const blogs=[
    {
      "id": 1,
      "title": "Introduction to Electrical Engineering",
      "description": "This blog post provides a comprehensive introduction to the basics of electrical engineering, covering key concepts and fundamental principles."
    },
    {
      "id": 2,
      "title": "The Fundamentals of Circuit Design",
      "description": "Learn the essentials of designing electrical circuits, including components, connections, and troubleshooting tips."
    },
    {
      "id": 3,
      "title": "Understanding Electromagnetism",
      "description": "Explore the concepts of electromagnetism and its applications in modern technology, from motors to wireless communication."
    },
    {
      "id": 4,
      "title": "Digital vs. Analog Signals: What's the Difference?",
      "description": "A detailed comparison between digital and analog signals, including their uses, advantages, and disadvantages in various applications."
    },
    {
      "id": 5,
      "title": "Top 5 Microcontrollers for Beginners",
      "description": "An overview of the best microcontrollers for beginners, highlighting their features, programming environments, and project ideas."
    },
    {
      "id": 6,
      "title": "Renewable Energy Systems in Electrical Engineering",
      "description": "Discover the role of renewable energy systems in electrical engineering and how they're shaping the future of sustainable power."
    }
  ]
  