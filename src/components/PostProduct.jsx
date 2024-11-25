import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";

export const PostProduct = () => {
  const onSubmit = async (formdata) => {
    const name = formdata.name;
    const price = formdata.price;

    try {
      await axios.post(
        "http://localhost:3000/admin/products",
        { name, price },
        { withCredentials: true }
      );
    } catch (err) {
      console.log(err);
    }
  };

  const schema = yup.object().shape({
    name: yup.string().required("name required"),
    price: yup.number().required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <div className="PostProduct">
      <h1>Product</h1>
      <form className="Form" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="name..." {...register("name")} />
        <p>{errors.name?.message}</p>
        <input type="number" placeholder="price..." {...register("price")} />

        <button className="btn3" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
