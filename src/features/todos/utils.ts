import {Placeholders, Filters} from "./todosSlice.types";

export const filters: Filters = {
    all: 'all',
    important: 'important',
    planned: 'planned',
    completed: 'completed',
    active: 'active'
}

export const placeholders: Placeholders = {
    basic: 'What needs doing?',
    planned: 'Add planned todo',
    important: 'Add important todo'
}