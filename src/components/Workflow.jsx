import React from 'react'
import { CheckCircle2 } from 'lucide-react'
import code from '../assets/code.jpg'
import { checklistItems } from '../constants'

const Workflow = () => {
  return (
    <div className='mt-10 text-white'>
        <h1 className='text-center text-3xl lg:text-5xl w-[250px] lg:w-full m-auto'>Accelerate your <span className='bg-gradient-to-r from-orange-500 to-orange-600 text-transparent bg-clip-text'>coding workflow.</span></h1>
        <div className='mt-10 lg:flex lg:justify-around lg:items-center px-3'>
            <img src={code} className='lg:w-[600px]' alt="" />
            <div className='flex  flex-col mt-10 lg:mt-20 px-4 gap-8'>
                {checklistItems.map((item,index) => (
                    <div key={index} className='flex items-start'>
                        <div className='p-2 bg-[#171717] rounded-full'>
                             {<CheckCircle2 className='w-6 h-6 text-green-600' />}    
                        </div>
                     
                        <div className='pl-3 flex flex-col gap-10'>
                            <h5 className='text-2xl' >{item.title}</h5>
                            <p className='text-[1.2rem] text-[#737373]'>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Workflow