import React, {PropsWithChildren} from "react";
import styles from "./Column.module.scss";

interface Props {
  title: string
}

export default function Column({title, children}: PropsWithChildren<Props>) {
  return <div className={styles.column}>
    <div className={styles.title}>{title}</div>
    <div className={styles.columnContent}>
      {children}
    </div>
  </div>
}
