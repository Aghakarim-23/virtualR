import React from 'react'
import { resourcesLinks , platformLinks, communityLinks } from '../constants'


const Footer = () => {
  return (
    <div className='px-4'>
        <div className='mt-10 lg:mt-20  justify-center md:justify-around py-8 items-center  flex flex-wrap gap-10 '>
            <div>
                <h2 className='font-bold lg:text-[24px]'>Resources</h2>
                <ul className='mt-3 flex flex-col gap-3 text-[#8b8b8bcb] lg:text-[20px]'>
                    {resourcesLinks.map((footerLink,index) => (
                        <li key={index}>
                            <a href={footerLink.href}>{footerLink.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h2 className='font-bold lg:text-[24px]'>Platform</h2>
                <ul className='mt-3 flex flex-col gap-3 text-[#8b8b8bcb] lg:text-[20px]'>
                    {platformLinks.map((platformLink,index) => (
                        <li key={index}>
                            <a href={platformLink.href}>{platformLink.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h2 className='font-bold lg:text-[24px]'>Community</h2>
                <ul className='mt-3 flex flex-col gap-3 text-[#8b8b8bcb] lg:text-[20px]'>
                    {communityLinks.map((communityLink,index) => (
                        <li key={index}>
                            <a href={communityLink.href}>{communityLink.text}</a>
                        </li>
                    ))}

                </ul>
            </div>
        </div> 
    </div>
  )
}

export default Footer