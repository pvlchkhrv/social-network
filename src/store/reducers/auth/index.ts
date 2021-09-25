import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {LoginRequest} from '../../../types/auth';
import {authApi} from '../../../api';

// const login = createAsyncThunk<{}>(
//     'auth/login',
//     async (data: LoginRequest, {rejectWithValue}) => {
//         try {
//             const response = await authApi.login(data);
//             if (response.data.resultCode === 0) {
//                 return response.data.data;
//             } else {
//                 const message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error';
//                 new Error(message);
//             }
//         } catch (error) {
//             return rejectWithValue('sdsdsdsd');
//         }
//     }
// )

const authSlice  = createSlice({
    name: 'auth',
    initialState: {
        isAuth: false,
        userData: {
            userId: null,
            login: null,
            email: null,
        },
        status: 'idle',
        error: null
    },
    reducers: {},
    extraReducers: builder => {
        // builder
        //     .addCase(login.pending, (state) => {
        //         state.status = 'loading';
        //         state.error = null;
        //     })
        //     .addCase(login.fulfilled, (state) => {
        //         state.status = 'succeed';
        //     })
        //     .addCase(login.rejected, (state, action) => {
        //         state.status = 'failed';
        //         state.error = action.payload
        //     })
    }
});

export {
    authSlice
}
