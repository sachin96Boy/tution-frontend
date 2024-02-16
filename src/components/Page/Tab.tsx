import React from 'react'

function Tab() {
  return (
    <div role="tablist" className="tabs tabs-boxed">
  <a role="tab" className="tab bg-[#FFFFFF] w-[192.5px] rounded-[10px, 0px, 0px, 0px] text-[16px] text-[#3B5079] leading-4 font-bold ">Tab 1</a>
  <a role="tab" className="tab tab-active w-[192.5px] rounded-[10px, 0px, 0px, 0px] bg-[#DE5353] text-[#FFFFFF] text-[16px] leading-4 font-bold">Tab 2</a>
  <ol className="menu bg-base-200 rounded-[10px] w-[398px] h-[500px] mt-5 text-[15px] text-[#3B5079] leading-4 font-bold ">
            <span className="gap-4 rounded-[10px, 0px, 0px, 0px]  w-[390px]"></span>
            </ol>
</div>
  )
}

export default Tab