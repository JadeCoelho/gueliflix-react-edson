import styles from "./Category.module.css";
import videos from "../../json/db.json";

export const categories = ["Cachorros", "Gastronomia", "Todo mundo em pânico"];

export function filterCategory(category) {
  return videos.filter((video) => video.category === category);
}

function Category({ category, children }) {
  return (
    <section styles={styles.category}>
      <h2>{category}</h2>
      <div className="cards">
        {/* {videos.map((video) => (
          <Card
            image={`${video.image}`}
            url={`${video.url}`}
            key={`${video.id}`}
          />
        ))} */}
        {children}
      </div>
    </section>
  );
}

export default Category;
