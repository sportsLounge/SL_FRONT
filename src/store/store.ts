import { configureStore } from "@reduxjs/toolkit";
import snbSliceReducer from "./snbSlice";

/* Redux 전역 상태 타입 정의 */
export type GlobalState = ReturnType<typeof store.getState>;

export const store = configureStore({
    reducer: {
        sideNavBar: snbSliceReducer
    },
})