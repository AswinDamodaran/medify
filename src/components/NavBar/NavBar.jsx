import React, { useState } from "react";
import Logo from "../logo/Logo";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import styles from "./NavBar.module.css";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const [value, setValue] = useState("1");
  const navigate=useNavigate()

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const HandleBookingClick=()=>{
    navigate("/my-bookings")
  }
  const handleHospital=()=>{
    navigate("/search")
  }

  return (
    <div className={styles.navWrapper}>
      <div>
        <Logo />
      </div>
      <div className={styles.navRight} >
        <TabContext value={value}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <TabList onChange={handleChange} aria-label="navigation tabs">
              <Tab label="Find Doctors" value="1" />
              <Tab onClick={handleHospital} label="Hospitals" value="2" />
              <Tab label="Medicines" value="3" />
              <Tab label="Surgeries" value="4" />
              <Tab label="Software for Provider" value="5" />
              <Tab label="Facilities" value="6" />
            </TabList>
          </Box>
          <TabPanel value="1"></TabPanel>
          <TabPanel value="2"></TabPanel>
          <TabPanel value="3"></TabPanel>
          <TabPanel value="4"></TabPanel>
          <TabPanel value="5"> </TabPanel>
          <TabPanel value="6"></TabPanel>

          <Button onClick={HandleBookingClick} variant="contained" sx={{backgroundColor:"#2AA8FF"}} >My Bookings</Button>
        </TabContext>
      </div>
    </div>
  );
}

export default NavBar;
