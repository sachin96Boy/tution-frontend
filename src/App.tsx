import { BrowserRouter, Route, Routes } from "react-router-dom";
import Classes from "./components/Page/Classes";
import Revision from "./components/Page/Revision";
import Teachers from "./components/Page/Teachers";

import ShoppingCart from "./components/Page/ShoppingCart";

import RevitionLimit from "./components/Page/RevitionLimit";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/classes" element={<Classes />} />
          <Route path="/revision" element={<Revision />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/shoppingCart" element={<ShoppingCart />} />
          <Route path="/revitionLimit" element={<RevitionLimit />} />

          <Route path="/" element={<h2>hi</h2>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
