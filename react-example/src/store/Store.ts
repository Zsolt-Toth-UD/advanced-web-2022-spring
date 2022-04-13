import {configureStore} from "@reduxjs/toolkit";
import {carSlice} from "./CarReducer";

const store = configureStore({
    reducer: {
        carReducer: carSlice.reducer
    }
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch  = typeof store.dispatch;
