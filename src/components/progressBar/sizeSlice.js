import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const sizeAdapter = createEntityAdapter();
const initialState = sizeAdapter.getInitialState();

const sizeSlice = createSlice({
    name: 'size',
    initialState,
    reducers: {}
})

const {reducer, actions} = sizeSlice;
export default reducer;