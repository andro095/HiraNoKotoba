

import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ConfigState {
    locale: string;
    isLoading: boolean;
}

const initialState : ConfigState = {
    locale: 'en',
    isLoading: false,
};

export const configSlice = createSlice({
    name: 'config',
    initialState: initialState,
    reducers: {
        setLocale: (state, { payload } : PayloadAction<string> ) => {
            state.locale = payload;
        },

        setIsLoading: (state, { payload } : PayloadAction<boolean>) => {
            state.isLoading = payload;
        }
    }
});
export const { setLocale, setIsLoading } = configSlice.actions;