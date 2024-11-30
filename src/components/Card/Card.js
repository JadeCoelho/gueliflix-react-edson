import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import fav from "./fav.png"; 
import unfav from "./unfav.png";
import { useFavoriteContext } from "../../contexts/Favorites";

function Card({ image, url }) {
  const { favorite, addFavorite } = useFavoriteContext();
  const isFav = favorite.some((fav) => fav.url === url);
  const iconSwitch = !isFav ? unfav : fav

  return (
    <section className={styles.card}>
      <Link to={`/watch/${url}`} rel="noopener noreferrer" target="_blank">
        <img
          src={`https://i.ytimg.com/vi/${image}/maxresdefault.jpg`}
          className={styles.capa}
          alt="capa foto"
        ></img> 
      </Link>
      <figure className={styles.icon}>
          <img
            src={iconSwitch}
            alt="fav icon"
            onClick={() => addFavorite({ url })}
          ></img>
        </figure>
    </section>
  );
}

export default Card;
