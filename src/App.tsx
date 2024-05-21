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
import UserContext from "./contexts/UserContext";
import { useState } from "react";
import TeacherLayout from "./Layouts/TeacherLayout";
import AdminLogin from "./Pages/Auth/AdminLogin";
import AdminLayout from "./Layouts/AdminLayout";
import AllTeachers from "./Pages/AdminPages/Teachers/AllTeachers/AllTeachers";
import CreateTeacher from "./Pages/AdminPages/Teachers/CreateTeacher/CreateTeacher";
import EditTeacher from "./Pages/AdminPages/Teachers/EditTeacher/EditTeacher";

function App() {
  const [user, setUser] = useState({
    first_name: "",
    last_name: "",
    id: "",
    email: "",
    phone: "",
    type: "",
  });
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Routes>
          <Route path="/student" element={<Layout />}>
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
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="otp" element={<OTPVerify />} />
          <Route path="profile-update" element={<ProfileUpdate />} />

          <Route path="/teacher" element={<TeacherLayout />}>
            <Route index element={<h1>Home</h1>} />
            <Route path="students" element={<h1>Students</h1>} />
            <Route path="student/:id" element={<h1>Student</h1>} />
            <Route path="classes" element={<h1>Classess</h1>} />
            <Route path="profile" element={<h1>Profile</h1>} />
            <Route path="contact" element={<h1>Contact</h1>} />
            <Route path="notifications" element={<h1>Notifications</h1>} />
          </Route>

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<h1>Admin Home</h1>} />
            <Route path="students" element={<h1>Students</h1>} />
            <Route path="classes" element={<h1>Classess</h1>} />
            <Route path="teachers" element={<AllTeachers />} />
            <Route path="teachers/create" element={<CreateTeacher />} />
            <Route path="teachers/edit/:id" element={<EditTeacher />} />
            <Route path="contact" element={<h1>Contact</h1>} />
          </Route>
          <Route path="/admin/login" element={<AdminLogin />} />

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
    </UserContext.Provider>
  );
}

export default App;
