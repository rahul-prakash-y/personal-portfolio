import React from 'react'
import { LinkedInIcon } from '../../../public/linkedInIcon'
import { GitHubIcon } from '../../../public/gitHubIcon'
import { InstaIcon } from '../../../public/instaIcon'

export const HomePage = () => {
  const shareIcons = [
    {
      id:1,
      icon: <LinkedInIcon className='xl:h-10 xl:w-10'/>,
      link:'https://www.linkedin.com/in/rahul-prakash-61649328b/'
    },
    {
      id:2,
      icon: <GitHubIcon className='xl:h-10 xl:w-10'/>,
      link:'https://github.com/rahul-prakash-y'
    },
    {
      id:3,
      icon: <InstaIcon className='xl:h-10 xl:w-10'/>,
      link:'https://www.instagram.com/rahul_prakash_y/'
    },
  ]
  return (
    <div className='text-white'>
      <div className='flex max-sm:flex-col'>
        <img src="/vegeta2.png" alt="" className='h-[600px] max-sm:mx-auto xl:h-[900px]'/>
        <div className='flex flex-col items-start justify-center gap-y-3 max-sm:px-3 max-sm:pb-3 pr-3 xl:pr-10 xl:gap-y-6'>
          <p className='text-5xl font-poppins xl:text-7xl'>Hey, I'm Rahul</p>
          <p className='font-poppins xl:text-2xl'>A passionate frontend developer diving into backend development with Node.js and Express.js to become a full-stack engineer. I specialize in crafting dynamic, responsive, and high-performance web applications with Next.js and am currently learning how to build scalable backend systems.</p>
          <div className='mt-3 flex items-center gap-x-4 text-red-400 max-sm:mx-auto'>
            {shareIcons?.map((icon)=>{
              return(
                <div key={icon?.id} className='p-1.5 rounded-full border-2 border-red-400 hover:text-black hover:bg-red-400 hover:border-black cursor-pointer xl:p-3' onClick={()=>window.open(icon?.link)} >
                  {icon?.icon}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

