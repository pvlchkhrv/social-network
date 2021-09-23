import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AuthInitialState} from '../../../types/auth';

interface RejectValue {
    rejectValue: {
        errors: string[];
        fieldsErrors: string[];
    }
}

const authReducer = createSlice({
    name: 'auth',
    initialState: {
        isAuth: false,
        userId: null,
        login: null,
        email: null
    },
    reducers: {
        setAuthUserData(state: AuthInitialState, action: PayloadAction<AuthInitialState>) {
            state = action.payload;
        }
    },
    extraReducers: {}
});

export {
    authReducer
}
