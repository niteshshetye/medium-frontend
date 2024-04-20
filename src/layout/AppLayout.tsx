import { ReactNode } from "react";
import { NavBar } from "../components/NavBar";

export const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-screen">
      <NavBar />

      <div className="px-4 py-4 border-4 border-solid border-red-400 mx-0 md:mx-32">
        {children}
      </div>
    </div>
  );
};
