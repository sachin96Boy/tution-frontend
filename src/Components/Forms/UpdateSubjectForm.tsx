/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormik } from "formik";
import TextInput from "../Elements/TextInput";
import * as Yup from "yup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useCallback, useEffect, useState } from "react";
import SelectInput from "../Elements/SelectInput";
import { useParams } from "react-router";
import axiosInstance from "../../utils/axiosInstance";
import toaster from "../Elements/Toaster";
const UpdateSubjectForm = () => {
  const { id } = useParams();
  type Teacher = {
    id: string;
    first_name: string;
    last_name: string;
    phone: string;
    email: string;
  };
  type ValuesType = {
    subject_id: string;
    subject_name: string;
    grade: number;
    year: number;
    teacher_id: string;
    enrollment_fee: number;
    start_date: Date;
    end_date: Date;
    monthly_fee: number;
  };

  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const formSubmit = useCallback(async (values: ValuesType) => {
    try {
      const result = await axiosInstance.put("/subjects/update/" + id, values);
      if (result.status === 200) {
        toaster("success", "Subject updated successfully");
      } else {
        toaster("error", result.data.message);
      }
    } catch (error: any) {
      toaster("error", error.response.data.message);
    }
  }, []);
  const getTeachers = useCallback(async () => {
    try {
      const result = await axiosInstance.get("/teachers/get");
      if (result.status === 200) {
        setTeachers(result.data);
      } else {
        toaster("error", result.data.message);
      }
    } catch (error: any) {
      toaster("error", error.response.data.message);
    }
  }, []);
  const getSubject = useCallback(async () => {
    try {
      const result = await axiosInstance.get("/subjects/get/" + id);
      if (result.status === 200) {
        formik.setFieldValue("subject_id", result.data.subject_id);
        formik.setFieldValue("subject_name", result.data.subject_name);
        formik.setFieldValue("grade", result.data.grade);
        formik.setFieldValue("year", result.data.year);
        formik.setFieldValue("teacher_id", result.data.teacher_id);
        formik.setFieldValue("price", result.data.price);
        formik.setFieldValue("enrollment_fee", result.data.enrollment_fee);
        formik.setFieldValue("monthly_fee", result.data.monthly_fee);
        formik.setFieldValue(
          "start_date",
          new Date(result.data.start_date).getFullYear() +
            "-" +
            ("0" + (new Date(result.data.start_date).getMonth() + 1)).slice(
              -2
            ) +
            "-" +
            ("0" + new Date(result.data.start_date).getDate()).slice(-2)
        );
        formik.setFieldValue(
          "end_date",
          new Date(result.data.end_date).getFullYear() +
            "-" +
            ("0" + (new Date(result.data.end_date).getMonth() + 1)).slice(-2) +
            "-" +
            ("0" + new Date(result.data.end_date).getDate()).slice(-2)
        );
      } else {
        toaster("error", result.data.message);
      }
    } catch (error: any) {
      toaster("error", error.response.data.message);
    }
  }, []);

  useEffect(() => {
    getTeachers();
    getSubject();
  }, [getTeachers, getSubject]);

  const formik = useFormik({
    initialValues: {
      subject_id: "",
      subject_name: "",
      grade: 1,
      year: 2023,
      teacher_id: "",
      price: 0,
      start_date: new Date(),
      end_date: new Date(),
      enrollment_fee: 0,
      monthly_fee: 0,
    },

    validationSchema: Yup.object({
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
      enrollment_fee: Yup.number().required("Required"),
      monthly_fee: Yup.number().required("Required"),
    }),
    onSubmit: (values) => {
      formSubmit(values);
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      className="p-20 min-w-[340px] w-full min-h-full bg-second-alt rounded-[10px] flex flex-col justify-start pt-12 items-left gap-y-4"
    >
      <ToastContainer />
      <h1 className=" font-[700] font-montserrat text-[30px] text-prime text-left">
        Update Subject
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
        <TextInput
          label="Enrollment Fee"
          type="number"
          name="enrollment_fee"
          value={formik.values.enrollment_fee}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.enrollment_fee}
          touched={formik.touched.enrollment_fee}
        />
        <TextInput
          label="Monthly Fee"
          type="number"
          name="monthly_fee"
          value={formik.values.monthly_fee}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.monthly_fee}
          touched={formik.touched.monthly_fee}
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
        <TextInput
          label="Start Date"
          type="date"
          name="start_date"
          value={formik.values.start_date}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.start_date}
          touched={formik.touched.start_date}
        />
        <TextInput
          label="End Date"
          type="date"
          name="end_date"
          value={formik.values.end_date}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.end_date}
          touched={formik.touched.end_date}
        />
      </div>

      <button
        type="submit"
        className=" mt-4 rounded-[5px] bg-tertiary-alt text-second-alt font-montserrat text-[12px] max-w-[100%] font-[700] w-[396px] h-[50px]"
      >
        UPDATE
      </button>
    </form>
  );
};
export default UpdateSubjectForm;
