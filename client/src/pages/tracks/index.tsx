import TrackList from "@/components/TrackList";
import { GET_ALL } from "@/features/graphql";
import { MainLayout } from "@/layout/MainLayout";
import { getAll } from "@/store/actions/trackAsyncActions";
import { NextThunkDispatch, wrapper } from "@/store/store";
import { ITrack } from "@/types/track";
import { useQuery } from "@apollo/client";
import { Box, Button, Card, Grid } from "@mui/material";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { FC } from "react";
import { client } from "../_app";

type Props = {
  tracks: ITrack[];
};

const index: FC<Props> = ({ tracks }) => {
  const router = useRouter();

  return (
    <MainLayout title={"Список треков - музыкальная площадка"}>
      <Grid container justifyContent="center">
        <Card style={{ width: 900 }}>
          <Box p={3}>
            <Grid container justifyContent="space-between">
              <h1>Список треков</h1>
              <Button onClick={() => router.push("/tracks/create")}>
                Загрузить
              </Button>
            </Grid>
          </Box>
          <TrackList tracks={tracks} />
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default index;

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(() => async () => {

    const { data } = await client.query({
      query: GET_ALL,
    });

    return {
      props: {
        tracks: data.tracks,
      },
    };
  });
