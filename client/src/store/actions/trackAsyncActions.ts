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

export const commentTrack = createAsyncThunk(
  "track/commentTrack",
  async function (
    comment: { username: string; text: string; trackId: string }
  ) {
    try {
      const response = await axios.post<string>(
        "http://localhost:4000/track/comment",
        comment
      );

      return response.data;
    } catch (e) {
      console.log(e);
      return "";
    }
  }
);

export const deleteTrack = createAsyncThunk(
  "track/deleteTrack",
  async function (id: string) {
    try{
      const response = await axios.delete<string>('http://localhost:4000/track/' + id)

      return response.data
    } catch(e){
      console.log(e)
      return ""
    }
  }
);
