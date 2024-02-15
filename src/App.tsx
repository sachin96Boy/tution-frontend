import { BrowserRouter, Route, Routes } from "react-router-dom";
import Classes from "./components/Page/Classes";
import Revision from "./components/Page/Revision";
import Teachers from "./components/Page/Teachers";
import ShoppingCart from "./components/Page/ShoppingCart";
import RevitionLimit from "./components/Page/RevitionLimit";
import Profile from "./components/Page/Profile";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Classes" element={<Classes />}></Route>
          <Route path="/Revision" element={<Revision />} />
          <Route path="/Teachers" element={<Teachers />}></Route>
          <Route path="/ShoppingCart" element={<ShoppingCart />}></Route>
          <Route path="/RevitionLimit" element={<RevitionLimit />}></Route>
          <Route path="/Profile" element={<Profile />}></Route>


          {/* <Route path="/" element={<TemplateDashboard />}></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
