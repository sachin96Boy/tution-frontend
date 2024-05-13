import Login from "./Pages/Auth/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layouts/Layout";
import Register from "./Pages/Auth/register";
import OTPVerify from "./Pages/Auth/OTPVerify";
import Teachers from "./Pages/Teachers/Teachers";
import Teacher from "./Pages/Teacher/Teacher";
import Course from "./Pages/Course/Course";
import Shopping from "./Pages/Shopping/Shopping";
import ProfileUpdate from "./Pages/Auth/ProfileUpdate";
import MyClasses from "./Pages/MyClasses/MyClasses";
import MyClass from "./Pages/MyClass/MyClass";
import MyLesson from "./Pages/MyLesson/MyLesson";
import Profile from "./Pages/Auth/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<h1>Home</h1>} />
          <Route path="teachers" element={<Teachers />} />
          <Route path="teacher/:id" element={<Teacher />} />
          <Route path="course/:id" element={<Course />} />
          <Route path="classes" element={<MyClasses />} />
          <Route path="mycourse/:id" element={<MyClass />} />
          <Route path="mylessons/:id" element={<MyLesson />} />
          <Route path="profile" element={<Profile />} />
          <Route path="payment" element={<h1>Payment</h1>} />
          <Route path="contact" element={<h1>Contact</h1>} />
          <Route path="shopping" element={<Shopping />} />
          <Route path="notifications" element={<h1>Notifications</h1>} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="otp-verify" element={<OTPVerify />} />
        <Route path="profile-update" element={<ProfileUpdate />} />
        <Route
          path="*"
          element={
            <h1 className="text-3xl w-screen h-screen flex justify-center items-center">
              404 Page Not Found
            </h1>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
