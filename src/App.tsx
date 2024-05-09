import Login from "./Pages/Auth/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layouts/Layout";
import Register from "./Pages/Auth/register";
import OTPVerify from "./Pages/Auth/OTPVerify";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<h1>Home</h1>} />
          <Route path="about" element={<h1>About</h1>} />
          <Route path="dashboard" element={<h1>Dashboard</h1>} />
          <Route path="profile" element={<h1>Profile</h1>} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="otp-verify" element={<OTPVerify />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
