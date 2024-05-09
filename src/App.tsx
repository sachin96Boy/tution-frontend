import Login from "./pages/login";
import Profile from "./pages/profile";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/register";
import Classes from "./components/Page/Classes";
import Revision from "./components/Page/Revision";
import Teachers from "./components/Page/Teachers";
import ShoppingCart from "./components/Page/ShoppingCart";
import RevitionLimit from "./components/Page/RevitionLimit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/classes" element={<Classes />} />
        <Route path="/revision" element={<Revision />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/shoppingCart" element={<ShoppingCart />} />
        <Route path="/revisionLimit" element={<RevitionLimit />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
