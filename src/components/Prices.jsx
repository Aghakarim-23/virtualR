import React from 'react'
import { CheckCircle2 } from 'lucide-react'
import {pricingOptions} from '../constants'

const Prices = () => {
  return (
    <div className='mt-10 lg:mt-20 text-white' id='pricing'>
        <h1 className='text-4xl lg:text-8xl text-center mb-10'>Pricing</h1>
        <div className='flex flex-wrap justify-center lg:mt-20 gap-10 lg:gap-20 px-3 '>
            {pricingOptions.map((price,index) => (
                <div key={index} className='flex flex-col gap-6 border-2 border-white p-5 rounded-lg max-w-[350px] w-full'>
                    <h2 className='text-4xl'>{price.title}
                        {price.title === "Pro" && <span className='text-[16px] ml-2 text-orange-600'>(Most Popular)</span>}
                    </h2>
                    <h3 className='text-4xl'>{price.price} <span>/month</span></h3>
                    <div className='flex'>
                        <ul className='flex flex-col gap-5'>
                            {price.features.map((feauture, index) => (
                                <div key={index} className='flex gap-3'>
                                    <CheckCircle2/>
                                    <li key={index}>{feauture}</li>
                                </div>
                            ))}
                        </ul>
                    </div>
                    <button className='border-2 border-amber-800 rounded-md py-3'>Subscribe</button>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Prices