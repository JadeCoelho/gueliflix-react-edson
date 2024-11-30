import styles from "./ScrollButton.module.css";
function ScrollButton() {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button className={styles.btn} onClick={handleClick}>
      &#9650;
    </button>
  );
}

export default ScrollButton;
