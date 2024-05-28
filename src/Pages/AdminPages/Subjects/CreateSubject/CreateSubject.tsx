import CreateSubjectForm from "../../../../Components/Forms/CreateSubjectForm";

const CreateSubject = () => {
  return (
    <div className=" font-montserrat flex flex-col items-start h-full w-full">
      <h1 className="text-[30px] font-[700] text-prime"></h1>
      <div className="flex flex-row flex-wrap justify-start gap-8 items-center h-full w-full mt-12">
        <CreateSubjectForm />
      </div>
    </div>
  );
};
export default CreateSubject;
