import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Banner from "../../components/Banner/Banner";
import Container from "../../components/Container/Container";
import Category, {
  categories,
  filterCategory,
} from "../../components/Category/Category";
import Card from "../../components/Card/Card";
import Carousel from "../../components/Carousel/Carousel";

function Home() {
  return (
    <div>
      <Header />
      <Banner image="https://miro.medium.com/v2/resize:fit:1400/1*i0NbyT3x5k8nVMb8ShzgLw.png" />
      <Container>
        {categories.map((category) => (
          <Category key={category} category={category}>
            <Carousel>
              {filterCategory(category).map((video) => (
                <Card key={video.id} image={video.image} url={video.url} />
              ))}
            </Carousel>
          </Category>
        ))}
      </Container>
      <Footer />
    </div>
  );
}

export default Home;
