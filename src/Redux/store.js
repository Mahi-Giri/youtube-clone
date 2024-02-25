import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import videoSlice from "./videoSlice";
import chatSLice from "./chatSLice";

const store = configureStore({
    reducer: {
        app: appSlice,
        search: searchSlice,
        video: videoSlice,
        message: chatSLice,
    },
});

export default store;
