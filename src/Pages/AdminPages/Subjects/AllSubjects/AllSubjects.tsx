import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { baseURL } from "../../../../const/const";
import AdminSubjectCard from "../../../../Components/AdminSubjectCard";

const AllSubjects = () => {
  type Subject = {
    id: string;
    subject_id: string;
    subject_name: string;
    grade: string;
    year: string;
  };
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const getSubjects = async () => {
    const result = await axios.get(baseURL + "/subjects/get");
    if (result.status === 200) {
      setSubjects(result.data);
    }
  };
  useEffect(() => {
    getSubjects();
  }, []);
  return (
    <div className=" font-montserrat flex flex-col items-start h-full w-full">
      <h1 className="text-[30px] font-[700] text-prime">All Subjects</h1>
      <div className="flex flex-col  justify-start gap-8 items-start h-full w-full mt-12">
        <Link
          className=" mt-4 rounded-[5px] bg-tertiary text-second-alt font-montserrat text-[16px] flex items-center justify-center  font-[700] w-fit h-[50px] px-4 shadow-md hover:shadow-none hover:scale-95 transition-all duration-200  max-md:mx-4"
          to="/admin/subjects/create"
        >
          Add New Subjects
        </Link>
        <div className="flex flex-crow flex-wrap justify-start gap-8 items-center h-full w-full">
          {subjects.map((subject, index) => {
            return <AdminSubjectCard subject={subject} key={index} link="" />;
          })}
        </div>
      </div>
    </div>
  );
};
export default AllSubjects;
