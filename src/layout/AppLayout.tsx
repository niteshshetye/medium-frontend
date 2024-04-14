import { ReactNode } from "react";
import { NavBar } from "../components/NavBar";

export const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-screen">
      <NavBar />
      {/* heading */}
      {children}
    </div>
  );
};
