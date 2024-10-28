import React from "react";
import styles from "./Footer.module.css";
import Logo from "../logo/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faYoutube,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/material";

function Footer() {
  const listData = [
    "About us",
    "Orthology",
    "About us",
    "Our pricing",
    "Neurology",
    "Our pricing",
    "Our gallary",
    "Dental Care",
    "Our gallary",
    "Appointment",
    "Opthalmology",
    "Appointment",
    "Privacy policy",
    "Cardiology",
    "Privacy policy",
  ];

  return (
    <div className={styles.footermain}>
      <Grid container>
        <Grid item xs={4} className={styles.logosection}>
          <div className={styles.medciplogo}>
            <Logo />
          </div>
          <Box
            className={styles.icons}
            display="flex"
            justifyContent="center"
            gap={2}
          >
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faXTwitter} />
            <FontAwesomeIcon icon={faYoutube} />
            <FontAwesomeIcon icon={faPinterest} />
          </Box>
        </Grid>
        <Grid item className={styles.list} xs={8}>
          <Grid container>
            {listData.map((list, index) => (
              <Grid item xs={4} key={index}>
                <Box
                  
                  display="flex"
                  alignItems="center"
                  gap={2}
                  className={styles.listItem}
                  marginTop={1}
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                  <span>{list}</span>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <div className={styles.copyrights}>
        <p>Copyright ©2023 Surya Nursing Home.com. All Rights Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
