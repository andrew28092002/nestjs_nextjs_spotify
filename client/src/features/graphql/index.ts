import { gql } from "@apollo/client";

export const GET_ALL = gql`
  query {
    tracks: getAll {
      _id
      name
      artist
      picture
      audio
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
        _id
        username
        text
      }
    }
  }
`;

export const COMMENT = gql`
  mutation ($comment: AddCommentDto!) {
    commment(comment: $comment) {
      text
    }
  }
`;
