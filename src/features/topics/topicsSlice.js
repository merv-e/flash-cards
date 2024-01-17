import { createSlice } from "@reduxjs/toolkit";

const topicsSlice = createSlice({
  name: "topics",
  initialState: {
    topics: {
        // id: "123456",
        // name: "name of topic",
        // icon: "icon url",
        // quizIds: []
    },
  },
  reducer: {
    addTopic: (state, action) => {
      const { id, name, icon } = action.payload;
      state.topics.topics[id].push({
        id: id,
        name: name,
        icon: icon,
        quizIds: [],
      });
    }
  }
});

export const selectTopics = state => state.topics.topics;

export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;
