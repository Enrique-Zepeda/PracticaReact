import { useParams } from "react-router-dom";
export const UserPage = () => {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1>Id del usuario:{id}</h1>
    </div>
  );
};
