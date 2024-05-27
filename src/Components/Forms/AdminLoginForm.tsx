/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormik } from "formik";
import * as Yup from "yup";
import TextInput from "../Elements/TextInput";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import { useContext } from "react";
import axios from "axios";
import { baseURL } from "../../const/const";
import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminLoginForm = () => {
  axios.defaults.withCredentials = true;
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();
  const fsubmit = async (values: { admin_id: string; password: string }) => {
    try {
      const result = await axios.post(baseURL + "/api/v1/admin/login", values);
      if (result.status === 200) {
        setUser(result.data);
        navigate("/admin");
      } else {
        console.log(result);
      }
    } catch (err: any) {
      toast.error(err.response.data, {
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
  const formik = useFormik({
    initialValues: {
      admin_id: "",
      password: "",
    },
    validationSchema: Yup.object({
      admin_id: Yup.string().required("Required"),
      password: Yup.string().required("Required"),
    }),
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
