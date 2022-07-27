import { configureStore } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { TypedUseSelectorHook } from "react-redux";
import { messageReducer} from "./rootReducer";

const store = configureStore({
  reducer: {
    message: messageReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    thunk: {
      extraArgument: {
        // хотів зробити як в міні проекті, щоб було гарніше, але не встиг
      }
    }
  }),
})

export { store };

type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export { useAppSelector };
export type {
  RootState,
  AppDispatch,
};