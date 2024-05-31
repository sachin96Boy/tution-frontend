/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormik } from "formik";
import { ToastContainer } from "react-toastify";
import * as Yup from "yup";
import "react-toastify/dist/ReactToastify.css";
import SelectInput from "../Elements/SelectInput";
import { useCallback, useEffect, useState } from "react";
import axiosInstance from "../../utils/axiosInstance";
import { useParams } from "react-router";
import TextInput from "../Elements/TextInput";
import toaster from "../Elements/Toaster";
type ValuesType = {
  student_id: string;
  subject_id: string;
  teacher_id: string;
  enrollment_type: string;
  enrolled_by: string;
  invoice_id: string;
  invoice_date: Date;
};
type Teacher = {
  id: string;
  first_name: string;
  last_name: string;
  phone: string;
  email: string;
  courses?: Subject[];
};
type Subject = {
  id: string;
  subject_id: string;
  subject_name: string;
  grade: string;
  year: string;
};
const EnrollStudentForm = () => {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [subjects, setSubjects] = useState<Subject[]>([] as Subject[]);
  const [teacher, setTeacher] = useState<string>();
  const { id } = useParams();
  const initialValues = {
    student_id: id,
  } as ValuesType;
  const validationSchema = Yup.object({
    subject_id: Yup.string().required("Required"),
    enrollment_type: Yup.string().required("Required"),
    enrolled_by: Yup.string().required("Required"),
    invoice_id: Yup.string().required("Required"),
    invoice_date: Yup.date().required("Required"),
  });
  const submit = async (values: ValuesType) => {
    try {
      const result = await axiosInstance.post(
        "/subjects/enrollbyadmin",
        values
      );
      if (result.status === 200) {
        toaster("success", "Student enrolled successfully");
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
    onSubmit: submit,
  });
  const getTeachers = useCallback(async () => {
    const result = await axiosInstance.get("/teachers/get");
    if (result.status === 200) {
      setTeachers(result.data);
    }
  }, []);
  useEffect(() => {
    getTeachers();
  }, [getTeachers]);
  useEffect(() => {
    setSubjects(teachers.find((t) => t.id === teacher)?.courses as Subject[]);
  }, [teacher, teachers]);

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="p-20 min-w-[340px] w-full min-h-full bg-second-alt rounded-[10px] flex flex-col justify-start pt-12 items-left gap-y-4"
    >
      <ToastContainer />
      <h1 className=" font-[700] font-montserrat text-[30px] text-prime text-left">
        Enroll Student
      </h1>

      <div className="flex flex-row justify-start items-start gap-x-8 gap-y-4 w-full flex-wrap mt-2">
        <SelectInput
          name="teacher"
          label="Teacher"
          value={formik.values.teacher_id}
          onChange={(e) => {
            formik.handleChange("teacher_id");
            setTeacher(e.target.value);
          }}
          onBlur={formik.handleBlur}
          error={formik.errors.teacher_id}
          touched={formik.touched.teacher_id}
        >
          <option value="">Select Teacher</option>
          {teachers?.map((teacher) => (
            <option value={teacher.id} key={teacher.id}>
              {teacher.first_name} {teacher.last_name}
            </option>
          ))}
        </SelectInput>
        <SelectInput
          name="subject_id"
          label="Subject"
          value={formik.values.subject_id}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.subject_id}
          touched={formik.touched.subject_id}
        >
          <option value="">Select Subject</option>
          {subjects?.map((subject) => (
            <option value={subject.id} key={subject.id}>
              {subject.subject_name} {subject.grade} {subject.year}
            </option>
          ))}
        </SelectInput>
        <SelectInput
          name="enrollment_type"
          label="Enrollment Type"
          value={formik.values.enrollment_type}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.enrollment_type}
          touched={formik.touched.enrollment_type}
        >
          <option value="">Select Enrollment Type</option>
          <option value="FREE">FREE</option>
          <option value="HALF">HALF</option>
          <option value="FULL">FULL</option>
        </SelectInput>
        <TextInput
          name="invoice_date"
          label="Invoice Date"
          type="date"
          value={formik.values.invoice_date}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.invoice_date}
          touched={formik.touched.invoice_date}
        />
        <TextInput
          name="invoice_id"
          label="Invoice ID"
          value={formik.values.invoice_id}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.invoice_id}
          touched={formik.touched.invoice_id}
        />

        <TextInput
          name="enrolled_by"
          label="Enrolled By"
          value={formik.values.enrolled_by}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.enrolled_by}
          touched={formik.touched.enrolled_by}
        />
      </div>
      <button
        type="submit"
        className=" mt-4 rounded-[5px] bg-tertiary-alt text-second-alt font-montserrat text-[12px] max-w-[100%] font-[700] w-[396px] h-[50px]"
      >
        ENROLL
      </button>
    </form>
  );
};
export default EnrollStudentForm;
