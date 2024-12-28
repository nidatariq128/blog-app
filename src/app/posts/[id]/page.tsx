"use client"
import React from 'react'
import CommentSection from '@/components/CommentSection';
import AuthorCard from '@/components/AuthorCard';

const posts = [
    {
        id: '1',
        title: "Hunza Valley",
        description: `Hunza Valley, often called Heaven on Earth, is a mesmerizing region in northern Pakistan. Surrounded by towering peaks of the Karakoram range, it is divided into three parts: Upper, Central, and Lower Hunza, each with its unique charm. Upper Hunza boasts the iconic Passu Cones and the Khunjerab Pass, a gateway to China. Central Hunza is home to the historic Baltit and Altit Forts, showcasing centuries-old traditions. The valley's orchards bloom with apricots, cherries, and apples, adding vibrant colors to the landscape. Visitors can enjoy trekking, cultural festivals, and breathtaking vistas. Hunza's warm hospitality, delicious local cuisine, and serene environment offer an unforgettable experience.`,
        image: "/images/img1.jfif"
    },

    {
        id: '2',
        title: "Nanga Parbat",
        description: `Nanga Parbat (8126 m above sea level), the ninth highest mountain in the world, is located in the Gilgit-Baltistan region of Pakistan, on the western extremity of the Himalayan crest around which the Indus river skirts into the plains.
The name Nanga Parbat derives from Sanskrit and means ‘nude mountain’ but the mountain is also called Diamir in the valley of the same name, from ‘deomir’ which in the local Shina language means ‘huge mountain’. An old legend in the Diamir valley tells about a goddess or fairy queen living on the top of the mountain in a crystal castle guarded by ice dragons and ice snakes.`,
        image: "/images/img2.jfif"
    },
    {
        id: '3',
        title: "Skardu",
        description: `Skardu, a gem in the Gilgit-Baltistan region, is famous for its surreal landscapes and towering mountains. Nestled among the Karakoram and Himalayas, it serves as a gateway to some of the world's tallest peaks, including K2. Visitors can explore Shangrila Lake, Satpara Lake, and ancient forts like Shigar Fort, blending history with scenic beauty. The town is also a base for thrilling treks to Baltoro Glacier and Deosai National Park, known as the "Land of Giants." Skardu offers a mix of adventure, culture, and tranquility, making it a must-visit for nature enthusiasts and explorers alike.`,
        image: "/images/img3.jpg"
    },
  
    {
        id: '4',
        title: "Azad Kashmir",
        description: "Apart from the natural beauty, Azad Kashmir is also known for its rich cultural heritage. I had the opportunity to attend a local cultural event, where I witnessed traditional Kashmiri music and dance performances. The colorful attire, the soulful music, and the graceful dance moves were a treat to my senses, and I was fascinated by the rich cultural traditions of the region.Azad Kashmir is also home to some of the most picturesque lakes in the region. I had the opportunity to visit the mesmerizing Banjosa Lake, nestled in the midst of thick pine forests. The turquoise-blue waters of the lake against the backdrop of lush green mountains were a sight to behold. I also visited the famous Ratti Gali Lake, which is located at an altitude of 12,130 feet above sea level. The pristine waters of the lake surrounded by snow-capped peaks were a breathtaking sight, and I was in awe of the untouched natural beauty.",
        image:"/images/img4.png"
    },
    {
        id: '5',
        title: "Naran Kagan",
        description: "Naran Kaghan Valley is one of Pakistan's most visited tourist destinations, renowned for its breathtaking natural beauty and stunning landscapes. It is in the northwestern part of the Khyber Pakhtunkhwa province, surrounded by the mighty Himalayas and the Karakoram Mountains ranges. The valley is a haven for nature lovers, adventure seekers, and those seeking a peaceful retreat from the hustle and bustle of city life. Thousands of people plan a tour to Naran Kaghan Valley every year.",
        image: "/images/img5.jpg"
    },
    {
        id: '6',
        title: "Gilgit",
        description: `Gilgit, the capital of Gilgit-Baltistan, is a vibrant city surrounded by breathtaking mountain ranges. Situated at the confluence of the Gilgit and Hunza rivers, it serves as a gateway to the spectacular Karakoram and Himalayas. The city is rich in history, with landmarks such as the Kargah Buddha and centuries-old rock carvings. Its bustling bazaars offer local handicrafts, gemstones, and delicious regional cuisine. Gilgit's strategic location and cultural diversity make it a hub for travelers exploring northern Pakistan.`,
        image: "/images/img6.png"
    },
    {
        id: '7',
        title: "Neelam Valley, Kashmir",
        description: 'The Neelam River was known before Partition as Kishan Ganga and was subsequently renamed after the village of Neelam. It flows down from the Gurez Valley in Indian Jammu and Kashmir and roughly follows first a western and then a south-western course until it joins the Jhelum River at Muzaffarabad. The valley is a thickly wooded[citation needed] region with an elevation ranging between 4,000 feet (1,200 m) and 7,500 feet (2,300 m), the mountain peaks on either side reaching 17,000 feet (5,200 m). Neelum Valley is 144 kilometres (89 mi) long. Most of the valley is taken up the Neelam Valley District. The district is bordered on the south-west by Muzaffarabad District, which also encompasses the lower reaches of the valley, to the north-west beyond the mountains lies the Kaghan Valley in Khyber Pakhtunkhwa’s Mansehra District, to the north and north-east are the Diamer, Astore and Skardu districts of Gilgit-Baltistan. To the south and east are the Kupwara and Bandipora districts of Indian Kahsmir. The Line of Control runs through the valley – either across the mountains to the south-east, or in places right along the river, with several villages on the left bank falling on the Indian side of the border. ',
        image: "/images/img7.jpg"
    },
    {
        id: '8',
        title: "Naltar Valley",
        description: `Naltar Valley is a pristine alpine destination known for its dense forests, vibrant meadows, and colorful lakes. Located near Gilgit, it offers a peaceful escape into nature. The valley's famous Satrangi Lake and Blue Lake are renowned for their surreal hues, reflecting the surrounding mountains. In winter, Naltar becomes a skiing paradise, attracting enthusiasts from around the globe. Its enchanting beauty and tranquil environment make Naltar Valley a favorite destination for nature lovers and adventurers alike.`,
        image: "/images/img8.png"
    },
    {
        id: '9',
        title: "Phander Lake",
        description: `Phander Lake, nestled in the Ghizer district, is often described as "nature's masterpiece." Its turquoise waters, surrounded by lush green meadows and dramatic mountains, create a breathtakingly serene setting. The lake is a popular spot for fishing and boating, while the nearby Phander Valley offers charming villages and picturesque landscapes. Visitors are captivated by the tranquility and beauty of this hidden gem, making it a must-visit destination in northern Pakistan.`,
        image: "/images/img9.jpg"
    }
];



const post = ({ params } : {params: {id: string}}) => {
  const {id} = params;
  const post = posts.find((p) => p.id === id);

  if(!post) {
    return (
        <div className='h-screen flex justify-center items-center'>
            <h2 className='text-3xl font-bold'>404: Post Not Found </h2>                     
        </div>
    );
  }

  const renderParagraphs = (description: string) => {
    return description.split("/n").map((para, index) => (
        <p key={index} className='mt-4 text-justify'>
            {para.trim()}
        </p>
    ));
  };

  return (
    <div className='mx-w-3xl mx-auto p-5'>
        <h1 className='md:text-4xl text-3xl font-bold text-red-600 text-center animate-color-change'>
            {" "}
            {post.title}
            </h1>

            {post.image && (
                <img
                src={post.image}
                alt={post.title}
                className='w-full h-auto rounded-md mt-4'
                />
            )}

            <div className='mt-6 text-lg text-slate-700'>
                {renderParagraphs(post.description)}

            </div>

        <CommentSection postId={post.id}/>
        <AuthorCard/>
    </div>
  )

}

export default post