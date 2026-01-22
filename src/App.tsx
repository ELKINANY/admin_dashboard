import { Routes, Route, Navigate } from "react-router-dom";

// Pages
import Dashboard from "./pages/dashboard/Dashboard";
import Users from "./pages/dashboard/Users";
import Profile from "./pages/dashboard/Profile";
import Settings from "./pages/dashboard/Settings";

// Layout
import DashboardLayout from "./components/layout/DashboardLayout";

const App = () => {

  return (
    <Routes>

      <Route
        path="/dashboard"
        element={<DashboardLayout />}
      >
        <Route index element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      <Route
        path="/"
        element={<Navigate to={ "/dashboard"} />}
      />
    </Routes>
  );
};

export default App;
