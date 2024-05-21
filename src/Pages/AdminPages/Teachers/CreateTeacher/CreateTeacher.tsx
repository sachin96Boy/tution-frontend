import CreateTeacherForm from "../../../../Components/Forms/CreateTeacherForm";

const CreateTeacher = () => {
  return (
    <div className=" font-montserrat flex flex-col items-start h-full w-full">
      <h1 className="text-[30px] font-[700] text-prime">All Teachers</h1>
      <div className="flex flex-row flex-wrap justify-start gap-8 items-center h-full w-full mt-12">
        <CreateTeacherForm />
      </div>
    </div>
  );
};
export default CreateTeacher;
