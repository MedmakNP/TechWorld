import Blog from "../Components/Blog/blog";
import Footer from "../Components/Footer/footer";
import Header from "../Components/Header/header";
import HotBar from "../Components/HotBar/hotBar";
import PathBar from "../Components/PathBar/pathBar";

function BlogPage() {
  return (
    <>
      <Header />
      <HotBar />
      <PathBar />
      <Blog />
      <Footer />
    </>
  );
}

export default BlogPage;
