import { LINKEDIN, MAIL,GITHUB } from '@/constants/options'
import React from 'react'
import linkedInImg from '../../assets/linkedin.png'
import mailImg from '../../assets/mail.png'
import githubImg from '../../assets/github.png'

function Footer() {
  return (
    <div className=' bg-black flex py-3 px-4 md:px-10 justify-between w-full'>
        <p className='text-white '>Made by: Dhruv Dehlan</p>
        <div className='flex gap-5'>
            <a href={LINKEDIN} target="_blank">
                <img src={linkedInImg} className='h-[25px] w-[25px]' />
            </a>

            <a href={MAIL} target="_blank" rel="noopener noreferrer">            
                <img src={mailImg} className='h-[25px] w-[25px]' />
            </a>

            <a href={GITHUB} target="_blank" rel="noopener noreferrer">            
                <img src={githubImg} className='h-[25px] w-[25px]' />
            </a>
        </div>
        
    </div>
  )
}

export default Footer