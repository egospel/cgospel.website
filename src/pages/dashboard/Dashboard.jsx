import "./styles/Dashboard.css";
import DashboardAsideNav from "../../components/dashboard/DashboardAsideNav";
import { Outlet } from "react-router-dom";
import DashboardUpperNav from "../../components/dashboard/DashboardUpperNav";
export default function Dashboard() {
  return (
    <div className="dashboard">
      <DashboardAsideNav />
      <div className="dashboard__main">
        <DashboardUpperNav />
        <div className="dashboard__inner__main">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
