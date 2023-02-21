import StepWrapper from "@/components/StepWrapper";
import { MainLayout } from "@/layout/MainLayout";
import { Grid, Button, TextField } from "@mui/material";
import { FC, useState } from "react";
import FileUpload from "@/components/FileUpload";

const Create: FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [picture, setPicture] = useState()
  const [audio, setAudio] = useState()

  const next = () => {
    setActiveStep((prev) => prev + 1);
  };

  const back = () => {
    setActiveStep((prev) => prev - 1);
  };

  const step1: boolean | JSX.Element = activeStep === 0 && (
    <Grid container direction={"column"} style={{ padding: 20 }}>
      <TextField
        // {...name}
        style={{ marginTop: 10 }}
        label={"Название трека"}
      />
      <TextField
        // {...artist}
        style={{ marginTop: 10 }}
        label={"Имя исполнителя"}
      />
      <TextField
        // {...text}
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
