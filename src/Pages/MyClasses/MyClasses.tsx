import MyClassCard from "../../Components/MyClassCard";

const MyClasses = () => {
  const course = {
    id: "1",
    courseName: "Biology 2022",
    courseDescription: "2022 Biology Revision",
    subjectName: "Biology",
  };
  return (
    <div className=" font-montserrat flex flex-col items-start h-full w-full">
      <h1 className="text-[30px] font-[700] text-prime">My Classes</h1>
      <div className="flex flex-row flex-wrap justify-start gap-8 items-center h-full w-full mt-12">
        <MyClassCard course={course} />
        <MyClassCard course={course} />
        <MyClassCard course={course} />
        <MyClassCard course={course} />
        <MyClassCard course={course} />
        <MyClassCard course={course} />
        <MyClassCard course={course} />
      </div>
    </div>
  );
};
export default MyClasses;
