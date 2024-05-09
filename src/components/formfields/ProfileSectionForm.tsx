import * as Yup from "yup";
import Input from "../input";
import { Form, Formik } from "formik";

type ProfileSectionProps = {
  school: string;
  subject_stream: string;
  exam_year: string;
  district: string;
  address: string;
  nfc_code: string;
  nic: string;
  parents_mobile: string;
  upload_images: string;
};

function ProfileSectionForm() {
  const initialValues: ProfileSectionProps = {
    school: "",
    subject_stream: "",
    exam_year: "",
    district: "",
    address: "",
    nfc_code: "",
    nic: "",
    parents_mobile: "",
    upload_images: "",
  };

  const validationSchema = Yup.object({
    school: Yup.string().required("School Required"),
    subject_stream: Yup.string().required("Subject Steaam Required"),
    exam_year: Yup.number().required("Exam Year Required"),
    district: Yup.string().required("District Required"),
    nfc_code: Yup.string().required("NFC Required"),
    nic: Yup.string().required("Nic Required"),
    parents_mobile: Yup.string().required("Mobile Number Required"),
    upload_images: Yup.string().required("Required"),
  });

  const handleSubmit = () => {};

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formik) => {
        return (
          <div className="bg-regal-light  rounded-xl  border-[1px] shadow  sm:rounded-md p-6 w-full min-h-screen">
            <Form autoComplete="off">
              <p className="text-3xl  font-bold text-left py-4">Profile update</p>

              <div className="grid grid-cols-2 gap-6 py-4 items-center justify-center">
                <div className="flex flex-col gap-2">
                  <Input
                    className="input input-bordered w-full "
                    label="School"
                    type="text"
                    name="school"
                    placeholder="ex: School name"
                    handleChange={formik.handleChange}
                    value={formik.values.school}
                    onBlur={formik.handleBlur}
                  />

                  <Input
                    className="input input-bordered w-full "
                    label="Exam year"
                    type="text"
                    name="exam_year"
                    placeholder="ex: 2024"
                    handleChange={formik.handleChange}
                    value={formik.values.exam_year}
                    onBlur={formik.handleBlur}
                  />

                  <Input
                    className="input input-bordered w-full "
                    label="Address"
                    type="text"
                    name="address"
                    placeholder="ex: Home address"
                    handleChange={formik.handleChange}
                    value={formik.values.address}
                    onBlur={formik.handleBlur}
                  />

                  <Input
                    className="input input-bordered w-full "
                    label="NIC"
                    type="text"
                    name="nic"
                    placeholder="ex: 15616546546V"
                    handleChange={formik.handleChange}
                    value={formik.values.nic}
                    onBlur={formik.handleBlur}
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <Input
                    className="input input-bordered w-full "
                    label="Subject Stream"
                    type="text"
                    name="subject_stream"
                    placeholder="ex: Stream name"
                    handleChange={formik.handleChange}
                    value={formik.values.subject_stream}
                    onBlur={formik.handleBlur}
                  />

                  <Input
                    className="input input-bordered w-full "
                    label="District"
                    type="text"
                    name="district"
                    placeholder="ex: District"
                    handleChange={formik.handleChange}
                    value={formik.values.district}
                    onBlur={formik.handleBlur}
                  />

                  <Input
                    className="input input-bordered w-full "
                    label="NFC Code"
                    type="text"
                    name="nfc_code"
                    placeholder="ex: NFC code"
                    handleChange={formik.handleChange}
                    value={formik.values.nfc_code}
                    onBlur={formik.handleBlur}
                  />

                  <Input
                    className="input input-bordered w-full "
                    label="Parent's Mobile"
                    type="text"
                    name="parents_mobile"
                    placeholder="ex: 07********"
                    handleChange={formik.handleChange}
                    value={formik.values.parents_mobile}
                    onBlur={formik.handleBlur}
                  />
                </div>
              </div>

              <button
                type="submit"
                className=" my-2 p-2 px-12 bg-regal-red shadow-lg shadow-red-500/50 hover:shadow-red-500/40 text-white font-semibold rounded-sm"
              >
                UPDATE
              </button>
              <br />
            </Form>
          </div>
        );
      }}
    </Formik>
  );
}

export default ProfileSectionForm;
