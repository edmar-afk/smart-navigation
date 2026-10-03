import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Dashboard from "./routes/Dashboard";
import EnrollmentProcess from "./components/sideBarContent/registrar/EnrollmentProcess";
import ShiftingPrograms from "./components/sideBarContent/registrar/ShiftingPrograms";
import ReleasingTOR from "./components/sideBarContent/registrar/ReleasingTOR";
import AddingDroppingChangingSubject from "./components/sideBarContent/registrar/AddingDroppingChangingSubject";
import WithdrawalOfEnrollment from "./components/sideBarContent/registrar/WithdrawalOfEnrollment";
function Logout() {
  localStorage.clear();
  return <Navigate to="/" />;
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/logout" element={<Logout />} />

        <Route path="/enrollment-process" element={<EnrollmentProcess />} />
        <Route path="/shifting-programs" element={<ShiftingPrograms />} />
        <Route path="/releasing-TOR" element={<ReleasingTOR />} />
        <Route path="/adding-droping-changing-subjects" element={<AddingDroppingChangingSubject/>} />
        <Route path="/withdrawal-of-enrollment" element={<WithdrawalOfEnrollment/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
