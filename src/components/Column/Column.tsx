import React from "react";
import styles from "./Column.module.scss";

export default function Column({title, children}) {
  return <div className={styles.column}>
    <div className={styles.title}>{title}</div>
    <div className={styles.columnContent}>
      {children}
    </div>
  </div>
}
