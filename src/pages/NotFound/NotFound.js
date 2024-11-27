import styles from "./NotFound.module.css";
import img from "./404.png";
function NotFound() {
  return (
    <section className={styles.container}>
      <h2>Oops! Esse endereço de página não existe</h2>
      <img src={img} alt="imagem de erro 404 not found"></img>
    </section>
  );
}

export default NotFound;
