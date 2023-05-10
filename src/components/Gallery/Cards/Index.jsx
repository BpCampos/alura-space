import { useState } from "react";
import open from "./open.png";
import favorito from "./favorito.png";
import { MdFavorite } from "react-icons/md";

export default function Cards({ photos, styles, favoritar }) {
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
                {photo.favorita ? (
                  <MdFavorite onClick={() => favoritar(photo.id)} color="#ff0000" size={23.5} />
                ) : (
                  <img src={favorito} onClick={() => favoritar(photo.id)} />
                )}
                <img src={open} alt="Ícone para abrir modal" />
              </span>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
