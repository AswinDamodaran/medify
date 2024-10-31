import { Box } from '@mui/material'
import { startOfDay } from 'date-fns'
import React, { useState } from 'react'
import DaySelector from '../DaySelector/DaySelector'

function Calender({availableSlots,handleBooking,hospitals}) {

    const [selected,setSelected]=useState(startOfDay(new Date()))

    const totalSlots=  availableSlots.morning.length  + availableSlots.afternoon.length  + availableSlots.evening.length 

  return (
<Box>
    <DaySelector
    selected={selected}
    setSelected={setSelected}
    totalSlots={totalSlots}
    />
    {/* <TimeSlotPicker
    availableSlots={availableSlots}
    selected={selected}
    hospitals={hospitals}
    handleBooking={handleBooking}
    /> */}
</Box>


  )
}

export default Calender