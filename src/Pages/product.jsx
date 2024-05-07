import Footer from "../Components/Footer/footer";
import Header from "../Components/Header/header";
import HotBar from "../Components/HotBar/hotBar";
import PathBar from "../Components/PathBar/pathBar";
import { useParams } from "react-router-dom";
import Product from "../Components/Product/product";
function ProductPage() {
  const { productId } = useParams();
  return (
    <>
      <Header />
      <HotBar />
      <PathBar />
      <Product id={productId} />
      <Footer />
    </>
  );
}

export default ProductPage;
