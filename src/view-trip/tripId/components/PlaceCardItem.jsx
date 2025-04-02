import React , {useState , useEffect} from 'react'
import { Link } from 'react-router'
import { PHOTO_REF_URL } from '@/service/GlobalApi'
import { GetPlaceDetails } from '@/service/GlobalApi'
import defaultImg from '../../../assets/default.png'

const PlaceCardItem = ({place}) => {

      const [photoURL , setPhotoUrl] = useState()

  
      const GetPlacePhoto = async () => {
      
          const data = { textQuery: place.placeName };
      
          try {
              const result = await GetPlaceDetails(data);              
              const photo = PHOTO_REF_URL.replace('{NAME}',result.data?.places[0]?.photos[4]?.name);
              setPhotoUrl(photo)
          } catch (error) {
              console.error("❌ Error fetching place details:", error.response?.data || error.message);
          }
      };
        
      useEffect(() =>{
          place && GetPlacePhoto();
      },[place])


  return (
    <Link to={`https://www.google.com/maps/search/?api=1&query=${place.geoCoordinates.latitude},${place.geoCoordinates.longitude},${place?.placeName}`} target="_blank" >

       <div className='shadow-md border-1 rounded-lg p-3 mt-2 hover:scale-105 transition-all hover:shadow-md cursor-pointer'>

        <img loading='lazy' src={photoURL ? photoURL : defaultImg}
        className='w-[100%] h-[230px]  md:w-[97%] md:ml-1 md:h-[280px] rounded-xl object-fit'/>
        <div className='flex flex-col gap-2 mt-4'>
            <h2 className=' text-lg md:text-xl font-bold w-[fit]'>{place.placeName}</h2>
            <p className=' text-sm md:text-lg w-[fit] '>{place.placeDetails}</p>
            <h2 className='text-sm md:text-lg text-gray-400 w-[fit]'>{place.timeTravel}</h2>
            <p className='text-sm md:text-lg w-[fit] '>{place.ticketPricing}</p>
        </div>
    </div>
    </Link>
  )
}

export default PlaceCardItem