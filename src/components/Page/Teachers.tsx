import React from "react";
import CardComponent from "../CardComponents";

function Teachers() {
  return (
    <form>
      <p className="text-2xl text-left pl-7 pt-5 pb-5">Teachers</p>
      <div className="cart inline-flex  p-5 rounded-lg space-x-4 pt-5 bg-slate-100">
       
        <div className="grid grid-cols-5 gap-4">
         <CardComponent imageUrl={"./src/assets/bio.png"} name={"John Doe"} possiotion={"Architect & Engineer"} />
         <CardComponent imageUrl={"./src/assets/bio.png"} name={"Hello Doe"} possiotion={"Teacher6"}/>
         <CardComponent imageUrl={"./src/assets/bio.png"} name={"Hello Doe"} possiotion={"Teacher7"}/>
         <CardComponent imageUrl={"./src/assets/bio.png"} name={"Hello Doe"} possiotion={"Teacher4"}/>
         <CardComponent imageUrl={"./src/assets/bio.png"} name={"Hello Doe"} possiotion={"Teacher1"}/>
         <CardComponent imageUrl={"./src/assets/bio.png"} name={"Hello Doe"} possiotion={"Teacher2"}/>
         <CardComponent imageUrl={"./src/assets/bio.png"} name={"Hello Doe"} possiotion={"Teacher9"}/>

        </div>
        
      </div>
    </form>
  );
}

export default Teachers;
