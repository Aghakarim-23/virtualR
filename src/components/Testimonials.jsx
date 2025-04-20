import React from 'react'
import { testimonials } from '../constants'

const Testimonials = () => {
  return (
    <>
        <div className='py-7' id='testimonials'>
            <p className='text-center text-3xl my-8 lg:my-14 lg:text-5xl'>What people are saying</p>
            <div className='flex  justify-center items-center flex-col gap-10 px-4 md:flex-row md:flex-wrap'>
                {
                    testimonials.map(((testimonEl,index) => (
                        <div key={index} className='flex flex-col gap-4 p-5 justify-between bg-[#121212] border-2 border-[#525252] rounded-md h-64'>
                            <p className='max-w-xs text-center'>{testimonEl.text}</p>
                            <div className='flex gap-5 '>    
                                <img src={testimonEl.image} alt={testimonEl.image} className='w-16 rounded-full border-2 border-white' />
                                <div className='flex flex-col gap-2 '>
                                    <p>{testimonEl.user}</p>
                                    <p className='text-[#525252] italic'>{testimonEl.company}</p>
                                </div>
                            </div>
                        </div>
                    )))
                }
            </div>
        </div>
    </>
  )
}

export default Testimonials