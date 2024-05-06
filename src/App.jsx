import HomePage from "./Pages/homePage";
import ShopPage from "./Pages/shopPage";
import BuyersPage from "./Pages/buyersPage";
import BlogPage from "./Pages/blogPage";
import ContactsPage from "./Pages/contactsPage";
import "./i18n";
import { createBrowserRouter } from "react-router-dom";
import ProductPage from "./Pages/product";

const router = createBrowserRouter([
  {
    path: "/*",
    element: <HomePage />,
  },
  {
    path: "/shopPage",
    element: <ShopPage />,
  },
  {
    path: "/product/:productId",
    element: <ProductPage />,
  },
  {
    path: "/buyersPage",
    element: <BuyersPage />,
  },
  {
    path: "/blogPage",
    element: <BlogPage />,
  },
  {
    path: "/contactsPage",
    element: <ContactsPage />,
  },
]);
export default router;
