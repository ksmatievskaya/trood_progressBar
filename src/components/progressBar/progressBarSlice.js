import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";


const progressAdapter = createEntityAdapter();

const initialState = progressAdapter.getInitialState({
    height: null,
    width: null
})


const progressSlice = createSlice({
    name: 'progress',
    initialState, 
    reducers: {
        itemAdded: (state, action) => {
            progressAdapter.addOne(state, action.payload);
        },
        itemsReset: (state, action) => {
            progressAdapter.removeAll(state, action.payload)
        }
    }
})

const {reducer, actions} = progressSlice;

export const {itemAdded, itemsReset, valueCount} = actions;

export const ItemsSelector = progressAdapter.getSelectors(state => state.progress);

export default reducer;