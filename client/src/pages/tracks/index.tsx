import TrackList from "@/components/TrackList";
import { MainLayout } from "@/layout/MainLayout";
import { Box, Button, Card, Grid } from "@mui/material";
import React from "react";

const index = () => {
  return (
    <MainLayout>
      <Grid container justifyContent="center">
        <Card style={{ width: "1200px", margin: "0 30px" }}>
          <Box p={3}>
            <Grid container justifyContent="space-between">
              <h1>Список треков</h1>
              <Button>Загрузить</Button>
            </Grid>
          </Box>
          {/* <TrackList tracks={}/> */}
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default index;
