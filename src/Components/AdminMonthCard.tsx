import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

type Props = {
  month: {
    id: string;
    month_id: string;
    month_name: string;
    year: string;
  };
  link: string;
  enrolled?: boolean;
};
const AdminMonthCard = (props: Props) => {
  return (
    <div>
      <ToastContainer />

      <div className="shadow-md hover:scale-105 transition-all duration-200 bg-second-alt rounded-lg flex flex-row">
        <Link to={props.link + props.month.id}>
          <div className="w-[182px] h-fit flex flex-col justify-start items-center p-2">
            <div className="w-[166px] min-h-[172px] object-cover rounded-lg bg-prime font-montserrat text-[20px] font-[700] text-second-alt flex flex-col justify-center items-center text-center px-4">
              {props.month.month_name} {props.month.year}
            </div>
          </div>
        </Link>
        {/* <div className="flex flex-col  p-2 gap-2">
          <button
            onClick={() => {}}
            className="w-fit px-3 h-[52px] bg-prime-alt text-[15px] font-[500] text-second-alt rounded-[10px] shadow-md hover:scale-105 transition-all duration-200"
          >
            ADD LECTURE
          </button>
          <button
            onClick={() => {}}
            className="w-full h-[52px] bg-tertiary text-[15px] font-[500] text-second-alt rounded-[10px] shadow-md hover:scale-105 transition-all duration-200"
          >
            Edit
          </button>
          <button
            onClick={() => {}}
            className="w-full h-[52px] bg-tertiary-alt text-[15px] font-[500] text-second-alt rounded-[10px] shadow-md hover:scale-105 transition-all duration-200"
          >
            Delete
          </button>
        </div> */}
      </div>
    </div>
  );
};
export default AdminMonthCard;
