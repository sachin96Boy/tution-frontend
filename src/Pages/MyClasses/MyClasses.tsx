import { useEffect, useState } from "react";
import CourseCard from "../../Components/CourseCard";
import { Subject } from "../../types/types.MyClasses";
import axiosInstance from "../../utils/axiosInstance";

const MyClasses = () => {
  const [enrolledList, setEnrolledList] = useState<Subject[]>([]);
  const [refresh, setRefresh] = useState(false);
  const getEnrolledList = async () => {
    const result = await axiosInstance.get("/subjects/get/enrolled/");
    if (result.status === 200) {
      setEnrolledList(result.data);
    }
  };
  useEffect(() => {
    getEnrolledList();
  }, [refresh]);
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
              refresh={refresh}
              setRefresh={setRefresh}
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
