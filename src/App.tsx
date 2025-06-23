import Cabecalho from "./Cabecalho";

export default function App() {
  // Comentário de uma linha
  /* Comentário de múltiplas linhas */
  return (
    <>
      <Cabecalho />
      <main>
        <section>
          <h2> Seja bem-vindo(a) aos Fundamentos de React!</h2>
          <p> Este é um exemplo de aplicação React</p>

          <article>
            <h3>Artigo 1 de exemplo</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
              consequatur dolore accusamus distinctio aut dolorem totam earum
              minus dicta dignissimos obcaecati est id eligendi quasi, dolores
              itaque fugit qui? Quam?
            </p>
          </article>
          <article>
            <h3>Artigo 2 de exemplo</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
              consequatur dolore accusamus distinctio aut dolorem totam earum
              minus dicta dignissimos obcaecati est id eligendi quasi, dolores
              itaque fugit qui? Quam?
            </p>
          </article>
          <article>
            <h3>Artigo 3 de exemplo</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil
              consequatur dolore accusamus distinctio aut dolorem totam earum
              minus dicta dignissimos obcaecati est id eligendi quasi, dolores
              itaque fugit qui? Quam?
            </p>
          </article>
        </section>
      </main>
      <footer>
        <h2>Pequeno site criado com React</h2>
        <p>
          Desenvolvido por <b> Heloisa</b> &copy; 2025
        </p>
      </footer>
    </>
  );
}
