/* eslint-disable @typescript-eslint/no-explicit-any */
import TextInput from "../Elements/TextInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IRegisterForm } from "../../types/types.registerForm";
import axiosInstance from "../../utils/axiosInstance";
import toaster from "../Elements/Toaster";

const CreateStudentForm = () => {
  const fsubmit = async (values: IRegisterForm) => {
    try {
      const result = await axiosInstance.post("/users/add", values);
      if (result.status === 200) {
        toaster("success", "Student created successfully");
      } else {
        toaster("error", result.data.message);
      }
    } catch (error: any) {
      toaster("error", error.response.data.message);
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
      <h1 className=" font-[700] font-montserrat text-[30px] text-prime text-left">
        Add New Student
      </h1>

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
      <button
        type="submit"
        className=" mt-4 rounded-[5px] bg-tertiary-alt text-second-alt font-montserrat text-[12px] max-w-[100%] font-[700] w-[396px] h-[50px]"
      >
        Create
      </button>
    </form>
  );
};
export default CreateStudentForm;
