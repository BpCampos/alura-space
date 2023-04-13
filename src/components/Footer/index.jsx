import React from "react";
import styles from "./Footer.module.scss";
import twitter from "./twitter.svg";
import facebook from "./facebook.svg";
import instagram from "./instagram.svg";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__images}>
        <img src={twitter} alt="twitter logo" />
        <img src={facebook} alt="facebook logo" />
        <img src={instagram} alt="instagram logo" />
      </div>
      <p>Desenvolvido por Alura</p>
    </div>
  );
}
