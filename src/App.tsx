import { BrowserRouter, Route, Routes } from "react-router-dom";
import Classes from "./components/Page/Classes";
import Revision from "./components/Page/Revision";
import Teachers from "./components/Page/Teachers";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import TemplateDashboard from "./components/TemplateDashboard";
import ShoppingCart from "./components/Page/ShoppingCart";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Classes" element={<Classes />}></Route>
          <Route path="/Revision" element={<Revision />} />
          <Route path="/Teachers" element={<Teachers />}></Route>
          <Route path="/ShoppingCart" element={<ShoppingCart />}></Route>

          <Route path="/Test" element={<TemplateDashboard />}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
