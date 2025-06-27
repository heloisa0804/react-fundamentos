import { useState } from "react";
import type { Curso } from "../../../types/Curso";
import estilos from "./Artigo.module.css";

type ArtigoProps = {
  dados: Curso;
};

export default function Artigo({ dados }: ArtigoProps) {
  const { titulo, preco, categoria } = dados;

  const [destaque, setDestaque] = useState("white");

  const alternarArtigo = () => {
    setDestaque((destaque) => {
      return destaque === "white" ? "yellow" : "white";
    });
  };
  return (
    <article
      onClick={alternarArtigo}
      className={estilos.artigo}
      style={{ backgroundColor: destaque }}
    >
      <h3> {titulo} </h3>
      <p>Categoria: {categoria}</p>
      <p>Preço: {preco}</p>
    </article>
  );
}
