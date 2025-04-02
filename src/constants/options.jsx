export const SelectTravelerList=[
    {
        id: 1,
        title: 'Solo Traveler',
        desc: 'Embark on a self-discovery journey with complete freedom and adventure.',
        icon: '🧍',
        people: '1 Person'
    },
    {
        id: 2,
        title: 'Romantic Getaway',
        desc: 'Enjoy a memorable trip with your partner, full of love and relaxation.',
        icon: '💑', 
        people: '2 People'
    },
    {
        id: 3,
        title: 'Family Vacation',
        desc: 'Create lasting memories with your loved ones, perfect for all ages.',
        icon: '🏡', 
        people: '3+ People'
    },
    {
        id: 4,
        title: 'Friends Trip',
        desc: 'Experience adventure, fun, and unforgettable moments with your friends.',
        icon: '🎉', 
        people: '5-10 People'
    }

]

export const SelectBudgetOptions=[
    {
        id: 1,
        title: 'Economical',
        desc: 'Travel affordably with cost-effective stays and experiences.',
        icon: '💸' 
    },
    {
        id: 2,
        title: 'Moderate',
        desc: 'Balance comfort and cost for a well-rounded travel experience.',
        icon: '🏨' 
    },
    {
        id: 3,
        title: 'Luxury',
        desc: 'Indulge in high-end accommodations and premium experiences.',
        icon: '👑' 
    }
]

export const AI_PROMPT=`generate travel plan for Location: {location} for {totalDays} days for {traveler} persons with a {budget} budget.Give me hotel option list with hotel name, hotel address, price, hotel image URL, geo coordinates, rating, descriptions, and suggest itinerary with place name, place details, place image URL, geo coordinates, ticket pricing, time Travel for each of Location :{location} for {totalDays} days with each day plan with the time interval to visit in JSON format.Give me everything in json fomat not in text as i will pasrse your result in json for my database. itinerary should be an array not objects. Keep the data structure constant do not change it.
1. Provide hotel options as an array:
   - hotelName
   - hotelAddress (string)
   - price per night in dollars (number)
   - hotelImageURL (string)
   - geoCoordinates (object with latitude, longitude)
   - rating (number)
   - description (string)

2. Suggest an **itinerary as an array** for any number of days example day1 , day 2 and so on (not an object):
   - Each day should have:
     - day (integer)
     - places (array of places with details)
       - placeName (string)
       - placeDetails (string)
       - placeImageURL (string)
       - geoCoordinates (object with latitude, longitude)
       - ticketPricing (string)
       - timeTravel (string) 
       - timeOpened `


export const LINKEDIN = 'https://www.linkedin.com/in/dhruv-dehlan-637a1053/'

export const MAIL ='https://mail.google.com/mail/?view=cm&fs=1&to=dehlandhruv@gmail.com&su=Hello&body=I%20wanted%20to%20reach%20out.'

export const GITHUB='https://github.com/DehlanDhruv/Trippify-AI-Travel-App'