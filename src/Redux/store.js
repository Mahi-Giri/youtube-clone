import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import chatSLice from "./chatSLice";

const store = configureStore({
    reducer: {
        app: appSlice,
        search: searchSlice,
        message: chatSLice,
    },
});

export default store;
