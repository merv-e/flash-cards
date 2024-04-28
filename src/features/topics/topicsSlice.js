import { createSlice } from "@reduxjs/toolkit";
import { addQuiz } from "../quizzes/quizzesSlice";

const topicsSlice = createSlice({
  name: "topics",
  initialState: {
    topics: {},
  },
  reducers: {
    addTopic: (state, action) => {
      const { id, name, icon } = action.payload;

      state.topics[id] = {
        id,
        name,
        icon,
        quizIds: [],
      };
    },
  },

  extraReducers: (builder) => {
    builder.addCase(addQuiz, (state, action) => {
      const { topicId, id } = action.payload;
      state.topics[topicId].quizIds.push(id);
    });
  },
});

export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;
