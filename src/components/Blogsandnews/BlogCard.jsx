import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import styles from "./Blogsandnews.module.css";
import docImg from "../../images/docImage.svg";

function BlogCard({ images, heading, field, Docname, date }) {
  return (
    <Card sx={{ maxWidth: 345 }}  style={{ margin: 20 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          style={{ objectFit: "contain" }}
          image={images}
          alt="news image"
        />
        <CardContent>
          <div className={styles.cardDetails}>
            <p>{field}</p>
            <p>{date}</p>
          </div>
          <div className={styles.cardheading}>
            <h4>{heading}</h4>
          </div>
          <div className={styles.docname}>
            <img src={docImg} alt="doc image" />
            <p>{Docname}</p>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default BlogCard;
