# Fundamentos de React

## 08_props

Props ( abreviação de propriedades) são pârametros que um componente pode receber.

Elas funcionam como argumentos de uma função, que podem receber dados de um componente pai para um componente filho.

Props basicamente são uma forma de comunicação entre componentes.

- Criação de props e definição de tipos para as props
- Desestruturação de props
- Manipulação de props opcionais
- Reiderização condicional

# 07_tailwindcss

- O Tailwind CSS é um framework CSS utilitário, ou seja, ele fornece classes prontas para você aplicar estilos diretamente no HTML, sem precisar criar regras personalizadas em um arquivo CSS separado.

🌀 O que o Tailwind faz?
Em vez de escrever:

- css
- Copiar
- Editar
  .titulo {
  font-size: 24px;
  color: red;
  }

### Você escreve direto no HTML:

- html
- Copiar
- Editar
<h1 class="text-red-500 text-2xl">Título</h1>
✅ Vantagens principais:
Rápida prototipação: permite montar o layout visual muito rápido.

Menos CSS customizado: evita a criação de muitas classes próprias.

Design consistente: segue uma escala visual (cores, espaçamentos, tamanhos) padronizada.

Responsivo com facilidade: usa classes como md:, lg: para definir estilos em diferentes tamanhos de tela.

Manutenção mais fácil: como tudo fica no HTML, é mais direto ver o que cada parte está fazendo.

# 06_styled-components

Style Components é uma biblioteca (lib)
muito usada com projetos React que permite escrever estilos CSS dentro do JavaScript usando a própria sintaxe do CSS. Os estilos ficam acoplados ao componente em que foram declarados.

### Instalaçao

- npm install styled-components
- npm install --save-dev @types/styles-components
- Extensão vscode-styled-components

Ao trabalhar Styled Components você pode criar regras com qualquer seletor e usar lógica JavaScript dentro de template string.

# 05_modolos-css

Módulos CSS (CSS Modules) são uma maneira de escrever CSS em arquivo separados de extensão `.module.css` em que cada classe e estilo fica isolado para um único componente. Há um **acoplamento** entre o módulo e seu compononente, permitindo um escopo bem definido sobre os estilos.

- Criação de módulos para cada componente (exceto Rodapé)
- Importação dlo módulo ( chamado de style ou estilos)
- Aplicação das classes usando className={}
- Reorganizaçao de componentes e seus módulos em pastas
- Instalação de extensão CSS Modules

## 04_estilos

- CSS global usando seletores tradicionais
- CSS inline aplicado via style e escrevendo CSS in JS (objeto com propriedades CSS)
- CSS inline criando um objeto do tipo CSSProperties e passando-o para o style do componente

## 03_componentes-filhos-ou-internos

- Criação de um componente filho (Menu) e importação/uso no pai (Cabeçalho)
- Criação de um componentes filho (Artigo) e importação/uso no pai (Conteudo)
- Instalação de extenção ES&+ React

## 02_criando-e-organizando-componentes

- Separação de trechos do app em novos componentes
- Exportação e importação dos componentes
- Uso de assets e importação de imagem
- Organização dos componentes em uma pasta dedicada

## 01_usando-a-sintaxeJXS-no-App

- Construção de um competente único (App.tsx) usando elementos HTML e FRagmentos React
- Referência Componentes e JSX: https://react.dev/reference/react/Component
- Instalaçao da extensão React Ddeveloper Tools

## 00_projeto-zerado

- Remoção do CSS
- Remoção da pasta assests
- Simplificação do componente App.tsx e do main.tsx
