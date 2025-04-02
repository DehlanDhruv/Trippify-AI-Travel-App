import React from 'react'
import PlaceCardItem from './PlaceCardItem';

const  PlacesToVisit = ({trip}) => {
    console.log('trip',trip)

    if (!trip || !trip.tripSelection) {
        return <p>Loading...</p>; // Show a loading message
      }
 
  return (
    <div className='mt-6'>
        <h2 className='font-bold text-lg md:text-xl '>Places To Visit</h2>
        <div>
            {trip?.tripSelection?.itinerary.map((item , index)=>(
                <div key={index}>
                    <h2 className='font-medium text-lg md:text-xl mt-4 md:mt-6'>Day: {item.day}</h2>
                    <div className=' grid md:grid-cols-2 gap-7'>
                    {item?.places?.map((place , index)=>(
                        <div className='my-3'>
                            <h2 className='font-medium text-sm md:text-lg'>{place.timeOpened}</h2>
                            <PlaceCardItem place={place}/>
                        </div>    
                    ))}
                    </div>
                </div>    
            ))}

        </div>
    </div>
  )
}

export default PlacesToVisit