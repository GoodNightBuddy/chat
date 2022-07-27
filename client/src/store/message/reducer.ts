import { createReducer, isAnyOf } from "@reduxjs/toolkit";
import { recieveMessage } from "./actions";

interface IState {
  messageList: string[]
}

const initialState: IState = {
  messageList: []
}
const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(recieveMessage.fulfilled, (state, action) => {
      state.messageList.push(action.payload)
      console.log(action.payload)
    })
})

export { reducer };

