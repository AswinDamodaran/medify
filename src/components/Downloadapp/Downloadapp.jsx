import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import image from '../../images/downloadimage.svg'

function Downloadapp() {
  return (
    <div style={{borderBottom:0,objectFit:"contain",width:"100%"}}  >
      <img src={image} alt="download image" />
    </div>
  )
}

export default Downloadapp