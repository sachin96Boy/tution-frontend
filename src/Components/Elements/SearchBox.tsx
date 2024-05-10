import search_icon from "../../assets/Images/search_icon.png";
const SearchBox = ({
  value,
  onChange,
  placeholder = "Search",
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}) => {
  return (
    <input
      type="text"
      className="h-[52px] max-w-[80%] mr-6 text-[14px] py-auto px-10 rounded-[5px] border-none text-[#999999] focus:outline-none bg-[#FDFDFD] w-[542px] max-md:w-[200px] max-md:mr-2"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
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
