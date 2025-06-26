import Artigo from "./Artigo/Artigo";
import AvisoImpotante from "./AvisoImportante/AvisoImpotante";
import DicaDoDia from "./DicaDoDia/DicaDoDia";
import estilos from "./Conteudo.module.css";
import Saudacao from "./Saudacao";

export default function Conteudo() {
  return (
    <main className={estilos.conteudo}>
      {/* Para combinar classes, use templete string */}
      <section
        className={`${estilos.principal}${estilos.arredondada} ${estilos.sombraS}`}
      >
        <h2 className="font-bold text-lg">Fundamentos de React!</h2>
        <Saudacao nome="Heloisa" classe="bg-emerald-400" />
        <Saudacao classe="bg-red-100" />
        <p> Este é um exemplo de aplicação React</p>

        <Artigo titulo="Front-End" numero={1} data={new Date()}>
          {" "}
          <p>
            Front-End é muito bacana, a gente usa HTML com CSS e Java Script
          </p>
          <p> Mas também dá dor de cabeça quando usado</p>
        </Artigo>

        <Artigo titulo="Back-End" numero={2}>
          <p>Importante para estudar:</p>
          <ul className="*:list-dic *:ml-m7">
            <li>PHP</li>
            <li>SQL</li>
            <li>Orientação e objeto</li>
          </ul>
          <p>E muito mais</p>
        </Artigo>

        <Artigo titulo="Mobile" numero={3}>
          <details>
            <summary>Conheça as tecnologias maus usadas</summary>
            <ol className="*:list-decimal *:ml-7">
              <li>JavaScript</li>
              <li>Libs e Frameworks</li>
            </ol>
          </details>
        </Artigo>
      </section>

      <DicaDoDia />

      <AvisoImpotante />
    </main>
  );
}
