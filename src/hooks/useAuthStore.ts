// Local Libraries
import { LoginState } from '@models';
import { setAuthState } from '@store';

// Local Hooks
import { useAppDispatch, useAppSelector } from './useStore'


export const useAuthStore = () => {
    const { authState } = useAppSelector(state => state.auth);
    const dispatch = useAppDispatch();
    
    const updateAuthState = (newState: LoginState) => dispatch(setAuthState(newState));
    
    return {
        // Properties
        authState,
        
        // Methods
        updateAuthState
        
    };
}