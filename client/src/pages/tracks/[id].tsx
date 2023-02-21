import { MainLayout } from "@/layout/MainLayout";
import { ITrack } from "@/types/track";
import { Button, Grid, TextField } from "@mui/material";
import { useRouter } from "next/router";
import React from "react";

const TrackPage = () => {
  const router = useRouter();
  return (
    <MainLayout>
      <Button
        variant="outlined"
        style={{ fontSize: "32px" }}
        onClick={() => router.push("/tracks")}
      >
        Назад
      </Button>
      {/* <Grid container style={{ margin: "20px 0" }}> */}
        {/* <img src={track.picture} width={200} height={200} /> */}
        {/* <div>
            <h1>Название трека - {track.name}</h1>
            <h1>Исполнитель - {track.artist}</h1>
            <h1>Прослушиваний - {track.listens}</h1>
        </div> */}
      {/* </Grid>
      <h1>Слова в треке</h1>
      <p>{track.text}</p>
      <h1>Комментарии</h1>
      <Grid container>
        <TextField label="Ваше имя" fullWidth />
        <TextField label="Комментарий" fullWidth multiline rows={4}/>
        <Button>Отправить</Button>
      </Grid>
      <div>
        {track.comments.map(comment => (<div>
            <div>Автор - {comment.username}</div>
            <div>Комментарий - {comment.text}</div>
        </div>))}
      </div> */}
    </MainLayout>
  );
};

export default TrackPage;