import TrackList from "@/components/TrackList";
import { MainLayout } from "@/layout/MainLayout";
import { getAll } from "@/store/actions/trackAsyncActions";
import { NextThunkDispatch, wrapper } from "@/store/store";
import { ITrack } from "@/types/track";
import { Box, Button, Card, Grid } from "@mui/material";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { FC } from "react";

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
  wrapper.getServerSideProps((store) => async () => {
    const dispatch = store.dispatch as NextThunkDispatch;

    const { payload: tracks } = await dispatch(getAll());

    return {
      props: {
        tracks,
      },
    };
  });
