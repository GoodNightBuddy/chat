import { gql } from '@apollo/client';

export const GET_MESSAGES = gql`
    query getMessages {
        messages {
            id
            text
            createdAt
            likesCount
            dislikesCount
    }
  }
`;


export const CREATE_MESSAGE = gql`
    mutation createMessage($message: MessageInput!) {
        createMessage(message: $message) {
            id
            title
        }
    }
`;

export const CREATE_COMMENT = gql`
    mutation createReview {
        createComment(comment: $comment) {
            id
            text
        }
    }
`;

export const NEW_MESSAGE = gql`
    subscription newMessage {
        newMessage {
            id
            text
            createdAt
            likesCount
            dislikesCount
  }
    }
`;
