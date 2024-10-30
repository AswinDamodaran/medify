import React from 'react'
import img1 from '../../images/specialisation/bloodtest.svg'
import img2 from '../../images/specialisation/cardiology.svg'
import img3 from '../../images/specialisation/dentist.svg'
import img4 from '../../images/specialisation/lab.svg'
import img5 from '../../images/specialisation/mri.svg'
import img6 from '../../images/specialisation/piscologist.svg'
import img7 from '../../images/specialisation/primaryCare.svg'
import img8 from '../../images/specialisation/xray.svg'
import SpecialisationCard from './SpecialisationCard'
import { Button, Grid } from "@mui/material";
import styles from './Specialisation.module.css'

function Specialisation() {
    const data=[
        {pic:img3,text:"Blood Test"},
        {pic:img2,text:"Cardiology"},
        {pic:img1,text:"Dentistry"},
        {pic:img8,text:"X-Ray"},
        {pic:img5,text:"MRI Resonance"},
        {pic:img6,text:"Piscologist"},
        {pic:img7,text:"Primary Care"},
        {pic:img4,text:"Dentistry"},
    ]

  return (
    <div className={styles.specialMain} >
      <h1>Find by specialisation</h1>
        <Grid container  className={styles.gridmain} >
            {data.map((card,idx)=>(
               <Grid item key={idx} xs={6} md={3} className={styles.gridcontent} >
                <SpecialisationCard  image={card.pic} text={card.text} />
               </Grid>
            ))}
        </Grid>
        <Button sx={{marginRight:"50px",marginTop:"10px"}} variant='contained' >View all</Button>
    </div>
  )
}

export default Specialisation