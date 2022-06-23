import { configureStore } from '@reduxjs/toolkit';
import { sitesReducer } from '../features/sites/sitesSlice';
import { commentsReducer } from '../features/comments/commentsSlice';
import { partnersReducer } from '../features/partners/partnersSlice';
import { promotionsReducer } from '../features/promotions/promotionsSlice';
import {favoritesReducer} from '../features/favorites/favoritesSlice'

export const store = configureStore({
    reducer: {
        sites: sitesReducer,
        comments: commentsReducer,
        partners: partnersReducer,
        promotions: promotionsReducer,
        favorites: favoritesReducer
    }
});