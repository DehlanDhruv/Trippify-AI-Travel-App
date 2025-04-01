import { GetPlaceDetails } from '@/service/GlobalApi'
import React, { useEffect, useState } from 'react'
import { PHOTO_REF_URL } from '@/service/GlobalApi'
import defaultImg from '../../../assets/default.png'


const InfoSection =({trip}) => {
    console.log('trip in info section' , trip)

    const [photoURL , setPhotoUrl] = useState();


    const GetPlacePhoto = async () => {

        console.log('textqueryinput' , trip?.userSelection?.location?.label)
    
        const data = { textQuery: trip?.userSelection?.location?.label };
        console.log('infosec data',data)


        try {
            const result = await GetPlaceDetails(data);
            // console.log("✅ API Response:", result.data.places[0].photos[0].name);

            const photo = PHOTO_REF_URL.replace('{NAME}',result.data?.places[0]?.photos[0]?.name);
            const places = result.data?.places;
            if (!places || places.length === 0) {
                throw new Error("No places found for the given query.");
            }
    
            // Ensure photos exist
            const photos = places[0]?.photos;
            if (!photos || photos.length === 0) {
                throw new Error("No photos available for this place.");
            }

            console.log('qqqqqqqqq',photo)
            setPhotoUrl(photo);

            // setPhotoUrl(photo)
        } catch (error) {
            console.error("❌ Error fetching place details:", error.response?.data || error.message);
        }
    };

   
    useEffect(() =>{
        trip && GetPlacePhoto();
    },[trip])

  return (
    <div className=''>
        <img  referrerPolicy="no-referrer"  src={photoURL ? photoURL : defaultImg } key={photoURL} className='w-full h-[280px] md:h-[450px] object-cover rounded-xl'/>
        <div>
            <div className='my-5 flex flex-col gap-2'>
                <h2>
                    {trip?.userSelection?.location?.label}
                </h2>
                <div className='flex gap-4 md:gap-3 '>
                    <h2 className='p-2 md:px-3 bg-gray-200 text-gray-500 rounded-lg md:rounded-full text-xs md:text-md'>
                        {trip?.userSelection?.numOfDays} {trip?.userSelection?.numOfDays >1 ? "Days" : "Day"}
                    </h2>
                    <h2 className='p-2 md:px-3 bg-gray-200 text-gray-500 rounded-lg md:rounded-full text-xs md:text-md'>
                        {trip?.userSelection?.budget} Budget
                    </h2>
                    <h2 className='p-2 md:px-3 bg-gray-200 text-gray-500 rounded-lg md:rounded-full text-xs md:text-md'>
                        No. of Travelers: {trip?.userSelection?.persons.replace('Person' , '')}
                    </h2>
                </div>
            </div>

        </div>       
        
    </div>
  )
}

export default InfoSection