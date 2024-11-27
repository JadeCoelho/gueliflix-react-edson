import styles from "./List.module.css";
import Card from "../Card/Card";

function List({ videos, emptyField }) {
  const count = videos.length;
  // let field = emptyField
  // if (count > 0) {
  //   const noun = count > 1 ? "vídeos" : "vídeo";
  //   field = `${emptyField} ${noun}`
  // }

  return (
    <>
      {/* <h2>{field}</h2> */}
      {count === 0 ? (
        <h2>{emptyField}</h2>
      ) : (
        <>
          <h2>{`${count} ${count > 1 ? "vídeos" : "vídeo"}`}</h2>
          <section className={styles.list}>
            {videos.map((video) => {
              return (
                <Card image={video.image} url={video.url} key={video.id} />
              );
            })}
          </section>
        </>
      )}
    </>
  );
}

export default List;
