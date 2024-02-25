import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
    name: "video",
    initialState: {
        videos: null,
    },
    reducers: {
        addVideo: (state, action) => {
            state.videos = action.payload;
        },
    },
});

export const { addVideo } = videoSlice.actions;
export default videoSlice.reducer;
