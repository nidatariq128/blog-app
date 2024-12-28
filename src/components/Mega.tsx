import React from 'react'
import BlogCard from '../components/BlogCard';

const Mega = () => {
  const posts = [


    {
      id: '1',
      title: "Hunza Valley",
      description: "A beautiful region known for its majestic mountains, lush landscapes, and rich culture.",
      date: "10-11-2024",
      imageUrl: "/images/img1.jfif"
    },
   
  
    {
      id: '2',
      title: "Nanga Parbat",
      description: "Nanga Parbat (8126 m above sea level), the ninth highest mountain in the world.",
      date: "10-11-2024",
      imageUrl: "/images/img2.jfif"
    },

    {
      id: '3',
      title: "Skardu",
      description: "A stunning mountainous region, known for its stunning landscapes, and proximity to K2.",
      date: "10-11-2024",
      imageUrl: "/images/img3.jpg"
    },
    
    {
      id: '4',
      title: "Azad Kashmir",
      description: "Apart from the natural beauty, Azad Kashmir is also known for its rich cultural heritage.",
      date: "10-11-2024",
      imageUrl: "/images/img4.png"
    },
    {
      id: '5',
      title: "Naran Kagan",
      description: "Naran Kaghan Valley is one of Pakistan's most visited tourist destinations, renowned for its breathtaking natural beauty and stunning landscapes.",
      date: "10-11-2024",
      imageUrl: "/images/img5.jpg"
    },
    {
      id: '6',
      title: "Gilgit",
      description: "Gilgit is the capital city of Gilgit-Baltistan in northern Pakistan.",
      date: "10-11-2024",
      imageUrl: "/images/img6.png"
    },
    {
      id: '7',
      title: "Neelam Valley,Kashmir",
      description: "Neelum the most beautiful District of Azad Jambo Kashmir Verdant forests predominate in the Neelam Valley",
      date: "10-11-2024",
      imageUrl: "/images/img7.jpg"
    },
    {
      id: '8',
      title: "Naltar Valley",
      description: "Renowned for its vibrant alpine scenery, lush forests, crystal-clear lakes.",
      date: "10-11-2024",
      imageUrl: "/images/img8.png"
    },
    {
      id: '9',
      title: "Phander Lake",
      description: "Stunning freshwater lake known for its crystal-clear waters, scenic surroundings.",
      date: "10-11-2024",
      imageUrl: "/images/img9.jpg"
    },
  ];

  return (
    <div className='my-14 mr-4 ml-4 lg:ml-6 lg:mr-6'>
      <h1 className='text-3xl  font-bold text-center my-8 text-gray-200 animate-color-change'>
        {" "}
        Explore Northern Pakistan<br/> A Paradise for Nature Lovers!
        </h1>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'>
          {posts.map((post, index) => (
            <div className='fade-in' key={post.id}>
              <div className='blog-card'>
                <BlogCard post={post} isDarkBackground={index % 2 === 0}/> 
              </div>
            </div>
          ))}

        </div>
    </div>
  )
}

export default Mega