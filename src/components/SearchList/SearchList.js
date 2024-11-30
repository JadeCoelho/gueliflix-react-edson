import styles from "./SearchList.module.css";
import List from "../List/List";
import { useEffect, useState } from "react";
import Loader from "../Loader/Loader";

function filterVideos(videos, text) {
  if (!text.trim()) return videos;
  return videos.filter(
    (video) => video.category.includes(text) || video.title.includes(text)
  );
}

function SearchList({ videos }) {
  const [text, setText] = useState("");
  const result = filterVideos(videos, text);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <section className={styles.searchList}>
      <input
        type="search"
        placeholder="Pesquisar filme..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      {loading ? (
        <Loader />
      ) : (
        <List videos={result} emptyField={`Sem vídeos sobre "${text}"`} />
      )}
    </section>
  );
}

export default SearchList;
