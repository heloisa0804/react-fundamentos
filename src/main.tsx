// Ajuda detectar uso de recursos obsoletos (APIS, funções, padrões )
import { StrictMode } from "react";

// Usado para criar a 'raís' da aplicação React a partir de um elemento HTML
import { createRoot } from "react-dom/client";

// Importa o componente principal da aplicação
// O componente App é o ponto de entrada da aplicação React
import App from "./App.tsx";

// Seleciona o elemento HTML root, cria a raíz da aplicação e renderiza o componente App.
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
