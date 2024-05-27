/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { baseURL } from "../const/const";
import { Bounce, toast, ToastContainer } from "react-toastify";

const AdminSubjectCard = ({
  subject,
  link,
}: {
  subject: {
    id: string;
    subject_id: string;
    subject_name: string;
    grade: string;
    year: string;
  };
  link: string;
  enrolled?: boolean;
}) => {
  axios.defaults.withCredentials = true;
  const deleteSubject = async () => {
    try {
      const result = await axios.delete(baseURL + "/subjects/delete", {
        headers: {
          withCredentials: true,
        },
        data: { id: subject.id },
      });

      if (result.status === 200) {
        toast.success("Teacher created successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      } else {
        console.log("Error Error");
      }
    } catch (error: any) {
      toast.error(error.response.data.message, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };
  const navigate = useNavigate();
  return (
    <div>
      <ToastContainer />

      <div className="shadow-md hover:scale-105 transition-all duration-200 bg-second-alt rounded-lg flex flex-row">
        <Link to={link + subject.id}>
          <div className="w-[182px] h-[230px]  flex flex-col justify-start items-center p-2">
            <div className="w-[166px] min-h-[172px] object-cover rounded-lg bg-prime font-montserrat text-[20px] font-[700] text-second-alt flex flex-col justify-center items-center text-center px-4">
              {subject.subject_name} {subject.grade}
            </div>
            <div className="flex flex-col justify-start items-start w-full pt-2 text-prime">
              <p className=" font-montserrat text-[14px] font-[600]">
                {subject.year}
              </p>
              <p className=" font-montserrat text-[12px] font-[400]">
                {subject.subject_id}
              </p>
            </div>
          </div>
        </Link>
        <div className="flex flex-col  p-2 gap-2">
          <button
            onClick={() => navigate("/admin/subjects/attendence/" + subject.id)}
            className="w-fit px-3 h-[52px] bg-tertiary text-[15px] font-[500] text-second-alt rounded-[10px] shadow-md hover:scale-105 transition-all duration-200"
          >
            Attendence
          </button>
          <button className="w-full h-[52px] bg-prime text-[15px] font-[500] text-second-alt rounded-[10px] shadow-md hover:scale-105 transition-all duration-200">
            Edit
          </button>
          <button
            onClick={deleteSubject}
            className="w-full h-[52px] bg-tertiary-alt text-[15px] font-[500] text-second-alt rounded-[10px] shadow-md hover:scale-105 transition-all duration-200"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default AdminSubjectCard;
