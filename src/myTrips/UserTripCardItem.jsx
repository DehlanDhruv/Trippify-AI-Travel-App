import React, { useState, useEffect } from 'react';
import { GetPlaceDetails } from '@/service/GlobalApi';
import { PHOTO_REF_URL } from '@/service/GlobalApi';
import { Link } from 'react-router';
import { useDeleteTrip } from './useDeleteTrip';
import deleteImg from '../assets/delete.png';

const UserTripCardItem = ({ trip, setUserTrips }) => {
    const [photoURL, setPhotoUrl] = useState();
    const defaultImg = '../assets/default.png';

    const GetPlacePhoto = async () => {
        const data = { textQuery: trip?.userSelection?.location?.label };

        try {
            const result = await GetPlaceDetails(data);
            const photo = PHOTO_REF_URL.replace('{NAME}', result.data?.places[0]?.photos[0]?.name);
            setPhotoUrl(photo);
        } catch (error) {
            console.error("❌ Error fetching place details:", error.response?.data || error.message);
        }
    };

    useEffect(() => {
        if (trip) GetPlacePhoto();
    }, [trip]);

    return (
        <Link to={'/view-trip/' + trip?.id}>
            <div className='w-[95%] md:w-[300px] relative cursor-pointer shadow-sm shadow-black hover:scale-105 transition-all bg-white rounded-lg flex flex-col gap-2 p-2'>
                <img 
                    src={photoURL ? photoURL : defaultImg} 
                    className='ml-1 object-cover rounded-xl h-[190px] w-[95%]' 
                />
                <div className='flex flex-col gap-2'>
                    <h2 className='font-bold text-md mb-1'>{trip?.userSelection?.location?.label}</h2>
                    <h2>{trip?.userSelection?.numOfDays} {trip?.userSelection?.numOfDays > 1 ? "days" : "day"} trip</h2>
                    <h2>{trip?.userSelection?.budget} budget</h2>
                    <h2>{trip?.userSelection?.persons} {trip?.userSelection?.persons === 1 ? "Person" : "People"}</h2>
                </div>
                <img 
                    src={deleteImg} 
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        useDeleteTrip(trip.id);
                        setUserTrips(prevTrips => prevTrips.filter(t => t.id !== trip.id));
                    }} 
                    className='h-[30px] w-[34px] absolute bottom-3 right-5 cursor-pointer' 
                />
            </div>
        </Link>
    );
};

export default UserTripCardItem;