import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { collection, query, where, getDocs } from 'firebase/firestore';
import UserTripCardItem from './UserTripCardItem';
import { db } from '../service/firbaseConfig';
import { Button } from '@/components/ui/button';

const MyTrips = () => {
    const [userTrips, setUserTrips] = useState([]);
    const navigate = useNavigate();

    const GetUserTrips = async () => {
        console.log('Function called');

        const user = JSON.parse(localStorage.getItem('user'));
        if (!user) {
            navigate('/');
            return;
        }

        setUserTrips([]);

        const tripsRef = collection(db, 'AITrips');
        const q = query(tripsRef, where('userEmail', '==', user.email));

        try {
            const querySnapshot = await getDocs(q);
            const trips = querySnapshot.docs.map((doc) => doc.data());
            setUserTrips(trips);
        } catch (error) {
            console.error('❌ Error fetching user trips:', error);
        }
    };

    useEffect(() => {
        GetUserTrips();
    }, []);

    return (
        <div className="p-5 md:px-32 lg:px-56 xl:px-10 mt-10 gap-5">
            <div className="flex justify-between">
                <h2 className="text-2xl md:text-3xl font-bold">
                    My Trips: {userTrips.length}
                </h2>
                <Link to={'/'}>
                    <Button className="py-1 px-3 text-xs md:text-sm md:p-3 text-white bg-black cursor-pointer animate-pulse">
                        Create a New Trip
                    </Button>
                </Link>
            </div>

            <div className="grid grid-cols-2 mt-10 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {userTrips.length > 0
                    ? userTrips.map((trip, index) => (
                          <UserTripCardItem key={index} trip={trip} setUserTrips={setUserTrips} />
                      ))
                    : Array.from({ length: 8 }).map((_, index) => (
                          <div key={index} className="h-[250px] w-full bg-slate-200 animate-pulse rounded-xl"></div>
                      ))}
            </div>
        </div>
    );
};

export default MyTrips;
