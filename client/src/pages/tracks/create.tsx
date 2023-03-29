import StepWrapper from "@/components/StepWrapper";
import { MainLayout } from "@/layout/MainLayout";
import { Grid, Button, TextField } from "@mui/material";
import { FC, useState } from "react";
import FileUpload from "@/components/FileUpload";
import { useInput } from "@/features/useInput";
import axios from "axios";
import { useRouter } from "next/router";

const Create: FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [picture, setPicture] = useState('')
  const [audio, setAudio] = useState('')
  const name = useInput('')
  const artist = useInput('')
  const text = useInput('')
  const router = useRouter()

  const next = () => {
    if (activeStep !== 2){
      setActiveStep((prev) => prev + 1);
    } else {
      const formData = new FormData()
      formData.append('name', name.value)
      formData.append('artist', artist.value)
      formData.append('text', text.value)
      formData.append('picture', picture)
      formData.append('audio', audio)

      axios.post(process.env.URL_REST + 'track', formData)
                .then(resp => router.push('/tracks'))
                .catch(e => console.log(e))
    }
  };

  const back = () => {
    setActiveStep((prev) => prev - 1);
  };

  const step1: boolean | JSX.Element = activeStep === 0 && (
    <Grid container direction={"column"} style={{ padding: 20 }}>
      <TextField
        {...name}
        style={{ marginTop: 10 }}
        label={"Название трека"}
      />
      <TextField
        {...artist}
        style={{ marginTop: 10 }}
        label={"Имя исполнителя"}
      />
      <TextField
        {...text}
        style={{ marginTop: 10 }}
        label={"Слова к треку"}
        multiline
        rows={3}
      />
    </Grid>
  );

  const step2 = activeStep === 1 && (
    <FileUpload setFile={setPicture} accept="image/*">
      <Button>Загрузить изображение</Button>
    </FileUpload>
  );

  const step3 = activeStep === 2 && (
    <FileUpload setFile={setAudio} accept="audio/*">
      <Button>Загрузить аудио</Button>
    </FileUpload>
  );

  return (
    <MainLayout>
      <StepWrapper activeStep={activeStep}>
        {step1 || step2 || step3}
      </StepWrapper>
      <Grid container justifyContent="space-between">
        <Button disabled={activeStep === 0} onClick={back}>
          Назад
        </Button>
        <Button disabled={activeStep === 3} onClick={next}>
          Далее
        </Button>
      </Grid>
    </MainLayout>
  );
};

export default Create;
