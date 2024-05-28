/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import profile_pic from "../../assets/Images/Profile_photo.png";
import { Link, useNavigate } from "react-router-dom";
import QRCode from "react-qr-code";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import axiosInstance from "../../utils/axiosInstance";
import { User } from "../../types/types.app";

const Profile = () => {
  const [user, setUser] = useState<User>({} as User);
  const navigate = useNavigate();
  const downloadQRCode = () => {
    const input: HTMLElement =
      document.getElementById("qrcode") || document.createElement("div");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      pdf.addImage(imgData, "PNG", 0, 0, 256, 256);
      pdf.save("downloaded-file.pdf");
    });
  };
  const logout = async () => {
    const result = await axiosInstance.get("/api/v1/auth/logout");
    if (result.status === 200) {
      setUser(result.data);
      navigate("/login");
    }
  };
  const deleteProfile = async () => {
    try {
      const result = await axiosInstance.delete("/api/v1/auth/user");
      if (result.status === 200) {
        logout();
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const result = await axiosInstance.get("/api/v1/auth/user");
      if (result.status === 200) {
        setUser(result.data);
      }
    };
    fetchData();
  }, []);
  return (
    <div className=" font-montserrat flex flex-col items-start h-full w-full">
      <h1 className="text-[30px] font-[700] text-prime">My Profile</h1>
      <div className="flex flex-row justify-start gap-4 items-center h-full w-full mt-12 pr-4 max-md:flex-col">
        <div className="min-w-[250px] h-[719px] max-md:h-fit max-md:w-full pb-8 bg-second-alt rounded-[10px] flex flex-col justify-start shadow-md items-center pt-8 px-6">
          <img
            src={profile_pic}
            alt=""
            className="rounded-[10px] w-[165px] h-[165px]"
          />
          <h2 className="text-[25px] font-[700] text-prime mt-4">
            {user.first_name}
          </h2>
          <div className="flex flex-col justify-start items-start w-full mt-4 gap-y-1">
            <h3 className="text-[15px] font-[500] text-prime-alt">
              School name
            </h3>
            <h3 className="text-[16px] font-[500] text-prime">
              {user.school || "Please Update"}
            </h3>
          </div>
          <div className="flex flex-col justify-start items-start w-full mt-4 gap-y-1">
            <h3 className="text-[15px] font-[500] text-prime-alt">
              Stream name
            </h3>
            <h3 className="text-[16px] font-[500] text-prime">
              {user.subject_stream || "Please Update"}
            </h3>
          </div>
          <div className="flex flex-col justify-start items-start w-full mt-4 gap-y-1">
            <h3 className="text-[15px] font-[500] text-prime-alt">District</h3>
            <h3 className="text-[16px] font-[500] text-prime">
              {user.district || "Please Update"}
            </h3>
          </div>
        </div>
        <div className="flex flex-col max-md:flex-col max-md:h-fit w-full gap-y-4 h-[719px] bg-second-alt rounded-[10px] shadow-md p-4">
          <div className="flex flex-row max-md:flex-col max-md:h-fit justify-between items-center border-tertiary border-b-2 h-[48px] p-4">
            <div className="flex flex-row max-md:flex-col gap-y-1">
              <div className="w-[250px] text-prime-alt font-montserrat text-[20px] font-[600]">
                First Name
              </div>
              <div className="text-prime font-montserrat text-[20px] font-[600]">
                {user.first_name}
              </div>
            </div>
          </div>
          <div className="flex flex-row max-md:flex-col max-md:h-fit justify-between items-center border-tertiary border-b-2 h-[48px] p-4">
            <div className="flex flex-row max-md:flex-col gap-y-1">
              <div className="w-[250px] text-prime-alt font-montserrat text-[20px] font-[600]">
                Last Name
              </div>
              <div className="text-prime font-montserrat text-[20px] font-[600]">
                {user.last_name}
              </div>
            </div>
          </div>
          <div className="flex flex-row max-md:flex-col max-md:h-fit justify-between items-center border-tertiary border-b-2 h-[48px] p-4">
            <div className="flex flex-row max-md:flex-col gap-y-1">
              <div className="w-[250px] text-prime-alt font-montserrat text-[20px] font-[600]">
                Email
              </div>
              <div className="text-prime font-montserrat text-[20px] font-[600]">
                {user.email}
              </div>
            </div>
          </div>
          <div className="flex flex-row max-md:flex-col max-md:h-fit justify-between items-center border-tertiary border-b-2 h-[48px] p-4">
            <div className="flex flex-row max-md:flex-col gap-y-1">
              <div className="w-[250px] text-prime-alt font-montserrat text-[20px] font-[600]">
                Phone
              </div>
              <div className="text-prime font-montserrat text-[20px] font-[600]">
                {user.phone}
              </div>
            </div>
          </div>
          <div className="flex flex-row max-md:flex-col max-md:h-fit justify-between items-center border-tertiary border-b-2 h-[48px] p-4">
            <div className="flex flex-row max-md:flex-col gap-y-1">
              <div className="w-[250px] text-prime-alt font-montserrat text-[20px] font-[600]">
                Exam Year
              </div>
              <div className="text-prime font-montserrat text-[20px] font-[600]">
                {user.exam_year}
              </div>
            </div>
          </div>
          <div className="flex flex-row max-md:flex-col max-md:h-fit justify-between items-center border-tertiary border-b-2 h-[48px] p-4">
            <div className="flex flex-row max-md:flex-col gap-y-1">
              <div className="w-[250px] text-prime-alt font-montserrat text-[20px] font-[600]">
                Address
              </div>
              <div className="text-prime font-montserrat text-[20px] font-[600]">
                {user.address}
              </div>
            </div>
          </div>
          <div className="flex flex-row max-md:flex-col max-md:h-fit justify-between items-center border-tertiary border-b-2 h-[48px] p-4">
            <div className="flex flex-row max-md:flex-col gap-y-1">
              <div className="w-[250px] text-prime-alt font-montserrat text-[20px] font-[600]">
                NIC
              </div>
              <div className="text-prime font-montserrat text-[20px] font-[600]">
                {user.nic}
              </div>
            </div>
          </div>
          <div className="flex flex-row max-md:flex-col max-md:h-fit justify-between items-center border-tertiary border-b-2 h-[48px] p-4">
            <div className="flex flex-row max-md:flex-col gap-y-1">
              <div className="w-[250px] text-prime-alt font-montserrat text-[20px] font-[600]">
                Parent's Mobile
              </div>
              <div className="text-prime font-montserrat text-[20px] font-[600]">
                {user.parent_mobile}
              </div>
            </div>
          </div>
          <div className="flex flex-row max-md:flex-col h-fit justify-between items-center border-tertiary border-b-2  p-4">
            <div className="flex flex-row justify-between max-md:flex-col gap-y-1 w-full">
              <div className="flex flex-row max-md:flex-col gap-y-1">
                <div className="w-[250px] text-prime-alt font-montserrat text-[20px] font-[600]">
                  QR Code
                </div>
                <div
                  id="qrcode"
                  style={{
                    height: "auto",
                    margin: "0 auto",
                    maxWidth: 64,
                    width: "100%",
                  }}
                >
                  <QRCode
                    size={256}
                    style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                    value={user.id || ""}
                    viewBox={`0 0 256 256`}
                  />
                </div>
              </div>
              <button
                className="flex flex-row justify-center items-center mt-4 rounded-[5px] bg-tertiary text-second-alt font-montserrat text-[12px] max-w-[100%] font-[700] w-[148px] h-[50px]"
                onClick={() => downloadQRCode()}
              >
                Download QRCode
              </button>
            </div>
          </div>
          <div className="flex flex-row max-md:flex-col max-md:h-fit justify-end gap-4 items-center  h-[48px] p-4 ">
            <Link
              to={"/student/update-profile"}
              className="flex flex-row justify-center items-center mt-4 rounded-[5px] bg-tertiary text-second-alt font-montserrat text-[12px] max-w-[100%] font-[700] w-[148px] h-[50px]"
            >
              Update Profile
            </Link>
            <button
              className=" mt-4 rounded-[5px] bg-tertiary-alt text-second-alt font-montserrat text-[12px] max-w-[100%] font-[700] w-[148px] h-[50px]"
              onClick={() => {
                confirm("Are You Sure?") && deleteProfile();
              }}
            >
              Delete Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
