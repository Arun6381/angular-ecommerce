import { createReducer, on } from "@ngrx/store";
import { decrement, increment, reset } from "./counter.action";

export const initialState = 0;

export const counterReducer = createReducer(
    initialState,
    on(increment, (state) => state + 1),
    on(decrement, (state) => (state > 0 ? state - 1 : 0)),
    on(reset, () => 0),
)