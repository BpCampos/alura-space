import React from "react";
import open from "./open.png";
import favorito from "./favorito.png";

export default function Cards({ photos, styles }) {
  return (
    <ul className={styles.galeria__cards}>
      {photos.map((photo) => {
        return (
          <li key={photo.id} className={styles.galeria__card}>
            <img src={photo.imagem} alt={photo.titulo} className={styles.galeria__imagem} />
            <p className={styles.galeria__descricao}>{photo.titulo}</p>
            <div>
              <p>{photo.creditos}</p>
              <span>
                <img src={favorito} alt="Ícone de coração" />
                <img src={open} alt="Ícone para abrir modal" />
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
