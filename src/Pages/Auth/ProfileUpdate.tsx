import { useState } from "react";
import register_image from "../../assets/Images/login_banner.png";

import Dropzone from "react-dropzone";
import TextInput from "../../Components/Elements/TextInput";

const ProfileUpdate = () => {
  const file: File = new File([], "");
  const [school, setSchool] = useState("");
  const [subject, setSubject] = useState("");
  const [year, setYear] = useState("");
  const [district, setDistrict] = useState("");
  const [address, setAddress] = useState("");
  const [nfc, setNfc] = useState("");
  const [nic, setNic] = useState("");
  const [parentMobile, setParentMobile] = useState("");
  const [profilePic, setProfilePic] = useState(file);
  const [nicBack, setNicBack] = useState(file);
  const [nicFront, setNicFront] = useState(file);
  const [selfie, setSelfie] = useState(file);

  return (
    <div className=" flex flex-row w-full min-h-screen bg-second">
      <div className="max-md:hidden min-h-full w-1/3 p-4 pr-0">
        <img
          style={{
            backgroundImage: `url(${register_image})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="h-full w-full rounded-[10px]"
          alt=""
        />
      </div>
      <div className=" max-md:w-full min-h-full min-w-[340px] w-full bg-second flex flex-col justify-center items-center p-4">
        <form
          action=""
          className="p-20 min-w-[340px] w-full min-h-full bg-second-alt rounded-[10px] flex flex-col justify-start pt-12 items-left gap-y-4"
        >
          <h1 className=" font-[700] font-montserrat text-[30px] text-prime text-left">
            Profile Update
          </h1>

          <div className="flex flex-row justify-start items-start gap-x-8 gap-y-4 w-full flex-wrap mt-2">
            <TextInput
              label="School"
              name="school"
              value={school}
              classNameD="min-w-[360px] max-md:min-w-[100%]"
              classNameI="min-w-[360px] max-md:min-w-[100%]"
              onChange={(e) => {
                e.preventDefault();
                setSchool(e.target.value);
              }}
            />
            <TextInput
              label="Subject Stream"
              name="subject"
              value={subject}
              classNameD="min-w-[360px] max-md:min-w-[100%]"
              classNameI="min-w-[360px] max-md:min-w-[100%]"
              onChange={(e) => {
                e.preventDefault();
                setSubject(e.target.value);
              }}
            />
            <TextInput
              label="Exam Year"
              name="year"
              value={year}
              classNameD="min-w-[360px] max-md:min-w-[100%]"
              classNameI="min-w-[360px] max-md:min-w-[100%]"
              onChange={(e) => {
                e.preventDefault();
                setYear(e.target.value);
              }}
            />
            <TextInput
              label="District"
              name="district"
              value={district}
              classNameD="min-w-[360px] max-md:min-w-[100%]"
              classNameI="min-w-[360px] max-md:min-w-[100%]"
              onChange={(e) => {
                e.preventDefault();
                setDistrict(e.target.value);
              }}
            />
            <TextInput
              label="Address"
              name="address"
              value={address}
              classNameD="min-w-[360px] max-md:min-w-[100%]"
              classNameI="min-w-[360px] max-md:min-w-[100%]"
              onChange={(e) => {
                e.preventDefault();
                setAddress(e.target.value);
              }}
            />
            <TextInput
              label="NFC Code"
              name="nfc"
              value={nfc}
              classNameD="min-w-[360px] max-md:min-w-[100%]"
              classNameI="min-w-[360px] max-md:min-w-[100%]"
              onChange={(e) => {
                e.preventDefault();
                setNfc(e.target.value);
              }}
            />
            <TextInput
              label="NIC"
              name="nic"
              value={nic}
              classNameD="min-w-[360px] max-md:min-w-[100%]"
              classNameI="min-w-[360px] max-md:min-w-[100%]"
              onChange={(e) => {
                e.preventDefault();
                setNic(e.target.value);
              }}
            />
            <TextInput
              label="Parent's Mobile"
              name="parent_mobile"
              value={parentMobile}
              classNameD="min-w-[360px] max-md:min-w-[100%]"
              classNameI="min-w-[360px] max-md:min-w-[100%]"
              onChange={(e) => {
                e.preventDefault();
                setParentMobile(e.target.value);
              }}
            />

            <p className="font-[500] font-montserrat text-[13px] text-tertiary-alt w-[45%] max-md:w-[95%] text-left">
              {}
            </p>
          </div>
          <div>
            <p className="font-[500] font-montserrat text-[15px] text-prime-alt w-fit text-center ">
              Upload images
            </p>
            <div className="flex flex-row justify-start items-start gap-x-8 gap-y-4 w-full flex-wrap mt-2">
              <div className="flex flex-col justify-center items-center gap-x-4 w-fit">
                <Dropzone
                  onDrop={(acceptedFiles) => {
                    setProfilePic(acceptedFiles[0]), console.log(profilePic);
                  }}
                >
                  {({ getRootProps, getInputProps }) => (
                    <section>
                      <div
                        {...getRootProps()}
                        className="font-[500] font-montserrat text-[16px] w-[100px] h-[100px] text-prime-alt rounded-[10px] border-[1px] border-[#DCE3F0] focus:border-[#a7a7a7] focus:outline-none flex flex-col justify-center items-center"
                      >
                        <input {...getInputProps()} />
                        {!profilePic?.name ? (
                          <p>+</p>
                        ) : (
                          <img
                            src={URL.createObjectURL(profilePic)}
                            alt=""
                            className="w-[100%] h-[100%] object-cover rounded-[10px]"
                          />
                        )}
                      </div>
                    </section>
                  )}
                </Dropzone>
                <p className="font-[500] font-montserrat text-[15px] text-prime-alt w-fit text-center ">
                  Profile Pic
                </p>
              </div>

              <div className="flex flex-col justify-center items-center gap-x-4 w-fit">
                <Dropzone
                  onDrop={(acceptedFiles) => {
                    setNicBack(acceptedFiles[0]);
                  }}
                >
                  {({ getRootProps, getInputProps }) => (
                    <section>
                      <div
                        {...getRootProps()}
                        className="font-[500] font-montserrat text-[16px] w-[100px] h-[100px] text-prime-alt rounded-[10px] border-[1px] border-[#DCE3F0] focus:border-[#a7a7a7] focus:outline-none flex flex-col justify-center items-center"
                      >
                        <input {...getInputProps()} />
                        {!nicBack?.name ? (
                          <p>+</p>
                        ) : (
                          <img
                            src={URL.createObjectURL(nicBack)}
                            alt=""
                            className="w-[100%] h-[100%] object-cover rounded-[10px]"
                          />
                        )}
                      </div>
                    </section>
                  )}
                </Dropzone>
                <p className="font-[500] font-montserrat text-[15px] text-prime-alt w-fit text-center ">
                  NIC Back
                </p>
              </div>

              <div className="flex flex-col justify-center items-center gap-x-4 w-fit">
                <Dropzone
                  onDrop={(acceptedFiles) => {
                    setNicFront(acceptedFiles[0]);
                  }}
                >
                  {({ getRootProps, getInputProps }) => (
                    <section>
                      <div
                        {...getRootProps()}
                        className="font-[500] font-montserrat text-[16px] w-[100px] h-[100px] text-prime-alt rounded-[10px] border-[1px] border-[#DCE3F0] focus:border-[#a7a7a7] focus:outline-none flex flex-col justify-center items-center"
                      >
                        <input {...getInputProps()} />
                        {!nicFront?.name ? (
                          <p>+</p>
                        ) : (
                          <img
                            src={URL.createObjectURL(nicFront)}
                            alt=""
                            className="w-[100%] h-[100%] object-cover rounded-[10px]"
                          />
                        )}
                      </div>
                    </section>
                  )}
                </Dropzone>
                <p className="font-[500] font-montserrat text-[15px] text-prime-alt w-fit text-center ">
                  NIC Front
                </p>
              </div>

              <div className="flex flex-col justify-center items-center gap-x-4 w-fit">
                <Dropzone
                  onDrop={(acceptedFiles) => {
                    setSelfie(acceptedFiles[0]);
                  }}
                >
                  {({ getRootProps, getInputProps }) => (
                    <section>
                      <div
                        {...getRootProps()}
                        className="font-[500] font-montserrat text-[16px] w-[100px] h-[100px] text-prime-alt rounded-[10px] border-[1px] border-[#DCE3F0] focus:border-[#a7a7a7] focus:outline-none flex flex-col justify-center items-center"
                      >
                        <input {...getInputProps()} />
                        {!selfie?.name ? (
                          <p>+</p>
                        ) : (
                          <img
                            src={URL.createObjectURL(selfie)}
                            alt=""
                            className="w-[100%] h-[100%] object-cover rounded-[10px]"
                          />
                        )}
                      </div>
                    </section>
                  )}
                </Dropzone>
                <p className="font-[500] font-montserrat text-[15px] text-prime-alt w-fit text-center ">
                  Selfie with NIC
                </p>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className=" mt-4 rounded-[5px] bg-tertiary-alt text-second-alt font-montserrat text-[12px] max-w-[100%] font-[700] w-[396px] h-[50px]"
          >
            UPDATE
          </button>
        </form>
      </div>
    </div>
  );
};
export default ProfileUpdate;
