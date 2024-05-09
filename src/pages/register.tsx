import RegiaterImg from "../assets/Images/register.jpg.png";

import SignupForm from "../components/formfields/SignupForm";

export default function Register() {
  return (
    <div className=" flex flex-col sm:flex-row items-center justify-between  min-h-screen p-4   bg-regal-gray">
      <div className="hidden sm:inline-block p-4 ">
        <img
          className="   object-cover rounded-xl"
          src={RegiaterImg}
          alt="ALDTAN"
        />
      </div>
      <SignupForm />
    </div>
  );
}
