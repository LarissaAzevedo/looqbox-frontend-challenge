import React from "react";

import styles from "../../styles/ProgressBar.module.css";

const ProgressBar = ({ completed, max, stat }) => {
  return (
    <div className={styles.containerStyles}>
      <div className={styles.textGroups}>
        <span>{stat}</span>
        <span>{(completed / max) * 100}%</span>
      </div>
      <progress value={completed} max={max} />
    </div>
  );
};

export default ProgressBar;