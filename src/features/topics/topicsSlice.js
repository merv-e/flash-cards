import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  topics: {
    id: "12345",
    name: "deneme",
    icon: "icon url",
    quizIds: [],    
  }
};

const topicsSlice = createSlice({
  name: "topics",
  initialState,
  reducer: {
    addTopic: (state, action) => {
      const { id, name, icon } = action.payload;
      state.topics.topics[id].push({
        id: id,
        name: name,
        icon: icon,
        quizIds: [],
      });
    },
  },
});

export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;
