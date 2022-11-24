import React from 'react'
import { useState } from 'react'
export default function Home() {

    const [hotel,setHotel]=useState([]);
     async function fetchData(){
        await fetch('/restaurants.json')
        .then((res)=> res.json())
        .then((data) => setHotel(data))
     }
     fetchData()
     console.log(hotel)
  return (
    <div>
          
    </div>
  )
}
