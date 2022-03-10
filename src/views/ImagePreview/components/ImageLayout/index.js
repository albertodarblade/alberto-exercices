import React from "react";
import propTypes from "prop-types";
import styles from "./styles.module.css";

/**
 *
 * @param {object} props Component props
 * @param {string} props.title Component header title of the image
 * @param {string} props.imageUrl img src to render a img tag
 * @returns JSX component
 */
function ImageLayout({ title, imageUrl }) {
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

ImageLayout.propTypes = {
  title: propTypes.string,
  imageUrl: propTypes.string,
};

export default ImageLayout;
