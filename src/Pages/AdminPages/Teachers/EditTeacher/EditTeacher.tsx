import { useParams } from "react-router";

const EditTeacher = () => {
  const { id } = useParams();
  return <div>EditTeacher {id}</div>;
};
export default EditTeacher;
