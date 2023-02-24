import { useInput } from "@/features/useInput";
import { MainLayout } from "@/layout/MainLayout";
import { commentTrack } from "@/store/actions/trackAsyncActions";
import { wrapper } from "@/store/store";
import { ITrack } from "@/types/track";
import { useTypedDispatch } from "@/types/typedHooks/useTypedDispatch";
import { Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import React, { FC } from "react";

type Props = {
  track: ITrack;
};

const TrackPage: FC<Props> = ({ track }) => {
  const router = useRouter();
  const username = useInput("");
  const text = useInput("");
  const dispatch = useTypedDispatch();

  const addComment = async () => {
    try {
      await dispatch(
        commentTrack({
          username: username.value,
          text: text.value,
          trackId: track._id,
        })
      );

      location.reload();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <MainLayout
      title={"Музыкальная площадка - " + track?.name + " - " + track?.artist}
      keywords={"Музыка, артисты, " + track?.name + ", " + track?.artist}
    >
      <Button
        variant={"outlined"}
        style={{ fontSize: 32 }}
        onClick={() => {
          router.push("/tracks");
        }}
      >
        К списку
      </Button>
      <Grid container style={{ margin: "20px 0" }}>
        <img
          src={"http://localhost:4000/" + track?.picture}
          width={200}
          height={200}
        />
        <div style={{ marginLeft: 30 }}>
          <h1>Название трека - {track?.name}</h1>
          <h1>Исполнитель - {track?.artist}</h1>
          <h1>Прослушиваний - {track?.listens}</h1>
        </div>
      </Grid>
      <h1>Слова в треке</h1>
      <p>{track?.text}</p>
      <h1>Комментарии</h1>
      <Grid container>
        <TextField label="Ваше имя" fullWidth {...username} />
        <TextField label="Комментарий" {...text} fullWidth multiline rows={4} />
        <Button onClick={addComment}>Отправить</Button>
      </Grid>
      <div>
        {track?.comments.map((comment) => (
          <div key={comment._id}>
            <div>Автор - {comment.username}</div>
            <div>Комментарий - {comment.text}</div>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default TrackPage;

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps(() => async ({ params }) => {
    const { data: track } = await axios.get(
      "http://localhost:4000/track/" + params!.id
    );
    return {
      props: {
        track,
      },
    };
  });
