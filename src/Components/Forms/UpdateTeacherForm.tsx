/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormik } from "formik";
import TextInput from "../Elements/TextInput";
import * as Yup from "yup";
import axios from "axios";
import { baseURL } from "../../const/const";
import { useEffect } from "react";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const UpdateTeacherForm = ({ id }: { id: string }) => {
  axios.defaults.withCredentials = true;

  const getTeacher = async () => {
    const result = await axios.get(baseURL + "/teachers/get/" + id);
    if (result.status === 200) {
      formic.setFieldValue("first_name", result.data.first_name);
      formic.setFieldValue("last_name", result.data.last_name);
      formic.setFieldValue("phone", result.data.phone);
      formic.setFieldValue("email", result.data.email);
      formic.setFieldValue("id", result.data.id);
    }
  };
  const formsubmit = async (values: {
    id: string;
    first_name: string;
    last_name: string;
    phone: string;
    email: string;
  }) => {
    try {
      const result = await axios.put(baseURL + "/teachers/update", values);
      if (result.status === 200) {
        toast.success("Teacher Updated successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      } else {
        console.log("Error Error");
      }
    } catch (error: any) {
      toast.error(error.response.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };
  const formic = useFormik({
    initialValues: {
      id: "",
      first_name: "",
      last_name: "",
      phone: "",
      email: "",
    },
    validationSchema: Yup.object({
      first_name: Yup.string().required("Required"),
      last_name: Yup.string().required("Required"),
      phone: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      formsubmit(values);
    },
  });
  useEffect(() => {
    getTeacher();
  }, []);
  return (
    <form
      onSubmit={formic.handleSubmit}
      className="p-20 min-w-[340px] w-full min-h-full bg-second-alt rounded-[10px] flex flex-col justify-start pt-12 items-left gap-y-4"
    >
      <ToastContainer />
      <h1 className=" font-[700] font-montserrat text-[30px] text-prime text-left">
        Update Teacher
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
export default UpdateTeacherForm;
