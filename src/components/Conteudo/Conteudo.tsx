import AvisoImpotante from "./AvisoImportante/AvisoImpotante";
import DicaDoDia from "./DicaDoDia/DicaDoDia";
import estilos from "./Conteudo.module.css";
import Saudacao from "./Saudacao";
import ListaCursos from "../Lista/ListasCursos";

export default function Conteudo() {
  return (
    <main className={estilos.conteudo}>
      {/* Para combinar classes, use templete string */}
      <section
        className={`${estilos.principal}${estilos.arredondada} ${estilos.sombraS}`}
      >
        <h2 className="font-bold text-lg">Fundamentos de React!</h2>
        <Saudacao nome="Heloisa" classe="bg-emerald-400" />

        <p> Este é um exemplo de aplicação React</p>

        {/* Faça a lógica necessária para apresentar o componente Artigo e passar para ele os dados de cada curso proveniente */}
        <ListaCursos />
      </section>

      <DicaDoDia />

      <AvisoImpotante />
    </main>
  );
}
