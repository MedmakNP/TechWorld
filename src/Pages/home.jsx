import Header from "../Components/Header/header";
import HotBar from "../Components/HotBar/hotBar";
import Intro from "../Components/Intro/intro";
import CategoryShop from "../Components/CategoryShop/categoryShop";
import Discount from "../Components/Discount/discount";
import Catalog from "../Components/Catalog/catalog";
import Blog from "../Components/Blog/blog";
import Footer from "../Components/Footer/footer";

function Home() {
  return (
    <div>
      <Header />
      <HotBar />
      <Intro />
      <CategoryShop />
      <Discount />
      <Catalog />
      <Blog />
      <Footer />
    </div>
  );
}

export default Home;
