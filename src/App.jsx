import HomePage from "./Pages/homePage";
import ShopPage from "./Pages/shopPage";
import BuyersPage from "./Pages/buyersPage";
import BlogPage from "./Pages/blogPage";
import ContactsPage from "./Pages/contactsPage";
import "./i18n";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "*",
    element: <HomePage />,
  },
  {
    path: "/shopPage",
    element: <ShopPage />,
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
