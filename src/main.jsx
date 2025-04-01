import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import CreateTrip from './create-trip/createTrip'
import Header from './components/custom/Header'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Toaster } from "@/components/ui/sonner"
import { GoogleOAuthProvider } from '@react-oauth/google'
import ViewTrip from './view-trip/tripId'
import MyTrips from './myTrips/MyTrips'
 

const router = createBrowserRouter([
 
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/create-trip",
    element:<CreateTrip/>
  },

  {
    path: "/view-trip/:tripId",
    element:<ViewTrip/>
  },
  {
    path: "/my-trips",
    element:<MyTrips/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_AUTH_CLIENT_ID}>
      <Header/>
      <Toaster/>
      <RouterProvider router={router} />
    </GoogleOAuthProvider>
  // </StrictMode>
);

