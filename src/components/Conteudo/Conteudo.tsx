import AvisoImpotante from "./AvisoImportante/AvisoImpotante";
import DicaDoDia from "./DicaDoDia/DicaDoDia";
import estilos from "./Conteudo.module.css";
import Saudacao from "./Saudacao";
import ListaCursos from "../Lista/ListasCursos";
import cursos from "../../data/cursos";

export default function Conteudo() {
  const categorias = [...new Set(cursos.map((curso) => curso.categoria))];
  console.log(categorias);

  return (
    <main className={estilos.conteudo}>
      <section
        className={`${estilos.principal}${estilos.arredondada} ${estilos.sombraS}`}
      >
        <h2 className="font-bold text-lg">Fundamentos de React!</h2>
        <Saudacao nome="Heloisa" classe="bg-emerald-400" />

        <p> Este é um exemplo de aplicação React</p>

        <ListaCursos />
      </section>

      <DicaDoDia />

      <AvisoImpotante />
    </main>
  );
}
