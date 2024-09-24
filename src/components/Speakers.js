import React from 'react'

const Speakers = () => {
    return (
        <div className='w-full p-12 flex flex-col items-center bg-[#9d98ea]'>
            <h1 className='font-thin text-8xl text-white'>DGES Speakers</h1>
            <div className='w-full px-12 flex items-center mt-12'>
                <div className='mx-4 w-1/4 flex flex-col overflow-hidden hover:bg-white/50 rounded-xl p-2 duration-300'>
                    <img src={speaker1} className='h-[300px] w-full rounded-md' />
                    <h1 className='font-semibold text-xl mt-4'>Speaker 1</h1>
                    <h1 className='text-lg'>Speaker Designation</h1>
                </div>
                <div className='mx-4 w-1/4 flex flex-col overflow-hidden hover:bg-white/50 rounded-xl p-2 duration-300'>
                    <img src={speaker1} className='h-[300px] w-full rounded-md' />
                    <h1 className='font-semibold text-xl mt-4'>Speaker 1</h1>
                    <h1 className='text-lg'>Speaker Designation</h1>
                </div>
                <div className='mx-4 w-1/4 flex flex-col overflow-hidden hover:bg-white/50 rounded-xl p-2 duration-300'>
                    <img src={speaker1} className='h-[300px] w-full rounded-md' />
                    <h1 className='font-semibold text-xl mt-4'>Speaker 1</h1>
                    <h1 className='text-lg'>Speaker Designation</h1>
                </div>
                <div className='mx-4 w-1/4 flex flex-col overflow-hidden hover:bg-white/50 rounded-xl p-2 duration-300'>
                    <img src={speaker1} className='h-[300px] w-full rounded-md' />
                    <h1 className='font-semibold text-xl mt-4'>Speaker 1</h1>
                    <h1 className='text-lg'>Speaker Designation</h1>
                </div>

            </div>
            <div className='flex items-center mt-8'>
                <div className='h-16 w-16 rounded-full bg-black flex justify-center items-center mr-2'>
                    <img className='w-[60%]' src={left} />
                </div>
                <div className='h-16 w-16 rounded-full bg-black flex justify-center items-center ml-2'>
                    <img className='w-[60%]' src={right} />
                </div>
            </div>
        </div>
    )
}

export default Speakers
