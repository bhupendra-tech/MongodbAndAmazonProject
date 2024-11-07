import SideMenu from "../components/sidemenu";
import { Outlet } from "react-router-dom";
function Dashboard() {
  return (
    <div className="flex h-screen bg-50">
      <div className="max-w-72 h-full w-full p-4">
        <SideMenu />
      </div>
      <div className="h-full w-full">
        <Outlet />
      </div>
    </div>
  );
}
export default Dashboard;
