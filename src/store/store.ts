// React Libraries
import { configureStore } from "@reduxjs/toolkit";
import { configSlice } from "./slices";


export const store = configureStore({
    reducer: {
        config: configSlice.reducer,
    }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;