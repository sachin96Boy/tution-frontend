import { Link } from "react-router-dom";

const NavItems = ({
  link,
  icon,
  onClick,
}: {
  link: string;
  icon: string;
  onClick?: () => void;
}) => {
  return (
    <li>
      <Link to={link}>
        <img
          className="w-[45px] hover:w-[50px] transition-all duration-200"
          src={icon}
          alt=""
          onClick={onClick}
        />
      </Link>
    </li>
  );
};
export default NavItems;
