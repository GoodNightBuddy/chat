import { gql } from '@apollo/client';

export const typeDefs = gql`

    input MessageInput {
        text: String!
}

    type Message {
        id: Int!
        createdAt: String!
        text: String!
        likesCount: Int!
        dislikesCount: Int!
        comments: [Comment!]!
}

`;
