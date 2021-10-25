export type TodosState = {
    entities: {
        [key: string]: {
            id: string,
            body: string,
            completed: boolean,
            important: boolean,
            tags: string[],
            created: number,
            dueDate: number | undefined
        }
    },
    ids: string[],
    filter: 'all' | 'important' | 'planned' | 'active' | 'completed',
    selectedId: string | null,
    placeholder: 'Add important todo' | 'Add planned todo' | 'What needs doing?',
}

export type Placeholders = {
    basic: 'What needs doing?',
    planned: 'Add planned todo',
    important: 'Add important todo'
}

export type Filters = {
    all: 'all',
    important: 'important',
    planned: 'planned',
    completed: 'completed',
    active: 'active'
}

export type AddTodoPayload = {
    body: string,
    completed?: boolean,
    important?: boolean,
    dueDate?: number | undefined
}