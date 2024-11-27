import styles from "./Watch.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Container from "../../components/Container/Container";
import { useParams } from "react-router-dom";
import videos from "../../json/db.json"
import NotFound from "../../pages/NotFound/NotFound";


function Watch() {
  const params = useParams()
  const video = videos.find((video) => video.url === params.url)
  console.log(video);
    if(!video){
      return <NotFound/>
    }
    return (
    <>
      <Header />
      <Container className={styles.watch}>
        <h1>Assistir</h1>
        <iframe
          width="854"
          height="480"
          src={`https://www.youtube.com/embed/${video.url}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </Container>
      <Footer />
    </>
  );
}

export default Watch;
