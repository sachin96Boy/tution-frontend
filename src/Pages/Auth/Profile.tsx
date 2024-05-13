import { Link } from "react-router-dom";
import profile_pic from "../../assets/Images/Profile_photo.png";

const Profile = () => {
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
          <h2 className="text-[25px] font-[700] text-prime mt-4">Jhone Doe</h2>
          <div className="flex flex-col justify-start items-start w-full mt-4 gap-y-1">
            <h3 className="text-[15px] font-[500] text-prime-alt">
              School name
            </h3>
            <h3 className="text-[16px] font-[500] text-prime">
              School Name Sample
            </h3>
          </div>
          <div className="flex flex-col justify-start items-start w-full mt-4 gap-y-1">
            <h3 className="text-[15px] font-[500] text-prime-alt">
              Stream name
            </h3>
            <h3 className="text-[16px] font-[500] text-prime">
              Stream Name Sample
            </h3>
          </div>
          <div className="flex flex-col justify-start items-start w-full mt-4 gap-y-1">
            <h3 className="text-[15px] font-[500] text-prime-alt">District</h3>
            <h3 className="text-[16px] font-[500] text-prime">
              District name Sample
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
                Jhone Doe
              </div>
            </div>
            <Link
              to={"/profile/edit"}
              className="text-tertiary font-montserrat font-[500]"
            >
              Edit
            </Link>
          </div>
          <div className="flex flex-row max-md:flex-col max-md:h-fit justify-between items-center border-tertiary border-b-2 h-[48px] p-4">
            <div className="flex flex-row max-md:flex-col gap-y-1">
              <div className="w-[250px] text-prime-alt font-montserrat text-[20px] font-[600]">
                Last Name
              </div>
              <div className="text-prime font-montserrat text-[20px] font-[600]">
                Chamalka
              </div>
            </div>
            <Link
              to={"/profile/edit"}
              className="text-tertiary font-montserrat font-[500]"
            >
              Edit
            </Link>
          </div>
          <div className="flex flex-row max-md:flex-col max-md:h-fit justify-between items-center border-tertiary border-b-2 h-[48px] p-4">
            <div className="flex flex-row max-md:flex-col gap-y-1">
              <div className="w-[250px] text-prime-alt font-montserrat text-[20px] font-[600]">
                School
              </div>
              <div className="text-prime font-montserrat text-[20px] font-[600]">
                School name
              </div>
            </div>
            <Link
              to={"/profile/edit"}
              className="text-tertiary font-montserrat font-[500]"
            >
              Edit
            </Link>
          </div>
          <div className="flex flex-row max-md:flex-col max-md:h-fit justify-between items-center border-tertiary border-b-2 h-[48px] p-4">
            <div className="flex flex-row max-md:flex-col gap-y-1">
              <div className="w-[250px] text-prime-alt font-montserrat text-[20px] font-[600]">
                Subject Stream
              </div>
              <div className="text-prime font-montserrat text-[20px] font-[600]">
                Subject Stream
              </div>
            </div>
            <Link
              to={"/profile/edit"}
              className="text-tertiary font-montserrat font-[500]"
            >
              Edit
            </Link>
          </div>
          <div className="flex flex-row max-md:flex-col max-md:h-fit justify-between items-center border-tertiary border-b-2 h-[48px] p-4">
            <div className="flex flex-row max-md:flex-col gap-y-1">
              <div className="w-[250px] text-prime-alt font-montserrat text-[20px] font-[600]">
                Exam Year
              </div>
              <div className="text-prime font-montserrat text-[20px] font-[600]">
                2021
              </div>
            </div>
            <Link
              to={"/profile/edit"}
              className="text-tertiary font-montserrat font-[500]"
            >
              Edit
            </Link>
          </div>
          <div className="flex flex-row max-md:flex-col max-md:h-fit justify-between items-center border-tertiary border-b-2 h-[48px] p-4">
            <div className="flex flex-row max-md:flex-col gap-y-1">
              <div className="w-[250px] text-prime-alt font-montserrat text-[20px] font-[600]">
                District
              </div>
              <div className="text-prime font-montserrat text-[20px] font-[600]">
                District name Gose here
              </div>
            </div>
            <Link
              to={"/profile/edit"}
              className="text-tertiary font-montserrat font-[500]"
            >
              Edit
            </Link>
          </div>
          <div className="flex flex-row max-md:flex-col max-md:h-fit justify-between items-center border-tertiary border-b-2 h-[48px] p-4">
            <div className="flex flex-row max-md:flex-col gap-y-1">
              <div className="w-[250px] text-prime-alt font-montserrat text-[20px] font-[600]">
                Address
              </div>
              <div className="text-prime font-montserrat text-[20px] font-[600]">
                Address Goes Here
              </div>
            </div>
            <Link
              to={"/profile/edit"}
              className="text-tertiary font-montserrat font-[500]"
            >
              Edit
            </Link>
          </div>
          <div className="flex flex-row max-md:flex-col max-md:h-fit justify-between items-center border-tertiary border-b-2 h-[48px] p-4">
            <div className="flex flex-row max-md:flex-col gap-y-1">
              <div className="w-[250px] text-prime-alt font-montserrat text-[20px] font-[600]">
                NFC Code
              </div>
              <div className="text-prime font-montserrat text-[20px] font-[600]">
                NFC code here
              </div>
            </div>
            <Link
              to={"/profile/edit"}
              className="text-tertiary font-montserrat font-[500]"
            >
              Edit
            </Link>
          </div>
          <div className="flex flex-row max-md:flex-col max-md:h-fit justify-between items-center border-tertiary border-b-2 h-[48px] p-4">
            <div className="flex flex-row max-md:flex-col gap-y-1">
              <div className="w-[250px] text-prime-alt font-montserrat text-[20px] font-[600]">
                NIC
              </div>
              <div className="text-prime font-montserrat text-[20px] font-[600]">
                NIC Number here
              </div>
            </div>
            <Link
              to={"/profile/edit"}
              className="text-tertiary font-montserrat font-[500]"
            >
              Edit
            </Link>
          </div>
          <div className="flex flex-row max-md:flex-col max-md:h-fit justify-between items-center border-tertiary border-b-2 h-[48px] p-4">
            <div className="flex flex-row max-md:flex-col gap-y-1">
              <div className="w-[250px] text-prime-alt font-montserrat text-[20px] font-[600]">
                Mobile Number
              </div>
              <div className="text-prime font-montserrat text-[20px] font-[600]">
                Mobile Number here
              </div>
            </div>
            <Link
              to={"/profile/edit"}
              className="text-tertiary font-montserrat font-[500]"
            >
              Edit
            </Link>
          </div>
          <div className="flex flex-row max-md:flex-col max-md:h-fit justify-between items-center h-[48px] p-4 ">
            <div className="flex flex-row max-md:flex-col gap-y-1">
              <div className="w-[250px] text-prime-alt font-montserrat text-[20px] font-[600]">
                Parent's Mobile
              </div>
              <div className="text-prime font-montserrat text-[20px] font-[600]">
                Parent's Mobile number here
              </div>
            </div>
            <Link
              to={"/profile/edit"}
              className="text-tertiary font-montserrat font-[500]"
            >
              Edit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
