import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit'

interface ContextType {
    ids: string[];
}

const initialState: ContextType = {
    ids: [],
}

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addFavorite: (state, action: PayloadAction<any>) => {
            /*
            With state.ids.push method it pushes string array to action.payload?.id if there is any
            */
            state.ids.push(action.payload?.id);
        },
        removeFavorite: (state, action: PayloadAction<any>) => {
            /*
            With indexOf searches state.ids for finding 'action.payload?.id' variable if its find out it return 
            index number of the location inside of state.ids array, then with splice function 'splice(start, deleteCount)'
            deletes that index from string array, rest of the array will stay same
            */
            state.ids.splice(state.ids.indexOf(action.payload?.id), 1)
        }, 
    }
});

export const addFavorite = favoritesSlice.actions.addFavorite;
export const removeFavorite = favoritesSlice.actions.removeFavorite;

export default favoritesSlice.reducer;