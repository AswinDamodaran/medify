import { Button, Grid } from "@mui/material";
import React from "react";
import styles from './Herosection.module.css'
import heroimage from '../../images/heroimage.png'
import LookingFor from '../LookingFor/LookingFor'
import SearchBar from '../SearchBar/SearchBar'

function Herosection() {
  return (
    <div className={styles.heroWrapper} >
      <Grid container  className={styles.herotop} >
        <Grid item xs={0} md={1} >

        </Grid>
        <Grid item xs={12} md={5} className={styles.herotext} >
            <h2>Skip the travel! Find Online
            </h2>
            <h1>Medical <span>Centers</span></h1>
            <p>Connect instantly with a 24x7 specialist or choose to <br/> video visit a particular doctor.</p>
            <Button variant="contained" sx={{backgroundColor:"#2AA8FF"}} >Find Centers</Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <img className={styles.heroimage} src={heroimage} alt="doctors image" />
        </Grid>
      </Grid>
      <div className={styles.heroBottom} >
        <SearchBar/>
      <LookingFor/>
      </div>
    </div>
  );
}

export default Herosection;
