import { Link } from "react-router-dom";
import logo from "../../img/logo.png";

export default function Header({ switchLink }) {
  return (
    <>
      <section id="header">
        <Link to="#">
          <img src={logo} alt="Logo" />
        </Link>
        <div>
          <ul id="navbar">
            <li>
              <Link className="active" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/cart">
                <i className="fa-solid fa-cart-shopping"></i>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
