import { CartItems } from "../components/CartItems";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const Cart = () => {
  // Fetch cart items from the API
  const {
    data: cartItems,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["cartItems"],
    queryFn: async () => {
      const response = await axios.get("http://localhost:3000/cart", {
        withCredentials: true,
      });
      return response.data;
    },
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching cart items...</div>;

  // Calculate the total amount of the cart
  const TotalAmount = (items) => {
    let total = 0;
    items.forEach((item) => {
      total += item.Quantity * item.Product.Price;
    });
    return total;
  };

  return (
    <section className="Cart">
      <div className="container">
        <h2>Your Cart</h2>
        <CartItems cartItems={cartItems} />
        <div className="cart-total">
          <h4>Total: Rs. {TotalAmount(cartItems)}</h4>
          <button className="btn btn-primary">Checkout</button>
        </div>
      </div>
    </section>
  );
};
