import React from "react";
import Navbar from "./../components/Navbar";

type Props = {
  children: string | JSX.Element;
};

export const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};
