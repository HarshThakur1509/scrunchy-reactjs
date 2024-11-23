import s1 from "../static/images/s1.jpg";
import s2 from "../static/images/s2.jpg";
import s3 from "../static/images/s3.jpg";
import { useQuery } from "@tanstack/react-query";

export const Home = () => {
  const products = () => {
    return fetch("http://localhost:3000/products", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    }).then((res) => res.json());
  };

  const { data } = useQuery({
    queryKey: ["products"],
    queryFn: products,
  });

  return (
    <section className="product-section">
      <div className="container">
        <h2>Featured Products</h2>
        <div className="row">
          <div className="card">
            <img className="card-img-top" src={s1} alt="Product 1" />
            <div className="card-body">
              <h5 className="card-title pro-name">Product 1</h5>
              <p className="card-text pro-price">Rs. 1000</p>
            </div>
          </div>

          <div className="card">
            <img className="card-img-top" src={s2} alt="Product 2" />
            <div className="card-body">
              <h5 className="card-title pro-name">Product 2</h5>
              <p className="card-text pro-price">Rs. 1000</p>
            </div>
          </div>

          <div className="card">
            <img className="card-img-top" src={s3} alt="Product 3" />
            <div className="card-body">
              <h5 className="card-title pro-name">Product 3</h5>
              <p className="card-text pro-price">Rs. 1000</p>
            </div>
          </div>
        </div>
        {data?.map((val) => {
          return <h1 key={val.ID}>{val.Name}</h1>;
        })}
      </div>
    </section>
  );
};
