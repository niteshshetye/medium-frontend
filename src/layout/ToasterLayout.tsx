import { ReactNode } from "react";

export const ToasterLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {/* <SuccessToster message="logged in done" /> */}
      {children}
    </>
  );
};
