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

import aboutimg from './components/media/saopaulo.jpeg'

function App() {
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
      <div className='h-screen w-screen landingbg'>
        <div className='w-full flex justify-between p-4 px-8 items-start'>
          <div className=''>
            <img className='w-100' src={logo} />
          </div>
          <div className='flex items-center'>
            <h1 className='mx-2 text-xl hover:border-b-2 border-gray-700 text-gray-700 duration-200'>Home</h1>
            <a href='#about' className='decoration-none mx-2 text-xl hover:border-b-2 border-gray-700 text-gray-700 duration-200'>About</a>
            <h1 className='mx-2 text-xl hover:border-b-2 border-gray-700 text-gray-700 duration-200'>Schedule</h1>
            <h1 className='mx-2 text-xl hover:border-b-2 border-gray-700 text-gray-700 duration-200'>Speakers</h1>
            <a href='#contact' className='decoration-none mx-2 text-xl hover:border-b-2 border-gray-700 text-gray-700 duration-200'>Contact</a>
            <button className=' p-2 px-3 mx-2 text-xl bg-[#9d98ea] text-white hover:bg-[#8985ca]  duration-300 rounded-lg'>Sponsor Now</button>
          </div>
        </div>
        <div className='flex flex-col items-start pl-8 w-2/3'>
          <h1 className='text-7xl text-gray-700 font-semibold'>Building Bridges for Industrialization</h1>
          <h1 className='text-6xl text-gray-500 font-light'>Digital and Green Economy Synergies across the Atlantic</h1>
          <div className='mt-8 flex justify-center bg-white/50 rounded-xl overflow-hidden items-center'>
            <div className='flex items-center p-4 px-6 mr-[2px] '>
              <img className='h-6 mr-4' src={calendar} />
              <h1 className='text-2xl font-light'>17 November 2024</h1>
            </div>
            <div className='h-[40px] w-[2px] rounded-full bg-gray-700'>
            </div>
            <div className='flex items-center  p-4 px-6'>
              <img className='h-6 mr-4' src={location} />
              <h1 className='text-2xl font-light'>Sao Paulo, Brazil</h1>
            </div>
          </div>
          <div className='flex items-center mt-12'>
            <button className=' p-2 px-3 mx-2 text-xl bg-[#9d98ea] text-white hover:bg-[#8985ca]  duration-300 rounded-lg'>Download Brochure</button>
            <button className=' p-2 px-3 mx-2 text-xl bg-[#9d98ea] text-white hover:bg-[#8985ca]  duration-300 rounded-lg'>Buy Tickets</button>
          </div>
        </div>
      </div>

      <div id='about' className='flex flex-col items-center w-full p-12 bg-gray-200'>
        <h1 className='font-thin text-8xl'>DGES Overview</h1>
        <div className='flex items-start w-full mt-8'>
          <div className='w-[50%]'>
            <h1 className='font-light text-lg'>
              The TransAtlantic Manufacturing through Digital and Green Economy Summit is a one-day sideline event at the G20 Summit that brings together a diverse delegation of stakeholders from AfCFTA and ECOWAS nations, including The Gambia and Nigeria, in partnership with Brazil. The summit aims to build strategic bridges between Africa and South America to drive industrialization in the global south through the adoption of digital and green economy principles.
            </h1>
            <h1 className='font-light my-4 text-lg'>
              This summit will serve as a platform for high-level discussions, partnership formation, and knowledge exchange, focusing on how digital transformation and green manufacturing practices can be harnessed to accelerate industrial growth in the participating regions.
            </h1>

            <button className=' p-2 px-3 text-xl bg-[#9d98ea] text-white hover:bg-[#8985ca]  duration-300 rounded-lg'>Learn More</button>

          </div>
          <div className='h-[400px] w-[500px] ml-20'>
            <img className='rounded-xl' src={aboutimg} />
          </div>
        </div>


      </div>

      <div className='w-screen flex flex-col items-center p-12 bg-[#9d98ea]'>
        <h1 className='font-thin text-8xl text-white'>DGES Partners</h1>
        <div className='w-full mt-12 grid grid-cols-4 gap-4'>
          <div className='border-gray-200/50 bg-white/10 border-2 rounded-xl h-40 flex justify-center items-center'>
            <img src={host1} />
          </div>
          <div className='border-gray-200/50 bg-white/10 border-2 rounded-xl h-40 flex justify-center items-center'>
            <img className='h-1/3' src={host2} />
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
          <h1 className='text-6xl font-semibold text-gray-200'>Get in Touch</h1>
          <div className='flex items-center mt-4'>
            <img className='h-7' src={phone} />
            <h1 className='ml-4 text-2xl font-light text-gray-200'>+234 (703) 565-2264</h1>

          </div>
          <div className='flex items-center mt-2'>
            <img className='h-7' src={phone} />
            <h1 className='ml-4 text-2xl font-light text-gray-200'>+1 (617) 602-6272</h1>

          </div>

        </div>
        <div className='p-2 bg-white/20 rounded-xl'>
          <img src={logo} />
        </div>
      </div>
    </div>
  );
}

export default App;
