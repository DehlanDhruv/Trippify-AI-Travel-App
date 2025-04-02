import React, { useEffect ,useState} from 'react'
import { useParams } from 'react-router'
import {getDoc , doc} from 'firebase/firestore'
import { toast } from 'sonner';
import {db} from '@/service/firbaseConfig';
import InfoSection from './components/InfoSection';
import Hotels from './components/Hotels';
import PlacesToVisit from './components/PlacesToVisit';

const ViewTrip = () => {
    const {tripId} = useParams();
    const [trip , setTrip] = useState(null);
    
    const getTripData = async()=>{
        try{
            const docRef = doc(db , 'AITrips' , tripId);
            const docSnap = await getDoc(docRef);

            if(docSnap.exists()){
                console.log('fetched db data' , docSnap.data());
                setTrip(docSnap.data());
                console.log('after fetching trip is' , trip)

            }
            else{
                console.log('no doc found')
                toast('no trip found')
                setTrip(null)
            }

        }

        catch (error) {
            console.error("❌ Error fetching trip data:", error);
            toast("Error fetching trip data.");
        }
        
    }

    console.log( 'trip in view-trip index.jsx',trip) 

    useEffect(()=>{
        getTripData()
    },[tripId])

    return (
        <div className=' p-5 md:p-10 md:px-20 lg:px-44 xl:px-52'>
            {/* Info Section */}
            <InfoSection trip = {trip}/>
            
            {/* Recommeded Hotels */}
            <Hotels trip={trip}/>

            {/* Daily Plan */}
            <PlacesToVisit trip={trip}/>

            {/* Footer */}
        </div>

    )
}

export default ViewTrip 