import styles from "./Search.module.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Container from "../../components/Container/Container";
import SearchList from "../../components/SearchList/SearchList";
import videos from "../../json/db.json";
function Search() {
  return (
    <>
      <Header />
      <Container>
        <section className={styles.search}>
          {/* <List videos={videos} emptyField={videos.length}/> */}
          <SearchList videos={videos} />
        </section>
      </Container>
      <Footer />
    </>
  );
}

export default Search;
