import React , {useState , useEffect} from 'react'
import { Link } from 'react-router'
import { PHOTO_REF_URL } from '@/service/GlobalApi'
import { GetPlaceDetails } from '@/service/GlobalApi'
import defaultImg from '../../../assets/default.png'

const HotelCardItem = ({hotel}) => {

       const [photoURL , setPhotoUrl] = useState()
    
        const GetPlacePhoto = async () => {
            const data = { textQuery: hotel?.hotelName };
        
            try {
                const result = await GetPlaceDetails(data);                
                const photo = PHOTO_REF_URL.replace('{NAME}',result.data?.places[0]?.photos[4]?.name);
                setPhotoUrl(photo)
            } catch (error) {
                setError(error)
                console.error("❌ Error fetching place details:", error.response?.data || error.message);
            }
    
        };
        
        useEffect(() =>{
            hotel && GetPlacePhoto();
        },[hotel])
    
  return (
    <>
    <Link to={`https://www.google.com/maps/search/?api=1&query=${hotel.geoCoordinates.latitude},${hotel.geoCoordinates.longitude},${hotel?.hotelName},${hotel?.hotelAddress}`} target="_blank" >
    <div className='hover:scale-105 transition-all cursor-pointer '>
        <img loading='lazy' src= { photoURL ? photoURL : defaultImg} className='rounded-xl h-[180px] w-full object-cover'/>
        <div className='my-2 flex flex-col gap-2'>
            <h2 className='font-medium'>
                {hotel?.hotelName}
            </h2>
            <h2 className='text-sm text-gray-500'>
            📍{hotel?.hotelAddress}
            </h2>
            <h2 className='text-sm'>
            💰${hotel?.pricePerNight} per night
            </h2>
            <h2 className='text-sm'>
                ⭐ {hotel?.rating} stars
            </h2>
        </div>   
    </div>
</Link>
</>
  )
}

export default HotelCardItem