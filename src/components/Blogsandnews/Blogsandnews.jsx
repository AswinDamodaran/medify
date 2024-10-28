import React from "react";
import newsImage from "../../images/blogs&newsimage.svg";
import styles from "./Blogsandnews.module.css";
import BlogCard from "./BlogCard";
import { Grid } from "@mui/material";

function Blogsandnews() {
  const data = [
    {
      image: newsImage,
      heading: "6 Tips To Protect Your Mental Health When You’re Sick",
      field: "Medical",
      Docname: "Rebecca Lee",
      date: "March 31, 2022",
    },
    {
      image: newsImage,
      heading: "6 Tips To Protect Your Mental Health When You’re Sick",
      field: "Medical",
      Docname: "Rebecca Lee",
      date: "March 31, 2022",
    },
    {
      image: newsImage,
      heading: "6 Tips To Protect Your Mental Health When You’re Sick",
      field: "Medical",
      Docname: "Rebecca Lee",
      date: "March 31, 2022",
    },
  ];

  return (
    <div>
      <div className={styles.heading}>
        <h4>Blog & News</h4>
        <h1>Read Our Latest News</h1>
      </div>
      <Grid container>
        {data.map((content, idx) => (
          <Grid item key={idx} xs={4}>
            <BlogCard
              images={content.image}
              heading={content.heading}
              field={content.field}
              Docname={content.Docname}
              date={content.date}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Blogsandnews;
