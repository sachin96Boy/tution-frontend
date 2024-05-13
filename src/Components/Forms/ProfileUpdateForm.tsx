import { useEffect, useState } from "react";
import TextInput from "../../Components/Elements/TextInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import Dzone from "../Dzone";
const ProfileUpdateForm = () => {
  const [profilePic, setProfilePic] = useState<File | null>(null);
  const [nicBack, setNicBack] = useState<File | null>(null);
  const [nicFront, setNicFront] = useState<File | null>(null);
  const [selfie, setSelfie] = useState<File | null>(null);
  const [error1, setError1] = useState("required");
  const [error2, setError2] = useState("required");
  const [error3, setError3] = useState("required");
  const [error4, setError4] = useState("required");
  useEffect(() => {
    profilePic && setError1("");
    nicBack && setError2("");
    nicFront && setError3("");
    selfie && setError4("");
  }, [profilePic, nicBack, nicFront, selfie, error1, error2, error3, error4]);
  const formik = useFormik({
    initialValues: {
      school: "",
      subject: "",
      year: "",
      district: "",
      address: "",
      nfc: "",
      nic: "",
      parent_mobile: "",
    },
    validationSchema: Yup.object({
      school: Yup.string().required("Required"),
      subject: Yup.string().required("Required"),
      year: Yup.string().required("Required"),
      district: Yup.string().required("Required"),
      address: Yup.string().required("Required"),
      nfc: Yup.string().required("Required"),
      nic: Yup.string().required("Required"),
      parent_mobile: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values, profilePic, nicBack, nicFront, selfie);
    },
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

      <div className="flex flex-row justify-start items-start gap-x-8 gap-y-4 w-full flex-wrap mt-2">
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
          name="subject"
          value={formik.values.subject}
          error={formik.errors.subject}
          touched={formik.touched.subject}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          classNameD="min-w-[360px] max-md:min-w-[100%]"
          classNameI="min-w-[360px] max-md:min-w-[100%]"
        />
        <TextInput
          label="Exam Year"
          name="year"
          value={formik.values.year}
          error={formik.errors.year}
          touched={formik.touched.year}
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
          label="NFC Code"
          name="nfc"
          value={formik.values.nfc}
          error={formik.errors.nfc}
          touched={formik.touched.nfc}
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
          <Dzone fileData={profilePic} setData={setProfilePic} error={error1} />
          <Dzone fileData={nicBack} setData={setNicBack} error={error2} />
          <Dzone fileData={nicFront} setData={setNicFront} error={error3} />
          <Dzone fileData={selfie} setData={setSelfie} error={error4} />
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
