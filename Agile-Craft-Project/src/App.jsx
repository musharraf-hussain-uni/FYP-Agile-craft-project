import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import Layout from "./components/Layout";
import AdminDashboard from "./pages/AdminDashboard/Dashboard";
import Analytics from "./pages/Analytics/Analytics";
import User from "./pages/AdminDashboard/User/User";
import ClientDashboard from "./pages/ClientDashboard/Dashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/dashboard/analytics" element={<Analytics />} />
        <Route path="/dashboard/user" element={<User />} />
        <Route path="/ClientDashboard" element={<ClientDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
