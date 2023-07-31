import React from "react";
import styles from "./Article.module.scss";

interface Props {
  url: string,
  title: string,
  description: string,
  animationDelay: number
}

export default function Article({url, title, description, animationDelay}: Props) {
  return <a target="_blank" className={styles.link} style={{animationDelay: `${animationDelay}s`}} href={url}>
      <span className={styles.articleTitle}>{title}</span>
      <span className={styles.description}>{description}</span>
    </a>
}
