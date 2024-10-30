import React from "react";
import doctors from "../../images/looking for component/doctors.svg";
import labs from "../../images/looking for component/labs.svg";
import Hospitals from "../../images/looking for component/hospital.svg";
import medical from "../../images/looking for component/medical.svg";
import Ambulance from "../../images/looking for component/ambulance.svg";
import { Grid } from "@mui/material";
import SpecialisationCard from "../Specialisation/SpecialisationCard";

function LookingFor() {
  const data = [
    { pic: doctors, text: "Doctors" },
    { pic: labs, text: "Labs" },
    { pic: Hospitals, text: "Hospitals" },
    { pic: medical, text: "Medical Store" },
    { pic: Ambulance, text: "Ambulance" },
  ];
  return (
    <div style={{width:"100%"}} >
      <h2 style={{color:"#102851"}} >You may be looking for</h2>
      <Grid container>
        {data.map((card, idx) => (
          <Grid item key={idx} xs={6} md={2.4}>
            <SpecialisationCard
              style="cardlooking"
              image={card.pic}
              text={card.text}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default LookingFor;
