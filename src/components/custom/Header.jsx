import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { googleLogout } from '@react-oauth/google'
import { useGoogleLogin } from '@react-oauth/google'
import { FcGoogle } from 'react-icons/fc'
import axios from 'axios'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import menu from '../../assets/menu.png'
import logout from '../../assets/logout.png'


const Header = () => {
    const [openDialog , setOpenDialog] = useState(false)
    const [openMenu , setOpenMenu] = useState(false)

    console.log(openMenu)
      const login = useGoogleLogin({
        onSuccess:(codeRes) => { console.log('login data', codeRes) ; getUserProfile(codeRes)},
        onError:(error)=> console.log(error)
      })
      const getUserProfile = async (tokenInfo) => {
        console.log('getUserProfileCalled');
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
          console.log('User Profile:', res.data);
          localStorage.setItem('user', JSON.stringify(res.data));
          setOpenDialog(false);    
    
        } catch (err) {
          console.error('Error fetching user profile:', err);
        }
        console.log('ended');
      };
  const user = JSON.parse(localStorage.getItem('user'))

  useEffect(()=>{
    console.log(user)
  },[])
  return (
    <div className='justify-between py-3 px-1 md:px-5 shadow-sm flex md:justify-between items-center bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white '>
      <a href='/'> <img  className ='h-8 md:h-auto md:animate-none animate-pulse ' src='/logo.svg'/> </a>
        <h2 className=' text-white md:pl-0 pl-4 sm:text-xl font-bold md:text-2xl p-0 md:font-extrabold leading-tight text-center '>Trippify- AI enhanced trip planning </h2>

        <div className=' hidden md:inline'>
          {
            user? 
            
              <div className='flex items-center md:gap-3 gap-2 '>
                <a href='/my-trips'>
                  <Button variant="outline" className='cursor-pointer font-medium md:rounded-full text-white p-1 md:p-3' >My Trips</Button>
                </a>
                
                <Popover>
                  <PopoverTrigger>                
                    <img src={user?.picture} className='md:h-[35px] md:w-[35px] h-[30px] w-[30px] rounded-full cursor-pointer'/>
                  </PopoverTrigger>
                  <PopoverContent 
                  className='w-fit cursor-pointer p-3 text-sm m-1 bg-red-500 text-white'>
                    <p onClick={() => {
                      googleLogout();
                      localStorage.removeItem('user');
                      window.location.reload();
                    }}>Logout</p>
                  </PopoverContent>
                </Popover>



              </div>
            :
            <>
                      <Button variant="outline" className='rounded-full' onClick={() =>{setOpenDialog(true)}}>Sign In</Button>
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
              </>
              
          }
        </div>

        <div className='md:hidden p-0'>
          {user ? 
          <DropdownMenu>
  <DropdownMenuTrigger className='outline-0 flex'>
  
  <img onClick={()=>{setOpenMenu(!openMenu)}} src={menu} className='justify-self-end h-[23px] w-[23px] cursor-pointer'/>
  
  </DropdownMenuTrigger>
  <DropdownMenuContent className='bg-black outline-0 min-w-4 w-fit '>
    <DropdownMenuItem className='cursor-pointer text-white w-fit flex '> My Trips  <a href='/my-trips'>
      <img src={user?.picture} className='justify-self-end rounded-full h-[23px] w-[23px] cursor-pointer'/>
    </a></DropdownMenuItem>
    <DropdownMenuItem 
                  className=' text-white w-fit '
                     onClick={() => {
                      googleLogout();
                      localStorage.removeItem('user');
                      window.location.reload();
                    }}>Logout
                    <img src={logout} className='justify-self-end h-[23px] w-[23px] cursor-pointer ml-2'/>
                  </DropdownMenuItem>
    
  </DropdownMenuContent>
</DropdownMenu>

          

        : 
        <Button variant="outline" className='rounded-full' onClick={() =>{setOpenDialog(true)}}>Sign In</Button>
        }

        </div>
    </div>
  )
}

export default Header