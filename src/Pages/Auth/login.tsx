import { Link } from "react-router-dom";
import login_image from "../../assets/Images/login_banner.png";
import TextInput from "../../Components/Elements/TextInput";
import { useState } from "react";
export default function Login() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className=" flex flex-row w-full h-screen bg-[#f2f6ff]">
      <div className=" max-md:w-full h-full min-w-[340px] w-1/2 bg-[#f2f6ff] flex flex-col justify-center items-center">
        <form
          action=""
          className=" max-w-[80%] p-6 min-w-[340px] w-[486px] min-h-[576px] bg-[#FFFFFF] rounded-[10px] flex flex-col justify-start pt-12 items-center gap-y-4"
        >
          <h1 className=" font-[700] font-montserrat text-[30px] text-[#3B5079] text-center">
            Welcome Back
          </h1>
          <p className="font-[600] font-montserrat text-[15px] text-[#647BA9] max-w-[100%] w-[330px] text-center">
            By logging into aPlus Academy, you agree to our Terms of use and
            Privacy Policy.
          </p>
          <TextInput
            label="Phone Number"
            name="phone_number"
            value={phone}
            onChange={(e) => {
              e.preventDefault();
              setPhone(e.target.value);
            }}
          />

          <TextInput
            label="Password"
            name="password"
            value={password}
            type="password"
            onChange={(e) => {
              e.preventDefault();
              setPassword(e.target.value);
            }}
          />
          <button
            type="submit"
            className=" mt-4 rounded-[5px] bg-[#DE5353] text-white font-montserrat text-[12px] max-w-[100%] font-[700] w-[396px] h-[50px]"
          >
            LOGIN
          </button>
          <div className="flex flex-col justify-start items-center">
            <p className="font-[500] font-montserrat text-[13px] text-[#647BA9]">
              Don't have Account?{" "}
              <Link
                to="/register"
                className="font-[700] font-montserrat text-[13px] text-[#DE5353]"
              >
                Sign up
              </Link>
            </p>
            <Link
              to="/forget-password"
              className="font-[700] font-montserrat text-[13px] text-[#DE5353]"
            >
              Forget Password?
            </Link>
          </div>
        </form>
      </div>
      <div className="max-md:hidden h-full w-1/2 flex flex-col justify-center items-center p-4 ">
        <img src={login_image} className="h-full w-full" alt="" />
      </div>
    </div>
  );
}
