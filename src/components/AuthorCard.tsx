import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const AuthorCard = () => {
  return (
    <>
    <div className='bg-slate-100 shadow-lg rounded-lg p-6 mt-12'>
        <div className='flex items-center animation-fadeIn'>

            <img 
            src="/images/dp.jpg" 
            alt="Author Images"
            className='w-16 h-16 rounded-full mr-4 object-cover border-4 border-[#2A254B]' 
            />

            <div>
                <h3 className='text-xl font-bold'>Nida Tariq</h3>
                <p className='text-slate-500'>
                     {""}
                     Web Developer
                </p>
            </div>
        </div>

        <p className='mt-4 text-black leading-relaxed'>
        I am a dedicated and skilled web developer specializing in creating
        modern, user-centric, and responsive websites and web applications.
        Proficient in both frontend and backend technologies, I have expertise
        in Next.js, Tailwind CSS, and other cutting-edge tools. With a passion
        for coding and problem-solving, I strive to deliver innovative solutions
        that enhance user experience and drive business success.
        </p>

        <div className='mt-4 flex space-x-3'>
            <a 
            href="https://www.linkedin.com/in/nidatariq0" target='blank'
            className='px-4 py-2 text-white bg-[#2A254B] rounded-full hover:bg-amber-600 transition duration-300'>

             <FaLinkedin size={18}/>
            </a>
            <a 
            href="#" target='blank'
            className='px-4 py-2 text-white bg-[#2A254B] rounded-full hover:bg-amber-600 transition duration-300'>

             <FaFacebook size={18}/>
            </a>
            <a 
            href="#" target='blank'
            className='px-4 py-2 text-white bg-[#2A254B] rounded-full hover:bg-amber-600 transition duration-300'>

             <FaFacebook size={18}/>
            </a>
            <a 
            href="https://github.com/nidatariq128" target='blank'
            className='px-4 py-2 text-white bg-[#2A254B] rounded-full hover:bg-amber-600 transition duration-300'>

             <FaGithub size={18}/>
            </a>
            
        </div>

    </div>
    </>
  );
}

export default AuthorCard