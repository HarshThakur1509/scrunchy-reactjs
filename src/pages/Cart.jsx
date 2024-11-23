import s1 from "../static/images/s1.jpg";
import s2 from "../static/images/s2.jpg";

export const Cart = () => {
  return (
    <section className="cart-section">
      <div className="container">
        <h2>Your Cart</h2>
        <div className="cart-items">
          <div className="cart-item">
            <div className="item-details">
              <img src={s1} alt="Product 1" />
              <div className="item-info">
                <h5 className="pro-name">Product 1</h5>
                <p className="pro-price">$10.00</p>
              </div>
            </div>
            <div className="quantity ml-auto">
              <button className="quantity-btn minus">
                <i className="fa-solid fa-minus"></i>
              </button>
              <input
                type="number"
                className="quantity-input"
                value="1"
                min="1"
              />
              <button className="quantity-btn plus">
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
          </div>
          <hr />
          <div className="cart-item">
            <div className="item-details">
              <img src={s2} alt="Product 2" />
              <div className="item-info">
                <h5 className="pro-name">Product 2</h5>
                <p className="pro-price">$15.00</p>
              </div>
            </div>
            <div className="quantity ml-auto">
              <button className="quantity-btn minus">
                <i className="fa-solid fa-minus"></i>
              </button>
              <input
                type="number"
                className="quantity-input"
                value="1"
                min="1"
              />
              <button className="quantity-btn plus">
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="cart-total">
          <h4>Total: $25.00</h4>
          <button className="btn btn-primary">Checkout</button>
        </div>
      </div>
    </section>
  );
};
