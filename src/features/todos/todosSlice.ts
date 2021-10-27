import {createSelector, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {TodosState, AddTodoPayload} from "./todosSlice.types";
import {RootState} from "../../app/store";
import {filters, placeholders} from "./utils";
import { v4 as uuid } from 'uuid';
// https://redux.js.org/usage/structuring-reducers/normalizing-state-shape
const initialState: TodosState = {
    entities: {},
    ids: [],
    filter: 'all',
    selectedId: null,
    placeholder: 'What needs doing?',
};

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<AddTodoPayload>) => {
            const {body, completed, important, dueDate} = action.payload
            if (!body) return;
            const id: string = uuid();
            state.ids.push(id);
            state.entities[id] = {
                id: id,
                body: body,
                completed: completed || false,
                important: important || false,
                tags: [],
                created: Date.now(),
                dueDate: dueDate,
            };
        },
        removeTodo: (state, action: PayloadAction<string>) => {
            const id = action.payload
            const index = state.ids.findIndex(stateId => stateId === id);
            if (index !== -1) {
                delete state.entities[id];
                state.ids.splice(index, 1)
                if (state.selectedId === id) state.selectedId = null;
            }
        },

        editTodo: (state, action) => {

        },
        selectTodo: (state,  action: {payload: string}) => {
            const id = action.payload
            const todo = state.entities[id]
            if (todo) state.selectedId = id;
        },
        clearSelection: (state) => {
            state.selectedId = null;
        },
        toggleCompleted: (state, action) => {
            const id = action.payload
            const todo = state.entities[id];
            if (todo) todo.completed = !todo.completed
        },
        toggleImportant: (state, action) => {
            const id = action.payload
            const todo = state.entities[id];
            if (todo) todo.important = !todo.important
        },
        showActive: (state) => {
            state.filter = filters.active
            state.placeholder = placeholders.basic
        },
        showCompleted: (state) => {
            state.filter = filters.completed
            state.placeholder = placeholders.basic
        },
        showAll: (state) => {
            state.filter = filters.all
            state.placeholder = placeholders.basic
        },
        showImportant: (state) =>{
            state.filter = filters.important
            state.placeholder = placeholders.important
        },
        showPlanned: (state) =>{
            state.filter = filters.planned
            state.placeholder = placeholders.planned
        }

    }
});
export const selectId = (id: string) => (state: RootState) => state.todos.entities[id] || {};
export const selectIds = (state: RootState) => state.todos.ids
export const selectEntities = (state: RootState) => state.todos.entities
export const selectFilter = (state: RootState) => state.todos.filter
export const selectPlaceholder = (state: RootState) => state.todos.placeholder
export const pickSelected = (state: RootState) => {
    if (state.todos.selectedId) {
        return state.todos.entities[state.todos.selectedId]
    }
    return null;
}
export const selectVisibleIds = createSelector(
    selectEntities,
    selectIds,
    selectFilter,
    (entities, ids, filter) => {
        switch (filter) {
            case 'active': return ids.filter(id => !entities[id]?.completed);
            case 'completed': return ids.filter(id => entities[id]?.completed);
            case 'important': return ids.filter(id => entities[id]?.important);
            case 'planned': return ids.filter(id => entities[id]?.dueDate);
            default: return ids;
        }
    }
)

export const {
    addTodo,
    removeTodo,
    editTodo,
    selectTodo,
    clearSelection,
    toggleCompleted,
    toggleImportant,
    showActive,
    showCompleted,
    showAll,
    showImportant,
    showPlanned
} = todosSlice.actions;
export default todosSlice.reducer;
