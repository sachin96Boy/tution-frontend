/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import TextInput from "../../Components/Elements/TextInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import Dzone from "../Dzone";
import { ToastContainer } from "react-toastify";
import axiosInstance from "../../utils/axiosInstance";
import toaster from "../Elements/Toaster";
const ProfileUpdateForm = () => {
  const [profilePic, setProfilePic] = useState<File | null>(null);
  const [nicBack, setNicBack] = useState<File | null>(null);
  const [nicFront, setNicFront] = useState<File | null>(null);
  const [selfie, setSelfie] = useState<File | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axiosInstance.get("/api/v1/auth/user");
      if (result.status === 200) {
        formik.setFieldValue("first_name", result.data.first_name || "");
        formik.setFieldValue("last_name", result.data.last_name || "");
        formik.setFieldValue("phone", result.data.phone || "");
        formik.setFieldValue("email", result.data.email || "");
        formik.setFieldValue("school", result.data.school || "");
        formik.setFieldValue(
          "subject_stream",
          result.data.subject_stream || ""
        );
        formik.setFieldValue("exam_year", result.data.exam_year || "");
        formik.setFieldValue("district", result.data.district || "");
        formik.setFieldValue("address", result.data.address || "");
        formik.setFieldValue("nic", result.data.nic || "");
        formik.setFieldValue("parent_mobile", result.data.parent_mobile || "");
      }
    };
    fetchData();
  }, []);

  const initialValues = {
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    password: "",
    confirm_password: "",
    school: "",
    subject_stream: "",
    exam_year: "",
    district: "",
    address: "",
    nic: "",
    parent_mobile: "",
  };
  const validationSchema = Yup.object({
    first_name: Yup.string().required("Required"),
    last_name: Yup.string().required("Required"),
    phone: Yup.string().required("Required"),
    email: Yup.string().required("Required"),
    password: Yup.string(),
    confirm_password: Yup.string().oneOf(
      [Yup.ref("password")],
      "Passwords must match"
    ),
    school: Yup.string().required("Required"),
    subject_stream: Yup.string().required("Required"),
    exam_year: Yup.number().required("Required"),
    district: Yup.string().required("Required"),
    address: Yup.string().required("Required"),
    nic: Yup.string().required("Required"),
    parent_mobile: Yup.string().required("Required"),
  });
  const formsubmit = async (values: any) => {
    try {
      const result = await axiosInstance.put("/api/v1/auth/user", values);
      if (result.status === 200) {
        toaster("success", "Profile updated successfully");
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
    onSubmit: formsubmit,
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      action=""
      className="p-20 min-w-[340px] w-full min-h-full bg-second-alt rounded-[10px] flex flex-col justify-start pt-12 items-left gap-y-4"
    >
      <h1 className=" font-[700] font-montserrat text-[30px] text-prime text-left">
        Profile Update
      </h1>
      <ToastContainer />
      <div className="flex flex-row justify-start items-start gap-x-8 gap-y-4 w-full flex-wrap mt-2">
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
          placeholder="Leave empty to keep current or fill to reset"
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
          value={formik.values.confirm_password}
          error={formik.errors.confirm_password}
          touched={formik.touched.confirm_password}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          classNameD="min-w-[360px] max-md:min-w-[100%]"
          classNameI="min-w-[360px] max-md:min-w-[100%]"
        />
        <TextInput
          label="School"
          name="school"
          value={formik.values.school}
          error={formik.errors.school}
          touched={formik.touched.school}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          classNameD="min-w-[360px] max-md:min-w-[100%]"
          classNameI="min-w-[360px] max-md:min-w-[100%]"
        />
        <TextInput
          label="Subject Stream"
          name="subject_stream"
          value={formik.values.subject_stream}
          error={formik.errors.subject_stream}
          touched={formik.touched.subject_stream}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          classNameD="min-w-[360px] max-md:min-w-[100%]"
          classNameI="min-w-[360px] max-md:min-w-[100%]"
        />
        <TextInput
          label="Exam Year"
          name="exam_year"
          type="number"
          value={formik.values.exam_year}
          error={formik.errors.exam_year}
          touched={formik.touched.exam_year}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          classNameD="min-w-[360px] max-md:min-w-[100%]"
          classNameI="min-w-[360px] max-md:min-w-[100%]"
        />
        <TextInput
          label="District"
          name="district"
          value={formik.values.district}
          error={formik.errors.district}
          touched={formik.touched.district}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          classNameD="min-w-[360px] max-md:min-w-[100%]"
          classNameI="min-w-[360px] max-md:min-w-[100%]"
        />
        <TextInput
          label="Address"
          name="address"
          value={formik.values.address}
          error={formik.errors.address}
          touched={formik.touched.address}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          classNameD="min-w-[360px] max-md:min-w-[100%]"
          classNameI="min-w-[360px] max-md:min-w-[100%]"
        />

        <TextInput
          label="NIC"
          name="nic"
          value={formik.values.nic}
          error={formik.errors.nic}
          touched={formik.touched.nic}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          classNameD="min-w-[360px] max-md:min-w-[100%]"
          classNameI="min-w-[360px] max-md:min-w-[100%]"
        />
        <TextInput
          label="Parent's Mobile"
          name="parent_mobile"
          value={formik.values.parent_mobile}
          error={formik.errors.parent_mobile}
          touched={formik.touched.parent_mobile}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          classNameD="min-w-[360px] max-md:min-w-[100%]"
          classNameI="min-w-[360px] max-md:min-w-[100%]"
        />
      </div>
      <div>
        <p className="font-[500] font-montserrat text-[15px] text-prime-alt w-fit text-center ">
          Upload images
        </p>
        <div className="flex flex-row justify-start items-start gap-x-8 gap-y-4 w-full flex-wrap mt-2">
          <Dzone fileData={profilePic} setData={setProfilePic} />
          <Dzone fileData={nicBack} setData={setNicBack} />
          <Dzone fileData={nicFront} setData={setNicFront} />
          <Dzone fileData={selfie} setData={setSelfie} />
        </div>
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
export default ProfileUpdateForm;
