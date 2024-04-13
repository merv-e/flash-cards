import { configureStore } from "@reduxjs/toolkit";
import topicsSliceReducer from '../features/topics/topicsSlice'
// import reducers

export default configureStore({
  reducer: {
    topics: topicsSliceReducer,
  },
});
