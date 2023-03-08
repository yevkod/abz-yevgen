import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './usersSlice';
import {appApi} from "./app.api";

export const store = configureStore({
	reducer: {
		[appApi.reducerPath]: appApi.reducer,
		users: usersReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(appApi.middleware),
});

