import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "./logo.png";

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <span>
          <img src={logo} alt="logo"></img>
        </span>
      </Link>

      <nav>
        <Link to="/">Início</Link>
        <Link to="/search">Pesquisar</Link>
        {/* <Link to="/watch">Assistir</Link> */}
      </nav>
    </header>
  );
}

export default Header;
