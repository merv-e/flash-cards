import { createSlice } from "@reduxjs/toolkit";

const topicsSlice = createSlice({
  name: "topics",
  initialState: {
      topics: {
        id: "123456",
        name: "name of topic",
        icon: "icon url",
        quizId: []
      },
  },
  reducer: {
    addTopic: (state, action) => {
      state.topics.push(action.payload);
    },
  },
});

export const {topic} = topicsSlice.name; // unsure
export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;
