/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormik } from "formik";
import * as Yup from "yup";
import TextInput from "../Elements/TextInput";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import { useContext } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axiosInstance from "../../utils/axiosInstance";
import toaster from "../Elements/Toaster";

const AdminLoginForm = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  type ValuesType = {
    admin_id: string;
    password: string;
  };
  const fsubmit = async (values: ValuesType) => {
    try {
      const result = await axiosInstance.post("/api/v1/admin/login", values);
      if (result.status === 200) {
        setUser(result.data);
        navigate("/admin");
      } else {
        console.log(result);
      }
    } catch (err: any) {
      toaster("error", err.response.data);
    }
  };
  const initialValues = {
    admin_id: "",
    password: "",
  };
  const validationSchema = Yup.object({
    admin_id: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: fsubmit,
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      action=""
      className=" max-w-[80%] p-6 min-w-[340px] w-[486px] min-h-[576px] bg-second-alt rounded-[10px] flex flex-col justify-start pt-12 items-center gap-y-4"
    >
      <ToastContainer />
      <h1 className=" font-[700] font-montserrat text-[30px] text-prime text-center">
        Admin Login
      </h1>

      <TextInput
        label="Admin ID"
        name="admin_id"
        value={formik.values.admin_id}
        onChange={formik.handleChange}
        error={formik.errors.admin_id}
        touched={formik.touched.admin_id}
        onBlur={formik.handleBlur}
      />

      <TextInput
        label="Password"
        name="password"
        value={formik.values.password}
        type="password"
        onChange={formik.handleChange}
        error={formik.errors.password}
        touched={formik.touched.password}
        onBlur={formik.handleBlur}
      />
      <button
        type="submit"
        className=" mt-4 rounded-[5px] bg-tertiary-alt text-second-alt font-montserrat text-[12px] max-w-[100%] font-[700] w-[396px] h-[50px]"
      >
        LOGIN
      </button>
      <div className="flex flex-col justify-start items-center">
        <Link
          to="/forget-password"
          className="font-[700] font-montserrat text-[13px] text-tertiary-alt"
        >
          Forget Password?
        </Link>
      </div>
    </form>
  );
};
export default AdminLoginForm;
