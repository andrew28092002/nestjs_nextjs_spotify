import { ITrack } from "@/types/track";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAll = createAsyncThunk("track/getAll", async function () {
  try {
    const response = await axios.get<ITrack[]>(process.env.URL_REST + "track");
    const tracks = response.data;

    return tracks;
  } catch (error) {
    console.log(error);
    return [];
  }
});

export const commentTrack = createAsyncThunk(
  "track/commentTrack",
  async function (comment: {
    username: string;
    text: string;
    trackId: string;
  }) {
    try {
      const response = await axios.post<string>(
        process.env.URL_REST + "track/comment",
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
    console.log(process.env.URL_REST + "track/" + id);
    axios
      .delete(process.env.URL_REST + "track/" + id)
      .then((res) => res.data)
      .catch((err) => console.log(err));

    // return response.data;
  }
);
