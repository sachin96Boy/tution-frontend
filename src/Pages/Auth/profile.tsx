import ProfileImg from "../assets/Images/profile.jpg.png";

import ProfileSectionForm from "../../Components/formfields/ProfileSectionForm";

export default function Profile() {
  return (
    <div className=" flex flex-col sm:flex-row items-center justify-between  min-h-screen p-4   bg-regal-gray">
      <div className="hidden sm:flex p-4 ">
        <img
          className="   object-cover rounded-xl"
          src={ProfileImg}
          alt="ALDTAN"
        />
      </div>
      <div className="flex flex-1">
        <ProfileSectionForm />
      </div>
    </div>
  );
}
