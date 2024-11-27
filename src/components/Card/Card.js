import styles from "./Card.module.css";
import { Link } from "react-router-dom";

function Card({image, url}) {
  return (
    <section className={styles.card}>
      <Link to={`/watch/${url}`} rel="noopener noreferrer" target="_blank">
        <img
          src={`https://i.ytimg.com/vi/${image}/maxresdefault.jpg`}
          alt="capa foto"
        ></img>
      </Link>
    </section>
  );
}

export default Card;
