import React from 'react'
import { Link } from 'react-router'
import HotelCardItem from './HotelCardItem';

const Hotels = ({trip}) => {
    if (!trip || !trip.tripSelection) {
        return <p>Loading...</p>; // Show a loading message
      }
      
    return (
    <div>
        <h2 className='font-bold text-xl mt-5 mb-2'>Hotels Recommendation</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {trip?.tripSelection?.hotelOptions?.map((hotel,index)=>(
               <HotelCardItem hotel={hotel} />
            ))}
        </div>
    
    
    </div>
  )
}

export default Hotels