import { Container } from "@mui/material";
import React from "react";
import Navbar from "./../components/Navbar";

type Props = {
  children: string | JSX.Element;
};

export const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Navbar />
      <Container style={{margin: '90px auto'}}>
        {children}
      </Container>
    </>
  );
};
