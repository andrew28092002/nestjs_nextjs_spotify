import { MainLayout } from "@/layout/MainLayout";
import { Button, Card, Grid } from "@mui/material";
import React from "react";

const index = () => {
  return (
    <MainLayout>
      <Grid container justifyContent='center'>
        <Card style={{width: '100%'}}>
            <Grid container justifyContent='space-between' style={{margin: '0 50px'}}>
                <h1>Список треков</h1>
                <Button>Загрузить</Button>
            </Grid>
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default index;
