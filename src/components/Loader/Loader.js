import styles from "./Loader.module.css";
function Loader() {
  return (
    <div className={styles.loaderbox}>
      <div className={styles.loader}></div>
    </div>
  );
}

export default Loader;
