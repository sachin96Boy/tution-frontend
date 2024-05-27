import Dropzone from "react-dropzone";

const Dzone = ({
  setData,
  fileData,
}: {
  setData: (e: File) => void;
  fileData: File | null;
}) => {
  return (
    <div className="flex flex-col justify-center items-center gap-x-4 w-fit">
      <Dropzone onDrop={(acceptedFiles) => setData(acceptedFiles[0])}>
        {({ getRootProps, getInputProps }) => (
          <section>
            <div
              {...getRootProps()}
              className="font-[500] font-montserrat text-[16px] w-[100px] h-[100px] text-prime-alt rounded-[10px] border-[1px] border-[#DCE3F0] focus:border-[#a7a7a7] focus:outline-none flex flex-col justify-center items-center"
            >
              <input {...getInputProps()} />
              {!fileData?.name ? (
                <p>+</p>
              ) : (
                <img
                  src={URL.createObjectURL(fileData)}
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
  );
};
export default Dzone;
