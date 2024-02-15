import React from "react";

interface Row {
  details: string;
  input: string;
  button: string;
}

interface ProfileTableComponentProps {
  rows: Row[];
}

const ProfileTableComponent: React.FunctionComponent<
  ProfileTableComponentProps
> = ({ rows }) => {
  return (
    <>
      <div className="">
        <div>
          <table className="table w-[924px] h-[719.15px] bg-[#FFFFFF]">
            <tbody>
              {rows.map((row, index) => (
                <tr key={index} className="text-[20px]">
                  <td className="font-bold text-[#546B99]">{row.details}</td>
                  <td className="font-bold text-[#484848]">{row.input}</td>
                  <td className="font-bold text-[#0085FF]">
                    <button>{row.button}</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ProfileTableComponent;
