import React from "react";
import styles from "./styles.module.css";

function ImageLayout({ title, imageUrl, updatedAt }) {
  return (
    <div>
      <div>
        <h2>{title}</h2>
      </div>
      <div className={styles.image}>
        {imageUrl && <img src={imageUrl} alt={title} />}
      </div>
    </div>
  );
}

export default ImageLayout;
