import { Form, Formik } from "formik";
import * as Yup from "yup";
import Input from "../input";
import { useState } from "react";

type SignInFormProps = {
  phone: string;
  password: string;
};

function SignInForm() {

  const [isPassword, setIsPassword] = useState(false);

  const onToggle = () => {
    setIsPassword(!isPassword);
  };


  const initValues: SignInFormProps = {
    phone: "",
    password: "",
  };

  const validationSchema = Yup.object({
    phone: Yup.string()
      .required("Phoe is Required")
      .matches(/^(?:\+94|0)?[1-9]\d{8}$/, "Must be a valid phone number"),
    password: Yup.string()
      .required("password is required")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#%&])(?=.{8,})/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
      ),
  });

  const handleSubmit = () => {};

  return (
    <Formik
      initialValues={initValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {(formik) => (
        <Form>
          <div className="flex flex-col gap-3">
            <Input
              label={"Phone Number"}
              name={"phone"}
              type={"text"}
              className={"input input-bordered w-full "}
              placeholder={"Enter Phone Number"}
              handleChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />

            <Input
              label={"Password"}
              name={"password"}
              type={"password"}
              className={"input input-bordered w-full "}
              placeholder={"Enter Password"}
              handleChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              isPassword={isPassword}
              onToggle={onToggle}
            />

            <button
              className="w-full my-5 py-3 bg-regal-red shadow-lg shadow-red-500/50 hover:shadow-red-500/40 text-white font-semibold rounded-sm"
              type={"submit"}
            >
              LOGIN
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default SignInForm;
