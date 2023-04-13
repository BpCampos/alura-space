import React from "react";
import Menu from "../Menu";
import banner from "../../assets/banner.png";
import styles from "./Banner.module.scss";

export default function Banner() {
  return (
    <section className={styles.principal}>
      <Menu />
      <div className={styles.principal__imagem}>
        <h1>A galeria mais completa do espaço</h1>
        <img src={banner} alt="A imagem da Terra vista do espaço" />
      </div>
    </section>
  );
}
