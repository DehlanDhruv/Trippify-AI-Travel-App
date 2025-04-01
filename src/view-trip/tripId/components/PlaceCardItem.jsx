import React , {useState , useEffect} from 'react'
import { Link } from 'react-router'
import { PHOTO_REF_URL } from '@/service/GlobalApi'
import { GetPlaceDetails } from '@/service/GlobalApi'
import defaultImg from '../../../assets/default.png'

const PlaceCardItem = ({place}) => {

      const [photoURL , setPhotoUrl] = useState()

  
      const GetPlacePhoto = async () => {
          // if (!trip?.userSelection?.location?.label) {
          //     console.error("❌ Location is missing in trip object!");
          //     return;
          // }
      
          const data = { textQuery: place.placeName };
      
          try {
              const result = await GetPlaceDetails(data);
            //   console.log("✅ API Response:", result.data.places[0].photos[0].name);
              
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

   
    <div className='md:flex md:gap-7 shadow-md border-1 rounded-lg p-3 mt-2 hover:scale-105 transition-all hover:shadow-md cursor-pointer'>
        <img src={photoURL ? photoURL : defaultImg}
        className='w-[95%] h-[140px] rounded-xl object-cover' 
        />
        <div className='flex flex-col gap-2'>
            <h2 className='text-lg font-bold'>{place.placeName}</h2>
            <p className='text-sm'>{place.placeDetails}</p>
            <h2 className='text-sm text-gray-400 '>{place.timeTravel}</h2>
            <p className='text-sm'>{place.ticketPricing}</p>
        </div>
    </div>
    </Link>
  )
}

export default PlaceCardItem