import React from 'react'
import styles from './FamilyCare.module.css'

function FamilyCard({text,count,image}) {
  return (
    <div className={styles.cardmain} >
        <img src={image} alt="family card image" />
        <h1>{count}</h1>
        <p>{text}</p>
    </div>
  )
}

export default FamilyCard