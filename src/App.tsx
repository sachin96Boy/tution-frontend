import Login from "./Pages/Auth/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layouts/Layout";
import Register from "./Pages/Auth/register";
import OTPVerify from "./Pages/Auth/OTPVerify";
import Teachers from "./Pages/Teachers/Teachers";
import Teacher from "./Pages/Teacher/Teacher";
import Course from "./Pages/Course/Course";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<h1>Home</h1>} />
          <Route path="teachers" element={<Teachers />} />
          <Route path="teacher/:id" element={<Teacher />} />
          <Route path="course/:id" element={<Course />} />
          <Route path="classes" element={<h1>Classes</h1>} />
          <Route path="profile" element={<h1>Profile</h1>} />
          <Route path="payment" element={<h1>Payment</h1>} />
          <Route path="contact" element={<h1>Contact</h1>} />
          <Route path="shopping" element={<h1>Shopping</h1>} />
          <Route path="notifications" element={<h1>Notifications</h1>} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="otp-verify" element={<OTPVerify />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
