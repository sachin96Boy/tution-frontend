/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormik } from "formik";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import TextInput from "../Elements/TextInput";
import UserContext from "../../contexts/UserContext";
import axiosInstance from "../../utils/axiosInstance";
import { IRegisterForm } from "../../types/types.registerForm";
import toaster from "../Elements/Toaster";
import { ToastContainer } from "react-toastify";
const RegisterForm = () => {
  const [terms, setTerms] = useState(false);
  const { setUser } = useContext(UserContext);

  const navigator = useNavigate();

  const fsubmit = async (values: IRegisterForm) => {
    try {
      console.log(values);
      const result = await axiosInstance.post("/api/v1/auth/register", values);
      if (result.status === 200) {
        setUser(result.data);
        navigator("/otp");
      } else {
        toaster("error", result.data.message);
      }
    } catch (err: any) {
      toaster("error", err.response.data.message);
    }
  };

  const initialValues: IRegisterForm = {} as IRegisterForm;

  const validationSchema = Yup.object({
    first_name: Yup.string().required("Required"),
    last_name: Yup.string().required("Required"),
    phone: Yup.string().required("Required"),
    email: Yup.string().email("Invalid Email").required("Required"),
    password: Yup.string().required("Required"),
    confirm_password: Yup.string()
      .oneOf([Yup.ref("password")], "Passwords must match")
      .required("Required"),
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
      className="p-20 min-w-[340px] w-full min-h-full bg-second-alt rounded-[10px] flex flex-col justify-start pt-12 items-left gap-y-4"
    >
      <ToastContainer />
      <h1 className=" font-[700] font-montserrat text-[30px] text-prime text-left">
        Register
      </h1>
      <p className="font-[600] font-montserrat text-[15px] text-prime-alt  w-[45%] max-md:w-[95%] text-left">
        Let’s get you all set up so can verify your personal account and begin
        setting up your profile
      </p>
      <div className="flex flex-row justify-start items-start gap-x-8 gap-y-4 w-full flex-wrap">
        <TextInput
          label="First Name"
          name="first_name"
          value={formik.values.first_name}
          error={formik.errors.first_name}
          touched={formik.touched.first_name}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          classNameD="min-w-[360px] max-md:min-w-[100%]"
          classNameI="min-w-[360px] max-md:min-w-[100%]"
        />

        <TextInput
          label="Last Name"
          name="last_name"
          value={formik.values.last_name}
          error={formik.errors.last_name}
          touched={formik.touched.last_name}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          classNameD="min-w-[360px] max-md:min-w-[100%]"
          classNameI="min-w-[360px] max-md:min-w-[100%]"
        />
        <TextInput
          label="Phone Number"
          name="phone"
          value={formik.values.phone}
          error={formik.errors.phone}
          touched={formik.touched.phone}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          classNameD="min-w-[360px] max-md:min-w-[100%]"
          classNameI="min-w-[360px] max-md:min-w-[100%]"
        />
        <TextInput
          label="Email"
          name="email"
          type="email"
          value={formik.values.email}
          error={formik.errors.email}
          touched={formik.touched.email}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          classNameD="min-w-[360px] max-md:min-w-[100%]"
          classNameI="min-w-[360px] max-md:min-w-[100%]"
        />
        <TextInput
          label="Password"
          name="password"
          type="password"
          value={formik.values.password}
          error={formik.errors.password}
          touched={formik.touched.password}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          classNameD="min-w-[360px] max-md:min-w-[100%]"
          classNameI="min-w-[360px] max-md:min-w-[100%]"
        />
        <TextInput
          label="Confirm Password"
          name="confirm_password"
          type="password"
          value={formik.values.confirm_password}
          error={formik.errors.confirm_password}
          touched={formik.touched.confirm_password}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          classNameD="min-w-[360px] max-md:min-w-[100%]"
          classNameI="min-w-[360px] max-md:min-w-[100%]"
        />
      </div>
      <div className="flex flex-row justify-start items-center gap-x-8 gap-y-4 w-full">
        <input
          type="checkbox"
          name="terms"
          onChange={(e) => setTerms(e.target.checked)}
          id="terms"
          className="form-checkbox w-[21.31px] h-[21.31px] flex-shrink-0 border-[1px]"
        />{" "}
        <label
          htmlFor="terms"
          className="font-[500] font-montserrat text-[15px] text-prime-alt w-fit text-center "
        >
          I agree to all the{" "}
          <span className="font-[700]">Terms, Privacy Policy</span> and{" "}
          <span className="font-[700]">Fees</span>
        </label>
      </div>
      <p className="font-[500] font-montserrat text-[13px] text-tertiary-alt w-[45%] max-md:w-[95%] text-left">
        {!terms && (
          <span className="font-[500] text-tertiary-alt">
            Please agree to the terms and conditions
          </span>
        )}
      </p>
      <button
        type="submit"
        className=" mt-4 rounded-[5px] bg-tertiary-alt text-second-alt font-montserrat text-[12px] max-w-[100%] font-[700] w-[396px] h-[50px]"
      >
        REGISTER
      </button>
      <div className="flex flex-col justify-start items-start gap-y-4 w-full">
        <p className="font-[500] font-montserrat text-[13px] text-prime-alt">
          By Clicking Sign up you agree to our{" "}
          <Link
            to="/terms"
            className="font-[700] font-montserrat text-[13px] text-tertiary-alt"
          >
            Terms of use{" "}
          </Link>
          and our{" "}
          <Link
            to="/policy"
            className="font-[700] font-montserrat text-[13px] text-tertiary-alt"
          >
            Privacy Policy.
          </Link>
        </p>
        <p className="font-[500] font-montserrat text-[13px] text-prime-alt">
          Allready have an account?{" "}
          <Link
            to="/login"
            className="font-[700] font-montserrat text-[13px] text-tertiary-alt"
          >
            Sign in
          </Link>
        </p>
      </div>
    </form>
  );
};
export default RegisterForm;
