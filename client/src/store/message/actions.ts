import { useMutation, useQuery } from "@apollo/client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { CREATE_MESSAGE, GET_MESSAGES } from "../../apollo/queries";
import { ActionType } from "./common";


interface IMessage {
  createdAt: string
  dislikesCount: number
  id: number
  likesCount: number
  text: string
  __typename: string
}

const sendMessage = createAsyncThunk<any, string>(
  ActionType.SEND_MESSAGE,
  async (text) => {
    const [createMessage] = useMutation(CREATE_MESSAGE);
    createMessage({
      variables: {
          message: { text },
      },
  });

    return {}
  }
)

const getMessages = createAsyncThunk<IMessage[], void>(
  ActionType.GET_MESSAGES,
  async () => {
    const { loading, error, data, subscribeToMore } = useQuery(GET_MESSAGES);
    return data.messages
  }
)


export { sendMessage, getMessages }