import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router'
import SimpleSlider from './HomeCarousel'


function Hero() {

  return (
    <div className=' flex flex-col items-center md:mx-56 md:gap-2 gap-10 pt-3 w-full md:w-fit px-3 md:px-0 md:mt-0 mt-5'>
        <SimpleSlider/>
        <h2 className='font-extrabold md:text-[38px] text-[20px] text-center mt-4 md:mt-0 '>
            <span className='text-[#f64d37]'>Experience the power of AI-driven travel planning:</span> discover, 
            customize, and book your perfect trip effortlessly
        </h2>
        <p className='font-mono text-center md:mb-0  '>
            Your AI-powered travel companion, crafting personalized itineraries just for you.
            Explore destinations that match your interests, budget, and style.
            Effortlessly plan, customize, and book your perfect trip. 
        </p>
       
        <Link to={'/create-trip'}>
        <span className='md:inline hidden'>   🗺️   ✈️   🏝️  </span>
         ⛱️ &nbsp;&nbsp;  📍 <Button variant="outline" className='cursor-pointer text-white bg-black animate-pulse mx-5 md:p-auto p-5 md:mb-auto mb-4'> Get Started, It's Free!</Button>
        🛣️&nbsp;&nbsp;  🌞   
        <span className='md:inline hidden'>🌊   🍃˚   ⛰️   </span>
        </Link>

    </div>
  )
}

export default Hero