import search_icon from "../../assets/Images/search_icon.png";
import { Props } from "../../types/types.component.searchBox";
const SearchBox = (props: Props) => {
  return (
    <input
      type="text"
      className="h-[52px] max-w-[80%] mr-6 text-[14px] py-auto px-10 rounded-[5px] border-none text-prime-alt focus:outline-none bg-second-alt w-[542px] max-md:w-[200px] max-md:mr-2 shadow-sm"
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
      style={{
        backgroundImage: `url(${search_icon})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "12px center",
        backgroundSize: "20px",
      }}
    />
  );
};
export default SearchBox;
