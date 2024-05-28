/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormik } from "formik";
import TextInput from "../Elements/TextInput";
import * as Yup from "yup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";
import SelectInput from "../Elements/SelectInput";
import { Teacher, ValuesType } from "../../types/types.form.CreateSubject";
import axiosInstance from "../../utils/axiosInstance";
import toaster from "../Elements/Toaster";
const CreateSubjectForm = () => {
  const [teachers, setTeachers] = useState<Teacher[]>([]);

  const getTeachers = async () => {
    const result = await axiosInstance.get("/teachers/get");
    if (result.status === 200) {
      setTeachers(result.data);
    }
  };

  useEffect(() => {
    getTeachers();
  }, []);

  const initialValues = {
    subject_id: "",
    subject_name: "",
    grade: 1,
    year: 2023,
    teacher_id: "",
  };
  const validationSchema = Yup.object({
    subject_id: Yup.string().required("Required"),
    subject_name: Yup.string().required("Required"),
    grade: Yup.number()
      .required("Required")
      .lessThan(14, "Must be less than 14")
      .moreThan(0, "Must be greater than 0"),
    year: Yup.number()
      .required("Required")
      .moreThan(2023, "Must be greater than 2023"),
    teacher_id: Yup.string().required("Required"),
  });
  const formSubmit = async (values: ValuesType) => {
    try {
      const result = await axiosInstance.post("/subjects/add", values);
      if (result.status === 200) {
        toaster("success", "Subject created successfully");
      } else {
        toaster("error", "Something went wrong");
      }
    } catch (error: any) {
      toaster("error", error.response.data.message);
    }
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: formSubmit,
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="p-20 min-w-[340px] w-full min-h-full bg-second-alt rounded-[10px] flex flex-col justify-start pt-12 items-left gap-y-4"
    >
      <ToastContainer />
      <h1 className=" font-[700] font-montserrat text-[30px] text-prime text-left">
        Create New Subject
      </h1>

      <div className="flex flex-row justify-start items-start gap-x-8 gap-y-4 w-full flex-wrap mt-2">
        <TextInput
          label="Subject ID"
          type="text"
          name="subject_id"
          value={formik.values.subject_id}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.subject_id}
          touched={formik.touched.subject_id}
        />
        <TextInput
          label="Subject Name"
          type="text"
          name="subject_name"
          value={formik.values.subject_name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.subject_name}
          touched={formik.touched.subject_name}
        />
        <TextInput
          label="Grade"
          type="number"
          name="grade"
          value={formik.values.grade}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.grade}
          touched={formik.touched.grade}
        />
        <TextInput
          label="Year"
          type="number"
          name="year"
          value={formik.values.year}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.year}
          touched={formik.touched.year}
        />

        <SelectInput
          label="Teacher"
          name="teacher_id"
          value={formik.values.teacher_id}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.teacher_id}
          touched={formik.touched.teacher_id}
        >
          <option value="">Select Teacher</option>
          {teachers.map((teacher, index) => (
            <option key={index} value={teacher.id}>
              {teacher.first_name} {teacher.last_name}
            </option>
          ))}
        </SelectInput>
      </div>

      <button
        type="submit"
        className=" mt-4 rounded-[5px] bg-tertiary-alt text-second-alt font-montserrat text-[12px] max-w-[100%] font-[700] w-[396px] h-[50px]"
      >
        CREATE
      </button>
    </form>
  );
};
export default CreateSubjectForm;
