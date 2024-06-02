/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useParams } from "react-router";
import { ToastContainer } from "react-toastify";
import toaster from "../Elements/Toaster";
import axiosInstance from "../../utils/axiosInstance";
import { useCallback, useEffect, useState } from "react";
import { useFormik } from "formik";
import TextInput from "../Elements/TextInput";
import * as Yup from "yup";
type ValuesType = {
  title: string;
  description: string;
  date: string;
  month_id: number;
};
type Month = {
  id: number;
  month_name: string;
  year: number;
};
const CreateLectureForm = () => {
  const { month_id } = useParams();
  const [month, setMonth] = useState<Month>({} as Month);

  const onSubmit = async (values: ValuesType) => {
    try {
      const result = await axiosInstance.post("/lecture", values);
      if (result.status === 200) {
        toaster("success", "Lecture created successfully");
      } else {
        toaster("error", result.data.message);
      }
    } catch (error: any) {
      toaster("error", error.response.data.message);
    }
  };
  const initialValues = {
    title: "",
    description: "",
    date: "",
    month_id: parseInt(month_id as string),
  };

  const validationSchema = Yup.object({
    title: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    date: Yup.string().required("Required"),
  });

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });

  const getMonthById = useCallback(async () => {
    try {
      const result = await axiosInstance.get(`/months/${month_id}`);
      if (result.status === 200) {
        const y = result.data.year;
        const m = result.data.month_name;
        const month_int = new Date(Date.parse(`${y}-${m}-01`)).getMonth();
        const month_number = ("0" + (month_int + 1)).slice(-2);
        formik.setFieldValue("date", `${y}-${month_number}-01`);
        formik.setFieldValue("month_id", result.data.id);
        setMonth(result.data);
      } else {
        toaster("error", result.data.message);
      }
    } catch (error: any) {
      toaster("error", error.response.data.message);
    }
  }, [month_id]);

  useEffect(() => {
    getMonthById();
  }, [getMonthById]);

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="p-20 min-w-[340px] w-full min-h-full bg-second-alt rounded-[10px] flex flex-col justify-start pt-12 items-left gap-y-4"
    >
      <ToastContainer />
      <h1 className=" font-[700] font-montserrat text-[30px] text-prime text-left">
        Create New Lecture for {month.month_name} of {month.year}
      </h1>

      <div className="flex flex-row justify-start items-start gap-x-8 gap-y-4 w-full flex-wrap mt-2">
        <TextInput
          name="title"
          label="Title"
          placeholder="Title"
          type="text"
          value={formik.values.title}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.title}
          touched={formik.touched.title}
        />

        <TextInput
          name="description"
          label="Description"
          placeholder="Description"
          type="text"
          value={formik.values.description}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.description}
          touched={formik.touched.description}
        />

        <TextInput
          name="date"
          label="Date"
          placeholder="Date"
          type="date"
          value={formik.values.date}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.errors.date}
          touched={formik.touched.date}
        />
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
export default CreateLectureForm;
