import { gql } from "@apollo/client";

export const GET_ALL = gql`
  query {
    tracks: getAll {
      _id
      name
      artist
      text
      listens
      picture
      audio
      comments {
        username
        text
      }
    }
  }
`;

export const GET_ONE = gql`
  query ($id: String!) {
    track: getOne(id: $id) {
      _id
      name
      artist
      text
      listens
      picture
      comments {
        username
        text
      }
    }
  }
`;
