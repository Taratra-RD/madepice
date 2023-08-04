import "./css/Home.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Caroussel from "../components/Caroussel";

function Home() {
  return (
    <div className="home">
      <Header />
      <Caroussel />
      <Footer />
    </div>
  );
}

export default Home;
