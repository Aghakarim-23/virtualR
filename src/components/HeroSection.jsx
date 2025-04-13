import React from 'react'
import video1 from '../assets/video1.mp4'
import video2 from '../assets/video2.mp4'

const HeroSection = () => {
  return (
    <div className='text-white mt-20 text-center '>
        <h1 className='text-3xl lg:text-6xl lg:w-[560px] lg:m-auto'>VirtualR build tools <span className='bg-gradient-to-r from-orange-500 to-orange-700 text-transparent bg-clip-text'>for developers</span></h1>
        <p className='text-[14px] lg:text-[22px] w-[300px] lg:w-[850px] m-auto mt-8 text-zinc-700'>Empower your creativity and bring your VR app ideas to life with our intuitive development tools. Get started today and turn your imagination into immersive reality!</p>
        <div className='mt-8 flex gap-4 justify-center'>
            <a href="#" className='py-2  px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-900'>Start for free</a>
            <a href="#" className='py-2  px-3 rounded-md border-2 border-white'>Documentation</a>
        </div>
        <div className='flex justify-center gap-2 lg:gap-6 mt-8'>
            <video autoPlay muted loop className='w-[170px] lg:w-[570px] border rounded-md border-orange-500'>
               <source src={video1} type='video/mp4'/>
            </video>
            <video autoPlay muted loop className='w-[170px] lg:w-[570px] border rounded-md border-orange-500'>
                <source src={video2} type='video/mp4'/>
            </video>
        </div>
    </div>
  )
}

export default HeroSection