import "./App.css";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Footer from "./components/Footer";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import DashboardIndex from "./pages/dashboard/Index";
import AccountDelete from "./pages/AccountDelete.jsx";
function App() {
  return (
    <>
      <Routes>
          <Route path="/" element={<Index />} />
          <Route path="user/account/delete/" element={<AccountDelete />} />
          <Route path="/ouhatjuusdtnwot/login" element={<Login />} />
          <Route path="/ouhatjuusdtnwot/" element={<Dashboard />}>
              <Route path="/ouhatjuusdtnwot/" element={<DashboardIndex />} />
          </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
