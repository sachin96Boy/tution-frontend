import React from 'react'

function Tab() {
  return (
    <>
   <div className="rounded border w-1/2 mx-auto mt-4">

  <ul id="tabs" className="inline-flex pt-2 px-1 w-full border-b">
    <li className="bg-white px-4 text-gray-800 font-semibold py-2 rounded-t border-t border-r border-l -mb-px"><a id="default-tab" href="#first">Tab 1</a></li>
    <li className="px-4 text-gray-800 font-semibold py-2 rounded-t"><a href="#second">Tab 2</a></li>
    <li className="px-4 text-gray-800 font-semibold py-2 rounded-t"><a href="#third">Tab 3</a></li>
    <li className="px-4 text-gray-800 font-semibold py-2 rounded-t"><a href="#fourth">Tab 4</a></li>
  </ul>

  {/* <!-- Tab Contents --> */}
  <div id="tab-contents">
    <div id="first" className="p-4">
      First tab
    </div>
    <div id="second" className="hidden p-4">
      Second tab
    </div>
    <div id="third" className="hidden p-4">
      Third tab
    </div>
    <div id="fourth" className="hidden p-4">
      Fourth tab
    </div>
  </div>
</div>
</>
    
  )
}

export default Tab