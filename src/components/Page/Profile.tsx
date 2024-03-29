import React from "react";
import TemplateDashboard from "../TemplateDashboard";
import ProfileComponent from "../ProfileComponents";
import ProfileTableComponent from "../ProfileTableComponents";

function Profile() {
  const rows = [
    { details: "First Name", input: "Pathum", button: "Edit" },
    { details: "Last Name", input: "Tzoo", button: "Edit" },
    { details: "School", input: "Tzoo", button: "Edit" },
    { details: "Subject Stream", input: "Tzoo", button: "Edit" },
    { details: "Exam Year", input: "Tzoo", button: "Edit" },
    { details: "District", input: "Tzoo", button: "Edit" },
    { details: "Address", input: "Tzoo", button: "Edit" },
    { details: "NIC Code", input: "Tzoo", button: "Edit" },
    { details: "NIC", input: "Tzoo", button: "Edit" },
    { details: "Mobile", input: "Tzoo", button: "Edit" },
    { details: "Parent Mobile", input: "Tzoo", button: "Edit" },
    // Add more rows as needed
  ];

  return (
    <TemplateDashboard>
      <p className="text-[#3B5079] font-bold text-3xl sm:text-4xl lg:text-5xl">
        My Profile
      </p>
      <div className="p-5 bg-slate-100">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2">
          <ProfileComponent
            imageUrl="./src/assets/bio.png"
            name={"Pathum Tzoo"}
            school={"School Name"}
            sampleScl={"Sample School"}
            stream={"Stream"}
            sampleStream={"Maths"}
            district={"District Name"}
            sampleDistrict={"Galle"}
          />
          <ProfileTableComponent rows={rows} />
        </div>
      </div>
    </TemplateDashboard>
  );
}

export default Profile;
