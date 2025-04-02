import React, { useEffect, useState } from 'react'
import { Input } from '@/components/ui/input';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { AI_PROMPT, SelectBudgetOptions , SelectTravelerList} from '@/constants/options';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { GoogleGenAI } from "@google/genai";
import { doc, setDoc } from "firebase/firestore"; 
import {db} from '../service/firbaseConfig'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {FcGoogle} from 'react-icons/fc'
import { useGoogleLogin } from '@react-oauth/google';
import axios from 'axios'
import { useNavigate } from 'react-router';


function CreateTrip () {

  const [place , setPlace] = useState()
  const [loading , setLoading] = useState(false)
  const [formData , setFormData] = useState([])
  const [openDialog , setOpenDialog] = useState(false)
  const navigate = useNavigate()

  const SaveAiTrip = async (TripData) =>{
    setLoading(true)
        const docId= Date.now().toString()
        const user =JSON.parse(localStorage.getItem('user'))
        await setDoc(doc(db, "AITrips", docId), {
          userSelection:formData,
          tripSelection:JSON.parse(TripData
          .replace(/```json/g, '')
          .replace(/```/g, '')
          .trim()),
          userEmail : user.email,
          id:docId
        });
    
        navigate(`/view-trip/${docId}`)
        setLoading(false)

        
      }

  const handleInputChange=(name,value)=>{
    if(name==='numOfDays' && value<=0 ){
      toast.error('Number of days must be greater than 0')
      return
    }
    setFormData({
      ...formData , 
      [name]:value,

    })
  }

 
  const onGenerateTrip =  async() =>{
    const user = localStorage.getItem('user')
    if(!user){
      setOpenDialog(true)
      return;
    }


    if(!formData?.numOfDays && !formData?.location && !formData?.budget && !formData?.persons){
      toast('Please fill all fields')
      return
    }

    setLoading(true)
  const FINAL_PROMPT = AI_PROMPT
  .replace('{location}',formData?.location?.label)
  .replace('{totalDays',formData?.numOfDays)
  .replace('{traveler}',formData?.persons)
  .replace('{budget}',formData?.budget)
  .replace('{location}',formData?.location.label)
  .replace('{totalDays',formData?.numOfDays)

  const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });
  async function main() {
      const response = await ai.models.generateContent({
          model: "gemini-2.0-flash",
          contents: FINAL_PROMPT,
      });
      setLoading(false)
      SaveAiTrip(response?.text)
  }
  main();
  }

  const login = useGoogleLogin({
    onSuccess:(codeRes) => { console.log('login data', codeRes) ; getUserProfile(codeRes)},
    onError:(error)=> console.log(error)
  })

  const getUserProfile = async (tokenInfo) => {
    try {
      const res = await axios.get(
        `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`,
        {
          headers: {
            Authorization: `Bearer ${tokenInfo?.access_token}`,
            Accept: 'application/json',
          },
        }
      );
      localStorage.setItem('user', JSON.stringify(res.data));
      setOpenDialog(false);
      onGenerateTrip();


    } catch (err) {
      console.error('Error fetching user profile:', err);
    }
    console.log('ended');
  };

  useEffect(()=>{
    console.log(formData)
  },[formData])


  
  return (
    <div className=' md:px-32 lg:px-56 xl:px-34 mt-10'>
        <h2 className='font-bold text-3xl px-5'>
          Tell us your travel preferences
        </h2>
        <p className='mt-3 text-gray-500 text-lg px-5'>
        Simply share your travel preferences, and our AI-powered trip planner will craft a personalized itinerary just for you—effortless, smart, and tailored to your adventure!
        </p>

        <div className='mt-5 md:mt-15 flex flex-col gap-5 md:gap-9 px-5'>
          <div>
            <h2 className='text-xl my-3 font-medium'>What is your destination of choice?</h2>
            <GooglePlacesAutocomplete
              apiKey={import.meta.env.VITE_GOOGLE_PLACE_API_KEY}
              selectProps={{
                place , 
                placeholder:'Type in your destination...',
                onChange:(place) => {setPlace(place) ; handleInputChange('location' , place)}
              }} 
            />  
          </div>

          <div>
          <h2 className='text-xl my-3 font-medium'>How many days are you planning for the trip?</h2>
          <Input placeholder={'Ex: 3'} type='number' 
          onChange={(e) => handleInputChange('numOfDays' , e.target.value)}/>
          </div>  
        </div>

        <div className='bg-green-100 mx-1 px-3 rounded-2xl py-4 my-5'>
          <h2 className='text-xl my-5 md:my-3 font-medium'>What is your budget?</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-5 xl:gap-3 mt-5'>
            {
              SelectBudgetOptions.map((item,index)=>(
                <div key={index} 
                onClick={()=>handleInputChange('budget' ,item.title )}
                className={`cursor-pointer p-4 border rounded-lg hover:shadow-lg ${formData?.budget == item.title &&'shadow-lg border-green-800 border-5' }`}>
                  <h2 className='text-4xl'>{item.icon}</h2>
                  <h2 className='font-bold text-lg'>{item.title}</h2>
                  <h2 className=' text-lg md:text-sm text-gray-500'>{item.desc}</h2>
                </div>

              ))
            }
          </div>
        </div>

        <div className='bg-violet-100 mx-1 px-3 rounded-2xl py-4 my-2' >
          <h2 className='text-xl my-3 font-medium'>Who do you plan to travel with?</h2>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-5 mt-5'>
            {
               SelectTravelerList.map((item,index)=>(
                <div key={index} 
                onClick={()=>handleInputChange('persons' ,item.people )}
                className={`cursor-pointer p-4 border rounded-lg hover:shadow-lg ${formData?.persons == item.people &&'shadow-lg border-violet-800 border-5' }`}>
                  <h2 className='text-4xl'>{item.icon}</h2>
                  <h2 className='font-bold text-lg'>{item.title}</h2>
                  <h2 className='text-lg md:text-sm text-gray-500'>{item.desc}</h2>
                </div>

              ))
            }
          </div>
        </div>

        <div className='my-10  justify-center md:justify-end flex '>
          <Button className='cursor-pointer text-white bg-black md:w-fit w-[98%] py-7 md:text-auto text-lg ' onClick={onGenerateTrip} variant='outline'>
            { loading ? <>Generating....</> : <>Generate Trip</>}
          </Button>
        </div>

        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
          <DialogContent className='bg-white'>
            <DialogTitle className='text-3xl font-bold text-gray-900'>Trip Details</DialogTitle>
            <DialogHeader>
              <DialogDescription>
                
                <img src='/logo.svg'/> </DialogDescription>
                <p className='font-bold text-lg mt-5'>Sign in securely with Google</p>
                <p className='text-gray-400'>Sign in to the App with Google authentication securely</p>
                <Button onClick={login} className='flex gap-4 items-center bg-black text-white w-full mt-4'> <FcGoogle className='h-11 w-11'/> Sign in with Google</Button>
            </DialogHeader>
          </DialogContent>
        </Dialog>


    </div>
  )
}

export default CreateTrip
