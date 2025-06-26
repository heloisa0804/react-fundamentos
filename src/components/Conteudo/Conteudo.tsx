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

        <Artigo />

        <Artigo />

        <Artigo />
      </section>

      <DicaDoDia />

      <AvisoImpotante />
    </main>
  );
}
