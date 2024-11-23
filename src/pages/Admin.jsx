import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const Admin = () => {
  const users = () => {
    return axios.get("http://localhost:3000/admin/listusers", {
      withCredentials: true,
    });
  };

  const { data, isLoading, isError } = useQuery({
    queryKey: ["users"],
    queryFn: users,
  });
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error...</div>;
  }

  return (
    <div>
      {data.data.map((val) => {
        return <h1 key={val.ID}>{val.Email}</h1>;
      })}
    </div>
  );
};
