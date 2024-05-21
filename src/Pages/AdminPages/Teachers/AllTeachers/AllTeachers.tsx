import { Link } from "react-router-dom";
import AllTeachersTable from "../../../../Components/AllTeachersTable";

const AllTeachers = () => {
  return (
    <div className=" font-montserrat flex flex-col items-start h-full w-full">
      <h1 className="text-[30px] font-[700] text-prime">All Teachers</h1>
      <div className="flex flex-col  justify-start gap-8 items-start h-full w-full mt-12">
        <Link
          className=" mt-4 rounded-[5px] bg-tertiary text-second-alt font-montserrat text-[16px] flex items-center justify-center  font-[700] w-fit h-[50px] px-4 shadow-md hover:shadow-none hover:scale-95 transition-all duration-200  max-md:mx-4"
          to="/admin/teachers/create"
        >
          Add New Teachers
        </Link>

        <AllTeachersTable />
      </div>
    </div>
  );
};
export default AllTeachers;
