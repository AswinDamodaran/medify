import { Box, Divider, Stack, Typography } from "@mui/material";
import { add, format, isEqual, startOfDay } from "date-fns";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import styles from "./daySelector.module.css";

import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function DaySelector({ selected, setSelected, totalSlots }) {
  const date = startOfDay(new Date());
  const dateItems = [];

  for (let i = 0; i < 7; i++) {
    dateItems.push(add(date, { days: i }));
    console.log(dateItems);
  }
  const customDateFormat = (day) => {
    if (isEqual(date, day)) {
      return "Today";
    } else if (isEqual(date, add(day, { days: -1 }))) {
      return "Tomorrow";
    } else {
      return format(day, "E,d LLL");
    }
  };
  const handleClick = (day) => {
    setSelected(day);
  };

  return (
    <Stack justifyContent="center" alignItems="center">
      <Divider
        sx={{
          marginTop: { xs: 3, md: 2 },
          width: "10%",
          bgcolor: "#00A500",
          height: "5px",
          borderRadius: "15px",
        }}
      />
      <Swiper
        style={{ maxWidth: "40vw", marginTop: "10px", alignItems: "center" }}
        slidesPerView={4}
        loop={false}
        spaceBetween={11}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          767: {
            spaceBetween: 30,
            slidesPerView: 3,
          },
        }}
      >
        {dateItems.map((day, idx) => (
          <SwiperSlide key={idx} className={styles.swiperslides}>
            <Stack
              textAlign="center"
              onClick={() => handleClick(day)}
              sx={{ cursor: "pointer" }}
            >
              <Typography
                fontWeight={isEqual(day, selected) ? 700 : 400}
                fontSize={{ xs: 11, md: 16 }}
              >
                {customDateFormat(day)}
              </Typography>
              <Typography color="#01A400" fontSize={{ xs: 8, md: 12 }}>
                {`${totalSlots} slots available`}
              </Typography>

              <Box
                height={{ xs: "4px", md: "5px" }}
                width={{ xs: 1, md: "calc(100%-50px)" }}
                position="relative"
                bottom="0"
                bgcolor={isEqual(day, selected) ? "#14BEF0" : ""}
                left={0}
                zIndex={999}
                mt="5px"
                mx="auto"
              ></Box>
            </Stack>
          </SwiperSlide>
        ))}
        {/* <Stack direction="row" alignItems="center" width="100%">
          <Box
            className="custom-prev"
            sx={{ position: "absolute", left: 0, zIndex: 1 }}
          >
            <NavigateBeforeIcon />
          </Box>
        </Stack>
        <Stack slot="contained-end">
          <Box className="custom-next" display={{ xs: "none", md: "block" }}>
            <NavigateNextIcon />
          </Box>
        </Stack> */}
      </Swiper>

      <Box
        height={{ xs: "4px", md: "5px" }}
        width={{ xs: 1, md: "calc(100%-50px)" }}
        bgcolor="#F0F0F5"
        mt="5px"
        position="absolute"
        bottom={0}
        left="50%"
        sx={{ transform: "-50% 0" }}
      ></Box>
    </Stack>
  );
}

export default DaySelector;
