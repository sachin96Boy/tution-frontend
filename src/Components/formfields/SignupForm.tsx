import { Form, Formik } from "formik";
import { Link } from "react-router-dom";

import * as Yup from "yup";
import Input from "../input";

type signUpFormprops = {
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  password: string;
};

function SignupForm() {
    
  const initialValues: signUpFormprops = {
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    first_name: Yup.string().required("First name is required"),
    last_name: Yup.string().required("Last name is required"),
    Phone_number: Yup.string().required("Phone number is required"),
    email_address: Yup.string()
      .email("Invalid email address")
      .required("Provide a valid email address"),
    password: Yup.string().required("pasword Required"),
    conform_password: Yup.string().oneOf(
      [Yup.ref("password")],
      "Passwords doesn't match"
    ),
  });

  const handleRegisterSubmit = () => {};

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleRegisterSubmit}
    >
      {(formik) => {
        return (
          <div className="  bg-regal-light  rounded-xl  border-[1px] shadow  sm:rounded-md p-8">
            <Form autoComplete="off">
              <br />
              <br />
              <br />
              <br />

              <span className="text-3xl  font-bold text-center mt-5 ">
                Register
              </span>
              <br />
              <br />
              <h4 className="text-sm  font-medium ">
                Let's get all set up so can verify your personal account and
                begin <br /> setting up your profile.
              </h4>
              <br />
              <br />
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="col-span-6 sm:col-span-3 w-[347.5px] h-[82.81px] top-[300.27px] left-[564px] radius-[5px] border-[1px solid]">
                    <Input
                      className="input input-bordered w-full max-w-xs"
                      label="First Name"
                      type="text"
                      name="first_name"
                      placeholder="Type here"
                      handleChange={formik.handleChange}
                      value={formik.values.first_name}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  <br />
                  <div className="col-span-6 sm:col-span-3 lg:col-span-2 w-[347.5px] h-[82.81px] top-[300.27pxpx] left-[932px] radius-[5px] border-[1px solid]">
                    <Input
                      className="input input-bordered w-full max-w-xs"
                      label="Phone Number"
                      type="text"
                      name="phone_number"
                      placeholder="Type here"
                      handleChange={formik.handleChange}
                      value={formik.values.phone_number}
                      onBlur={formik.handleBlur}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 w-[347.5px] h-[82.81px] top-[397.92px] left-[932px] radius-[5px] border-[1px solid]">
                    <Input
                      className="input input-bordered w-full max-w-xs"
                      label="Password"
                      type="password"
                      name="password"
                      placeholder="Type here"
                      handleChange={formik.handleChange}
                      value={formik.values.password}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                </div>

                <div>
                  <div className="col-span-6 sm:col-span-3 w-[347.5px] h-[82.81px] top-[300.27px] left-[932px] radius-[5px] border-[1px solid]">
                    <Input
                      className="input input-bordered w-full max-w-xs"
                      label="Last Name"
                      type="text"
                      name="last_name"
                      placeholder="Type here"
                      handleChange={formik.handleChange}
                      value={formik.values.last_name}
                      onBlur={formik.handleBlur}
                    />
                  </div>
                  <br />
                  <div className="col-span-6 sm:col-span-3 w-[347.5px] h-[82.81px] top-397.92px] left-[564.5px] radius-[5px] border-[1px solid]">
                    <Input
                      className="input input-bordered w-full max-w-xs"
                      label="Email Address"
                      type="email"
                      name="email"
                      placeholder="Type here"
                      handleChange={formik.handleChange}
                      value={formik.values.email}
                      onBlur={formik.handleBlur}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 w-[347.5px] h-[82.81px] top-[496px] left-[564px] radius-[5px] border-[1px solid]">
                    <Input
                      className="input input-bordered w-full max-w-xs"
                      label="Conform Password"
                      type="password"
                      name="password"
                      placeholder="Type here"
                      handleChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={undefined}
                    />
                  </div>
                </div>
              </div>
              <br />
              <div className="md:col-span-5">
                <div className="inline-flex items-center">
                  <input
                    type="checkbox"
                    name="billing_same"
                    id="billing_same"
                    className="form-checkbox w-[21.31px] h-[21.31px] flex-shrink-0 border-[1px]"
                  />
                  <label className="ml-2">
                    I agree to all the Terms, Privacy Policy and Fees
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="w-full my-5 py-3 bg-regal-red shadow-lg shadow-red-500/50 hover:shadow-red-500/40 text-white font-semibold   rounded-sm "
              >
                CREATE ACCOUNT
              </button>
              <br />

              <label className="font-size-[13px] font-style:normal font-weight:500">
                By clicking Sign Up, you agree to our
                <span className="m-4 text-red-600 font-medium">
                  Terms of Use
                </span>{" "}
                and our
                <span className="m-4 text-red-600 font-medium">
                  Privacy Policy.
                </span>
              </label>
              <br />
              <label htmlFor="">
                Already have an account?
                <span className="m-4 text-red-600 font-medium">
                  <Link to="/">Log in</Link>
                </span>
              </label>
              <br />
              <br />
              <br />
              <br />
            </Form>
          </div>
        );
      }}
    </Formik>
  );
}

export default SignupForm;
