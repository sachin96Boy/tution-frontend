import RegiaterImg from "../assets/Images/register.jpg.png";
import { Formik } from "formik";
import Input from "../components/input";
import * as yup from "yup";
import { Link } from "react-router-dom";

const initialValues = {
  first_name: "",
  last_name: "",
  phone_number: "",
  email: "",
  password: "",
  conform_password: "",
};

const validationSchema = yup.object({
  first_name: yup.string().required("First name is required"),
  last_name: yup.string().required("Last name is required"),
  Phone_number: yup.string().required("Phone number is required"),
  email_address: yup.string().email("Invalid email address").required("Provide a valid email address"),
  password: yup.string().required("Required"),
  conform_password: yup.string().required("Required"),
});

export default function Register() {
  const handleFormSubmit = (values: any) => {
    alert(JSON.stringify(values, null, 2));
  };
  return (
    <div className=" flex flex-col sm:flex-row items-center justify-between  min-h-screen p-4   bg-regal-gray">
      <div className="hidden sm:inline-block p-4 ">
        <img
          className="   object-cover rounded-xl"
          src={RegiaterImg}
          alt="ALDTAN"
        />
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {(formik) => {
          return (
            <div className="  bg-regal-light  rounded-xl  border-[1px] shadow  sm:rounded-md p-8">
              <form autoComplete="off" onSubmit={formik.handleSubmit}>
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
                        onChange={formik.handleChange}
                        value={formik.values.first_name}
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
                        onChange={formik.handleChange}
                        value={formik.values.phone_number}
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 w-[347.5px] h-[82.81px] top-[397.92px] left-[932px] radius-[5px] border-[1px solid]">
                      <Input
                        className="input input-bordered w-full max-w-xs"
                        label="Password"
                        type="password"
                        name="password"
                        placeholder="Type here"
                        onChange={formik.handleChange}
                        value={formik.values.password}
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
                      onChange={formik.handleChange}
                      value={formik.values.last_name}
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
                      onChange={formik.handleChange}
                      value={formik.values.email}
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3 w-[347.5px] h-[82.81px] top-[496px] left-[564px] radius-[5px] border-[1px solid]">
                    <Input
                      className="input input-bordered w-full max-w-xs"
                      label="Conform Password"
                      type="password"
                      name="password"
                      placeholder="Type here"
                      onChange={formik.handleChange}
                      value={formik.values.conform_password}
                    />
                  </div>
                </div>
                </div>
<br />
                <div className="md:col-span-5">
                <div className="inline-flex items-center">
                  <input type="checkbox" name="billing_same" id="billing_same" className="form-checkbox w-[21.31px] h-[21.31px] flex-shrink-0 border-[1px]" />
                  <label className="ml-2">I agree to all the Terms, Privacy Policy and Fees</label>
                </div>
              </div>


                <button
                  type="submit"
                  className="w-full my-5 py-3 bg-regal-red shadow-lg shadow-red-500/50 hover:shadow-red-500/40 text-white font-semibold   rounded-sm "
                >
                  CREATE ACCOUNT
                </button>
<br />


                <label className="font-size-[13px] font-style:normal font-weight:500">By clicking Sign Up, you agree to our 
                  <span className='m-4 text-red-600 font-medium'>Terms of Use</span> and our 
                  <span className='m-4 text-red-600 font-medium'>Privacy Policy.</span>
                </label>
<br />
                <label htmlFor="">Already have an account? 
                  <span className='m-4 text-red-600 font-medium'>
                    <Link to ='/'>Log in</Link>
                  </span>
                </label>
<br />
<br />
<br />
<br />

              </form>
            </div>
          );
        }}
      </Formik>
    </div>
  );
}
