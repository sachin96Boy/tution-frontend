import { Link } from "react-router-dom";

const NavItems = ({ link, icon }: { link: string; icon: string }) => {
  return (
    <li>
      <Link to={link}>
        <img
          className="w-[45px] hover:w-[50px] transition-all duration-200"
          src={icon}
          alt=""
        />
      </Link>
    </li>
  );
};
export default NavItems;
