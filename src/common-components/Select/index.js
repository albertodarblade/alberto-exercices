import classNames from "classnames";
import React from "react";
import styles from "./styles.module.css";
function Select({ className, options, onChange, value, ...leftOverProps }) {
  function handleChange(event) {
    const option = options.find((option) => option.value == event.target.value);
    onChange(event, option);
  }
  return (
    <select
      onChange={handleChange}
      value={value}
      className={classNames(styles.select, className)}
      {...leftOverProps}
    >
      <option value=""> Choose a tag... </option>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.text}
        </option>
      ))}
    </select>
  );
}

export default Select;
