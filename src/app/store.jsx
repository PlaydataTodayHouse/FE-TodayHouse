import { configureStore } from '@reduxjs/toolkit';
import MeSlice from '../feature/MeSlice';

export default configureStore({
    reducer: {
        me: MeSlice,
    }
});
