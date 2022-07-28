import { createReducer, isAnyOf } from "@reduxjs/toolkit";
import { getMessages } from "./actions";


interface IState {
  messageList: any[]
}

const initialState: IState = {
  messageList: []
}
const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getMessages.fulfilled, (state, action) => {
      state.messageList = action.payload
    })
})

export { reducer };

