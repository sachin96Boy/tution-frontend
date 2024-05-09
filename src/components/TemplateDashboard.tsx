import React from "react";
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";

function TemplateDashboard({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen overflow-hidden">
      <Navbar />
      <div></div>
      <div className="flex flex-1 h-screen ">
        <Sidebar />
        <div className="flex-1 p-2">{children}</div>
      </div>
    </div>
  );
}

export default TemplateDashboard;
