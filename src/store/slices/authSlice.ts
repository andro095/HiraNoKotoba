// Third Party Libraries
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Local Libraries
import { LoginState } from '@models';

interface AuthState {
    authState: LoginState;
}

const initialState : AuthState = {
    authState: LoginState.UnAuthenticated
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthState: (state, { payload } : PayloadAction<LoginState>) => {
            state.authState = payload;
        }
    }
});

export const { setAuthState } = authSlice.actions;