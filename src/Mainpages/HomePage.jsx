import React from "react";
import NavBar from "../components/NavBar/NavBar";
import Questions from "../components/Questions/Questions";
import styles from "./HomePage.module.css";
import FamilyCare from "../components/FamilyCare/FamilyCare";
import Blogsandnews from "../components/Blogsandnews/Blogsandnews";
import PatientCaring from "../components/PatientCaring/PatientCaring";
import MedicalSpecialists from "../components/MedicalSpecialist/MedicalSpecialist";
import Specialisation from "../components/Specialisation/Specialisation";
import Advertisment from "../components/advertisment/Advertisments";
import Herosection from '../components/Herosection/Herosection'

function HomePage() {
  return (
    <div className={styles.homepagemain}>
      
      <Herosection/>
      <Advertisment />
      <Specialisation />
      <MedicalSpecialists />
      <PatientCaring />
      <Blogsandnews />
      <FamilyCare />
      <Questions />
    </div>
  );
}

export default HomePage;
