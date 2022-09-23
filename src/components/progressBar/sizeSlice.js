import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

const sizeAdapter = createEntityAdapter();
const initialState = sizeAdapter.getInitialState();

const sizeSlice = createSlice({
    name: 'size',
    initialState,
    reducers: {
        sizeAdded: sizeAdapter.setOne
        
    }
})

const {reducer, actions} = sizeSlice;
export const {sizeAdded} = actions;
export const sizeSelector = sizeAdapter.getSelectors(state => state.size)
export default reducer;