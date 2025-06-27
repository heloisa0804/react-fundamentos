import AvisoImpotante from "./AvisoImportante/AvisoImpotante";
import DicaDoDia from "./DicaDoDia/DicaDoDia";
import estilos from "./Conteudo.module.css";
import Saudacao from "./Saudacao";
import ListaCursos from "../Lista/ListasCursos";
import cursos from "../../data/cursos";
import { useState } from "react";

export default function Conteudo() {
  // Definindo o state para categoria ativa/selecionada, podendo ser null (valor padrão,inicial) ou string ( quando uma categoria for selecionada)
  const [categoriAtiva, setCategoriaAtiva] = useState<null | string>(null);

  const categorias = [...new Set(cursos.map((curso) => curso.categoria))];

  return (
    <main className={estilos.conteudo}>
      <section
        className={`${estilos.principal}${estilos.arredondada} ${estilos.sombraS}`}
      >
        <h2 className="font-bold text-lg">Fundamentos de React!</h2>
        <Saudacao nome="Heloisa" classe="bg-emerald-400" />

        <p> Este é um exemplo de aplicação React</p>

        {categorias.map((categoria) => {
          return (
            <button
              onClick={() => setCategoriaAtiva(categoria)}
              className="rounded py-1 px-2 mr-1 my-1 bg-amber-200 hover:bg-green-300"
            >
              {categoria}
            </button>
          );
        })}

        {categoriAtiva && (
          <>
            <button
              onClick={() => setCategoriaAtiva(null)}
              className="px-2 py-1 rounded bg-red-300"
            >
              Limpar
            </button>
            <p>
              Categoria selecionada: <b>{categoriAtiva}</b>
            </p>
          </>
        )}
        <ListaCursos categoria={categoriAtiva} />
      </section>

      <DicaDoDia />

      <AvisoImpotante />
    </main>
  );
}
