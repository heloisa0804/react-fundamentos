export default function App() {
  // Comentário de uma linha
  /* Comentário de múltiplas linhas */
  return (
    <>
      <header>
        <h1>Olá React! 😁😁</h1>
        <hr />
        <nav>
          <a href="">Home</a>
          <a href="">Sobre</a>
          <a href="">Contato</a>
        </nav>
      </header>
      {/*  Comentários no meio do JSX: é nomrla ficar entre {} */}
      {/* Ao usar outro elementos HTML no JSX, é importante envolver tudo em <> </> (Fragmento React) */}

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
          Desenvolvido por <b> Heloisa</b> &copy;2025
        </p>
      </footer>
    </>
  );
}
