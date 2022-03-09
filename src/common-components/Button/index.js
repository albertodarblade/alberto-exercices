import classNames from "classnames";
import React from "react";
import styles from "./styles.module.css";
function Button({ className, children, ...leftOverProps }) {
  return (
    <button className={classNames(styles.button, className)} {...leftOverProps}>
      {children}
    </button>
  );
}

export default Button;
