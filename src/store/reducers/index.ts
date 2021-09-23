import {configureStore} from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';



const store = configureStore({
    reducer: {

    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware),
    devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
