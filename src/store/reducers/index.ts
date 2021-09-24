import {combineReducers, configureStore} from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers({

})


const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware().prepend(thunkMiddleware),
    devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
