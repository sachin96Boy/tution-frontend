import login_image from "../../assets/Images/login_banner.png";
import LoginForm from "../../Components/Forms/LoginForm";

export default function Login() {
  return (
    <div className=" flex flex-row w-full h-screen bg-second">
      <div className=" max-md:w-full h-full min-w-[340px] w-1/2 bg-second flex flex-col justify-center items-center">
        <LoginForm />
      </div>
      <div className="max-md:hidden h-full w-1/2 flex flex-col justify-center items-center p-4 ">
        <img src={login_image} className="h-full w-full" alt="" />
      </div>
    </div>
  );
}
