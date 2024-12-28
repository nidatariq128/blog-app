import React from 'react'
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const About = () => {
  return (
    <div className='w-full bg-gradient-to-l from-amber-600 to-blue-950 py-16'>
      <div className='max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8'>
        {/* Profile Section */}
        <div className='flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6'>
          <img 
            src="/images/dp.jpg" 
            alt="Author Images"
            className='w-32 h-32 rounded-full object-cover border-4 border-[#2A254B] transform transition duration-500 hover:scale-110' 
          />
          <div>
            <h3 className='text-3xl font-extrabold text-[#2A254B]'>
              Nida Tariq
            </h3>
            <p className='text-lg text-slate-500 mt-2'>
              web Developer
            </p>
          </div>
        </div>

        {/* Bio Section */}
        <p className='mt-6 text-xl text-gray-800 leading-relaxed'>
        I am a dedicated and skilled web developer specializing in creating
        modern, user-centric, and responsive websites and web applications.
        Proficient in both frontend and backend technologies, I have expertise
        in Next.js, Tailwind CSS, and other cutting-edge tools. With a passion
        for coding and problem-solving, I strive to deliver innovative solutions
        that enhance user experience and drive business success.
        </p>

        {/* Social Links Section */}
        <div className='mt-8 flex justify-center space-x-6'>
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
                     href="https://github.com/nidatariq128" target='blank'
                     className='px-4 py-2 text-white bg-[#2A254B] rounded-full hover:bg-amber-600 transition duration-300'>
         
                      <FaGithub size={18}/>
                     </a>
        </div>

        {/* Animation */}
        <div className='mt-10'>
          <h4 className='text-2xl text-[#2A254B] font-bold mb-4'>
            Let's Connect and Create Amazing Things Together!
          </h4>
          <p className='text-lg text-gray-700'>
            Whether you're looking for content, collaboration, or simply a great conversation, feel free to reach out. I'm always open to exploring new opportunities and ideas.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
