import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import Search from "./pages/Search";
import Cart from "./pages/Cart";
import Weblog from "./pages/Weblog";

const routes = [
  { path: "/", element: <Home /> },
  { path: "/Login", element: <Login /> },
  { path: "/Register", element: <Register /> },
  { path: "/Products/:ProductsId", element: <Products /> },
  { path: "/Search", element: <Search /> },
  { path: "/Cart", element: <Cart /> },
  { path: "/Weblog/:ArticleId", element: <Weblog /> },
];

export default routes;
