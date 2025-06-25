export default function AvisoImpotante() {
  return (
    <section className="bg-yellow-200 border-l-4 border-yellow-600 p-4 mt-4 rounded">
      <h3 className="font-bold text-2xl">Aviso imppotante:</h3>
      <p>Alguns alunos e alunas estão perigando a reprovação nesta UC</p>

      <div className="flex justify-around my-3 bg-white">
        <div className="bg-green-200">Um</div>
        <div className="bg-blue-300">Dois</div>
        <div className="bg-red-300">Três</div>
      </div>
    </section>
  );
}
