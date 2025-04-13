import {features} from '../constants'

const Features = () => {
  return (
    <div className='mt-8 text-center m-auto text-white'>
        <h5 className='text-orange-500 py-[2px] rounded-md bg-gray-900 w-[70px] m-auto'>Feature</h5>
        <h3 className='text-3xl lg:text-6xl w-[200px] lg:w-full m-auto mt-8'>Easy build <span className='bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent'>your code</span></h3>
       
        <div className='flex flex-wrap justify-center gap-4 lg:gap-6 mt-10 lg:mt-20 px-4'>
            {features.map((feauture, index) => (
                <div key={index} className='flex w-[400px] gap-4 text-left p-5'>
                   <div className='text-orange-500'>
                    {feauture.icon}
                   </div>
                   <div className='flex flex-col gap-4'>
                        <h5 className='lg:text-2xl'>{feauture.text}</h5>
                        <p className='lg:text-[1.1rem] text-zinc-700'>{feauture.description}</p>
                   </div>
                </div>
            ))}
        </div>
    </div>
  )
}


export default Features