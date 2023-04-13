import React from "react";
import styles from "./Popular.module.scss";
import popularPhotos from "./fotos-populares.json";

export default function Popular() {
  return (
    <aside className={styles.populares}>
      <h2>Populares</h2>
      <ul className={styles.populares__imagens}>
        {popularPhotos.map((photo) => {
          return (
            <li key={photo.id}>
              <img src={photo.path} alt={photo.alt} />
            </li>
          );
        })}
      </ul>
      <button>Ver mais fotos</button>
    </aside>
  );
}
