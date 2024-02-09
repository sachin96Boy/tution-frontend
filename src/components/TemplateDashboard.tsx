import React from "react";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";

function TemplateDashboard({children}:{children:React.ReactNode}) {
  return (
    <>
      <Navbar />

      <div className="flex">
        <Sidebar />
        <div className="flex-1 p-2">
            {children}
        </div>
      </div>
    </>
  );
}

export default TemplateDashboard;
