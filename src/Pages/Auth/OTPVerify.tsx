import OTPInput, { ResendOTP } from "otp-input-react";
import login_banner from "../../assets/Images/login_banner.png";
import otp_clipArt from "../../assets/Images/OTP_clipArt.png";
import { useState } from "react";
const OTPVerify = () => {
  const [OTP, setOTP] = useState("");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [phone, setPhone] = useState("071-1234567");
  return (
    <div className=" flex flex-row w-full h-screen bg-[#f2f6ff]">
      <div className=" max-md:w-full h-full min-w-[340px] w-1/2 bg-[#f2f6ff] flex flex-col justify-center items-center">
        <form
          action=""
          className=" max-w-[80%] p-6 min-w-[340px] w-[486px] min-h-[576px] bg-[#FFFFFF] rounded-[10px] flex flex-col justify-start pt-12 items-center gap-y-4"
        >
          <img src={otp_clipArt} alt="" />
          <h1 className=" font-[700] font-montserrat text-[30px] text-[#3B5079] text-center">
            OTP Verification
          </h1>
          <p className="font-[500] font-montserrat text-[15px] text-[#647BA9] max-w-[100%] w-[330px] text-center">
            Enter the OTP sent to <span className="font-[700]">{phone}</span>
          </p>
          <OTPInput
            value={OTP}
            onChange={setOTP}
            autoFocus
            OTPLength={4}
            otpType="number"
            disabled={false}
            inputClassName="text-[32px]  min-w-[65px] min-h-[65px]  bg-[#f2f6ff] rounded-[5px] border-[1px] border-[#DCE3F0] focus:border-[#a7a7a7] focus:outline-none "
            secure
          />
          <p className="font-[500] font-montserrat text-[15px] text-[#647BA9] max-w-[100%] w-[330px] text-center">
            Didn't Recieve OTP ?
            <ResendOTP
              className="font-[700] font-montserrat text-[13px] text-[#DE5353]"
              onResendClick={() => console.log("Resend clicked")}
            />
          </p>

          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              if (OTP.length == 4) {
                console.log(OTP);
              }
            }}
            className=" mt-4 rounded-[5px] bg-[#DE5353] text-white font-montserrat text-[12px] max-w-[100%] font-[700] w-[396px] h-[50px]"
          >
            VERIFY & PROCEED
          </button>
        </form>
      </div>
      <div className="max-md:hidden h-full w-1/2 flex flex-col justify-center items-center p-4 ">
        <img src={login_banner} className="h-full w-full" alt="" />
      </div>
    </div>
  );
};
export default OTPVerify;
