

import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ConfigState {
    locale: string;
}

const initialState : ConfigState = {
    locale: 'en',
};

export const configSlice = createSlice({
    name: 'config',
    initialState: initialState,
    reducers: {
        setLocale: (state, { payload } : PayloadAction<string> ) => {
            state.locale = payload;
        },
    }
});
export const { setLocale } = configSlice.actions;