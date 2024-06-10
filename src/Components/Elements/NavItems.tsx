import { Link } from "react-router-dom";
import { Props } from "../../types/types.component.navItems";

const NavItems = (props: Props) => {
  return (
    <li>
      <Link to={props.link}>
        <img
          className="w-[45px] hover:w-[50px] transition-all duration-200"
          src={props.icon}
          alt=""
          onClick={props.onClick}
        />
      </Link>
    </li>
  );
};
export default NavItems;
