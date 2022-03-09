import React from "react";
import classnames from "classnames";
import styles from "./styles.module.css";

function Tag({ label, endIcon, className }) {
  return (
    <div className={classnames(className, styles.tag)}>
      <span>{label}</span>
      {endIcon}
    </div>
  );
}

Tag.defaultProps = {
  endIcon: null,
  classnames: "",
};

export default Tag;
