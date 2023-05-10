import React from "react";
import styles from "./Gallery.module.scss";
import Tags from "../Tags";
import photos from "./photos.json";
import Cards from "./Cards/Index";
import { useState } from "react";

export default function Gallery() {
  const [itens, setItens] = useState(photos);
  const tags = [...new Set(photos.map((value) => value.tag))];

  const filtraFotos = (tag) => {
    const novasFotos = photos.filter((photo) => {
      return photo.tag === tag;
    });

    setItens(novasFotos);
  };

  const favoritar = (id) => {
    setItens(
      photos.map((photo) => {
        if (photo.id === id) {
          photo.favorita = !photo.favorita;
        }
        return photo;
      })
    );
  };

  return (
    <section className={styles.galeria}>
      <h2>Navegue pela galeria</h2>
      <Tags tags={tags} filtraFotos={filtraFotos} setItens={setItens} />
      <Cards photos={itens} styles={styles} favoritar={favoritar} />
    </section>
  );
}
