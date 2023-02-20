import TrackList from "@/components/TrackList";
import { MainLayout } from "@/layout/MainLayout";
import { Box, Button, Card, Grid } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

const index = () => {
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
          {/* <TrackList tracks={tracks} /> */}
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default index;
