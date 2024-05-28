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

const LoginForm = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  type ValuesType = {
    phone_number: string;
    password: string;
  };
  const initialValues = {
    phone_number: "",
    password: "",
  };
  const validationSchema = Yup.object({
    phone_number: Yup.string().required("Required"),
    password: Yup.string().required("Required"),
  });
  const fsubmit = async (values: ValuesType) => {
    try {
      const result = await axiosInstance.post("/api/v1/auth/login", values);
      if (result.status === 200) {
        setUser(result.data);
        if (result.data.validated) {
          navigate("/student");
        } else {
          navigate("/otp");
        }
      } else {
        toaster("error", result.data.message);
      }
    } catch (err: any) {
      toaster("error", err.response.data.message);
      console.log(err.response.data.message);
    }
  };
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
        Welcome Back
      </h1>
      <p className="font-[600] font-montserrat text-[15px] text-prime-alt max-w-[100%] w-[330px] text-center">
        By logging into aPlus Academy, you agree to our Terms of use and Privacy
        Policy.
      </p>
      <TextInput
        label="Phone Number"
        name="phone_number"
        value={formik.values.phone_number}
        onChange={formik.handleChange}
        error={formik.errors.phone_number}
        touched={formik.touched.phone_number}
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
        <p className="font-[500] font-montserrat text-[13px] text-prime-alt">
          Don't have Account?{" "}
          <Link
            to="/register"
            className="font-[700] font-montserrat text-[13px] text-tertiary-alt"
          >
            Sign up
          </Link>
        </p>
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
export default LoginForm;
