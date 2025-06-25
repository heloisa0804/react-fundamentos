import Artigo from "./Artigo/Artigo";
import AvisoImpotante from "./AvisoImportante/AvisoImpotante";
import DicaDoDia from "./DicaDoDia/DicaDoDia";
import estilos from "./Conteudo.module.css";

export default function Conteudo() {
  return (
    <main className={estilos.conteudo}>
      {/* Para combinar classes, use templete string */}
      <section
        className={`${estilos.principal}${estilos.arredondada} ${estilos.sombraS}`}
      >
        <h2> Seja bem-vindo(a) aos Fundamentos de React!</h2>
        <p> Este é um exemplo de aplicação React</p>

        <Artigo />

        <Artigo />

        <Artigo />
      </section>

      <DicaDoDia />

      <AvisoImpotante />
    </main>
  );
}
