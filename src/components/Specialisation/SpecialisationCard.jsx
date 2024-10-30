import React from 'react'
import styles from './Specialisation.module.css'

function SpecialisationCard({image,text,style='cardmain' }) {
  return (
    <div className={styles[style]} >
        <img src={image} alt="specialistion" />
        <p>{text}</p>
    </div>
  )
}

export default SpecialisationCard
