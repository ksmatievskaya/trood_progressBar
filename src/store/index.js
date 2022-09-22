import {configureStore} from '@reduxjs/toolkit';
import progressReducer from '../components/progressBar/progressBarSlice';

const store = configureStore({
    reducer: {
        progress: progressReducer
    }
})

export default store;