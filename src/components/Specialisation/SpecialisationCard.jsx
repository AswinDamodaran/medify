import React from 'react'
import styles from './Specialisation.module.css'

function SpecialisationCard({image,text}) {
  return (
    <div className={styles.cardmain} >
        <img src={image} alt="specialistion" />
        <p>{text}</p>
    </div>
  )
}

export default SpecialisationCard
