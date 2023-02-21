import Player from "@/components/Player";
import { Container } from "@mui/material";
import Head from "next/head";
import React, { FC } from "react";
import Navbar from "./../components/Navbar";

type Props = {
  title?: string;
  description?: string;
  keywords?: string;
  children: string | JSX.Element | JSX.Element[];
};

export const MainLayout: FC<Props> = ({
  children,
  title,
  description,
  keywords,
}) => {
  return (
    <>
      <Head>
        <title>{title || "Музыкальная площадка"}</title>
        <meta
          name="description"
          content={
            `Музыкальная площадка. Здесь каждый может оставить свой трек и стать знаменитым.` +
            description
          }
        />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content={keywords || "Музыка, треки, артисты"} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>
          {`
          html, body {
            height: 100%;
          }
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          #__next {
            height: 100%;
          }
        `}
        </style>
      </Head>
      <Navbar />
      <Container style={{ margin: "90px auto" }}>{children}</Container>
      <Player />
      {/* <Player/> */}
    </>
  );
};
