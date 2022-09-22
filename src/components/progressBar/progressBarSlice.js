import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const progressAdapter = createEntityAdapter();

const initialState = progressAdapter.getInitialState({
    tickets: [],
    height: null,
    width: null
})

const progressSlice = createSlice({
    name: 'progress',
    initialState, 
    reducers: {}
})

const {reducer} = progressSlice;

export default reducer;