import { configureStore } from '@reduxjs/toolkit';
import todosReducer from '../features/todos/todosSlice'

export const store = configureStore({
    reducer: {
        todos: todosReducer
    },
});
// https://redux.js.org/usage/usage-with-typescript
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch