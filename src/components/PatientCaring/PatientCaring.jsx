import { Grid } from "@mui/material";
import React from "react";
import image from "../../images/patientcaring.svg";
import tick from '../../images/patientcaringTick.svg'
import styles from './PatientCaring.module.css'

function PatientCaring() {
  const data = [
    "Stay Updated About Your Health",
    "Check Your Results Online",
    "Manage Your Appointments",
  ];

  return (
    <Grid container className={styles.mainwrapper} >
      <Grid item xs={12} md={6}  className={styles.patientWrapper}>
        <img src={image} alt="patient caring image" />
      </Grid>
      <Grid item xs={12} md={6}  >
        <h5>HELPING PATIENTS FROM AROUND THE GLOBE!!</h5>
        <h1>
          Patient <span>Caring</span>
        </h1>
        <p>
          Our goal is to deliver quality of care in a courteous, respectful, and
          compassionate manner. We hope you will allow us to care for you and
          strive to be the first and best choice for healthcare.
        </p>
        {data.map((text, idx) => (
          <div key={idx} className={styles.list} >
            <img src={tick} />
            <p>{text}</p>
          </div>
        ))}
      </Grid>
    </Grid>
  );
}

export default PatientCaring;
