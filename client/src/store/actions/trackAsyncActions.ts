import { ITrack } from "@/types/track";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAll = createAsyncThunk("track/getAll", async function () {
  try {
    const response = await axios.get<ITrack[]>(process.env.API_URL + "/track");
    const tracks = response.data;

    return tracks;
  } catch (error) {
    console.log(error);
    return [];
  }
});

export const createTrack = createAsyncThunk(
  "track/create",
  async function (trackData: FormData) {
    try {
      const response = await axios.post(
        process.env.API_URL + "/track",
        trackData
      );

      return response.data;
    } catch (error) {
      console.log(error);
      return [];
    }
  }
);

export const commentTrack = createAsyncThunk(
  "track/commentTrack",
  async function (comment: {
    username: string;
    text: string;
    trackId: string;
  }) {
    try {
      const response = await axios.post<string>(
        process.env.API_URL + "/track/comment",
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
    
    const response = await axios.delete<ITrack>(`${process.env.API_URL}/track/${id}`);

    return response.data;
  }
);
