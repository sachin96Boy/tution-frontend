import { BrowserRouter, Route, Routes } from "react-router-dom";
import Classes from "./components/Page/Classes";
import Revision from "./components/Page/Revision";
import Teachers from "./components/Page/Teachers";
// import Navbar from "./components/navbar/Navbar";
// import Sidebar from "./components/sidebar/Sidebar";
import ShoppingCart from "./components/Page/ShoppingCart";
// import TotalComponents from "../TotalComponent";
import RevitionLimit from "./components/Page/RevitionLimit";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/classes" element={<Classes />}></Route>
          <Route path="/revision" element={<Revision />} />
          <Route path="/teachers" element={<Teachers />}></Route>
          <Route path="/shoppingCart" element={<ShoppingCart />}></Route>
          <Route path="/revitionLimit" element={<RevitionLimit />}></Route>

          <Route path="/" element={<h2>hi</h2>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
