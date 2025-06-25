import estilos from "./Menu.module.css";

export default function Menu() {
  return (
    <nav className={estilos.nav}>
      <a href="" className={estilos.link}>
        Home
      </a>
      <a href="" className={estilos.link}>
        Sobre
      </a>
      <a href="" className={estilos.link}>
        Contato
      </a>
    </nav>
  );
}
