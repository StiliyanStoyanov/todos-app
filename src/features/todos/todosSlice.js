import {createSelector, createSlice} from '@reduxjs/toolkit';

// https://redux.js.org/usage/structuring-reducers/normalizing-state-shape
const initialState = {
    entities: {},
    ids: [],
    filter: 'all',
    selectedId: -1,
    inputPlaceholder: 'What needs doing?'
};

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const {body, completed, important, dueDate} = action?.payload;
            if (!body) return;
            const previousId = state.ids[state.ids.length - 1] ?? -1;
            const nextId = previousId + 1;
            state.ids.push(nextId);
            state.entities[nextId] = {
                id: nextId,
                body: body,
                completed: completed || false,
                important: important || false,
                tags: [],
                created: Date.now(),
                dueDate: dueDate
            }
        },
        removeTodo: (state, action) => {
            const {id} = action.payload
            const index = state.ids.findIndex(stateId => stateId === id);
            if (index !== -1) {
                delete state.entities[id];
                state.ids.splice(index, 1)
                if (state.selectedId === id) state.selectedId = -1;
            }
        },
        editTodo: (state, action) => {

        },
        selectTodo: (state,  action) => {
            const {id} = action.payload
            const todo = state.entities[id]
            if (todo) state.selectedId = id;
        },
        clearSelectedTodo: (state) => {
            if (state.selectedId >= 0) state.selectedId = -1;
        },
        toggleCompleted: (state, action) => {
            const {id} = action.payload
            const todo = state.entities[id];
            if (todo) todo.completed = !todo.completed
        },
        showActive: (state) => {
            state.filter = 'active'
        },
        showCompleted: (state) => {
            state.filter = 'completed'
        },
        showAll: (state) => {
            state.filter = 'all'
        },
        showImportant: (state) =>{
            state.filter = 'important'
        },
        showScheduled: (state) =>{
            state.filter = 'scheduled'
        }

    }
});
export const selectId = id => state => state.todos.entities[id] || {};
export const selectIds = state => state.todos.ids
export const selectEntities = state => state.todos.entities
export const selectFilter = state => state.todos.filter
export const selectSelected = state => state.todos.entities[state.todos.selectedId] || null
export const selectVisibleIds = createSelector(
    selectEntities,
    selectIds,
    selectFilter,
    (entities, ids, filter) => {
        switch (filter) {
            case 'active': return ids.filter(id => !entities[id]?.completed);
            case 'completed': return ids.filter(id => entities[id]?.completed);
            case 'important': return ids.filter(id => entities[id]?.important);
            case 'scheduled': return ids.filter(id => entities[id]?.dueDate);
            default: return ids;
        }
    }
)

export const {
    addTodo,
    removeTodo,
    editTodo,
    selectTodo,
    clearSelectedTodo,
    toggleCompleted,
    showActive,
    showCompleted,
    showAll,
    showImportant,
    showScheduled
} = todosSlice.actions;
export default todosSlice.reducer;
