import Nav from "./Menu.module.css";

export default function Menu() {
  return (
    <nav className={Nav.nav}>
      <a href="" className={Nav.link}>
        Home
      </a>
      <a href="" className={Nav.link}>
        Sobre
      </a>
      <a href="" className={Nav.link}>
        Contato
      </a>
    </nav>
  );
}
