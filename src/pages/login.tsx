import { Link } from "react-router-dom";
import loginImg from "../assets/Images/login.jpg.png";
import SignInForm from "../components/formfields/SignInForm";

export default function Login() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 min-h-screen w-full bg-regal-gray">
      <div className="bg-regal-gray flex flex-col justify-center px-10 py-44">
        <div className="w-full mx-auto bg-regal-white p-10 rounded-xl border-[1px]">
          <h2 className="text-3xl  font-bold text-center  ">Welcome Back</h2>
          <br />
          <h4 className="text-sm  font-medium text-center">
            By logging into ALDTAN, you agree to our <br /> Terms of use and
            Policy.
          </h4>
          <SignInForm />
          <div className="text-center">
            <span className="text-stone-400 font-medium">
              Don't have an account?{" "}
            </span>
            <span className="m-4 text-red-600 font-medium">
              <Link to="/Register">Sign up</Link>
            </span>
            <br />
            <span className=" text-red-600 font-medium">Forgot Password?</span>
          </div>
        </div>
      </div>

      <div className="hidden sm:block ">
        <img
          className="p-4 h-screen w-full flex-1 flex  object-cover rounded-[60px]"
          src={loginImg}
          alt="ALDTAN"
        />
      </div>
    </div>
  );
}
