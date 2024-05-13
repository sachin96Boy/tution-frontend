import MyLessonCard from "../../Components/MyLessonCard";

const MyClass = () => {
  return (
    <div className=" font-montserrat flex flex-col items-start h-full w-full">
      <h1 className="text-[30px] font-[700] text-prime">
        {"Course Name "}{" "}
        <span className="text-[20px] font-[500] text-prime-alt">
          {"Subjec tname"}
        </span>
      </h1>
      <div className="flex flex-row flex-wrap justify-start gap-8 items-center h-full w-full mt-12">
        <MyLessonCard />
        <MyLessonCard />
        <MyLessonCard />
        <MyLessonCard />
        <MyLessonCard />
        <MyLessonCard />
      </div>
    </div>
  );
};
export default MyClass;
