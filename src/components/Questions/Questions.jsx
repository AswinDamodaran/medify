import React from "react";
import styles from "./Questions.module.css";
import Qimage from "../../images/Question.svg";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

function Questions() {

    const question=["Why choose our medical for your family?","Why we are different from others?","Trusted & experience senior care & love","How to get appointment for emergency"]

  return (
    <div className={styles.questionwrappermain}>
      <div className={styles.heading}>
        <h4>Get Your Answer</h4>
        <h1>Frequently Asked Questions</h1>
      </div>
      <div className={styles.questionwrapper}>
        <div className={styles.image}>
          <img src={Qimage} alt="Question image" />
        </div>
        <div className={styles.accordions}>
{question.map((acc,idx)=>(
              <Accordion key={idx} >
              <AccordionSummary
              style={{fontWeight:600,color:"#1B3C74"}}
                expandIcon={<FontAwesomeIcon icon={faPlus} style={{color:"#2AA7FF",fontSize:20}} />}
                aria-controls="panel1-content"
                // id="panel1-header"
              >
                {acc}
              </AccordionSummary>
              <AccordionDetails>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </AccordionDetails>
            </Accordion>
))}
        </div>
      </div>
    </div>
  );
}

export default Questions;
