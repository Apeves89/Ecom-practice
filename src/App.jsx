import "./App.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import BlogPage from "./pages/BlogPage/BlogPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import ContactPage from "./pages/ContactPage/ContactPage";
import Cart from "./pages/Cart/Cart";

export default function App() {
  function switchLink(page) {
    const active = document.querySelector(".active");
    active.classList.remove("active");
    const listItem = document.querySelector(`#navbar li:nth-child(${page}) a`);
    listItem.classList.add("active");
  }
  return (
    <>
      <Header switchLink={switchLink} />
      <Routes>
        <Route
          path="/"
          element={<HomePage page={1} switchLink={switchLink} />}
        />
        <Route
          path="/shop"
          element={<ShopPage page={2} switchLink={switchLink} />}
        />
        <Route
          path="/blog"
          element={<BlogPage page={3} switchLink={switchLink} />}
        />
        <Route
          path="/about"
          element={<AboutPage page={4} switchLink={switchLink} />}
        />
        <Route
          path="/contact"
          element={<ContactPage page={5} switchLink={switchLink} />}
        />
        <Route
          path="/cart"
          element={<Cart page={6} switchLink={switchLink} />}
        />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}
