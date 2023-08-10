import { Link } from "react-router-dom";
import f1 from "../../img/features/f1.png";
import f2 from "../../img/features/f2.png";
import f3 from "../../img/features/f3.png";
import f4 from "../../img/features/f4.png";
import f5 from "../../img/features/f5.png";
import f6 from "../../img/features/f6.png";
import p1 from "../../img/products/f1.jpg";
import p2 from "../../img/products/f2.jpg";
import p3 from "../../img/products/f3.jpg";
import p4 from "../../img/products/f4.jpg";
import p5 from "../../img/products/f5.jpg";
import p6 from "../../img/products/f6.jpg";
import p7 from "../../img/products/f7.jpg";
import p8 from "../../img/products/f8.jpg";
import n1 from "../../img/products/n1.jpg";
import n2 from "../../img/products/n2.jpg";
import n3 from "../../img/products/n3.jpg";
import n4 from "../../img/products/n4.jpg";
import n5 from "../../img/products/n5.jpg";
import n6 from "../../img/products/n6.jpg";
import n7 from "../../img/products/n7.jpg";
import n8 from "../../img/products/n8.jpg";

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
        <p>Summer Collection</p>
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
          <div className="product">
            <img src={p2} alt="" />
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
          <div className="product">
            <img src={p3} alt="" />
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
          <div className="product">
            <img src={p4} alt="" />
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
          <div className="product">
            <img src={p5} alt="" />
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
          <div className="product">
            <img src={p6} alt="" />
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
          <div className="product">
            <img src={p7} alt="" />
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
          <div className="product">
            <img src={p8} alt="" />
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
      <section id="banner" className="section-m1">
        <h4>Repair Services</h4>
        <h2>
          Up to <span>70% Off</span> - All t-Shirts & Accessories
        </h2>
        <button className="normal">Explore More</button>
      </section>
      <section id="product1" className="section-p1">
        <h2>New Arrivals</h2>
        <p>Summer Collection</p>
        <div className="product-container">
          <div className="product">
            <img src={n1} alt="" />
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
          <div className="product">
            <img src={n2} alt="" />
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
          <div className="product">
            <img src={n3} alt="" />
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
          <div className="product">
            <img src={n4} alt="" />
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
          <div className="product">
            <img src={n5} alt="" />
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
          <div className="product">
            <img src={n6} alt="" />
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
          <div className="product">
            <img src={n7} alt="" />
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
          <div className="product">
            <img src={n8} alt="" />
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
      <section id="sm-banner" className="section-p1">
        <div className="banner-box">
          <h4>Crazy Deals</h4>
          <h2>Buy 1 Get 1 Free</h2>
          <span>The best classic dress is on sale at cara</span>
          <button className="white">Learn More</button>
        </div>
        <div className="banner-box banner-box2">
          <h4>Spring/Summer</h4>
          <h2>Upcoming Season</h2>
          <span>The best classic dress is on sale at cara</span>
          <button className="white">View Collection</button>
        </div>
      </section>
    </>
  );
}
