import Login from "./Pages/Auth/login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./Pages/Auth/register";
import OTPVerify from "./Pages/Auth/OTPVerify";
import Teachers from "./Pages/StudentPages/Teachers/AllTeachers/Teachers";
import Teacher from "./Pages/StudentPages/Teachers/Teacher/Teacher";
import Shopping from "./Pages/Shopping/Shopping";
import ProfileUpdate from "./Pages/Auth/ProfileUpdate";
import Profile from "./Pages/Auth/Profile";
import UserContext from "./contexts/UserContext";
import { useState } from "react";
import TeacherLayout from "./Layouts/TeacherLayout";
import AdminLogin from "./Pages/Auth/AdminLogin";
import AdminLayout from "./Layouts/AdminLayout";
import AllTeachers from "./Pages/AdminPages/Teachers/AllTeachers/AllTeachers";
import CreateTeacher from "./Pages/AdminPages/Teachers/CreateTeacher/CreateTeacher";
import EditTeacher from "./Pages/AdminPages/Teachers/EditTeacher/EditTeacher";
import AllSubjects from "./Pages/AdminPages/Subjects/AllSubjects/AllSubjects";
import CreateSubject from "./Pages/AdminPages/Subjects/CreateSubject/CreateSubject";
import Attendence from "./Pages/AdminPages/Subjects/SingleSubject/Months/SingleMonth/Lectures/SingleLecture/Attendence/Attendence";
import { User } from "./types/types.app";
import StudentLayout from "./Layouts/StudentLayout";
import EditSubject from "./Pages/AdminPages/Subjects/EditSubject/EditSubject";
import AllStudents from "./Pages/AdminPages/Students/AllStudents/AllStudents";
import CreateStudent from "./Pages/AdminPages/Students/CreateStudent/CreateStudent";
import EnrollStudent from "./Pages/AdminPages/Students/EnrollStudent/EnrollStudent";
import AllMonths from "./Pages/AdminPages/Subjects/SingleSubject/Months/AllMonths/AllMonths";
import AllLEctures from "./Pages/AdminPages/Subjects/SingleSubject/Months/SingleMonth/Lectures/AllLectures/AllLectures";
import CreateLecture from "./Pages/AdminPages/Subjects/SingleSubject/Months/SingleMonth/Lectures/CreateLecture/CreateLecture";
import UpdateLecture from "./Pages/AdminPages/Subjects/SingleSubject/Months/SingleMonth/Lectures/UpdateLecture/UpdateLecture";
import AllEnrolledSubjects from "./Pages/StudentPages/Subjects/AllEnrolledSubjects/AllEnrolledSubjects";
import EnrolledSubject from "./Pages/StudentPages/Subjects/EnrolledSubject/EnrolledSubject";

function App() {
  const [user, setUser] = useState<User>({} as User);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Routes>
          <Route path="/student" element={<StudentLayout />}>
            <Route index element={<h1>Home</h1>} />
            <Route path="teachers" element={<Teachers />} />
            <Route path="teacher/:id" element={<Teacher />} />
            <Route path="subjects" element={<AllEnrolledSubjects />} />
            <Route path="subject/:id" element={<EnrolledSubject />} />
            <Route path="profile" element={<Profile />} />
            <Route path="update-profile" element={<ProfileUpdate />} />
            <Route path="payment" element={<h1>Payment</h1>} />
            <Route path="contact" element={<h1>Contact</h1>} />
            <Route path="shopping" element={<Shopping />} />
            <Route path="notifications" element={<h1>Notifications</h1>} />
          </Route>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="otp" element={<OTPVerify />} />

          <Route path="/teacher" element={<TeacherLayout />}>
            <Route index element={<h1>Home</h1>} />
            <Route path="students" element={<h1>Students</h1>} />
            <Route path="student/:id" element={<h1>Student</h1>} />
            <Route path="classes" element={<h1>Classess</h1>} />
            <Route path="profile" element={<h1>Profile</h1>} />
            <Route path="contact" element={<h1>Contact</h1>} />
            <Route path="notifications" element={<h1>Notifications</h1>} />
          </Route>

          <Route path="/teacher/login" element={<h1>Teacher Login</h1>} />

          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<h1>Admin Home</h1>} />
            <Route path="students" element={<AllStudents />} />
            <Route path="students/create" element={<CreateStudent />} />
            <Route path="students/enroll/:id" element={<EnrollStudent />} />
            <Route path="subjects" element={<AllSubjects />} />
            <Route path="subjects/:id" element={<AllMonths />} />
            <Route
              path="subjects/:id/months/:month_id"
              element={<AllLEctures />}
            />
            <Route
              path="subjects/:id/months/:month_id/lectures/create"
              element={<CreateLecture />}
            />
            <Route
              path="months/:month_id/lectures/:lec_id/edit"
              element={<UpdateLecture />}
            />
            <Route path="subjects/create" element={<CreateSubject />} />
            <Route path="attendence/:id" element={<Attendence />} />
            <Route path="subjects/edit/:id" element={<EditSubject />} />

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
