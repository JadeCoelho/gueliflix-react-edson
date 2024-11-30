import styles from "./Form.module.css";
import { categories } from "../Category/Category";
import { useState } from "react";

export default function Form() {
  const [url, setUrl] = useState("");
  const [category, setCategory] = useState("");
  const [videos, setVideos] = useState([]);
  const [errors, setErrors] = useState("");

  function urlValidation(url) {
    const regex =
      /^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:embed\/|watch\?v=)|youtu\.be\/)([a-zA-Z0-9\-_]+)$/;

    if (!regex.test(url) || url.length < 43) {
      setErrors("URL inválida");
      return false;
    } else {
      return url.slice(43)
    }
  }

  const addVideo = (e) => {
    e.preventDefault(); //pra garantir que a página nao tenha refresh; prevenindo o padrão do formulário

    console.log(url, category);

    if (!category || category === "0") {
      setErrors("O campo da categoria é obrigatório");
      return;
    } else {
      setErrors("");
    }

    const validator = urlValidation(url);
    if (validator && category) {
      // guardando a URL e a category:
      const newVideo = { url, category };
      setVideos([...videos, newVideo]);
      localStorage.setItem("videos", JSON.stringify([...videos, newVideo]));
      setUrl("");
      setCategory("");
    } else {
      setErrors("confira os campos do formulário");
    }
  };

  return (
    <section className={styles.form}>
      <h2>Cadastro de vídeo</h2>
      <form onSubmit={addVideo}>
        <div>
          <label>URL:</label>
          <input
            type="text"
            placeholder="URL do vídeo"
            required
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            minLength="43"
          />
        </div>
        <div>
          <label>Categoria:</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="0">Selecione uma categoria</option>
            {categories.map((c) => {
              return <option value={{ c }}>{c}</option>;
            })}
          </select>
        </div>
        <div>
          <button type="submit">Cadastrar</button>
        </div>

        <span>{errors}</span>
      </form>
    </section>
  );
}
