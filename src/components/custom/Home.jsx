import React from 'react'
import { Button } from '../ui/button'
import { Link } from 'react-router'
import HomeCarousel from './HomeCarousel'
import homeImg from '../../assets/home.png'


function Home() {

  return (
    <div className=' flex flex-col  items-center md:mx-70 md:gap-2 gap-3 pt-3 w-full md:w-fit px-3 md:px-4 md:mt-0 mt-5'>
        <HomeCarousel/>
        <h2 className='font-extrabold md:text-[38px] text-[25px] md:text-center mt-4 md:mt-0 md:p-0 px-4'>
            <span className='text-[#f64d37]'>Experience the power of AI-driven travel planning:</span> discover, 
            customize, and book your perfect trip effortlessly
        </h2>

        <img src={homeImg}  loading='lazy' className='rounded-xl h-[250px] w-[96%] md:h-[400px] md:w-[80%] xl:h-[400px] lg:w-[73%]' />
        <p className='font-mono md:text-center md:mb-0 md:p-0 px-4 text-sm md:text-md '>
            Your AI-powered travel companion, crafting personalized itineraries just for you.
            Explore destinations that match your interests, budget, and style.
            Effortlessly plan, customize, and book your perfect trip. 
        </p>
       
        <Link to={'/create-trip'}>
        <span className='md:inline hidden'>   🗺️   ✈️   🏝️  </span>
         ⛱️ &nbsp;&nbsp;  📍 <Button variant="outline" className='cursor-pointer text-white bg-black text-lg md:mt-3 animate-pulse mx-2 md:p-auto p-5 mb-4'> Get Started, It's Free!</Button>
        🛣️&nbsp;&nbsp;  🌞   
        <span className='md:inline hidden'>🌊   🍃˚   ⛰️   </span>
        </Link>

    </div>
  )
}

export default Home;