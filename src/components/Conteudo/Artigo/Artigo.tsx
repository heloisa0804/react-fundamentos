import estilos from "./Artigo.module.css";

export default function Artigo() {
  return (
    <article className={estilos.artigo}>
      <h3>Artigo 1 de exemplo</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
        consequatur dolore accusamus distinctio aut dolorem totam earum minus
        dicta dignissimos obcaecati est id eligendi quasi, dolores itaque fugit
        qui? Quam?
      </p>
    </article>
  );
}
