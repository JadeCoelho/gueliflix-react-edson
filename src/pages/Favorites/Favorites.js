import styles from "./Favorites.module.css";
import Header from "../../components/Header/Header";
import Container from "../../components/Container/Container";
import Footer from "../../components/Footer/Footer";
import List from "../../components/List/List";
import { useFavoriteContext } from "../../contexts/Favorites";

function Favorites() {
  const { favorite } = useFavoriteContext();
  return (
    <>
      <Header />
      <Container>{<List videos={favorite} />}</Container>
      <Footer />
    </>
  );
}

export default Favorites;
