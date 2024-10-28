import { Grid } from "@mui/material";
import React from "react";
import styles from './Herosection.module.css'

function Herosection() {
  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={6} className={styles.herotext} >
            <h2>Skip the travel! Find Online
            Medical Centers</h2>
            <h1>Medical <span>Centers</span></h1>
            <p>Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.</p>
        </Grid>
        <Grid item xs={12} md={6}></Grid>
      </Grid>
    </div>
  );
}

export default Herosection;
