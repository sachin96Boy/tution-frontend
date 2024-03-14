import React from "react";

interface ProfileComponentProps {
  imageUrl: string;
  name: string;
  school: string;
  sampleScl: string;
  stream: string;
  sampleStream: string;
  district: string;
  sampleDistrict: string;
}

const ProfileComponent: React.FunctionComponent<ProfileComponentProps> = ({
  imageUrl,
  name,
  school,
  sampleScl,
  stream,
  sampleStream,
  district,
  sampleDistrict,
}) => {
  return (
    <div>
      <div className="grid grid-rows-1  bg-white w-[250px] h-[719.15px] rounded-[10px] top-[147.41px] left-[157px] gap-5">
        <div className="p-8">
          <img
            src={imageUrl}
            className=" rounded-[14px] w-[165.3px]  h-[165.3px] "
            alt="Profile Picture"
          />

          <h4 className="pl-3 text-[#3B5079] text-[24px]">
            <b>{name}</b>
          </h4>
          <p className="pl-3 pt-3 text-[#7383A1] text-[15px] leading-[18.97px]">
            {school}
          </p>
          <p className="pl-3 pt-3 text-[#546B99] text-[16px] leading-[18.97px]">
            <b>{sampleScl}</b>
          </p>
          <p className="pl-3 pt-10 text-[#7383A1] text-[15px] leading-[18.97px]">
            {stream}
          </p>
          <p className="pl-3 pt-3 text-[#546B99] text-[16px] leading-[18.97px]">
            <b>{sampleStream}</b>
          </p>
          <p className="pl-3 pt-10 text-[#7383A1] text-[15px] leading-[18.97px]">
            {district}
          </p>
          <p className="pl-3 pt-3 text-[#546B99] text-[16px] leading-[18.97px]">
            <b>{sampleDistrict}</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
