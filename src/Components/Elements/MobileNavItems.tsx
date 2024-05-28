import { Link } from "react-router-dom";

type Props = {
  link: string;
  icon: string;
  onClick: () => void;
  name: string;
};
const MobileNavItems = (props: Props) => {
  return (
    <li onClick={props.onClick} className="w-full">
      <Link to={props.link}>
        <div className="flex flex-row w-full hover:scale-105 transition-all duration-200 items-center p-2 h-fit bg-second-alt rounded-[5px]">
          <img className="w-[45px]" src={props.icon} alt="" />
          <p className="text-prime text-[18px] ml-4 font-[600]">{props.name}</p>
        </div>
      </Link>
    </li>
  );
};
export default MobileNavItems;
