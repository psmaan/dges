import React, { useState } from 'react';
import './App.css';

import calendar from './components/media/calendar.png'
import location from './components/media/location.png'

import speaker1 from './components/media/images.jpeg'

import left from './components/media/leftarrow.png'
import right from './components/media/rightarrow.png'

import plusIcon from './components/media/plus.png';
import logo from './components/media/logo.png'
import host1 from './components/media/host1.png'
import host2 from './components/media/host2.png'
import phone from './components/media/phone.png'
import hotel from './components/media/hilton.jpeg'
import tick from './components/media/tick.png'

import aboutimg from './components/media/saopaulo.jpeg'

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is the TransAtlantic Manufacturing through Digital and Green Economy Summit?",
      answer: "The TransAtlantic Manufacturing through Digital and Green Economy Summit is a one-day sideline event held during the G20 Summit. It brings together key stakeholders from AfCFTA, ECOWAS, and Brazil to discuss and promote synergies between digital transformation and green economy practices in manufacturing, aiming to drive industrialization in the global south."
    },
    {
      question: "When and where will the summit take place?",
      answer: "Date: [To be confirmed], Time: 8:00 AM - 5:00 PM (Summit), 7:00 PM - 10:00 PM (Dinner), Venue: [Location to be confirmed]"
    },
    {
      question: "What is the theme of the summit?",
      answer: "The central theme of the summit is 'Building Bridges for Industrialization: Digital and Green Economy Synergies across the Atlantic.' The event will explore the intersection of digital tools and green technologies in promoting sustainable industrial growth in Africa and South America."
    },
    {
      question: "Why is this summit important?",
      answer: "The summit is crucial for fostering cross-regional collaboration between Africa and South America. It aims to leverage digital and green economy opportunities to accelerate industrialization, promoting sustainable growth and regional integration through partnerships with AfCFTA, ECOWAS, and Brazil."
    },
    {
      question: "Who should attend?",
      answer: "This summit is designed for policymakers, business leaders, industry experts, and stakeholders from the manufacturing sector, particularly those interested in digital innovation, green economy practices, and cross-regional collaboration between Africa and Brazil."
    },
    {
      question: "What are the key topics to be discussed?",
      answer: "The summit will focus on several sub-themes, including: AfCFTA and ECOWAS collaboration for regional integration, Brazil-Africa industrial partnerships, Green manufacturing for sustainable growth, Digital innovation in manufacturing, and Workforce development and capacity building for the digital and green economy."
    },
    {
      question: "What are the objectives of the summit?",
      answer: "The summit aims to: 1) Forge strategic partnerships between Africa and Brazil, 2) Promote digital and green manufacturing practices, 3) Facilitate knowledge exchange on industrial best practices, 4) Support capacity building and workforce development in the global south, and 5) Drive policy dialogue on industrialization, digital transformation, and sustainability."
    },
    {
      question: "What panel sessions will be held?",
      answer: "The summit will feature five main panel sessions: 1) Regional Integration and Industrialization in Africa, 2) Brazil-Africa Industrial Collaboration, 3) Green Manufacturing for a Sustainable Future, 4) Digital Innovation as a Catalyst for Industrialization, and 5) Workforce Development for the Digital and Green Economy."
    },
    {
      question: "How do I register for the event?",
      answer: "Registration details will be made available on our website. Please check back for updates."
    },
    {
      question: "Can I sponsor or partner with the summit?",
      answer: "Yes, we welcome sponsorships and partnerships. If you're interested, please contact us through the details provided on the website."
    }

  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <div className='w-screen overflow-hidden'>
      <div className='min-h-screen w-screen landingbg pb-8'>
        <div className='w-full flex justify-between p-4 sm:px-8 items-start'>
          {/* Logo */}
          <div>
            <img className='w-[200px] sm:w-[300px] xl:w-[400px]' src={logo} alt='Logo' />
          </div>

          {/* Hamburger Icon (visible on small screens) */}
          <div className='lg:hidden flex items-center'>
            <button onClick={toggleMenu} className='text-gray-700 focus:outline-none'>
              {/* Hamburger Icon */}
              <svg
                className='w-8 h-8'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16m-7 6h7'
                />
              </svg>
            </button>
          </div>

          {/* Desktop Menu (hidden on small screens) */}
          <div className='hidden lg:flex lg:items-center lg:w-auto'>
            <div className='flex flex-row items-center'>
              <h1 className='mx-2 text-lg xl:text-xl hover:border-b-2 border-gray-700 text-gray-700 duration-200'>
                Home
              </h1>
              <a
                href='#about'
                className='decoration-none mx-2 text-xl hover:border-b-2 border-gray-700 text-gray-700 duration-200'>
                About
              </a>
              <h1 className='mx-2 text-lg xl:text-xl hover:border-b-2 border-gray-700 text-gray-700 duration-200'>
                Schedule
              </h1>
              <h1 className='mx-2 text-lg xl:text-xl hover:border-b-2 border-gray-700 text-gray-700 duration-200'>
                Speakers
              </h1>
              <a
                href='#contact'
                className='decoration-none mx-2 text-lg xl:text-xl hover:border-b-2 border-gray-700 text-gray-700 duration-200'>
                Contact
              </a>
              <button className='p-2 px-3 mx-2 text-xl bg-[#9d98ea] text-white hover:bg-[#8985ca] duration-300 rounded-lg'>
                Sponsor Now
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu (overlay from the right) */}
        <div
          className={`fixed top-0 right-0 h-full w-2/3 bg-white z-50 transition-transform transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'
            } lg:hidden`}
        >
          <div className='flex justify-end p-4'>
            <button onClick={toggleMenu} className='text-gray-700 focus:outline-none'>
              {/* Close Icon */}
              <svg
                className='w-8 h-8'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Links */}
          <div className='flex flex-col items-start p-6'>
            <h1 className='my-2 text-lg xl:text-xl hover:border-b-2 border-gray-700 text-gray-700 duration-200'>
              Home
            </h1>
            <a
              href='#about'
              className='decoration-none my-2 text-lg xl:text-xl hover:border-b-2 border-gray-700 text-gray-700 duration-200'>
              About
            </a>
            <h1 className='my-2 text-lg xl:text-xl hover:border-b-2 border-gray-700 text-gray-700 duration-200'>
              Schedule
            </h1>
            <h1 className='my-2 text-lg xl:text-xl hover:border-b-2 border-gray-700 text-gray-700 duration-200'>
              Speakers
            </h1>
            <a
              href='#contact'
              className='decoration-none my-2 text-lg xl:text-xl hover:border-b-2 border-gray-700 text-gray-700 duration-200'>
              Contact
            </a>
            <button className='mt-4 p-2 px-3 text-xl bg-[#9d98ea] text-white hover:bg-[#8985ca] duration-300 rounded-lg'>
              Sponsor Now
            </button>
          </div>
        </div>

        {/* Hero Section */}
        <div className='flex flex-col items-start pl-4 sm:pl-8 sm:w-[80%] lg:w-2/3'>
          <h1 className='mt-12 xl:mt-0 text-4xl sm:text-6xl lg:text-7xl text-gray-700 font-semibold'>
            Building Bridges for Industrialization
          </h1>
          <h1 className='text-4xl w-full sm:text-5xl lg:text-6xl text-gray-500 font-light'>
            Digital and Green Economy Synergies across the Atlantic
          </h1>
          <div className='mt-8 flex justify-center bg-white/50 rounded-xl overflow-hidden items-center'>
            <div className='flex items-center p-3 sm:p-4 sm:px-6 mr-[2px]'>
              <img className='h-4 sm:h-6 mr-1 md:mr-4' src={calendar} alt='Calendar Icon' />
              <h1 className='text-md sm:text-xl lg:text-2xl font-light'>17 November 2024</h1>
            </div>
            <div className='h-[30px] sm:h-[40px] w-[2px] rounded-full bg-gray-600'></div>
            <div className='flex items-center p-3 sm:p-4 sm:px-6'>
              <img className='h-4 sm:h-6 mr-1 md:mr-4' src={location} alt='Location Icon' />
              <h1 className='text-md sm:text-xl lg:text-2xl font-light'>Sao Paulo, Brazil</h1>
            </div>
          </div>
          <div className='flex flex-col sm:flex-row items-start sm:items-center mt-12'>
            <button className='p-2 px-3 mx-2 text-xl bg-[#9d98ea] text-white hover:bg-[#8985ca] duration-300 rounded-lg'>
              Download Brochure
            </button>
            <button className='p-2 px-3 mx-2 text-xl bg-[#9d98ea] text-white hover:bg-[#8985ca] duration-300 rounded-lg mt-4 sm:mt-0'>
              Buy Tickets
            </button>
          </div>
        </div>
      </div>

      <div id='about' className='flex flex-col items-center w-full p-4 xl:p-12 bg-gray-200'>
        <h1 className='font-thin text-4xl sm:text-6xl lg:text-8xl text-center'>DGES Overview</h1>
        <div className='flex items-start w-full mt-8'>
          <div className='md:w-[70%] xl:w-[50%] flex flex-col items-center md:items-start'>
            <h1 className='font-light text-center md:text-left text-md lg:text-lg'>
              The TransAtlantic Manufacturing through Digital and Green Economy Summit is a one-day sideline event at the G20 Summit that brings together a diverse delegation of stakeholders from AfCFTA and ECOWAS nations, including The Gambia and Nigeria, in partnership with Brazil. The summit aims to build strategic bridges between Africa and South America to drive industrialization in the global south through the adoption of digital and green economy principles.
            </h1>
            <div className='md:hidden w-[300px] sm:w-[400px] xl:h-[400px] xl:w-[500px] my-4'>
              <img className='rounded-xl' src={aboutimg} />
            </div>
            <h1 className='font-light my-4 text-center md:text-left text-md lg:text-lg'>
              This summit will serve as a platform for high-level discussions, partnership formation, and knowledge exchange, focusing on how digital transformation and green manufacturing practices can be harnessed to accelerate industrial growth in the participating regions.
            </h1>

            <button className=' p-2 px-3 text-xl bg-[#9d98ea] text-white hover:bg-[#8985ca]  duration-300 rounded-lg'>Learn More</button>

          </div>
          <div className='hidden md:block w-[400px] xl:h-[400px] xl:w-[500px] ml-20'>
            <img className='rounded-xl' src={aboutimg} />
          </div>
        </div>


      </div>

      <div className='w-screen flex flex-col items-center p-12 bg-[#9d98ea]'>
        <h1 className='font-thin text-6xl lg:text-8xl text-white'>DGES Partners</h1>
        <div className='w-full mt-12 grid grid-cols-2 md:grid-cols-4 gap-4'>
          <div className='border-gray-200/50 bg-white/10 border-2 rounded-xl h-40 flex justify-center items-center'>
            <img src={host1} />
          </div>
          <div className='border-gray-200/50 bg-white/10 border-2 rounded-xl h-40 flex justify-center items-center'>
            <img className='h-1/3' src={host2} />
          </div>
        </div>
      </div>

      <div className='w-full p-12 flex flex-col items-start'>
        <h1 className='text-8xl font-thin'>The Venue</h1>
        <div className='mt-8 w-[90%] rounded-2xl shadow-xl p-8 bg-[#9d98ea] flex items-start justify-between'>
          <div className='flex flex-col items-start justify-between h-full'>
            <div>
              <h1 className='font-semibold text-6xl text-white/50'>Hilton Sao Paulo</h1>
              <h1 className='w-[70%] font-light text-white text-xl'>Av. das Nações Unidas, 12901 - Brooklin, São Paulo - SP, 04578-000, Brazil</h1>
            </div>

            <button className='mt-36 p-2 px-4 text-[#9d98ea] bg-white rounded-lg font-bold'>Get Directions</button>
          </div>
          <div className='w-[400px] '>
            <img className='rounded-xl shadow-xl' src={hotel} />
          </div>
        </div>

      </div>

      <div className='w-full p-12 flex flex-col items-start bg-[#9d98ea]'>
        <h1 className='text-8xl font-thin text-white'>Get the tickets</h1>
        <div className='mt-8 w-[90%] rounded-2xl shadow-xl p-8 bg-white flex items-start justify-between'>
          <div className='flex flex-col items-start justify-between h-full w-[60%]'>
            <div className='flex justify-between w-full'>
              <h1 className='font-light text-4xl text-[#9d98ea]'>Premium Ticket</h1>
              <h1 className=' ml-auto font-semibold text-gray-700 text-6xl'>$200</h1>
            </div>
            <div className='flex items-center'>
              <div className='h-6 w-6 flex justify-center items-center bg-[#9d98ea] rounded-full'>
                <img className='w-[70%]' src={tick} />

              </div>
              <h1 className='font-light text-xl ml-4'>Ticket Benefit 1</h1>
            </div>
            <div className='flex items-center'>
              <div className='h-6 w-6 flex justify-center items-center bg-[#9d98ea] rounded-full'>
                <img className='w-[70%]' src={tick} />

              </div>
              <h1 className='font-light text-xl ml-4 mt-2'>Ticket Benefit 1</h1>
            </div>
            <div className='flex items-center'>
              <div className='h-6 w-6 flex justify-center items-center bg-[#9d98ea] rounded-full'>
                <img className='w-[70%]' src={tick} />

              </div>
              <h1 className='font-light text-xl ml-4 mt-2'>Ticket Benefit 1</h1>
            </div>
            <div className='flex items-center'>
              <div className='h-6 w-6 flex justify-center items-center bg-[#9d98ea] rounded-full'>
                <img className='w-[70%]' src={tick} />

              </div>
              <h1 className='font-light text-xl ml-4 mt-2'>Ticket Benefit 1</h1>
            </div>
            <button className='mt-20 p-2 px-4 bg-[#9d98ea] text-white rounded-lg font-bold'>Buy Now</button>
          </div>
          <div className='w-[400px] '>
            <img className='rounded-xl shadow-xl' src={hotel} />
          </div>
        </div>

      </div>

      <div className="w-screen bg-gray-200 flex flex-col items-center py-12 px-4">
        <h2 className="text-[#6e6aa1] font-semibold mb-4 text-8xl">FAQ</h2>
        <div className="w-full max-w-4xl">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <div
                className={`p-4 bg-[#9d98ea] text-white font-semibold cursor-pointer transition-all duration-300 flex justify-between items-center ${activeIndex === index ? 'rounded-t-lg' : 'rounded-lg'}`}
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <img
                  src={plusIcon}
                  alt="plus icon"
                  className={`w-6 h-6 transition-transform duration-300 ${activeIndex === index ? 'rotate-45' : 'rotate-0'}`}
                />
              </div>
              <div
                className={`overflow-hidden transition-all duration-300 bg-[#9d98ea] text-white ${activeIndex === index ? 'max-h-96 p-4 rounded-b-lg' : 'max-h-0'}`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div id='contact' className='w-screen flex justify-between p-8 px-12 bg-gray-800'>
        <div className='flex flex-col items-start'>
          <h1 className='text-4xl sm:text-6xl font-semibold text-gray-200'>Get in Touch</h1>
          <div className='flex items-center mt-4'>
            <img className='h-7' src={phone} />
            <h1 className='ml-4 text-lg sm:text-2xl font-light text-gray-200'>+234 (703) 565-2264</h1>

          </div>
          <div className='flex items-center mt-2'>
            <img className='h-7' src={phone} />
            <h1 className='ml-4 text-lg sm:text-2xl font-light text-gray-200'>+1 (617) 602-6272</h1>
          </div>
        </div>
        <div className='hidden sm:block p-2 bg-white/20 rounded-xl'>
          <img className='w-[300px] sm:w-[400px] lg:w-[500px]' src={logo} />
        </div>
      </div>
    </div>
  );
}

export default App;
