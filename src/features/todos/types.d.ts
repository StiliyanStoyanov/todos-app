import {ReactNode} from "react";

export interface TodosState {
    entities: {
        [key: string]: {
            id: number,
            body: string,
            completed: boolean,
            important: boolean,
            tags: string[],
            created: number,
            dueDate: Date | undefined
        }
    },
    ids: number[],
    filter: 'all' | 'important' | 'planned' | 'active' | 'completed',
    selectedId: number,
    placeholder: string,
}

export type TodoCardProps = { id: string, children: ReactNode }