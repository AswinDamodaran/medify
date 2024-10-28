import React from "react";
import styles from './FamilyCare.module.css'
import { Grid } from "@mui/material";
import FamilyCard from "./FamilyCard";
import familycard from "../../images/familycard.svg";
import familtcardhsptl from "../../images/familycardhsptl.svg";
import familylab from "../../images/familycardlab.svg";
import familydoc from "../../images/familydoc.svg";

export default function FamilyCare() {
  const data = [
    { count: "5000+", text: "Happy Patients", image: familycard },
    { count: "200+", text: "Hospitals", image: familtcardhsptl },
  ];
  const data2 = [
    { count: "1000+", text: "Laboratories", image: familylab },
    { count: "700+", text: "Expert Doctors", image: familydoc },
  ];
  return (
    <Grid container className={styles.familymain} width="80%" >
      <Grid item xs={5} className={styles.familytext} width={3}>
        <h5>CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</h5>
        <h1>Our Families</h1>
        <p>
          pWe will work with you to develop individualised care plans, including
          management of chronic diseases. If we cannot assist, we can provide
          referrals or advice about the type of practitioner you require. We
          treat all enquiries sensitively and in the strictest confidence.
        </p>
      </Grid>
      <Grid item xs={2}></Grid>
      <Grid item xs={5} className={styles.familycards}>
        <div className={styles.cardrow} >
          {data.map((card, idx) => (
            <FamilyCard key={idx} text={card.text} count={card.count} image={card.image} />
          ))}
        </div>
        <div className={styles.cardrow} >
          {data2.map((card, idx) => (
            <FamilyCard key={idx} text={card.text} count={card.count} image={card.image} />
          ))}
        </div>
      </Grid>
    </Grid>
  );
}
