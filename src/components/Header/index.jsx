import logo from "./logo.png";
import search from "./search.png";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="logo" />
      <div className={styles.header__container}>
        <input className={styles.header__input} type="text" placeholder="pesquise aqui" />
        <img src={search} alt="ícone da lupa" />
      </div>
    </header>
  );
}
