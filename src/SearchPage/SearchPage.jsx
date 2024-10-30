import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

function SearchPage() {

  const [searchParams,setSearchParams]=useSearchParams()
  const [state,setState]=useState(searchParams.get("state"))
  const [city,setCity]=useState(searchParams.get("city"))

  const [Hospitals,setHospitals]=useState([])

  

  const availableSlots={
    morning:["11:30 AM"],
    afternoon:["12:00 PM","12:30 PM","01:30 PM","02:00 PM","02:30 PM"],
    evening:["06:00 PM","06:30 PM","07:00 PM","07:30 PM"],
  }

  return (
    <div>
      
    </div>
  )
}

export default SearchPage