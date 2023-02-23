import { ITrack } from "@/types/track";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAll = createAsyncThunk("track/getAll", async function () {
  try {
    const response = await axios.get<ITrack[]>(
      "http://localhost:4000" + "/track"
    );
    const tracks = response.data;

    return tracks;
  } catch (error) {
    console.log(error);
    return [];
  }
});

export const getOne = createAsyncThunk("track/getOne", async function (id) {
  try {
    const response = await axios.get<ITrack>(process.env.URL + "/track/" + id);

    const track = response.data;

    return track;
  } catch (error) {
    console.log(error);
    return null;
  }
});
