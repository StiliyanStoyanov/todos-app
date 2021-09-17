import TodoCard from "./TodoCard";
import {useSelector} from "react-redux";

const TodosList = () => {
    const todos = useSelector((state) => state.todos);
    const visibleTodos = deriveVisibleTodos(todos.list, todos.visibilityFilter);

    return (
        <ul>
            {visibleTodos.map(todo => <TodoCard key={todo.id} todo={todo}/>)}
        </ul>
    )
};

const deriveVisibleTodos = (list, visibilityFilter) => {
    switch (visibilityFilter) {
        case 'active': return list.filter(todo => !todo.completed);
        case 'completed': return list.filter(todo => todo.completed);
        default: return list;
    }
}

export default TodosList