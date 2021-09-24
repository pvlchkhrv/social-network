import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {LoginRequest} from '../../../types/auth';
import {authApi} from '../../../api';
import {FieldError} from '../../../types/base-response';

interface RejectValue {
    errors: string[];
    fieldsErrors?: FieldError[];
}

const login = createAsyncThunk<undefined, LoginRequest, {rejectWithValue: RejectValue}>(
    'auth/login',
    async (data: LoginRequest, thunkAPI) => {
        try {
            const response = await authApi.login(data);
            if (response.data.resultCode === 0) {
                return response.data.data;
            } else {
                const message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
                throw new Error(message);
            }
        } catch (error) {
            return thunkAPI.rejectWithValue({errors: [error.message], fieldsErrors: undefined});
        }
    }
)

const authReducer = createSlice({
    name: 'auth',
    initialState: {
        isAuth: false,
        userData: {
            userId: null,
            login: null,
            email: null,
        },
        status: null,
        error: null
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(login.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(login.fulfilled, (state) => {
                state.status = 'resolved';
            })
            .addCase(login.rejected, (state) => {
                state.status = 'rejected';
                state.error = action.payload
            })
    }
});

export {
    authReducer
}
