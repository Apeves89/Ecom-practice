import { Link } from "react-router-dom";
import f1 from "../../img/features/f1.png";
import f2 from "../../img/features/f2.png";
import f3 from "../../img/features/f3.png";
import f4 from "../../img/features/f4.png";
import f5 from "../../img/features/f5.png";
import f6 from "../../img/features/f6.png";
import p1 from "../../img/products/f1.jpg";

export default function HomePage() {
  return (
    <>
      <section id="hero">
        <h4>Trade-in-offer</h4>
        <h2>Super value deals</h2>
        <h1>On all products</h1>
        <p>Save more with coupons * up to 70% off!</p>
        <button>Shop Now</button>
      </section>

      <section id="featured" className="section-p1">
        <div className="feature-card">
          <img src={f1} alt="" />
          <h6>Free Shipping</h6>
        </div>
        <div className="feature-card">
          <img src={f2} alt="" />
          <h6>Online Order</h6>
        </div>
        <div className="feature-card">
          <img src={f3} alt="" />
          <h6>Save Money</h6>
        </div>
        <div className="feature-card">
          <img src={f4} alt="" />
          <h6>Promotions</h6>
        </div>
        <div className="feature-card">
          <img src={f5} alt="" />
          <h6>Happy Sell</h6>
        </div>
        <div className="feature-card">
          <img src={f6} alt="" />
          <h6>24/7 Support</h6>
        </div>
      </section>

      <section id="product1" className="section-p1">
        <h2>Featured Products</h2>
        <p>Summer Collection New Modern Design</p>
        <div className="product-container">
          <div className="product">
            <img src={p1} alt="" />
            <div className="description">
              <span>adidas</span>
              <h5>Cartoon Astronaut T-shirts</h5>
              <div className="star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
              </div>
              <h4>$78</h4>
            </div>
            <Link to="#">
              <i className="fa-solid fa-cart-shopping cart"></i>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
