import { useEffect, useState } from "react";
import MyClassCard from "../../Components/MyClassCard";
import axios from "axios";
import { baseURL } from "../../const/const";
import CourseCard from "../../Components/CourseCard";

const MyClasses = () => {
  type Subject = {
    id: string;
    subject_id: string;
    subject_name: string;
    grade: string;
    year: string;
  };
  const [enrolledList, setEnrolledList] = useState<Subject[]>([]);
  axios.defaults.withCredentials = true;
  const getEnrolledList = async () => {
    const result = await axios.get(baseURL + "/subjects/get/enrolled/");
    if (result.status === 200) {
      setEnrolledList(result.data);
    }
  };
  useEffect(() => {
    getEnrolledList();
  }, []);
  return (
    <div className=" font-montserrat flex flex-col items-start h-full w-full">
      <h1 className="text-[30px] font-[700] text-prime">My Classes</h1>
      <div className="flex flex-row flex-wrap justify-start gap-8 items-center h-full w-full mt-12">
        {enrolledList.map((subject, index) => {
          return (
            <CourseCard
              link={"/student/mycourse/"}
              subject={subject}
              key={index}
              enrolled={
                enrolledList.find((ensubject) => ensubject.id === subject.id)
                  ? true
                  : false
              }
            />
          );
        })}
      </div>
    </div>
  );
};
export default MyClasses;
