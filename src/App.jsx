import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Dashboard from "./routes/Dashboard";
import EnrollmentProcess from "./components/sideBarContent/EnrollmentProcess";
import ShiftingPrograms from "./components/sideBarContent/ShiftingPrograms";
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
        <Route path="/shifting-programs" element={<ShiftingPrograms/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
