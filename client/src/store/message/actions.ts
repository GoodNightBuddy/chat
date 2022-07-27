import { createAsyncThunk } from "@reduxjs/toolkit";
import { ActionType } from "./common";

const sendMessage = createAsyncThunk<any, void>(
  ActionType.SEND_MESSAGE,
  async() => {

    return { user: null}
  }
)

const recieveMessage = createAsyncThunk<string, string>(
  ActionType.RECIEVE_MESSAGE,
  async(message) => {

    return message 
  }
)


export { sendMessage, recieveMessage }