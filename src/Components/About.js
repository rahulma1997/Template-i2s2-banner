import React from 'react';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
const About = () => {
  return (
    <section id="about" className="about section py-16 ml-20 mr-20">
      {/* Section Title */}
      <div className="container mx-auto ml-4 mb-12" data-aos="fade-up">
        <div className='flex '>
        <h2 className="text-lg opacity-60 ">About</h2> 
        <div className="w-28 h-1 ml-3  bg-red-500  mt-4"></div>
        </div>
        {/* <p className="w-16 h-1 bg-blue-500 mx-auto "></p> */}
        
        <p className="text-4xl font-bold text-left mb-2">About Us</p>
      </div>
      {/* End Section Title */}

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:gap-8">
          {/* Left Content */}
          <div className="lg:w-1/2  mb-8" data-aos="fade-up" data-aos-delay="100">
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul className="list-disc ">
              <li className="flex items-center mb-2">
                <i className="bi bi-check2-circle  text-green-500"></i>
                <span><TaskAltOutlinedIcon className='text-red-400 mr-2'/>Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
              </li>
              <li className="flex items-center mb-2">
                <i className="bi bi-check2-circle  text-green-500"></i>
                <span><TaskAltOutlinedIcon className='text-red-400 mr-2'/>Duis aute irure dolor in reprehenderit in voluptate velit.</span>
              </li>
              <li className="flex items-center mb-2">
                <i className="bi bi-check2-circle  text-green-500"></i>
                <span><TaskAltOutlinedIcon className='text-red-400 mr-2'/>Ullamco laboris nisi ut aliquip ex ea commodo.</span>
              </li>
            </ul>
          </div>

          {/* Right Content */}
          <div className="lg:w-1/2" data-aos="fade-up" data-aos-delay="200">
            <p className="mb-4 mx-4">
              Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <a href="about.html" className="text-white w-40 ml-4 rounded-md p-2 pl-6 bg-red-600 hover:opacity-60  hover:underline flex items-center">
              <span className="mr-1 ">Read More</span>
              <i className="bi bi-arrow-right text-white "><EastOutlinedIcon className='ml-2 '/></i>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
