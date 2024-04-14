import { configureStore } from "@reduxjs/toolkit";
import topicsSliceReducer from '../features/topics/topicsSlice'
import quizzesSlice from "../features/quizzes/quizzesSlice";

export default configureStore({
  reducer: {
    topics: topicsSliceReducer,
    quizzes : quizzesSlice,
  },
});
