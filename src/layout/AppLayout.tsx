import { NavBar } from "../components/NavBar";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <div className="w-screen">
      <NavBar />
      <div className="px-4 py-4 mx-0 md:mx-32">
        <Outlet />
      </div>
    </div>
  );
};
