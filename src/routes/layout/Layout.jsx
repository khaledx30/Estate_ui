import "./layout.scss";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/navBar/NavBar";
export default function Layout() {
  return (
    <div className="layout">
      <div className="navbar">
        <NavBar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}
