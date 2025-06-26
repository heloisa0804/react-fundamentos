//Declara um tipo que sera usado pelas props do Componente
type SaudacaoProps = {
  nome?: string;
  classe: string;
};

export default function Saudacao({
  // caso nome não seja informado (opcional), visitante será usado
  nome = "Visitante",
  classe,
}: SaudacaoProps) {
  return (
    <>
      <p className={`my-2 rounded text-center ${classe}`}>
        Bem-vindo(a) <b>{nome}</b>
      </p>
    </>
  );
}
