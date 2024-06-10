/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormik } from "formik";
import TextInput from "../Elements/TextInput";
import * as Yup from "yup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ValuesType } from "../../types/types.form.CreateTeacher";
import axiosInstance from "../../utils/axiosInstance";
import toaster from "../Elements/Toaster";

const CreateTeacherForm = () => {
  const initialValues = {
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    password: "",
    confirm_password: "",
  };
  const validationSchema = Yup.object({
    first_name: Yup.string().required("Required"),
    last_name: Yup.string().required("Required"),
    phone: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
    confirm_password: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Required"),
  });
  const formsubmit = async (values: ValuesType) => {
    try {
      const result = await axiosInstance.post("/teachers/add", values);
      if (result.status === 200) {
        toaster("success", "Teacher created successfully");
      } else {
        toaster("error", "Something went wrong");
      }
    } catch (error: any) {
      toaster("error", error.response.data.message);
    }
  };
  const formic = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: formsubmit,
  });
  return (
    <form
      onSubmit={formic.handleSubmit}
      className="p-20 min-w-[340px] w-full min-h-full bg-second-alt rounded-[10px] flex flex-col justify-start pt-12 items-left gap-y-4"
    >
      <ToastContainer />
      <h1 className=" font-[700] font-montserrat text-[30px] text-prime text-left">
        Create New Teacher
      </h1>

      <div className="flex flex-row justify-start items-start gap-x-8 gap-y-4 w-full flex-wrap mt-2">
        <TextInput
          label="First Name"
          type="text"
          name="first_name"
          value={formic.values.first_name}
          onChange={formic.handleChange}
          onBlur={formic.handleBlur}
          error={formic.errors.first_name}
          touched={formic.touched.first_name}
        />
        <TextInput
          label="Last Name"
          type="text"
          name="last_name"
          value={formic.values.last_name}
          onChange={formic.handleChange}
          onBlur={formic.handleBlur}
          error={formic.errors.last_name}
          touched={formic.touched.last_name}
        />
        <TextInput
          label="Phone Number"
          type="text"
          name="phone"
          value={formic.values.phone}
          onChange={formic.handleChange}
          onBlur={formic.handleBlur}
          error={formic.errors.phone}
          touched={formic.touched.phone}
        />
        <TextInput
          label="Email Address"
          type="email"
          name="email"
          value={formic.values.email}
          onChange={formic.handleChange}
          onBlur={formic.handleBlur}
          error={formic.errors.email}
          touched={formic.touched.email}
        />
        <TextInput
          label="Password"
          type="password"
          name="password"
          value={formic.values.password}
          onChange={formic.handleChange}
          onBlur={formic.handleBlur}
          error={formic.errors.password}
          touched={formic.touched.password}
        />
        <TextInput
          label="Confirm Password"
          type="password"
          name="confirm_password"
          value={formic.values.confirm_password}
          onChange={formic.handleChange}
          onBlur={formic.handleBlur}
          error={formic.errors.confirm_password}
          touched={formic.touched.confirm_password}
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
export default CreateTeacherForm;
