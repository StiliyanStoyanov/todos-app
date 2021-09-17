import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    list: [],
    visibilityFilter: 'active'
};

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            if (action.payload) {
                const previousId = state.list[state.list.length - 1]?.id ?? -1
                state.list.push({
                    id: previousId + 1,
                    body: action.payload,
                    completed: false,
                });
            }
        },
        removeTodo: (state, action) => {
            const index = state.list.findIndex(todo => todo.id === action.payload.id)
            if (index !== -1) state.list.splice(index, 1)
        },
        completeTodo: (state, action) => {
            const index = state.list.findIndex(todo => todo.id === action.payload.id)
            if (index !== -1) {
                state.list[index].completed = true
            }
        },
        editTodo: (state, action) => {

        },
        showActive: (state) => {
            state.visibilityFilter = 'active'
        },
        showCompleted: (state) => {
            state.visibilityFilter = 'completed'
        },
        showAll: (state) => {
            state.visibilityFilter = 'all'
        },

    }
});

export const {
    addTodo,
    removeTodo,
    editTodo,
    completeTodo,
    showActive,
    showCompleted,
    showAll
} = todosSlice.actions;
export default todosSlice.reducer;
