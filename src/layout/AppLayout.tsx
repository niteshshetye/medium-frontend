import { ReactNode } from "react";

export const AppLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {/* heading */}
      {children}
    </>
  );
};
