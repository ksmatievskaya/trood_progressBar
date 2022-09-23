import {configureStore} from '@reduxjs/toolkit';
import progressReducer from '../components/progressBar/progressBarSlice';
import sizeReducer from '../components/progressBar/sizeSlice';

const store = configureStore({
    reducer: {
        progress: progressReducer,
        size: sizeReducer
    }
})

export default store;