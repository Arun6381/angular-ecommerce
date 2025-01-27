import { createFeatureSelector,createSelector } from "@ngrx/store";

export const selectCounterState=createFeatureSelector<number>('admin')

export const AdminDash=createSelector(
    selectCounterState,
    (state)=>state
)