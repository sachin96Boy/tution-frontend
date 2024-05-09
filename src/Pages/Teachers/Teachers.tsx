import TeacherCard from "../../Components/TeacherCard";

const Teachers = () => {
  const teacher = {
    id: `1`,
    name: "Lucia Greer",
    subject: "Maths",
    image:
      "https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB",
  };
  return (
    <div className=" font-montserrat flex flex-col items-start h-full w-full">
      <h1 className="text-[30px] font-[700] text-[#3B5079]">Teachers</h1>
      <div className="flex flex-row flex-wrap justify-start gap-8 items-center h-full w-full mt-12">
        <TeacherCard teacher={teacher} />
        <TeacherCard teacher={teacher} />
        <TeacherCard teacher={teacher} />
        <TeacherCard teacher={teacher} />
        <TeacherCard teacher={teacher} />
        <TeacherCard teacher={teacher} />
        <TeacherCard teacher={teacher} />
      </div>
    </div>
  );
};
export default Teachers;
